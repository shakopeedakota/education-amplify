import { Text, View } from "@react-pdf/renderer";
import { BaseStyles as styles } from "@/components/pdfs/pdf-components/stylesheet";

export const FormFooter = () => {
  return (
    <View
      fixed
      style={{
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
      }}
    >
      <View style={styles.row}>
        <View style={{ ...styles.col, ...styles.col12 }}>
          <Text
            render={({ subPageNumber, subPageTotalPages }) => (
            `Page ${subPageNumber} of ${subPageTotalPages}`
            )}
            style={{
              fontSize: 10,
            }}
          />
        </View>
      </View>
    </View>
  );
}