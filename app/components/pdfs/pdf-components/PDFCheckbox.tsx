import { Text, View, StyleSheet, Svg, Path } from "@react-pdf/renderer";
import { BaseStyles as styles } from "@/components/pdfs/pdf-components/stylesheet";
import { PDFInput } from "./PDFInput";

const pdfCheckboxStyles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 5,
  },
  label: {
    fontSize: 12,
    flex: '0 0 auto',
  },
  checkbox: {
    marginTop: 2,
    width: 10,
    height: 10,
    border: '1px solid black',
    backgroundColor: '#F1F5F7',
    flex: '0 1 auto',
    fontSize: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const PDFCheckbox = ({ label, checked = false, input = false, value }: {
  label: any;
  checked?: boolean;
  input?: boolean;
  value?: string;
}) => {
  return (
    <View style={pdfCheckboxStyles.view}>
      <View style={{}}>
        <View style={pdfCheckboxStyles.checkbox}>
          {checked && (
            <Svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <Path d="M20 6 9 17l-5-5"></Path>
            </Svg>
          )}
        </View>
      </View>
      {label && !input && (<Text style={pdfCheckboxStyles.label}>{label}</Text>)}
      {label && input && (
        <View style={styles.row}>
          <View style={{ ...styles.col, ...styles.col12 }}>
            <Text style={pdfCheckboxStyles.label}>{label}</Text>
            <PDFInput value={value && value != '' ? value : ''} />
          </View>
        </View>
      )}
    </View>
  );
}