import React from 'react'
import Document, {Main, NextScript, Head } from 'next/document'

export default class MyDocument extends Document {

  render() {
    return (
      <html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Roboto:wght@100;300;700;900&display=swap" rel="stylesheet" />
        </body>
      </html>
    )
  }
}



