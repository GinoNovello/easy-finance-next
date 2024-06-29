import { NextApiRequest, NextApiResponse } from 'next';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';


export async function POST(req: NextApiRequest) {
  const cookie = cookies();
  const {value} = await new Response(req.body).json();
  
  cookie.set({
    name: "sheet",
    value: value,
  });

  const sheet = cookie.get("sheet")
  return NextResponse.json({message:"Get request", cookies: sheet})
  
}