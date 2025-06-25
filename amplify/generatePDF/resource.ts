import { defineFunction } from "@aws-amplify/backend";

export const generatePDF = defineFunction({
  name: "generatePDF",
  entry: "./handler.ts"
})