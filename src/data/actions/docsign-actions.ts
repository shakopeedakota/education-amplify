'use server';

import { DocumentApi, DocumentSigner, FormField, Rectangle, SendForSign } from "boldsign";
// import * as fs from 'fs';

export const sendForDocSigning = async ({ filename, appData }: { filename: string; appData: any; }) => {
  let nextSigningPage = 0;
  const documentApi = new DocumentApi();
  documentApi.setApiKey(process.env.BOLDSIGN_API_KEY as string);

  // Define the signer information
  const documentSigner = new DocumentSigner();
  documentSigner.name = `${appData.primaryContact?.firstName} ${appData.primaryContact?.lastName}`;
  documentSigner.emailAddress = appData.primaryContact?.email
  documentSigner.signerType = DocumentSigner.SignerTypeEnum.Signer;

  const signatureX = 120;
  const signatureWidth = 380;
  const signatureHeight = 30;
  const dateSignedX = 585.6;
  const dateSignedWidth = 200;
  const dateSignedHeight = 30;

  // Enrollment Application - No signature needed
  const enrollmentDocLength = 3;
  nextSigningPage += enrollmentDocLength;

  // Release of Information - Signature needed
  const roiSignatureFields = [];
  const roiDocLength = 2
  const roiSignatureBounds = new Rectangle();
  roiSignatureBounds.x = signatureX;
  roiSignatureBounds.y = 549;
  roiSignatureBounds.width = signatureWidth;
  roiSignatureBounds.height = signatureHeight;

  const roiDateSignedBounds = new Rectangle();
  roiDateSignedBounds.x = dateSignedX;
  roiDateSignedBounds.y = 556;
  roiDateSignedBounds.width = dateSignedWidth;
  roiDateSignedBounds.height = dateSignedHeight;

  for (const child in appData.children) {
    nextSigningPage += roiDocLength;

    const tempSignatureField = new FormField();
    tempSignatureField.id = `ROISignature${child + 1}`;
    tempSignatureField.fieldType = FormField.FieldTypeEnum.Signature;
    tempSignatureField.bounds = roiSignatureBounds;
    tempSignatureField.pageNumber = nextSigningPage;
    tempSignatureField.isRequired = true;

    const tempDateSignedField = new FormField();
    tempDateSignedField.id = `ROIDateSigned${child + 1}`;
    tempDateSignedField.fieldType = FormField.FieldTypeEnum.DateSigned;
    tempDateSignedField.bounds = roiDateSignedBounds;
    tempDateSignedField.pageNumber = nextSigningPage;
    tempDateSignedField.isRequired = true;
    tempDateSignedField.font = FormField.FontEnum.Courier;
    tempDateSignedField.fontSize = 16

    roiSignatureFields.push(tempSignatureField, tempDateSignedField);
  }

  // After School Program - Signature needed
  const afterSchoolProgramDocLength = 3;
  nextSigningPage += afterSchoolProgramDocLength;

  const afterSchoolProgramSignatureBounds = new Rectangle();
  afterSchoolProgramSignatureBounds.x = signatureX;
  afterSchoolProgramSignatureBounds.y = 522;
  afterSchoolProgramSignatureBounds.width = signatureWidth;
  afterSchoolProgramSignatureBounds.height = signatureHeight;

  const afterSchoolProgramDateSignedBounds = new Rectangle();
  afterSchoolProgramDateSignedBounds.x = dateSignedX;
  afterSchoolProgramDateSignedBounds.y = 530;
  afterSchoolProgramDateSignedBounds.width = dateSignedWidth;
  afterSchoolProgramDateSignedBounds.height = dateSignedHeight;

  const afterSchoolProgramSignatureField = new FormField();
  afterSchoolProgramSignatureField.id = `AfterSchoolProgramSignature`
  afterSchoolProgramSignatureField.fieldType = FormField.FieldTypeEnum.Signature;
  afterSchoolProgramSignatureField.bounds = afterSchoolProgramSignatureBounds;
  afterSchoolProgramSignatureField.pageNumber = nextSigningPage;
  afterSchoolProgramSignatureField.isRequired = true;

  const afterSchoolProgramDateSignedField = new FormField();
  afterSchoolProgramDateSignedField.id = `AfterSchoolProgramDateSigned`;
  afterSchoolProgramDateSignedField.fieldType = FormField.FieldTypeEnum.DateSigned;
  afterSchoolProgramDateSignedField.bounds = afterSchoolProgramDateSignedBounds;
  afterSchoolProgramDateSignedField.pageNumber = nextSigningPage;
  afterSchoolProgramDateSignedField.isRequired = true;
  afterSchoolProgramDateSignedField.font = FormField.FontEnum.Courier;
  afterSchoolProgramDateSignedField.fontSize = 16;

  // Student Support Teacher Consent - Signature needed
  const sstFields = [];
  const sstDocLength = 2;

  const sstSignatureBounds = new Rectangle();
  sstSignatureBounds.x = signatureX;
  sstSignatureBounds.y = 530;
  sstSignatureBounds.width = signatureWidth;
  sstSignatureBounds.height = signatureHeight;

  const sstDateSignedBounds = new Rectangle();
  sstDateSignedBounds.x = dateSignedX;
  sstDateSignedBounds.y = 540;
  sstDateSignedBounds.width = dateSignedWidth;
  sstDateSignedBounds.height = dateSignedHeight;
  
  for (const child in appData.children) {
    nextSigningPage += sstDocLength;

    const tempSignatureField = new FormField();
    tempSignatureField.id = `SSTSignature${child + 1}`;
    tempSignatureField.fieldType = FormField.FieldTypeEnum.Signature;
    tempSignatureField.bounds = sstSignatureBounds;
    tempSignatureField.pageNumber = nextSigningPage;
    tempSignatureField.isRequired = true;

    const tempDateSignedField = new FormField();
    tempDateSignedField.id = `SSTDateSigned${child + 1}`;
    tempDateSignedField.fieldType = FormField.FieldTypeEnum.DateSigned;
    tempDateSignedField.bounds = sstDateSignedBounds;
    tempDateSignedField.pageNumber = nextSigningPage;
    tempDateSignedField.isRequired = true;
    tempDateSignedField.font = FormField.FontEnum.Courier;
    tempDateSignedField.font = 16;

    sstFields.push(tempSignatureField, tempDateSignedField);
  }

  // Authorization to Administer Medication - Signature needed
  const medicationAuthorizationFields = [];
  const medicationAuthorizationDocLength = 2;
  const medicationSignatureBounds = new Rectangle();
  medicationSignatureBounds.x = signatureX;
  medicationSignatureBounds.y = 984;
  medicationSignatureBounds.width = signatureWidth;
  medicationSignatureBounds.height = signatureHeight;

  const medicationDateSignedBounds = new Rectangle();
  medicationDateSignedBounds.x = dateSignedX;
  medicationDateSignedBounds.y = 990;
  medicationDateSignedBounds.width = dateSignedWidth;
  medicationDateSignedBounds.height = dateSignedHeight;

  for (const child in appData.children) {
    nextSigningPage += medicationAuthorizationDocLength;

    const tempSignatureField = new FormField();
    tempSignatureField.id = `MedicationAuthorizationSignature${child + 1}`;
    tempSignatureField.fieldType = FormField.FieldTypeEnum.Signature;
    tempSignatureField.bounds = medicationSignatureBounds;
    tempSignatureField.pageNumber = nextSigningPage;
    tempSignatureField.isRequired = true;

    const tempDateSignedField = new FormField();
    tempDateSignedField.id = `MedicationAuthorizationDateSigned${child + 1}`;
    tempDateSignedField.fieldType = FormField.FieldTypeEnum.DateSigned;
    tempDateSignedField.bounds = medicationDateSignedBounds;
    tempDateSignedField.pageNumber = nextSigningPage;
    tempDateSignedField.isRequired = true;
    tempDateSignedField.font = FormField.FontEnum.Courier;
    tempDateSignedField.fontSize = 16

    medicationAuthorizationFields.push(tempSignatureField, tempDateSignedField);
  }

  // Post-Secondary Services Consent - No signature needed

  // Attach form fields to documentSigner
  documentSigner.formFields = [
    // Release of Information
    ...roiSignatureFields,
    // After School Program
    afterSchoolProgramSignatureField,
    afterSchoolProgramDateSignedField,
    // Student Support Teacher Consent
    ...sstFields,
    // Authorization to Administer Medication
    ...medicationAuthorizationFields,
  ];

  // Path to the document that needs to be signed
  // No longer need to read from filesystem
  // const files = fs.createReadStream(filename);

  // Create the document details for sending.
  const sendForSign = new SendForSign();
  sendForSign.title = "2025/26 SMSC Education Department Enrollment Application";
  sendForSign.signers = [documentSigner];
  // sendForSign.files = [files];
  sendForSign.fileUrls = [filename];

  const documentCreated = await documentApi.sendDocument(sendForSign);

  return { ...documentCreated };
}