import { Text } from "@react-pdf/renderer";
import { BaseStyles as styles } from "./stylesheet";

export const PDFLabel = ({ children }: { children: any}) => {
  return (
    <Text style={{ ...styles.text, marginBottom: 6 }}>{children}</Text>
  );
}