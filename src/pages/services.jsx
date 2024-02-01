import Image from "next/image"

import { Grid, Typography } from "@mui/material"

import { styled } from "@mui/material/styles"

import BackgroundGrid from "@/components/BackgroundGrid"
import MiddleGrid from "@/components/MiddleGrid"

import Background from '../public/images/Avatar_Jeni1.jpg'
import waveEffect from '../public/images/waveBackground.svg'
import DogWalkService from '../public/images/dog.png'
import PetSitterService from '../public/images/veterinary.png'
import DayCareService from '../public/images/dog-food.png'
import Location from '../public/images/location.png'



const BoxGrid = styled(Grid)(({theme}) => ({
  padding: theme.spacing(5),
  margin: theme.spacing(10),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
}))

const StyledGrid = styled(Grid)(({theme}) => ({
  display: 'flex',
  textAlign:'center',
  padding: theme.spacing(3),
}))

const WaveImg = styled(Image)(({theme}) => ({
  position: 'absolute',
  bottom: 0,
  width: '100%',
}))

const StyledTypography = styled(Typography)(({theme}) => ({
  marginTop: theme.spacing(5),
}))

const GridLocation = styled(Grid)(({theme}) => ({
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center'
}))

const GridImage = styled(Grid)`
  margin-left: 40px;
  display: flex;
  align-items: center;

  @media(max-width: 780px){
    margin-left: 20px;
  } 
`
const InvertedGrid = styled(Grid)`
  display: flex;
  text-align:center;
  padding: 12px;

  .item1 {
    order: 1;
  }

  .item2{
    order: 2;
  }

  @media(max-width: 780px){
    .item1{
      order: 2;
    }

    .item2{
      order: 1;
    }
  } 
`

const Services = () => {
  return (
    <>
      <Grid container>
        <BackgroundGrid
          image={Background}
        />
      </Grid> 
      <MiddleGrid container rowSpacing={4} id="dogWalk">
        <Grid item xs={12}>
          <Typography variant="h3">Dog Walk</Typography>
        </Grid>
        <GridImage 
          item xs={10} sm={9} md={6} lg={3} xl={3} 
        >
          <Image 
            alt='Dog Walk Service'
            src={DogWalkService}
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
              Camihada 40 minutos........
            </Typography>
            <Typography variant="h6" >
              100 R$
            </Typography>
          </Grid>
          <Grid display='flex' justifyContent='center'>
            <Typography variant="h6">
              Camihada 30 minutos........
            </Typography>
            <Typography variant="h6" >
              80 R$
            </Typography>
          </Grid>
        </BoxGrid>
      </MiddleGrid>
      <InvertedGrid container rowSpacing={4} id="petSitter">
        <Grid item xs={12} >
          <StyledTypography variant="h3">Pet Sitter</StyledTypography>
        </Grid>
        <BoxGrid 
          item 
          xs={10} 
          sm={9}
          md={6}
          lg={6}
          xl={6}
          borderLeft='2px solid'
          borderColor='primary.pink'
          className="item1"
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
        <GridImage 
          item xs={10} sm={9} md={3} lg={3} xl={3} className="item2"
        >
          <Image 
            alt='Pet Sitter Service'
            src={PetSitterService}
            width={400}
            height={300}
          />
        </GridImage>
      </InvertedGrid>
      <StyledGrid 
        container 
        rowSpacing={4} 
        display='flex' 
        justifyContent='space-between'
        backgroundColor='primary.main'
        id="dayCare"
      >
        <Grid item xs={12} >
          <StyledTypography variant="h3">Day Care</StyledTypography>
        </Grid>
        <GridImage 
          item xs={10} sm={9} md={6} lg={3} xl={3} 
        >
          <Image 
            alt='Day Care Service'
            src={DayCareService}
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
      </StyledGrid>
      <StyledGrid 
        container
        backgroundColor='primary.pink'
        color='primary.main'
      >
        <GridLocation item xs={11}>
          <Typography variant="h5" marginRight={2}>
            Nós atendemos em Jundiaí e nas regiões próximas
          </Typography>
          <Image 
            alt="Icone de Localização"
            src={Location}
            height={30}
            width={30}
          />
        </GridLocation>
      </StyledGrid>
    </>
  )
}

export default Services