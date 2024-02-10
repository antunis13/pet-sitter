import Image from "next/image"

import { Grid } from "@mui/material"

import { styled } from "@mui/material/styles"

const RightGrid = styled(Grid)({
    height:'80%',
    position: 'absolute',
    width: '100%',
    right: 0,
   
})
    
const MainGrid = styled(Grid)({
    height: '100%',
    display: 'flex',
    width: '100%',
    top: 40,
})
  
const Image1 = styled(Image)({
    height: '110%',
    width: '100%',
})
const BackgroundGrid = ({image}) =>{
    return(
        <MainGrid container xs={12}>
            <RightGrid item xs={12} >
                <Image1
                    alt='Foto'
                    src={image}    
                />
            </RightGrid>
       </MainGrid>
    )
}

export default BackgroundGrid