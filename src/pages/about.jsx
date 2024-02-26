import Image from "next/image"
import { Typography, 
  Grid, 
  Container,
  Box,
} from "@mui/material"

import BackgroundGrid from "@/components/BackgroundGrid"
import MiddleGrid from "@/components/MiddleGrid"

import Background from '../public/images/Portfolio_Jeni06.jpg'
import Efeito1 from '../public/images/pawprint.png'
import Wave from '../public/images/wave.svg'

import { styled } from "@mui/material/styles"


const ImageEffect = styled(Image)(({theme}) =>({
  marginRight: theme.spacing(4),
}))

const GridAbout = styled(Grid)(({theme}) => ({
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  justifyContent: 'space-around',
  textAlign: 'center',
  paddingTop: theme.spacing(10),
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
  marginTop: theme.spacing(3),
  textAlign: 'left',
}))

const TitleTypography = styled(Typography)`
  @media (min-width: 1440px){
    margin-left: -60px
  }
  @media(max-width: 780px){
    font-size: 50px;
  }
`
const TxtTypography = styled(Typography)`
  margin-left: 210px;
  text-align: left;

  @media (max-width: 780px){
    margin-left: 0px;
  }
`

const StyledTyp = styled(Typography)`
  margin-left: 210px;
  width: 520px;
  text-align: left;

  @media (min-width: 1440px){
    margin-left: 270px;
  }
  @media (max-width: 780px){
    margin-left: -20px;
    width: 370px;
  }
`
const StyledBox = styled(Box)`
  margin-left: 210px;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  width: 340px;
  margin-bottom: -12;

  @media(max-width: 780px){
    margin-left: 0px;
  }
`
const PinkTyp = styled(Typography)(({theme}) =>({
  color: theme.palette.primary.pink,
  fontWeight: 'bold',
}))

const About = () => {
  return (
    <>
      <BackgroundGrid
        image={Background}
      />

      <MiddleGrid container>
        <Grid item xs={12}>
          <TitleTypography variant="h2" color='primary.pink'>
            Nosso objetivo
          </TitleTypography>
        </Grid>
        <Grid 
          item
          xs={10}
          sm={7}
          md={7}
          lg={8}
          xl={6}
          justifyContent='center'
          alignItems='center'
          marginTop={5}
        >
          <TxtTypography variant="h5" color='secondary.main'>
            A marca Jeni nasceu através <br/> de muito amor por animais, com a missão de          
          </TxtTypography>
          <StyledBox>
            <PinkTyp variant="h2" lineHeight={1} >
              proporcionar qualidade de vida
            </PinkTyp>
            <Typography variant="h4"
              width={190}
              color='secondary.main'
              lineHeight={1}
              position='relative'
              left={130}
              bottom={50}
            >
              e amor para os pets.
            </Typography>
          </StyledBox>
        </Grid>

        <Grid 
          item
          margin='0px 0 30px 0px'
          xs={10} 
          sm={6}
          md={7}
          lg={8}
          xl={7}
          
        >
          <StyledTyp 
            variant="h5" 
            color='secondary.main'
            textAlign='left'  
          >
            Nosso propósito é permitir que as famílias viajem tranquilas, sabendo que seus pets estão em ótimas mãos, com atendimento dedicado, empatia e responsabilidade.
          </StyledTyp> 
        </Grid>
      </MiddleGrid>

      <Grid 
        container 
        backgroundColor='primary.pink'
      >
        <Container maxWidth='md'>
          <Grid container rowSpacing={4} marginBottom={10} padding={2}>
            <Grid item xs={12} sm={10} md={12} lg={12} xl={12}        margin='20px 0 30px 0'>
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
                Nossa equipe é composta exclusivamente por profissionais da medicina veterinária.
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
                Antes mesmo da visita, realizamos uma avaliação minuciosa do ambiente. Nossa preocupação é garantir a segurança do seu pet.
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
                Nosso cuidado vai além das tarefas diárias. Nosso time entende que cada pet é único, e construímos vínculos de confiança.               
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
                Mantemos você informado a cada passo, nossa comunicação transparente traz tranquilidade mesmo à distância.
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
                Cada pet tem suas particularidades, e nós as conhecemos, personalizamos nossos cuidados para atender às necessidades específicas do seu animal.             
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <GridAbout container>
        <Grid item xs={12}>
          <Typography variant="h3" color='primary.pink'>
            Conheça o time Jeni
          </Typography>
        </Grid>

        <BoxAbout item xs={10} sm={9} md={6} lg={3} xl={3}>
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
            Formada em auxiliar veterinária.<br/>
            Mais de 8 anos de experiência em cuidados de pets.<br/>
            Experiência em clínica médica de pequenos animais.<br/> 
            Estudante de Medicina Veterinária.<br/>
            Amante de animais.<br/>
          </TypographyAbout>
        </BoxAbout>

        <BoxAbout item  xs={10} sm={9} md={6} lg={3} xl={3}>
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

        <BoxAbout item xs={10} sm={9} md={6} lg={3} xl={3}>
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