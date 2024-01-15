import { Container } from "@mui/material"

import Header from "@/components/Header/Header"
import Footer from "@/components/Footer"

const Default = ({children}) =>{
    return(
        <>
            <Header/>
            <Container maxWidth='lg'>
                {children}
            </Container>
            <Footer />
        </>
    )
}

export default Default