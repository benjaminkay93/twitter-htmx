import Html, { PropsWithChildren } from "@kitajs/html";
import { Document } from "../client/_document";

export const renderPage = ({ children }: PropsWithChildren) => (
  <Document title="hello">
    {children}
  </Document>
)