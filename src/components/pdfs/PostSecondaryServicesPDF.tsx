import { Page, View, Text } from '@react-pdf/renderer';
import { BaseStyles as styles } from './pdf-components/stylesheet';
import { FormHeader } from './pdf-components/FormHeader';
import { FormFooter } from './pdf-components/FormFooter';
import { PDFRadio } from './pdf-components/PDFRadio';
import { PDFInput } from './pdf-components/PDFInput';
import { PDFLabel } from './pdf-components/PDFLabel';
import { PDFTextarea } from './pdf-components/PDFTextarea';

export const PostSecondaryServicesPDF = ({ index, appData, childData }: { index: number, appData: any; childData: any }) => (
  <Page size="A4" style={styles.body}>
    <FormHeader title="Post-Secondary Services Consent" />
    <View>
      <View style={styles.section}>
        <Text style={styles.text}>Help us understand your needs and how to better serve this community!</Text>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFLabel>Please choose the option that best describes you:</PDFLabel>
            <PDFRadio label="Student" />
            <PDFRadio label="Parent/Guardian" checked={appData.length > 0} />
            <PDFRadio label="Other Community Member" />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>School Information</Text>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFLabel>What school do you or your child attend?</PDFLabel>
            <PDFInput value={childData.currentSchool ?? ''} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFLabel>Does your or your child&apos;s school offer services to plan for life after high school?</PDFLabel>
            <PDFRadio
              label="Yes"
              checked={appData.postSecondary?.[index]?.afterHighSchoolPrep == 'Yes'}
            />
            <PDFRadio
              label="No"
              checked={appData.postSecondary?.[index]?.afterHighSchoolPrep == 'No'}
            />
            <PDFRadio
              label="I don't know"
              checked={appData.postSecondary?.[index]?.afterHighSchoolPrep == "I don't know"}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFLabel>If yes, do these services meet your or your child&apos;s needs?</PDFLabel>
            <PDFRadio
              label="Yes"
              checked={appData.postSecondary?.[index]?.meetingFamilyNeeds == 'Yes'}
            />
            <PDFRadio
              label="No"
              checked={appData.postSecondary?.[index]?.meetingFamilyNeeds == 'No'}
            />
            <PDFRadio
              label="I don't know"
              checked={appData.postSecondary?.[index]?.meetingFamilyNeeds == "I don't know"}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFLabel>What would help you or your child feel prepared for your future?</PDFLabel>
            <PDFTextarea
              value={appData.postSecondary?.[index]?.futureChildSupport}
            />
          </View>
        </View>
      </View>
      <View style={{ ...styles.section, padding: '10px', border: '1px solid #ececec' }} break>
        <Text style={{ ...styles.sectionTitle, marginTop: '-10px', marginLeft: '-10px', marginRight: '-10px' }}>Complete this section if you selected <Text style={{ ...styles.text, ...styles.textBold }}>[Other Community Member]</Text> above.</Text>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFLabel>Are there any post-secondary services being offered in the community?</PDFLabel>
            <PDFRadio label="Yes" />
            <PDFRadio label="No" />
            <PDFRadio label="I don't know" />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFLabel>If yes, do you feel these services are meeting the needs of the community?</PDFLabel>
            <PDFRadio label="Yes" />
            <PDFRadio label="No" />
            <PDFRadio label="I don't know" />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFLabel>Anything else you would like the Education Department to know?</PDFLabel>
            <PDFTextarea
              value={appData.postSecondary?.[index]?.additionalInfo}
            />
          </View>
        </View>
      </View>
    </View>
    <FormFooter />
  </Page>
);