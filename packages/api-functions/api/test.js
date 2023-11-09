import { createRouter } from 'next-connect';

import cors from 'cors';

const router = createRouter();

// router.use(cors());

router.get(async (req, res) => {
  res.json({ campaignId: '123' });
});

router.post(async (req, res) => {
  const { title, url } = req.body;
  console.log(title, url);

  res.json({ campaignId: title });
});

const allowCors = (fn) => async (req, res) => {
  console.log('hello');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
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
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});

export default allowCors(handler);
