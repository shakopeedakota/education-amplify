import { Page, Text, View } from '@react-pdf/renderer';
import { BaseStyles as styles } from './pdf-components/stylesheet';
import { PDFInput } from './pdf-components/PDFInput';
import { PDFCheckbox } from './pdf-components/PDFCheckbox';
import { FormHeader } from './pdf-components/FormHeader';
import { FormFooter } from './pdf-components/FormFooter';
import { PDFTextarea } from './pdf-components/PDFTextarea';

const today = new Date();

// Create Document Component
export const ReleaseOfInformationPDF = ({ index, appData, childData }: { index: number; appData: any; childData: any; }) => (
  <Page size="A4" style={styles.body}>
    <FormHeader title="Authorization for Release of Information" />
    <View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Section I.</Text>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col8 }}>
            <PDFInput label={`Child's Name:`} value={`${childData.firstName ?? ''} ${childData.lastName ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label={`Date:`} value={`${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label={`Date of Birth:`} value={`${childData.birthdate ?? ''}`} />
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput label={`Grade:`} value={`${childData.grade ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput label={`School:`} value={`${childData.currentSchool ?? ''}`} />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Section II.</Text>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFInput label={`Parent/Guardian Name:`} value={`${appData.primaryContact?.firstName ?? ''} ${appData.primaryContact?.lastName ?? ''}`} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col2, justifyContent: 'center', height: '100%' }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', flex: '0 1 auto', flexShrink: 1 }}>Authorizes:</Text>
          </View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput value={`${appData.roi?.[index]?.schoolDistrict ?? ''}`} />
            <Text style={{ fontSize: 10, width: '100%' }}>School District</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col2 }}></View>
          <View style={{ ...styles.col, ...styles.col4 }}>
            <PDFInput value={`${appData.roi?.[index].schoolName ?? ''}`} />
            <Text style={{ fontSize: 10, width: '100%' }}>School Name</Text>
          </View>
          <View style={{ ...styles.col, ...styles.col6 }}>
            <PDFInput value={`${appData.roi?.[index]?.schoolCityState ?? ''}`} />
            <Text style={{ fontSize: 10, width: '100%' }}>City and State</Text>
          </View>
        </View>
        <View style={{ ...styles.row, marginTop: 15 }}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFCheckbox
              label={'to release the specific information identified below to: Name of organization:'}
              checked={true}
            />
          </View>
        </View>
        <View style={{ ...styles.row, marginVertical: 10 }}>
          <View style={{ ...styles.col, ...styles.col12, paddingLeft: 20 }}>
            <Text style={{ ...styles.text, ...styles.textBold }}>Shakopee Mdewakanton Sioux Community Education Department</Text>
            <Text style={{ ...styles.text }}>2075 Wozani Ocanku NW, Prior Lake, MN 55372</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <PDFCheckbox
              label={'to obtain specific information identified below from: Name of organization:'}
              checked={true}
            />
          </View>
        </View>
        <View style={{ ...styles.row, marginVertical: 10 }}>
          <View style={{ ...styles.col, ...styles.col12, paddingLeft: 20 }}>
            <Text style={{ ...styles.text, ...styles.textBold }}>Shakopee Mdewakanton Sioux Community Education Department</Text>
            <Text style={{ ...styles.text }}>2075 Wozani Ocanku NW, Prior Lake, MN 55372</Text>
          </View>
        </View>
        <View style={{ ...styles.row }}>
          <View style={{ ...styles.col, ...styles.col6 }}>
            <Text style={{ ...styles.text, ...styles.textBold, marginBottom: 4 }}>Required:</Text>
            <PDFCheckbox label="Attendance Records" checked={true} />
            <PDFCheckbox label="Academic Performance Records" checked={true} />
          </View>
          <View style={{ ...styles.col, ...styles.col6 }}>
            <Text style={{ ...styles.text, ...styles.textBold, marginBottom: 4 }}>Optional:</Text>
            <PDFCheckbox
              label="Disciplinary Actions (suspension, expulsion, etc)"
              checked={appData.roi?.[index]?.optionalInformation.disciplinaryActions == 1}
            />
            <PDFCheckbox
              label="Special Education Records/504 (if applicable)"
              checked={appData.roi?.[index]?.optionalInformation.specialEducationRecords == 1}
            />
            <PDFCheckbox
              label="Teacher, Counselor, Staff Observations/RTI Records"
              checked={appData.roi?.[index]?.optionalInformation.teacherCounselorStaffObservations == 1}
            />
            <PDFCheckbox
              label="Other (specify)"
              checked={appData.roi?.[index]?.optionalInformation.other != ''}
            />
            <PDFTextarea
              value={appData.roi?.[index]?.optionalInformation.other ?? ''}
            />
          </View>
        </View>
      </View>
      <View style={styles.section} break>
        <Text style={styles.sectionTitle}>Section III.</Text>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <Text style={{ ...styles.text, ...styles.textBold }}>
              I understand this authorization:
            </Text>
            <View>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.text}>takes effect the day I sign it and will not exceed one year from my signature</Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.text}>can be stopped any time by sending a written request to:</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ ...styles.row, marginVertical: 10 }}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <Text style={{ ...styles.text, ...styles.textBold }}>Shakopee Mdewakanton Sioux Community Education Department</Text>
            <Text style={styles.text}>2075 Wozani Ocanku NW, Prior Lake, MN 55372</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <Text style={{ ...styles.text, ...styles.textBold }}>
              I further understand:
            </Text>
            <View>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.text}>As a requirement to receiving Education resources, Sections 7.03 and 7.04 of the Education Guidelines indicate that a release of information concerning an individual Preschool through 12th grade or post-secondary student must be signed and remain on file with the Education Department each year.</Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.text}>The laws that protect the information identified on this release, in some situations, may allow or require this entity to re-disclose this information, but only as permitted by law Health Insurance Portability and Accountability Act [HIPAA], Family Educational Rights & Privacy Act [FERPA], Minnesota Government Data Practices Act [MGDPA or Chapter 13]</Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.text}>copy of this release form is as valid as an original, and</Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.text}>I will receive a copy of this authorization.</Text>
              </View>
            </View>
          </View>
        </View>
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