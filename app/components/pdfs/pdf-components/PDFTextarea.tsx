import { View, Text, StyleSheet } from "@react-pdf/renderer";

const lineHeight = 30;

export const PDFTextarea = ({ label, value, lines = 3 }: {
  label?: string;
  value?: string;
  lines?: number;
}) => {
  const pdfTextareaStyles = StyleSheet.create({
    view: {
      display: 'flex',
      flexDirection: 'row',
      fontSize: 12,
      alignItems: 'flex-end',
      gap: 5,
      height: lineHeight * lines,
    },
    label: {
      fontWeight: 'bold',
      flex: '0 1 auto',
      flexShrink: 1,
    },
    inputWrapper: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      flex: '1 0 0%',
      justifyContent: 'flex-end',
    },
    input: {
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'justify',
      width: '100%',
      borderBottom: '1px solid black',
      padding: 4,
      backgroundColor: '#F1F5F7',
      flex: '0 1 auto',
      fontFamily: 'Courier',
      height: lineHeight * lines,
    },
  });
  
  return (
    <View style={pdfTextareaStyles.view}>
      {label && (<Text style={pdfTextareaStyles.label}>{label}</Text>)}
      <View style={pdfTextareaStyles.inputWrapper}>
        <Text style={pdfTextareaStyles.input}>{value}</Text>
      </View>
    </View>
  );
}