export interface ROIForm {
  id: number;
  childId: number;
  schoolDistrict: string;
  schoolName: string;
  cityState: string;
  requiredDocs: {
    attendanceRecords: boolean;
    academicPerformanceRecords: boolean;
    postSecondaryDocuments: boolean;
  },
  optionalDocs: {
    disciplinaryActions: boolean;
    specialEducationRecords: boolean;
  },
}