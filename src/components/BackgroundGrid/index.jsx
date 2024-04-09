import Image from "next/image"

import { Grid } from "@mui/material"

import { styled } from "@mui/material/styles"


const MainGrid = styled(Grid)({
    width: '100%',
    top: 40,
})
  
const Image1 = styled(Image)`
    height: 60%;
    width: 100%;
    
`
const BackgroundGrid = ({image}) =>{
    return(
        <MainGrid container xs={12}>
            
            <Image1
                alt='Foto'
                src={image}    
            />   
       </MainGrid>
    )
}

export default BackgroundGrid