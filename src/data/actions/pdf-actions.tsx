'use server';

import { FullAppPDF } from "@/components/pdfs/FullAppPDF";
import { renderToFile } from '@react-pdf/renderer';
import { v4 as uuidv4 } from 'uuid';

export const buildPDF = async ({ appData }: { appData: any }) => {
  const filename = `${uuidv4()}.pdf`;
  await renderToFile(
    <FullAppPDF appData={appData} />,
    `${process.env.TMP_FOLDER}${filename}`
  )
  return filename;
}