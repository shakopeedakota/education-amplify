import {
  Introduction,
  PrimaryContact,
  SecondaryContact,
  EmergencyContacts,
  Children,
  ReleaseOfInformation,
  StudentSupportTeacherConsent,
  AfterSchoolPickup,
  PostSecondaryServices,
  Review,
  Complete,
  AuthorizationToAdministerMedication,
} from "@/components/forms";
import { useState } from "react";

export const ApplicationContainer = () => {
  const [ currentForm, setCurrentForm ] = useState({form: 'introduction'});
  const formList: {[index: string]: any} = {
    introduction: <Introduction setForm={setCurrentForm} />,
    primaryContact: <PrimaryContact setForm={setCurrentForm} />,
    secondaryContact: <SecondaryContact setForm={setCurrentForm} />,
    emergencyContacts: <EmergencyContacts setForm={setCurrentForm} />,
    children: <Children setForm={setCurrentForm} />,
    roi: <ReleaseOfInformation setForm={setCurrentForm} />,
    sst: <StudentSupportTeacherConsent setForm={setCurrentForm} />,
    afterSchoolPickup: <AfterSchoolPickup setForm={setCurrentForm} />,
    postSecondaryServices: <PostSecondaryServices setForm={setCurrentForm} />,
    medicationAdministration: <AuthorizationToAdministerMedication setForm={setCurrentForm} />,
    review: <Review setForm={setCurrentForm} />,
    complete: <Complete />,
  };

  return (
    <>
      {formList[currentForm.form] ?? <Introduction setForm={setCurrentForm} />}
    </>
  );
}