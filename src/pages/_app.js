import { ThemeProvider } from '@emotion/react'
import theme from '@/theme'

import TemplateDefault from '../templates/Default'
import './index.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return(
    <ThemeProvider theme={theme}>
      <TemplateDefault>
        <Component {...pageProps} />
      </TemplateDefault>
    </ThemeProvider>
  ) 
}
