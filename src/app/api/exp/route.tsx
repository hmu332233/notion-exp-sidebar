import { NextResponse } from 'next/server';

import { Client } from '@notionhq/client';

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const notion = new Client({ auth: NOTION_API_KEY });

export async function GET() {
  const pageId = '68681a0e95e94cdf8d9cff5da3a39888';
  const response = await notion.pages.retrieve({ page_id: pageId });

  console.log(response);

  return NextResponse.json({ data: response });
}
