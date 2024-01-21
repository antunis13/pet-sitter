import Image from "next/image"
import { Typography, 
  Grid, 
  Container
} from "@mui/material"

import BackgroundGrid from "@/components/BackgroundGrid"

import Background from '../public/images/Portfolio_Jeni06.jpg'
import Efeito1 from '../public/images/pawprint.png'
import Wave from '../public/images/wave.svg'

import { styled } from "@mui/material/styles"

const MiddleGrid = styled(Grid)(({theme}) => ({
  marginTop: 720,
  paddingTop: 20,
  marginBottom: 15,
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  backgroundColor: theme.palette.primary.main
}))

const ImageEffect = styled(Image)(({theme}) =>({
  marginRight: theme.spacing(4),
}))

const GridAbout = styled(Grid)(({theme}) => ({
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  justifyContent: 'space-around',
  textAlign: 'center',
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(10),
}))

const BoxAbout = styled(Grid)(({theme}) => ({
  position: 'relative',
  padding: theme.spacing(4),
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(4),
  textAlign: 'center',
  backgroundColor: theme.palette.secondary.main,
  border: 'none',
  borderRadius: '35px',
  overflow:'hidden',
}))

const WaveImg = styled(Image)({
  position: 'absolute',
  bottom: 0,
  left: 0,
})

const TypographyAbout = styled('p')(({theme}) => ({
  position:'relative',
  color: theme.palette.primary.main, 
  marginTop: theme.spacing(3)
}))

const About = () => {
  return (
    <>
      <BackgroundGrid
        image={Background}
      />

      <MiddleGrid container>
        <Grid item xs={12}>
          <Typography variant="h2">
            Nosso objetivo
          </Typography>
        </Grid>

        <Grid xs={5} margin='20px 0 30px 0'>
          <Typography variant="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vitae maiores ea voluptate ipsam excepturi fugiat, repellendus sequi laboriosam accusamus perferendis nisi nobis animi beatae officiis numquam libero minima iusto!
          </Typography>
        </Grid>
      </MiddleGrid>

      <Grid 
        container 
        backgroundColor='primary.pink'
      >
        <Container maxWidth='md'>
          <Grid container rowSpacing={4} marginBottom={10}>
            <Grid item margin='20px 0 30px 0'>
              <Typography variant="h3" color='primary.main'>
                Por que escolher a Jeni?
              </Typography>
            </Grid>
            <Grid item display='flex' >
              <ImageEffect 
                alt='Logotipo'
                src={Efeito1}
                width={35}
                height={35}
              />
              <Typography variant="h6" color='primary.main'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo esse magni laboriosam enim tenetur.
              </Typography>
            </Grid>

            <Grid item display='flex' >
              <ImageEffect 
                alt='Logotipo'
                src={Efeito1}
                width={35}
                height={35}
              />
              <Typography variant="h6" color='primary.main'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo esse magni laboriosam enim tenetur.
              </Typography>
            </Grid>

            <Grid item display='flex' >
              <ImageEffect 
                alt='Logotipo'
                src={Efeito1}
                width={35}
                height={35}
              />
              <Typography variant="h6" color='primary.main'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo esse magni laboriosam enim tenetur.
              </Typography>
            </Grid>
            
            <Grid item display='flex' >
              <ImageEffect 
                alt='Logotipo'
                src={Efeito1}
                width={35}
                height={35}
              />
              <Typography variant="h6" color='primary.main'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo esse magni laboriosam enim tenetur.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <GridAbout container>
        <Grid item xs={12}>
          <Typography variant="h3">
            Conheça o time Jeni!
          </Typography>
        </Grid>

        <BoxAbout item xs={3}>
          <WaveImg 
            alt="efeito"
            src={Wave}
            height={121}
          />
          <Typography variant="h4" color='primary.main'>
            Jeni
          </Typography>
          <Image 
            alt="Foto da Jeni"
  
          />
          <Typography variant="h5" color='primary.main'>
            CEO 
          </Typography>
          <TypographyAbout variant="h6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, at, ipsam illum delectus sequi qui unde quas odio animi consequuntur doloremque? Nobis doloribus natus quidem, consequatur sed debitis accusantium ratione.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem veritatis minima recusandae perspiciatis amet facilis rerum provident praesentium harum! Porro quas quae ipsum delectus iure hic in, mollitia quasi exercitationem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto doloribus nemo quas esse illo facere quia exercitationem, velit sint pariatur voluptatibus dolorem laboriosam inventore autem. Itaque praesentium sed a quia?
          </TypographyAbout>
        </BoxAbout>

        <BoxAbout item xs={3}>
          <WaveImg 
            alt="efeito"
            src={Wave}
            height={121}
          />
          <Typography variant="h4" color='primary.main'>
            Debora
          </Typography>
          <Image 
            alt="Foto da Debora"
  
          />
          <Typography variant="h5" color='primary.main'>
            Pet Sitter & Dog Walker 
          </Typography>
          <TypographyAbout variant="h6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, at, ipsam illum delectus sequi qui unde quas odio animi consequuntur doloremque? Nobis doloribus natus quidem, consequatur sed debitis accusantium ratione.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem veritatis minima recusandae perspiciatis amet facilis rerum provident praesentium harum! Porro quas quae ipsum delectus iure hic in, mollitia quasi exercitationem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto doloribus nemo quas esse illo facere quia exercitationem, velit sint pariatur voluptatibus dolorem laboriosam inventore autem. Itaque praesentium sed a quia?
          </TypographyAbout>
        </BoxAbout>

        <BoxAbout item xs={3}>
          <WaveImg 
            alt="efeito"
            src={Wave}
            height={121}
          />
          <Typography variant="h4" color='primary.main'>
            Tati
          </Typography>
          <Image 
            alt="Foto da Tati"
  
          />
          <Typography variant="h5" color='primary.main'>
            Pet Sitter & Dog Walker 
          </Typography>
          <TypographyAbout variant="h6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, at, ipsam illum delectus sequi qui unde quas odio animi consequuntur doloremque? Nobis doloribus natus quidem, consequatur sed debitis accusantium ratione.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem veritatis minima recusandae perspiciatis amet facilis rerum provident praesentium harum! Porro quas quae ipsum delectus iure hic in, mollitia quasi exercitationem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto doloribus nemo quas esse illo facere quia exercitationem, velit sint pariatur voluptatibus dolorem laboriosam inventore autem. Itaque praesentium sed a quia?
          </TypographyAbout>
        </BoxAbout>
      </GridAbout>
    </>
  )
}

export default About
  