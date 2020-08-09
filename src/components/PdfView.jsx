import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./MyDocuments";

export default function PdfView(props) {
  return (
    <PDFViewer>
      <MyDocument experiences={props.experiences} />
    </PDFViewer>
  );
}
