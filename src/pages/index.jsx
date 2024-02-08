
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

const TitleTypography = styled(Typography)(({theme}) =>({
  color: theme.palette.primary.pink,
  fontFamily: 'QuentimPro',
}))

const TxtTypography = styled(Typography)(({theme}) =>({
  color: theme.palette.secondary.main,
  padding: theme.spacing(4),
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
        <Grid item xs={12} sm={11} md={12} lg={12} xl={12}>
          <TitleTypography variant="h2">
            Quais serviços oferecemos?
          </TitleTypography>
        </Grid>
        <Grid 
          item
          xs={10}
          sm={9}
          md={9}
          lg={8}
          xl={8}
          justifyContent='center'
          alignItems='center'
        >
          <TxtTypography variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </TxtTypography>
        </Grid>

        <BoxContainerIcon>
          <GridIconContainer
            container 
            spacing={4} 
            display='flex' 
            flexWrap='nowrap'
          >
          <IconGrid item  xs={9} sm={8} md={6} lg={2} xl={4} > 
            <Link href='services#dogWalk'>
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
            <Link href='services#petSitter'>
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
            <Link href='/services#dayCare' >
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