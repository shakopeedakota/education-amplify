import { Page, View, Text } from '@react-pdf/renderer';
import { BaseStyles as styles } from '@/components/pdfs/pdf-components/stylesheet';
import { FormHeader } from '@/components/pdfs/pdf-components/FormHeader';
import { FormFooter } from '@/components/pdfs/pdf-components/FormFooter';
import { PDFLabel } from './pdf-components/PDFLabel';
import { PDFCheckbox } from './pdf-components/PDFCheckbox';
import { PDFInput } from './pdf-components/PDFInput';
import { PDFTextarea } from './pdf-components/PDFTextarea';
import { SectionDivider } from './pdf-components/section-divider';

export const AfterSchoolProgramPDF = ({ appData }: { appData: any; }) => (
  <Page size="A4" style={styles.body}>
    <FormHeader
      title="After School Program"
      subtitle="Drop-Off and Pickup Authorization"
    />
    <View>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFLabel>I understand by completing this form, I am authorizing the person or people named below to drop off and/or pick up my child from the Education Department.</PDFLabel>
            <PDFLabel>This form can be modified in the future to add or remove names, provided the parent/guardian gives this information at least 30 minutes before pickup.</PDFLabel>
          </View>
        </View>
      </View>
      <SectionDivider />
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput
              label="Parent/Guardian 1 Name"
              value={`${appData.primaryContact?.firstName ?? ''} ${appData.primaryContact?.lastName ?? ''}`}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput
              label="Parent/Guardian 1 Phone Number"
              value={`${appData.primaryContact?.phone ?? ''}`}
            />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput
              label="Parent/Guardian 2 Name"
              value={`${appData.secondaryContact?.firstName ?? ''} ${appData.secondaryContact?.lastName ?? ''}`}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput
              label="Parent/Guardian 2 Phone Number"
              value={`${appData.secondaryContact?.phone ?? ''}`}
            />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFLabel>I understand the program closes at 5pm every day, and my child must either be picked up, or leave in their own car by that time. Consistently pickup up a child late will result in the need for a discussion with the Director of Education to determine appropriate next steps.</PDFLabel>
            <PDFCheckbox
              label="Yes"
              checked={appData.afterSchoolPickup?.pickupLateNotice ?? ''}
            />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput
              label="Child 1"
              value={`${appData.children?.[0]?.firstName ?? ''} ${appData.children?.[0]?.lastName ?? ''}`}
            />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput
              label="Child 2"
              value={`${appData.children?.[1]?.firstName ?? ''} ${appData.children?.[1]?.lastName ?? ''}`}
            />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput
              label="Child 3"
              value={`${appData.children?.[2]?.firstName ?? ''} ${appData.children?.[2]?.lastName ?? ''}`}
            />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput
              label="Child 4"
              value={`${appData.children?.[3]?.firstName ?? ''} ${appData.children?.[3]?.lastName ?? ''}`}
            />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput
              label="Child 5"
              value={`${appData.children?.[4]?.firstName ?? ''} ${appData.children?.[4]?.lastName ?? ''}`}
            />
          </View>
        </View>
      </View>
      <View style={styles.section} break>
        <Text style={styles.sectionTitle}>Authorized Drivers</Text>
        <Text style={{ ...styles.text, fontStyle: 'italic' }}>Note: The primary and secondary parent/guardians, as well as any emergency contacts listed are already authorized to drop off and pick up your child. Use the spaces below to add additional authorized drivers.</Text>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput
              label="Authorized Driver 1"
              value={`${appData.afterSchoolPickup?.authorizedDrivers?.[0]?.name ?? ''}`}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput
              label="Phone Number"
              value={`${appData.afterSchoolPickup?.authorizedDrivers?.[0]?.phone ?? ''}`}
            />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput
              label="Authorized Driver 2"
              value={`${appData.afterSchoolPickup?.authorizedDrivers?.[1]?.name ?? ''}`}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput
              label="Phone Number"
              value={`${appData.afterSchoolPickup?.authorizedDrivers?.[1]?.phone ?? ''}`}
            />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput
              label="Authorized Driver 3"
              value={`${appData.afterSchoolPickup?.authorizedDrivers?.[2]?.name ?? ''}`}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput
              label="Phone Number"
              value={`${appData.afterSchoolPickup?.authorizedDrivers?.[2]?.phone ?? ''}`}
            />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput
              label="Authorized Driver 4"
              value={`${appData.afterSchoolPickup?.authorizedDrivers?.[3]?.name ?? ''}`}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput
              label="Phone Number"
              value={`${appData.afterSchoolPickup?.authorizedDrivers?.[3]?.phone ?? ''}`}
            />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFLabel>My child (or children) are authorized to drive their own vehicle and can leave for the day on their own. Please name all that apply.</PDFLabel>
            <PDFTextarea
              lines={2}
              value={appData.afterSchoolPickup?.studentDrivers?.length > 0 ? appData.afterSchoolPickup?.studentDrivers.join(", ") : ''}
            />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFLabel>My child can leave with another SMSC child who drives their own vehicle. If yes, please ensure that person is named as an Authorized Person above.</PDFLabel>
            <PDFTextarea
              lines={2}
              value={appData.afterSchoolPickup?.leaveWithAnotherStudent?.length > 0 ? appData.afterSchoolPickup?.leaveWithAnotherStudent.join(", ") : ''}
            />
          </View>
        </View>
      </View>
      <View style={styles.section} break>
        <Text style={styles.sectionTitle}>Unauthorized Drivers</Text>
        <Text style={{ ...styles.text, fontStyle: 'italic', marginBottom: 6 }}>Use this section to list any individuals who you do not want picking up your child from the Education Department.</Text>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFLabel>Unauthorized Person 1: Name and Description</PDFLabel>
            <PDFTextarea
              lines={2}
              value={`${appData.afterSchoolPickup?.unauthorizedPickup?.[0]?.name ?? ''}${appData.afterSchoolPickup?.unauthorizedPickup?.[0]?.name != '' && appData.afterSchoolPickup?.unauthorizedPickup?.[0]?.name != null ? ' - ' : ''}${appData.afterSchoolPickup?.unauthorizedPickup?.[0]?.description ?? ''}`}
            />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFLabel>Unauthorized Person 2: Name and Description</PDFLabel>
            <PDFTextarea
              lines={2}
              value={`${appData.afterSchoolPickup?.unauthorizedPickup?.[1]?.name ?? ''}${appData.afterSchoolPickup?.unauthorizedPickup?.[1]?.name != '' && appData.afterSchoolPickup?.unauthorizedPickup?.[1]?.name != null ? ' - ' : ''}${appData.afterSchoolPickup?.unauthorizedPickup?.[1]?.description ?? ''}`}
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