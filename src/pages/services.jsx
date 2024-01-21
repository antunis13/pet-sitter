import Image from "next/image"

import { Grid, Typography } from "@mui/material"

import { styled } from "@mui/material/styles"

import BackgroundGrid from "@/components/BackgroundGrid"

import Background from '../public/images/Avatar_Jeni1.jpg'
import DogWalkService from '../public/images/DogWalkService.png'

const MiddleGrid = styled(Grid)(({theme}) => ({
  marginTop: 700,
  paddingTop: 20,
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  textAlign: 'center',
  //border: '2px solid black'
  backgroundColor: theme.palette.primary.main
}))

const BoxGrid = styled(Grid)(({theme}) => ({
  padding: 10,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  borderColor: theme.palette.primary.pink,
  borderStyle: 'solid',
  borderRadius: '20px',
  backgroundColor: theme.palette.primary.pink,
  margin:10,
}))

const GridImage = styled(Grid)(({theme}) => ({
  padding: 10,
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  borderColor: theme.palette.secondary.main,
  borderStyle: 'solid',
  borderRadius: '10px',
  backgroundColor: theme.palette.secondary.main,
  height: 380,
  margin:10,
}))


const Services = () => {
  return (
    <>
      <BackgroundGrid
        image={Background}
      />
      <MiddleGrid container rowSpacing={4}>
        <Grid item xs={12}>
          <Typography variant="h1">Dog Walking</Typography>
        </Grid>
        <GridImage item xs={3}>
          <Image 
            alt='Dog Walk Service'
            src={DogWalkService}
            width={300}
            height={300}
            style={{borderRadius: '15px'}}
          />
        </GridImage>
        <BoxGrid item xs={4}>
          <Typography variant="h6" color='primary.main'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <br/>
          <Typography variant="h3" fontWeight='bold' color='primary.main'>
            Preços
          </Typography>
          <br/>
          <Grid display='flex' justifyContent='center'>
            <Typography variant="h6" color='primary.main'>
              Camihada 40 minutos........
            </Typography>
            <Typography variant="h6" color='primary.main'>
              100 R$
            </Typography>
          </Grid>
          <Grid display='flex' justifyContent='center'>
            <Typography variant="h6" color='primary.main'>
              Camihada 30 minutos........
            </Typography>
            <Typography variant="h6" color='primary.main'>
              80 R$
            </Typography>
          </Grid>
        </BoxGrid>
      </MiddleGrid>
    </>
  )
}

export default Services