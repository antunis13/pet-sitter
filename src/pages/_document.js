import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Jeni Pet Sitter</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <script src="https://kit.fontawesome.com/de62180d47.js" crossorigin="anonymous"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
