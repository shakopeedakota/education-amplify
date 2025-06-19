import { Circle, StyleSheet, Svg, Text, View } from "@react-pdf/renderer";

const pdfRadioStyles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 5,
  },
  label: {
    fontSize: 12,
    flex: '1 0 0%',
  },
  radio: {
    marginTop: 2,
    width: 10,
    height: 10,
    border: '1px solid black',
    borderRadius: 20,
    backgroundColor: '#f1f5f7',
    flex: '0 1 auto',
    fontSize: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export const PDFRadio = ({ label, checked = false }: {
  label: string;
  checked?: boolean;
}) => {
  return (
    <View style={pdfRadioStyles.view}>
      <View>
        <View style={pdfRadioStyles.radio}>
          {checked && (
            <Svg width="6" height="6" viewBox="0 0 24 24" fill="black">
              <Circle r="12" fill="black" cx="12" cy="12" />
            </Svg>
          )}
        </View>
      </View>
      {label && (<Text style={pdfRadioStyles.label}>{label}</Text>)}
    </View>
  );
}