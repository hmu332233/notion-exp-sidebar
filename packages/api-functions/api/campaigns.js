import { createRouter } from 'next-connect';
// import { Client } from '@notionhq/client';
import axios from 'axios';

const CAMPAIGN_API_URL = process.env.CAMPAIGN_API_URL;
const EXP_TOKEN = process.env.EXP_TOKEN;

const router = createRouter();

router.post(async (req, res) => {
  const { title, url } = JSON.parse(req.body);
  const response = await axios({
    method: 'post',
    url: CAMPAIGN_API_URL,
    headers: {
      Authorization: `Bearer ${EXP_TOKEN}`,
    },
    data: {
      name: title,
      manager: 'mark_han_i1gmru6jp',
      description: `<p><a target="_blank" rel="noopener noreferrer nofollow" href="${url}">관련 프로젝트</a></p>`,
      startDate: 1699974000000,
      endDate: 1700319599999,
      visibility: 'group',
      groupId: 'gp_edu_channel220509',
      participants: ['mark_han_i1gmru6jp'],
      tasks: [],
    },
    withCredentials: true,
  });

  const campaignId = response.data;
  res.json({
    url: `https://exp.goorm.io/organization/org_Tfz7pd8BrI7w4DVaWe/dashboard#/campaign/${campaignId}`,
  });
});

const allowCors = (fn) => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT',
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  );
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

const handler = router.handler({
  onError: (err, req, res) => {
    console.log(err);
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});

export default allowCors(handler);
