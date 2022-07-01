import * as React from "react";
import "./style.css";

import DocViewer, { DocViewerRenderers, PDFRenderer } from "react-doc-viewer";

export default function App() {
  const docs = [
      {
        uri: "https://gmn765.csb.app/sample.pptx",
        fileType: "pptx"
      }
    ],
    docs2 = [
      {
        uri: "/sample.pdf",
        fileType: "pdf"
      }
    ],
    docs3 = [
      {
        uri: "https://gmn765.csb.app/sample.docx",
        fileType: "docx"
      }
    ];

  return (
    <>
      <DocViewer
        className="my-doc-viewer-style"
        pluginRenderers={[...DocViewerRenderers, PDFRenderer]}
        documents={docs}
      />
      <DocViewer
        className="my-doc-viewer-style"
        pluginRenderers={[...DocViewerRenderers, PDFRenderer]}
        documents={docs2}
      />
      <DocViewer
        className="my-doc-viewer-style"
        pluginRenderers={[...DocViewerRenderers, PDFRenderer]}
        documents={docs3}
      />
    </>
  );
}
