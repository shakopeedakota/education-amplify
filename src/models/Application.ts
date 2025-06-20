import { Child } from "./Child";
import { Contact } from "./Contact";

export interface Application {
  id?: number | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  primaryContact: Contact | null;
  secondaryContact: Contact | null;
  emergencyContacts: Record<any, any>[];
  children: Record<any, Child>[];
  afterSchoolPickup: {
    pickupLateNotice: any;
    authorizedDrivers: Record<any, any>[];
    studentDrivers: Record<any, any>[];
    leaveWithAnotherStudent: Record<any, any>[];
  };
  medicationAdministration: {
    medicationAdministrationAuthorization: string;
    prescriptionMedicationNotice: string;
    informedConsent: string;
  };
  postSecondary: {
    [index: number]: {
      afterHighSchoolPrep: string | undefined | null;
      meetingFamilyNeeds?: string;
      futureChildSupport?: string;
      additionalInfo?: string;
    }
  }
}