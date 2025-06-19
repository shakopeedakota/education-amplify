import { Page, View, Text } from '@react-pdf/renderer';
import { BaseStyles as styles } from './pdf-components/stylesheet';
import { FormHeader } from './pdf-components/FormHeader';
import { SectionDivider } from './pdf-components/section-divider';
import { PDFInput } from './pdf-components/PDFInput';
import { PDFCheckbox } from './pdf-components/PDFCheckbox';
import { FormFooter } from './pdf-components/FormFooter';
import { PDFTextarea } from './pdf-components/PDFTextarea';
import { PDFLabel } from './pdf-components/PDFLabel';

export const MedicationAdministrationAuthorizationPDF = ({ index, appData, childData }: { index: number; appData: any; childData: any }) => (
  <Page size="A4" style={styles.body}>
    <FormHeader title="Authorization to Administer Medication" />
    <View>
      <View style={styles.section}>
        <Text style={styles.text}>This form provides parent/guardian authorization for the Education Department staff to administer specific over-the-counter (OTC) medications to students while they are in attendance at the Education Department.</Text>
        <Text style={{ ...styles.text, marginTop: 6 }}>The Education Department staff are trained in CPR/FIrst Aid, including the administration of EpiPens, but are not medically trained nor certified to administer prescription medication.  In emergency situations, the Education Department staff may contact 911 before calling the parent/guardian (e.g. cessation of breathing).</Text>
      </View>
      <SectionDivider />
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput
              label="Parent/Guardian Name"
              value={`${appData.primaryContact?.firstName ?? ''} ${appData.primaryContact?.lastName ?? ''}`}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput
              label="Parent/Guardian Phone Number"
              value={`${appData.primaryContact?.phone ?? ''}`}
            />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput
              label="Emergency Contact Name"
              value={`${appData.emergencyContacts?.[0]?.firstName ?? ''} ${appData.emergencyContacts?.[0]?.lastName ?? ''}`}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput
              label="Emergency Contact Phone Number"
              value={`${appData.emergencyContacts?.[0]?.phone ?? ''}`}
            />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput
              label="Child Name"
              value={`${childData.firstName ?? ''} ${childData.lastName ?? ''}`}
            />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFLabel>Select one:</PDFLabel>
            <PDFCheckbox
              label="I authorize the administration of over-the-counter medications"
              checked={appData.medicationAdministration?.medicationAdministrationAuthorization == 'I authorize the administration of over-the-counter medications'}
            />
            <PDFCheckbox
              label="I DO NOT authorize the administration of over-the-counter medications"
              checked={appData.medicationAdministration?.medicationAdministrationAuthorization == 'I DO NOT authorize the administration of over-the-counter medications'}
            />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFLabel>I understand the Education Department is not qualified to administer prescription medications. This form is only for over-the-counter medications. A small supply of these medications such as Tylenol and ibuprofen will be kept in a locked location within the Education Department.</PDFLabel>
            <PDFCheckbox
              label="Yes"
              checked={appData.medicationAdministration?.prescriptionMedicationNotice == 'Yes'}
            />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFLabel>I understand the Education Department staff will call to inform me medication will be administered to my child. The Education Department is still authorized to do so even if they do not reach me directly and instead leave a message.</PDFLabel>
            <PDFCheckbox
              label="Yes"
              checked={appData.medicationAdministration?.informedConsent == 'Yes'}
            />
          </View>
        </View>
      </View>
      <View style={styles.section} break>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFLabel>I authorize the Education Department to administer the following over-the-counter medication(s) to my child:</PDFLabel>
            <PDFCheckbox
              label="Tylenol (acetaminophen): Up to two (2) pills, regular strength"
              checked={appData.medicationAdministration?.medicationList?.[index]?.tylenol}
            />
            <PDFCheckbox
              label="Advil (ibuprofen): Up to two (2) pill, regular strength"
              checked={appData.medicationAdministration?.medicationList?.[index]?.advil}
            />
            <PDFCheckbox
              label="Aspirin: Up to two (2) pills, regular strength"
              checked={appData.medicationAdministration?.medicationList?.[index]?.aspirin}
            />
            <PDFCheckbox
              label="Alleve (Naproxen Sodium): Up to two (2) pills, regular strength"
              checked={appData.medicationAdministration?.medicationList?.[index]?.alleve}
            />
            <PDFCheckbox
              label="Bacitracin or other topical ointment for cuts and pain relief: Dose as listed on the medication"
              checked={appData.medicationAdministration?.medicationList?.[index]?.bacitracin}
            />
            <PDFCheckbox
              label="Over-the-counter allergy medication: Dose as listed on the medication"
              checked={appData.medicationAdministration?.medicationList?.[index]?.allergy}
            />
            <PDFCheckbox
              label="Other:"
              checked={appData.medicationAdministration?.medicationList?.[index]?.other != '' && appData.medicationAdministration?.medicationList?.[index]?.other != null}
            />
            <PDFTextarea
              lines={2}
              value={appData.medicationAdministration?.medicationList?.[index]?.other}
            />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFLabel>My child has a prescription inhaler and/or an EpiPen and has received instructions from their physician or licensed prescriber in how to properly use it. I authorize my child to use this device when medically necessary.</PDFLabel>
            <PDFCheckbox
              label="Yes"
              checked={appData.medicationAdministration?.children?.[index]?.inhalerConsent == 'Yes'}
            />
            <PDFCheckbox
              label="No"
              checked={appData.medicationAdministration?.children?.[index]?.inhalerConsent == 'No'}
            />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFLabel>The Education Department takes food and other allergies seriously and will eliminate any such items form the department as medically necessary.</PDFLabel>
            <PDFLabel>My child has allergies to food or the other items listed below. Please include any specific information you feel the Education Department staff should know related to this issue.</PDFLabel>
            <PDFTextarea
              value={appData.medicationAdministration?.children?.[index]?.allergies}
            />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFLabel>Any other information the Education Department should know?</PDFLabel>
            <PDFTextarea
              lines={2}
              value={appData.medicationAdministration?.children?.[index]?.otherInformation}
            />
          </View>
        </View>
      </View>
      <View style={{ ...styles.section, marginTop: 10 }}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col8 }}>
            <PDFInput label="Signature:" />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label="Date:" />
          </View>
        </View>
      </View>
    </View>
    <FormFooter />
  </Page>
);