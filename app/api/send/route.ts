import EmailTemplate from '@/app/EmailTemplate';
import { NextResponse } from 'next/server';
import {Resend} from "resend"
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:Request) {
   
  try {
    const {firstName,email,contact,message} = await req.json();
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['gnanachandra2003@gmail.com'],
      subject: "New Email",
      react: EmailTemplate({ firstName: firstName,email : email,contact :contact ,message : message }) as React.ReactElement,
    });

    return NextResponse.json({data,message : "🎉 Email Sent successfully ! 🎉"});
  } catch (error) {
    return NextResponse.json({ error });
  }
}