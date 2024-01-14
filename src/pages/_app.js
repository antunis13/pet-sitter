import TemplateDefault from '../templates/Default'
import './index.css'

export default function App({ Component, pageProps }) {
  return(
    <TemplateDefault>
      <Component {...pageProps} />
    
    </TemplateDefault>
    ) 
}
