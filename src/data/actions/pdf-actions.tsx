'use server';

import { FullAppPDF } from "@/components/pdfs/FullAppPDF";
import { renderToFile } from "@react-pdf/renderer";
import uuid from 'react-uuid';

export const buildPDF = async ({ appData }: { appData: any }) => {
  const fileName = `${uuid()}.pdf`;
  const safeAppData = JSON.parse(JSON.stringify(appData));
  try {
    await renderToFile(<FullAppPDF appData={safeAppData} />, `/tmp/${fileName}`);
  } catch (e: any) {
    console.error(e.message);
  }
  return fileName;
}