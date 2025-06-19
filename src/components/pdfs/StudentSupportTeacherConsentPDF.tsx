import { Page, View, Text } from '@react-pdf/renderer';
import { BaseStyles as styles } from './pdf-components/stylesheet';
import { FormHeader } from './pdf-components/FormHeader';
import { SectionDivider } from './pdf-components/section-divider';
import { Field } from '../ui/Forms';
import { PDFInput } from './pdf-components/PDFInput';
import { PDFCheckbox } from './pdf-components/PDFCheckbox';
import { PDFRadio } from './pdf-components/PDFRadio';
import { FormFooter } from './pdf-components/FormFooter';
import { PDFTextarea } from './pdf-components/PDFTextarea';

export const StudentSupportTeacherConsentPDF = ({ index, appData, childData }: { index: number; appData: any; childData: any; }) => (
  <Page size="A4" style={styles.body}>
    <FormHeader title="Student Support Teacher Service Consent" />
    <View>
      <View style={styles.section}>
        <Text style={{ ...styles.text, ...styles.p }}>Community Members will use this form to opt-in to the Student Support Teacher (SST) services offered by the SMSC Education Department.  Opting-in confirms that you agree to have an SST assist with your child&apos;s academic journey.  Entering your name below will serve as your electronic signature.</Text>
        <Text style={{ ...styles.text, ...styles.p }}>All SSTs are licensed Minnesota teachers.  Once this form is received, your child will be assigned an SST who will reach out to you to discuss their academic needs and goals.</Text>
        <Text style={{ ...styles.text }}>All communication between the Parent/Guardian, Education Department team, and school(s) will be kept strictly confidential.  Parents/Guardians may withdraw consent for service at any time by providing written notification to the Director of the SMSC Education Department.</Text>
      </View>
      <SectionDivider />
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <Text style={{ ...styles.text, ...styles.textBold }}>Authorized School Years</Text>
            <PDFCheckbox label="2025/2026" checked={appData.sstConsent?.[index]?.consent == 'Yes'} />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Parent/Guardian Information</Text>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <Text style={styles.text}>By entering my name, I give my permission to the SMSC Education Department team to assist my child in their schooling as requested below.  I give my child&apos;s school permission to discuss my child with their SMSC Student Support Teacher (SST).</Text>
            <Field>
              <PDFInput
                label="Parent/Guardian #1 Name"
                value={`${appData.primaryContact?.firstName ?? ''} ${appData.primaryContact?.lastName ?? ''}`}
              />
            </Field>
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput
              label="Parent/Guardian #2 Name"
              value={`${appData.secondaryContact?.firstName ?? ''} ${appData.secondaryContact?.lastName ?? ''}`}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col8 }}>
            <PDFInput label="Email" value={`${appData.primaryContact?.email ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label="Phone" value={`${appData.primaryContact?.phone ?? ''}`} />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Child Information</Text>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput label="Name" value={`${childData.firstName ?? ''} ${childData.lastName ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col8 }}>
            <PDFInput
              label="Name of School"
              value={`${childData.currentSchool ?? ''}`}
            />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput
              label="Grade Level"
              value={`${childData.grade ?? ''}`}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput
              label="Name of Teacher (if known)"
              value={`${appData.sstConsent?.[index]?.nameOfTeacher ?? ''}`}
            />
          </View>
        </View>
        <View style={{ ...styles.row, marginTop: "10px" }}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <Text style={{ ...styles.text, ...styles.textBold }}>My child needs support with the following (choose one or more options)</Text>
            <PDFCheckbox
              label="Reading"
              checked={appData.sstConsent?.[index]?.childSupport?.reading == 'Reading'}
            />
            <PDFCheckbox
              label="Math"
              checked={appData.sstConsent?.[index]?.childSupport?.math == 'Math'}
            />
            <PDFCheckbox
              label="Organization and Study Skills"
              checked={appData.sstConsent?.[index]?.childSupport?.organization == 'Organization and Study Skills'}
            />
            <PDFCheckbox
              label="Writing"
              checked={appData.sstConsent?.[index]?.childSupport?.writing == 'Writing'}
            />
            <PDFCheckbox
              label="Motivation"
              checked={appData.sstConsent?.[index]?.childSupport?.motivation == 'Motivation'}
            />
            <PDFCheckbox
              label="Other"
              input={true}
              checked={appData.sstConsent?.[index]?.childSupport?.other != '' && appData.sstConsent?.[index]?.childSupport?.other != null}
              value={appData.sstConsent?.[index]?.childSupport?.other ?? ''}
            />
          </View>
        </View>
      </View>
      <View style={styles.section} break>
        <Text style={styles.sectionTitle}>Student Support Teacher Communication</Text>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <Text style={{ ...styles.text, ...styles.textBold }}>I would like my SST to call or email me...</Text>
            <PDFRadio
              label="Once per week"
              checked={appData.sstConsent?.[index]?.contactFrequency == 'Once per week'}
            />
            <PDFRadio
              label="Twice per month"
              checked={appData.sstConsent?.[index]?.contactFrequency == 'Twice per month'}
            />
            <PDFRadio
              label="Once per month"
              checked={appData.sstConsent?.[index]?.contactFrequency == 'Once per month'}
            />
            <PDFRadio
              label="Other"
              checked={appData.sstConsent?.[index]?.contactFrequency == 'Other'}
            />
            <PDFTextarea
              lines={2}
              value={appData.sstConsent?.[index]?.contactFrequency == 'Other' ? appData.sstConsent?.[index]?.contactFrequencyOther : ''}
            />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <Text style={{ ...styles.text, ...styles.textBold }}>If my child&apos;s SST needs to communicate with them directly via text or email...</Text>
            <PDFRadio
              label="I consent to the SST texting or emailing my child without including me."
              checked={appData.sstConsent?.[index]?.communicationConsent == 'I consent to the SST texting or emailing my child without including me'}
            />
            <PDFRadio
              label="I consent to this communication, and I as the Parent/Guardian must always be included in any text or email message."
              checked={appData.sstConsent?.[index]?.communicationConsent == 'I consent to this communication, and I as the Parent/Guardian must always be included in any text or email message'}
            />
            <PDFRadio
              label="I do not consent to this type of communication."
              checked={appData.sstConsent?.[index]?.communicationConsent == 'I do not consent to this type of communication'}
            />
          </View>
        </View>
      </View>
      <View style={styles.section}>
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