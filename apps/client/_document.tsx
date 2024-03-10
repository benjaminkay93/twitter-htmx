import Html, { e, PropsWithChildren } from "@kitajs/html";

export const Document = ({ children, title }: PropsWithChildren<{title: string}>) => {
  return (
    <>
      {'<!doctype html>'}
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{e`${title}`}</title>
        </head>
        <body>{children}</body>
      </html>
    </>
  )
}
