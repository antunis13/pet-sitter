import Image from "next/image"

import { Grid, Typography } from "@mui/material"

import { styled } from "@mui/material/styles"

import BackgroundGrid from "@/components/BackgroundGrid"
import MiddleGrid from "@/components/MiddleGrid"

import Background from '../../public/images/Avatar_Jeni1.jpg'
import PetSitterService from '../../public/images/veterinary.png'

const GridImage = styled(Grid)`
  margin-left: 40px;
  display: flex;
  align-items: center;

  @media(max-width: 780px){
    margin-left: 20px;
  } 
`

const BoxGrid = styled(Grid)(({theme}) => ({
    padding: theme.spacing(5),
    margin: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
}))

const PetSitter = () =>{
    return(
        <>
            <Grid container>
                <BackgroundGrid
                    image={Background}
                />
            </Grid> 
            <MiddleGrid 
                container 
                rowSpacing={4} 
                display='flex' 
                justifyContent='space-between'
                backgroundColor='primary.main'
            >
                <Grid item xs={12} >
                    <Typography variant="h3">Pet Sitter</Typography>
                </Grid>
                <GridImage 
                    item xs={10} sm={9} md={6} lg={3} xl={3} 
                >
                <Image 
                    alt='Day Care Service'
                    src={PetSitterService}
                    width={400}
                    height={300}
                />
                </GridImage>
                <BoxGrid 
                    item 
                    xs={10} 
                    sm={9}
                    md={6}
                    lg={6}
                    xl={6}
                    borderRight='2px solid'
                    borderColor='primary.pink'
                >
                    <Typography variant="h6" >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                    <br/>
                    <Typography variant="h3" fontWeight='bold'>
                        Preços
                    </Typography>
                    <br/>
                    <Grid display='flex' justifyContent='center'>
                        <Typography variant="h6">
                            1x semana........
                        </Typography>
                        <Typography variant="h6" >
                            100 R$
                        </Typography>
                    </Grid>
                    <Grid display='flex' justifyContent='center'>
                        <Typography variant="h6">
                            2x semana........
                        </Typography>
                        <Typography variant="h6" >
                            180 R$
                        </Typography>
                    </Grid>
                
                </BoxGrid>
            </MiddleGrid>
        </>
    )
}

export default PetSitter