import { NextResponse } from 'next/server';
import { createToken } from "../../../lib/auth";
import bcrypt from 'bcryptjs';

const mockUser = {
  email: 'test@example.com',
  // password is "password123" hashed
  password: '$2a$10$E7U8rLCnV9P9zqxqDgUL1OT9z.5lRrh3R1duMNDqp3V3grIjZkQSi',
};

export async function POST(req) {
  const { email, password } = await req.json();

  if (email !== mockUser.email) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 401 });
  }

//   const isMatch = await bcrypt.compare(password, mockUser.password);
//   if (!isMatch) {
//     return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
//   }

  const token = createToken({ email });

  const res = NextResponse.json({ success: true });
  res.cookies.set('token', token, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60,
  });

  return res;
}