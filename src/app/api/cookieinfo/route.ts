import { NextApiRequest, NextApiResponse } from 'next';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';


export async function POST(req: NextApiRequest) {
  const cookie = cookies();
  const {sheetUrl, sheetName} = await new Response(req.body).json();
  
  cookie.set({
    name: "sheetUrl",
    value: sheetUrl,
  });
  cookie.set({
    name: "sheetName",
    value: sheetName,
  });

  const url = cookie.get("sheetUrl")
  const name = cookie.get("sheetName")
  return NextResponse.json({message:"Get request", cookies: {url, name}})
  
}