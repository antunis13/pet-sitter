

import Header from "@/components/Header/Header"
import Footer from "@/components/Footer"

const Default = ({children}) =>{
    return(
        <>
            <Header/>
                {children}
            <Footer />
        </>
    )
}

export default Default