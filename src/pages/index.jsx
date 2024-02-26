
import Image from "next/image"
import Link from "next/link"
import { 
  Grid, 
  Typography,
  Paper,
  Avatar,
  Box,
} from "@mui/material"

import BackgroundGrid from "@/components/BackgroundGrid"
import MiddleGrid from "@/components/MiddleGrid"

import Carousel from 'react-material-ui-carousel'

import Background from '../public/images/Portfolio_Jeni07.jpg'
import DayCare from '../public/images/dog-food.png'
import DogWalk from '../public/images/dog.png'
import PetSitter from '../public/images/veterinary.png'
import Barto from '../public/images/Barto.png'
import Dolinha from '../public/images/Dolinha.png'
import Mel from '../public/images/Mel.png'

import { useTheme } from "@mui/material/styles"
import { styled } from "@mui/material/styles"


const BoxContainerIcon = styled(Box)({
  marginTop: 50,
  marginBottom: 50,
  display:'flex',
  justifyContent: 'center'
})

const IconGrid = styled(Grid)(({theme}) => ({
  margin: '10px 30px 10px 30px',
  padding: 10,
}))

const TitleTypography = styled(Typography)`
  @media(max-width: 780px){
    font-size: 50px;
    font-weight: bold;
    margin-top: 20px;
  }
`
const TxtTypography = styled(Typography)`
  margin-left: 200px;
  text-align: left;
  @media (max-width: 780px){
    margin-left: 0px;
  }
  @media(max-width: 375px){
    font-size: 30px;
  }
`
const TxtTypography2 = styled(Typography)`
  position: relative;
  width: 180px;
  left: 195px;
  bottom: 50px;
  @media(min-width: 375px) and (max-width: 425px){
    left: 170px;
  }
  @media(max-width: 374px){
    width: 160px;
    font-size: 25px;
    left: 150px;
    bottom: 30px;
  }
`
const StyledBox = styled(Box)`
  margin-left: 200px;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  width: 340px;

  @media(max-width: 780px){
    margin-left: 0px;
  }
`

const PinkTyp = styled(Typography)`
  font-weight: bold;
  margin-left: 35px;
  @media(min-width: 375px) and (max-width: 425px){
    font-size: 50px;
  }
  @media(max-width: 374px){
    font-size: 40px;
  }
`

const VerticalTyp = styled(Typography)(({theme}) =>({
  color: theme.palette.secondary.main,
  transform: 'rotate(-90deg)',
  position: 'relative',
  left:-10,
  top:120,
  marginTop: -60,
}))

const GridCarousel = styled(Grid)({
  textAlign: 'center',
})

const PaperCarousel = styled(Paper)(({theme})=>({
  padding: 10,
  textAlign: 'center',
  backgroundColor: theme.palette.primary.main
}))

const GridIconContainer = styled(Grid)`
  display: 'flex';
  justify-content: center;
  flex-wrap: 'nowrap';
  @media(max-width: 780px){
   flex-wrap: wrap;
  }
`

const Home = () => {
  const theme = useTheme()
  const feedbacks = [
    {
      name: 'Bartô',
      image: Barto,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Dorinha',
      image: Dolinha,
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Mel',
      image: Mel,
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    
  ]
  
  return (
    <>
      <BackgroundGrid
        image={Background}
      />
      <MiddleGrid>
        <Grid 
          item
          xs={12}
          sm={7}
          md={7}
          lg={8}
          xl={6}
          justifyContent='center'
          alignItems='center'
          marginTop={5}
        >
          <TxtTypography color='secondary.main' variant="h4">
            Na Jeni, cada detalhe é <br/> cuidadosamente planejado para 
          </TxtTypography>
          <StyledBox >
            <VerticalTyp variant="h4">
              uma
            </VerticalTyp> 
            <PinkTyp variant="h2" color='primary.pink' lineHeight={1} >
              proporcionar experiência única
            </PinkTyp>
            <TxtTypography2 variant="h4"
              color='secondary.main'
              lineHeight={1}
            >
              para você e seu pet
            </TxtTypography2>
          </StyledBox>
        </Grid>
        <Grid item xs={12} sm={11} md={12} lg={12} xl={12}>
          <TitleTypography color='primary.pink' variant="h2">
            Conheça nossos serviços
          </TitleTypography>
        </Grid>

        <BoxContainerIcon>
          <GridIconContainer
            container 
            spacing={4} 
            display='flex' 
            flexWrap='nowrap'
          >
          <IconGrid item  xs={9} sm={8} md={6} lg={2} xl={4} > 
            <Link href='/services/dogWalk'>
              <Image 
                alt='Dog Walk icon'
                src={DogWalk}
                layout="responsive"
                width={90}
                height={90}
              />
              <Typography variant="h5" fontWeight='bold' color={theme.palette.secondary.main}>
                Dog Walk
              </Typography>
            </Link>
          </IconGrid>
          <IconGrid item xs={9} sm={8} md={6} lg={2} xl={4}> 
            <Link href='/services/petSitter'>
              <Image
                src={PetSitter}  
                alt="Pet sitter icon"
                layout="responsive"
                width={90}
                height={90}
              />
              <Typography variant="h5" fontWeight='bold' color={theme.palette.secondary.main}>
                Pet Sitter
              </Typography>
            </Link>
          </IconGrid>
          <IconGrid item xs={9} sm={8} md={6} lg={2} xl={4}> 
            <Link href='/services/dayCare' >
              <Image
                src={DayCare}  
                alt="Day care icon"
                layout="responsive"
                width={90}
                height={90}
              />
              <Typography variant="h5" fontWeight='bold' color={theme.palette.secondary.main}>
                Day Care
              </Typography>
            </Link>
          </IconGrid>
          </GridIconContainer>
        </BoxContainerIcon>
      </MiddleGrid>
      
      <Grid
        container
        display='flex'
        justifyContent='center'
        alignItems = 'center'
        textAlign='center'
        rowSpacing={6}
        backgroundColor={theme.palette.primary.pink}
      >
        <Grid item xs={12}>
          <Typography variant="h2" sx={{ color: theme.palette.primary.main }}>
            Feedbacks
          </Typography>
        </Grid>
        <GridCarousel item xs={6} marginBottom={10}>
          <Carousel
            animation='slide'
            duration='700'
          >
            {feedbacks.map((feedback, index) => (
              <PaperCarousel key={index}>
                <Avatar   
                  
                  sx={{  width: 80, height: 80, margin: 'auto' }} 
                >
                  <Image
                    src={feedback.image}
                    alt={feedback.name}
                    width={80}
                    height={80}
                    layout="fixed"
                  />
                </Avatar>  
                <Typography 
                  variant="h6" 
                  sx={{ marginTop: 2 }}
                >         
                  {feedback.name}
                </Typography>
                <Typography 
                  variant="body1"
                >
                  {feedback.text}
                </Typography>
              </PaperCarousel>
            ))}
          </Carousel>
        </GridCarousel>
      </Grid>
    </>
  )
}

export default Home