import localFont from 'next/font/local'
import { ThemeProvider } from '@emotion/react'
import { ToastyProvider } from '../contexts/Toasty'
import theme from '@/theme'

import TemplateDefault from '../templates/Default'
import '../styles/index.css'

const PrincipalFont = localFont({src: '../fonts/Garet-Book.ttf'})

export default function App({ Component, pageProps }) {
  return(
    <ThemeProvider theme={theme}>
      <ToastyProvider>
        <TemplateDefault>
          <main className={PrincipalFont.className}
          >
            <Component {...pageProps} />
          </main>
        </TemplateDefault>
      </ToastyProvider>
    </ThemeProvider>
  ) 
}
