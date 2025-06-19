import { StyleSheet, View, Text } from "@react-pdf/renderer";

const pdfInputStyles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 12,
    // height: 30,
    alignItems: 'flex-end',
    gap: 5,
  },
  label: {
    flex: '0 1 auto',
    flexShrink: 1,
  },
  inputWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 0%',
    justifyContent: 'flex-end',
  },
  input: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    borderBottom: '1px solid black',
    padding: 4,
    backgroundColor: '#F1F5F7',
    flex: '0 1 auto',
    fontFamily: 'Courier',
    height: 22,
  },
});

export const PDFInput = ({ label, value, helper, align = 'left' }: {
  label?: string;
  value?: string;
  helper?: string;
  align?: any;
}) => {
  return (
    <View style={pdfInputStyles.view}>
      {label && !helper && (<Text style={pdfInputStyles.label}>{label}</Text>)}
      {label && helper && (<Text style={{ ...pdfInputStyles.label, marginBottom: 12 }}>{label}</Text>)}
      <View style={pdfInputStyles.inputWrapper}>
        <Text style={{ ...pdfInputStyles.input, textAlign: align }}>{value}</Text>
        {helper && (
          <Text style={{ fontSize: 10, width: '100%', fontStyle: 'italic' }}>{helper}</Text>
        )}
      </View>
    </View>
  );
}