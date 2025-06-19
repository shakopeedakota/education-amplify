import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
// import { auth } from '@/lib/firebase';

export async function POST(req: Request) {
  const { idToken } = await req.json();

  const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
  const expiration = new Date(Date.now() + expiresIn).toUTCString();

  (await cookies()).set('token', idToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(expiration),
    path: '/',
  });

  return NextResponse.json({ status: 'success' });
}