'use server';

import { FullAppPDF } from "@/components/pdfs/FullAppPDF";
import { renderToFile } from "@react-pdf/renderer";
import uuid from 'react-uuid';
import * as Sentry from "@sentry/nextjs";

export const buildPDF = async ({ appData }: { appData: any }) => {
  const fileName = `${uuid()}.pdf`;
  const safeAppData = JSON.parse(JSON.stringify(appData));
  try {
    await renderToFile(<FullAppPDF appData={safeAppData} />, `/tmp/${fileName}`);
  } catch (e: any) {
    Sentry.captureException(e);
    console.error(e.message);
  }
  return fileName;
}