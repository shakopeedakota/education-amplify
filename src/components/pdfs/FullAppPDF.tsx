import { Document } from "@react-pdf/renderer"
import { PrimaryApplicationPDF } from "./PrimaryApplicationPDF"
import { ReleaseOfInformationPDF } from "./ReleaseOfInformationPDF";
import { AfterSchoolProgramPDF } from "./AfterSchoolProgramPDF";
import { StudentSupportTeacherConsentPDF } from "./StudentSupportTeacherConsentPDF";
import { MedicationAdministrationAuthorizationPDF } from "./MedicationAdministrationAuthorizationPDF";
import { PostSecondaryServicesPDF } from "./PostSecondaryServicesPDF";

export const FullAppPDF = ({ appData }: { appData: any }) => (
  <Document title="2025/26 SMSC Education Application">
    <PrimaryApplicationPDF appData={appData} />
    {appData.children?.map((child: any, index: number) => (
      <ReleaseOfInformationPDF key={index} index={index} appData={appData} childData={child} />
    ))}
    <AfterSchoolProgramPDF appData={appData} />
    {appData.children?.map((child: any, index: number) => (
      <StudentSupportTeacherConsentPDF key={index} index={index} appData={appData} childData={child} />
    ))}
    {appData.children?.map((child: any, index: number) => (
      <MedicationAdministrationAuthorizationPDF key={index} index={index} appData={appData} childData={child} />
    ))}
    {appData.postSecondary?.filter((a: any) => a.afterHighSchoolPrep != null && a.afterHighSchoolPrep != '').map((child: any, index: number) => (
      <PostSecondaryServicesPDF key={index} index={index} appData={appData} childData={appData.children?.[index]} />
    ))}
  </Document>
);