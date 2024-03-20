import Html, { PropsWithChildren } from "@kitajs/html";
import { Document } from "../client/_document";
import { renderToString } from "@kitajs/html/suspense";

export const renderPage = ({ children }: PropsWithChildren): Promise<string> => renderToString(() =>
  <Document title="hello">
    {children}
  </Document>
)