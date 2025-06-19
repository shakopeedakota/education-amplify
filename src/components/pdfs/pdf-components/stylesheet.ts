import { StyleSheet, Font } from "@react-pdf/renderer";

const fontUrls = {
  normal: "https://use.typekit.net/af/bbdfca/0000000000000000775a92b9/31/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3",
  italic: "https://use.typekit.net/af/984d6f/0000000000000000775a92bb/31/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3",
  bold: "https://use.typekit.net/af/46250a/0000000000000000775a92b2/31/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3",
  thin: "https://use.typekit.net/af/93f3ba/0000000000000000775a92b8/31/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3",
};
Font.register(
  {
    family: "Gibson",
    fonts: [
      { src: fontUrls.normal },
      { src: fontUrls.italic, fontStyle: 'italic', fontWeight: 400 },
      { src: fontUrls.bold, fontStyle: 'normal', fontWeight: 700 },
      { src: fontUrls.thin, fontWeight: 300 },
    ],
  },
);

export const BaseStyles = StyleSheet.create({
  body: {
    padding: 35,
    fontFamily: 'Gibson',
  },
  formTitle: {
    fontSize: 16,
    textAlign: 'right',
    color: '#233463',
    fontWeight: 'bold',
    paddingBottom: "6px",
  },
  formSubtitle: {
    fontSize: 14,
    textAlign: 'right',
    color: '#233463',
    fontWeight: 'normal',
    paddingBottom: '6px',
    marginTop: '-12px',
  },
  section: {
    paddingVertical: 6,
    display: 'flex',
    flexDirection: 'column',
    // gap: 5,
  },
  sectionTitle: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
    padding: "4px",
    backgroundColor: "#ececec",
  },
  title: {
    fontSize: 18,
    textAlign: 'right',
  },
  row: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexShrink: 0,
    flexDirection: 'row',
    maxWidth: '100%',
    alignItems: 'flex-start',
    marginHorizontal: -5,
    marginVertical: 3,
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 5,
    // width: '100%',
    // flex: '1 0 0%',
  },
  col1: { flex: '0 1 auto', width: '8.333%' },
  col2: { flex: '0 1 auto', width: '16.666%' },
  col3: { flex: '0 1 auto', width: '25%' },
  col4: { flex: '0 1 auto', width: '33.333%' },
  col5: { flex: '0 1 auto', width: '41.666%' },
  col6: { flex: '0 1 auto', width: '50%' },
  col7: { flex: '0 1 auto', width: '58.333%' },
  col8: { flex: '0 1 auto', width: '66.666%' },
  col9: { flex: '0 1 auto', width: '75%' },
  col10: { flex: '0 1 auto', width: '83.333%' },
  col11: { flex: '0 1 auto', width: '91.333%' },
  col12: { flex: '0 1 auto', width: '100%' },
  p: { marginBottom: 8 },
  text: { fontSize: 12 },
  textBold: { fontWeight: 'bold' },
  bulletItem: { display: 'flex', flexDirection: 'row', marginBottom: 0, paddingLeft: 15 },
  bullet: { width: 10, marginRight: 5, fontSize: 12, lineHeight: 1.2 },
});