'use client';

import { FullAppPDF } from "@/components/pdfs/FullAppPDF";
import { PDFViewer } from "@react-pdf/renderer";

export default function PDFTestPage() {
  return (
  <PDFViewer className="pdfViewer">
    <FullAppPDF appData={{}} />
  </PDFViewer>
  );
}