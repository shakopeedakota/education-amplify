import { Image, View, Text } from "@react-pdf/renderer";
import { BaseStyles as styles } from "@/components/pdfs/pdf-components/stylesheet";
import { SectionDivider } from "./section-divider";

export const FormHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <View fixed>
      <View style={{ ...styles.row, alignItems: 'flex-end' }}>
        <View style={{ ...styles.col, ...styles.col4 }}>
          <Image src="public/smsc-education-dept-logo.png" />
        </View>
        <View style={{ ...styles.col, ...styles.col8, ...styles.formTitle }}>
          <Text style={styles.formTitle}>{title}</Text>
          {subtitle && subtitle != '' && <Text style={styles.formSubtitle}>{subtitle}</Text>}
        </View>
      </View>
      <SectionDivider />
    </View>
  );
}