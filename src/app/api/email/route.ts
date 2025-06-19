import * as sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

export async function POST() {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
  const msg = {
    to: 'connor.chamberlain@shakopeedakota.org',
    from: 'noreply@shakopeedakota.org',
    subject: 'SMSC Education Department Application Submission',
    html: '<strong>and some html</strong>'
  }

  await sgMail.send(msg);

  return NextResponse.json({ status: 'success' });
}