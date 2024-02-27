
import Image from "next/image"
import Link from "next/link"
import { 
  Grid, 
  Typography,
  Avatar,
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

import {
  BoxContainerIcon,
  IconGrid,
  GridIconContainer,
  GridCarousel,
  PaperCarousel,
  TitleTypography,
  TxtTypography,
  TxtTypography2,
  StyledBox,
  VerticalTyp,
  PinkTyp
} from '../styles/home.styles'

import { useTheme } from "@mui/material/styles"

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