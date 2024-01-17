import Image from "next/image"
import { 
  Grid, 
  Typography,
  Container,
  Paper,
  Avatar,
} from "@mui/material"

import Carousel from 'react-material-ui-carousel'

import Card from '../components/Card'

import Background from '../public/images/Portfolio_Jeni07.jpg'
import DogWalk from '../public/images/DogWalk.png'
import DayCare from '../public/images/DayCare.png'
import PetSitter from '../public/images/PetSitter.png'
import Barto from '../public/images/Barto.png'
import Dolinha from '../public/images/Dolinha.png'

import {useTheme} from "@mui/material/styles"
import {styled} from "@mui/material/styles"


const RightGrid = styled(Grid)({
  height:'80%',
  position: 'absolute',
  width: '100%',
  right: 0,
 
})

const LeftGrid = styled(Grid)({
  height:'70%',
  position: 'absolute',
  width: '50%',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
})

const MainGrid = styled(Grid)({
  height: '100%',
  display: 'flex',
  width: '100%',
  top: 30,
  marginTop: 75,
  position: 'absolute',
 
})

const Image1 = styled(Image)({
  height: '100%',
  width: '100%',
})


const MiddleGrid = styled(Grid)(({theme}) => ({
  marginTop: 700,
  paddingTop: 20,
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  //border: '2px solid black'
  backgroundColor: theme.palette.primary.main
}))

const CardGrid = styled(Container)({
  marginTop: 50,
  marginBottom: 50,
})

const TitleTypography = styled(Typography)(({theme}) =>({
  color: theme.palette.primary.pink,
}))

const TxtTypography = styled(Typography)(({theme}) =>({
  color: theme.palette.secondary.main,
}))

const GridCarousel = styled(Grid)({
  textAlign: 'center',
})

const PaperCarousel = styled(Paper)(({theme})=>({
  padding: 10,
  textAlign: 'center',
  backgroundColor: theme.palette.primary.main
}))

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
    // Adicione mais feedbacks conforme necessário
  ]
  
  return (
    <>
      <MainGrid container xs={12}>
        <RightGrid item xs={12} >
          <Image1 
            alt='Foto'
            src={Background}       
          />
        </RightGrid>
      </MainGrid>
      
      <MiddleGrid container rowSpacing={6}>
        <Grid item>
          <TitleTypography variant="h2">
            Quais serviços oferecemos?
          </TitleTypography>
        </Grid>
        <Grid 
          item
          xs={6}
          justifyContent='center'
          alignItems='center'
        >
          <TxtTypography variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </TxtTypography>
        </Grid>

        <CardGrid maxWidth='lg'>
            <TitleTypography component='h2' variant='h4' align='center'>
              Destaques
            </TitleTypography>
            <br />
            <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}> 
              <Card
                image={DogWalk}  
                title="Dog Walking"
                
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}> 
              <Card
                image={PetSitter}  
                title="Pet sitter"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}> 
              <Card
                image={DayCare}  
                title="Day care"
              />
            </Grid>
            </Grid>
        </CardGrid>
      </MiddleGrid>
      
      <Grid
        container
        display='flex'
        justifyContent='center'
        alignItems='center'
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