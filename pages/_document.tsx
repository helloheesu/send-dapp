import { Html, Head, Main, NextScript } from "next/document";

export const modalPortalId = "modal-portal";
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <div id={modalPortalId} />
        <NextScript />
      </body>
    </Html>
  );
}
