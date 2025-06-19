import { Page, View, Text } from '@react-pdf/renderer';
import { BaseStyles as styles } from './pdf-components/stylesheet';
import { PDFInput } from './pdf-components/PDFInput';
import { SectionDivider } from './pdf-components/section-divider';
import { FormHeader } from './pdf-components/FormHeader';
import { FormFooter } from './pdf-components/FormFooter';

export const PrimaryApplicationPDF = ({ appData }: { appData: any; }) => (
  <Page size="A4" style={styles.body}>
    <FormHeader title="2025/26 Enrollment Application" />
    <View>
      <View style={styles.section}>
        <Text style={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In reprehenderit non minima iure ad voluptatem omnis mollitia quos porro. Magni doloribus ea inventore dolorem nobis aspernatur saepe expedita doloremque impedit.</Text>
      </View>
      <SectionDivider />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Primary Contact</Text>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput label={`Name:`} value={`${appData.primaryContact?.firstName ?? ''}  ${appData.primaryContact?.lastName ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col7}}>
            <PDFInput label={`Email:`} value={`${appData.primaryContact?.email ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col5}}>
            <PDFInput label={"Phone:"} value={`${appData.primaryContact?.phone ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col8 }}>
            <PDFInput label={"Address:"} value={`${appData.primaryContact?.address ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label={"Apt/Unit:"} value={`${appData.primaryContact?.address2 ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label={"City:"} value={`${appData.primaryContact?.city ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label={"State:"} value={`${appData.primaryContact?.state ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label={"Zip Code:"} value={`${appData.primaryContact?.zip ?? ''}`} />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Secondary Contact</Text>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput label={`Name:`} value={`${appData.secondaryContact?.firstName ?? ''} ${appData.secondaryContact?.lastName ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col7}}>
            <PDFInput label={`Email:`} value={`${appData.secondaryContact?.email ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col5}}>
            <PDFInput label={"Phone:"} value={`${appData.secondaryContact?.phone ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col8 }}>
            <PDFInput label={"Address:"} value={`${appData.secondaryContact?.address ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label={"Apt/Unit:"} value={`${appData.secondaryContact?.address2 ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label={"City:"} value={`${appData.secondaryContact?.city ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label={"State:"} value={`${appData.secondaryContact?.state ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label={"Zip Code:"} value={`${appData.secondaryContact?.zip ?? ''}`} />
          </View>
        </View>
      </View>
      <SectionDivider />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Emergency Contact 1</Text>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput label={"Name:"} value={`${appData.emergencyContacts?.[0]?.firstName ?? ''} ${appData.emergencyContacts?.[0]?.lastName ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col8 }}>
            <PDFInput label={"Email:"} value={`${appData.emergencyContacts?.[0]?.email ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label={"Phone:"} value={`${appData.emergencyContacts?.[0]?.phone ?? ''}`} />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Emergency Contact 2</Text>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput label={"Name:"} value={`${appData.emergencyContacts?.[1]?.firstName ?? ''} ${appData.emergencyContacts?.[1]?.lastName ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col8 }}>
            <PDFInput label={"Email:"} value={`${appData.emergencyContacts?.[1]?.email ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label={"Phone:"} value={`${appData.emergencyContacts?.[1]?.phone ?? ''}`} />
          </View>
        </View>
      </View>
      <View style={styles.section} break>
        <Text style={styles.sectionTitle}>Child 1</Text>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col8 }}>
            <PDFInput label="Name" value={`${appData.children?.[0]?.firstName ?? ''} ${appData.children?.[0]?.lastName ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label="Birthdate" value={`${appData.children?.[0]?.birthdate ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col7 }}>
            <PDFInput label="Email" value={`${appData.children?.[0]?.email ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col5 }}>
            <PDFInput label="Phone" value={`${appData.children?.[0]?.phone ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col9 }}>
            <PDFInput label="Current School" value={`${appData.children?.[0]?.currentSchool ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col3 }}>
            <PDFInput label="Grade" value={`${appData.children?.[0]?.grade ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput label="Address" value={`${appData.children?.[0]?.address ?? ''} ${appData.children?.[0]?.address2 ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label="City" value={`${appData.children?.[0]?.city ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label="State" value={`${appData.children?.[0]?.state ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label="Zip" value={`${appData.children?.[0]?.zip ?? ''}`} />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Child 2</Text>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col8 }}>
            <PDFInput label="Name" value={`${appData.children?.[1]?.firstName ?? ''} ${appData.children?.[1]?.lastName ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label="Birthdate" value={`${appData.children?.[1]?.birthdate ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col7 }}>
            <PDFInput label="Email" value={`${appData.children?.[1]?.email ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col5 }}>
            <PDFInput label="Phone" value={`${appData.children?.[1]?.phone ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col9 }}>
            <PDFInput label="Current School" value={`${appData.children?.[1]?.currentSchool ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col3 }}>
            <PDFInput label="Grade" value={`${appData.children?.[1]?.grade ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput label="Address" value={`${appData.children?.[1]?.address ?? ''} ${appData.children?.[1]?.address2 ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label="City" value={`${appData.children?.[1]?.city ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label="State" value={`${appData.children?.[1]?.state ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label="Zip" value={`${appData.children?.[1]?.zip ?? ''}`} />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Child 3</Text>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col8 }}>
            <PDFInput label="Name" value={`${appData.children?.[2]?.firstName ?? ''} ${appData.children?.[2]?.lastName ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label="Birthdate" value={`${appData.children?.[2]?.birthdate ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col7 }}>
            <PDFInput label="Email" value={`${appData.children?.[2]?.email ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col5 }}>
            <PDFInput label="Phone" value={`${appData.children?.[2]?.phone ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col9 }}>
            <PDFInput label="Current School" value={`${appData.children?.[2]?.currentSchool ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col3 }}>
            <PDFInput label="Grade" value={`${appData.children?.[2]?.grade ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput label="Address" value={`${appData.children?.[2]?.address ?? ''} ${appData.children?.[2]?.address2 ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label="City" value={`${appData.children?.[2]?.city ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label="State" value={`${appData.children?.[2]?.state ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label="Zip" value={`${appData.children?.[2]?.zip ?? ''}`} />
          </View>
        </View>
      </View>
      <View style={styles.section} break>
        <Text style={styles.sectionTitle}>Child 4</Text>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col8 }}>
            <PDFInput label="Name" value={`${appData.children?.[3]?.firstName ?? ''} ${appData.children?.[3]?.lastName ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label="Birthdate" value={`${appData.children?.[3]?.birthdate ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col7 }}>
            <PDFInput label="Email" value={`${appData.children?.[3]?.email ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col5 }}>
            <PDFInput label="Phone" value={`${appData.children?.[3]?.phone ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col9 }}>
            <PDFInput label="Current School" value={`${appData.children?.[3]?.currentSchool ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col3 }}>
            <PDFInput label="Grade" value={`${appData.children?.[3]?.grade ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput label="Address" value={`${appData.children?.[3]?.address ?? ''} ${appData.children?.[3]?.address2 ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label="City" value={`${appData.children?.[3]?.city ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label="State" value={`${appData.children?.[3]?.state ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label="Zip" value={`${appData.children?.[3]?.zip ?? ''}`} />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Child 5</Text>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col8 }}>
            <PDFInput label="Name" value={`${appData.children?.[4]?.firstName ?? ''} ${appData.children?.[4]?.lastName ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label="Birthdate" value={`${appData.children?.[4]?.birthdate ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col7 }}>
            <PDFInput label="Email" value={`${appData.children?.[4]?.email ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col5 }}>
            <PDFInput label="Phone" value={`${appData.children?.[4]?.phone ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col9 }}>
            <PDFInput label="Current School" value={`${appData.children?.[4]?.currentSchool ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col3 }}>
            <PDFInput label="Grade" value={`${appData.children?.[4]?.grade ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput label="Address" value={`${appData.children?.[4]?.address ?? ''} ${appData.children?.[4]?.address2 ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label="City" value={`${appData.children?.[4]?.city ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label="State" value={`${appData.children?.[4]?.state ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label="Zip" value={`${appData.children?.[4]?.zip ?? ''}`} />
          </View>
        </View>
      </View>
    </View>
    <FormFooter />
  </Page>
);