
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ScrollButton from "@/components/ScrollButton"

const Default = ({children}) =>{
    return(
        <>
            <Header/>
                {children}
                <ScrollButton />
            <Footer />
        </>
    )
}

export default Default