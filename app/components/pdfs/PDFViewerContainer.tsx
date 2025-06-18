'use client';

import { PDFViewer, Document } from "@react-pdf/renderer";

export const PDFViewerContainer = ({ children }: { children: any }) => (
  <PDFViewer className="pdfViewer w-full">
    <Document>
      {children}
    </Document>
  </PDFViewer>
);