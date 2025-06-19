'use server';

import { FullAppPDF } from "@/components/pdfs/FullAppPDF";
import { renderToFile } from "@react-pdf/renderer";
import uuid from 'react-uuid';

export const buildPDF = async ({ appData }: { appData: any }) => {
  const fileName = `${uuid()}.pdf`;
  try {
    await renderToFile(<FullAppPDF appData={appData} />, `public/tmp/${fileName}`);
  } catch (e) {
    console.error(e);
  }
  return fileName;
}