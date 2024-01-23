import { ThemeProvider } from '@emotion/react'
import { ToastyProvider } from '../contexts/Toasty'
import theme from '@/theme'

import TemplateDefault from '../templates/Default'
import './index.css'

export default function App({ Component, pageProps }) {
  return(
    <ThemeProvider theme={theme}>
      <ToastyProvider>
        <TemplateDefault>
          <Component {...pageProps} />
        </TemplateDefault>
      </ToastyProvider>
    </ThemeProvider>
  ) 
}
