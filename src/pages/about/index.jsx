import { Typography, Grid, Container } from "@mui/material";

import BackgroundGrid from "@/components/BackgroundGrid";
import MiddleGrid from "@/components/MiddleGrid";

import { BackgroundAbout, PawPrint } from "../../../public/images";

import AboutWrapper from "../../styles/about.styles";

const About = () => {
  return (
    <>
      <BackgroundGrid image={BackgroundAbout} width={12} />

      <MiddleGrid container>
        <Grid item xs={12}>
          <AboutWrapper.TitleTypography
            variant="h2"
            color="primary.pink"
            fontWeight="bold"
          >
            Nosso objetivo
          </AboutWrapper.TitleTypography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          md={7}
          lg={8}
          xl={6}
          justifyContent="center"
          alignItems="center"
          marginTop={5}
        >
          <AboutWrapper.TxtTypography variant="h5" color="secondary.main">
            A marca Jeni nasceu através <br /> de muito amor por animais, com a
            missão de
          </AboutWrapper.TxtTypography>
          <Grid xs={10} sm={11} md={12} lg={12} xl={12}>
            <AboutWrapper.StyledBox>
              <AboutWrapper.PinkTyp variant="h2" lineHeight={1}>
                proporcionar qualidade de vida
              </AboutWrapper.PinkTyp>
              <Typography
                variant="h4"
                width={190}
                color="secondary.main"
                lineHeight={1}
                position="relative"
                left={200}
                bottom={50}
              >
                e amor para os pets.
              </Typography>
            </AboutWrapper.StyledBox>
          </Grid>
        </Grid>

        <Grid item margin="0px 0 30px 0px" xs={10} sm={6} md={7} lg={8} xl={7}>
          <AboutWrapper.StyledTyp
            variant="h5"
            color="secondary.main"
            textAlign="center"
          >
            Nosso propósito é permitir que as famílias viajem tranquilas,
            sabendo que seus pets estão em ótimas mãos, com atendimento
            dedicado, empatia e responsabilidade.
          </AboutWrapper.StyledTyp>
        </Grid>
      </MiddleGrid>

      <Grid container backgroundColor="primary.pink">
        <Container maxWidth="md">
          <Grid container rowSpacing={4} marginBottom={10} padding={2}>
            <Grid
              item
              xs={12}
              sm={10}
              md={12}
              lg={12}
              xl={12}
              margin="20px 0 30px 0"
            >
              <Typography variant="h3" color="primary.main">
                Por que escolher a Jeni?
              </Typography>
            </Grid>
            <Grid item display="flex">
              <AboutWrapper.ImageEffect
                alt="Logotipo"
                src={PawPrint}
                width={35}
                height={35}
              />
              <Typography variant="h6" color="primary.main">
                Nossa equipe é composta exclusivamente por profissionais da
                medicina veterinária.
              </Typography>
            </Grid>

            <Grid item display="flex">
              <AboutWrapper.ImageEffect
                alt="Logotipo"
                src={PawPrint}
                width={35}
                height={35}
              />
              <Typography variant="h6" color="primary.main">
                Antes mesmo da visita, realizamos uma avaliação minuciosa do
                ambiente. Nossa preocupação é garantir a segurança do seu pet.
              </Typography>
            </Grid>

            <Grid item display="flex">
              <AboutWrapper.ImageEffect
                alt="Logotipo"
                src={PawPrint}
                width={35}
                height={35}
              />
              <Typography variant="h6" color="primary.main">
                Nosso cuidado vai além das tarefas diárias. Nosso time entende
                que cada pet é único, e construímos vínculos de confiança.
              </Typography>
            </Grid>

            <Grid item display="flex">
              <AboutWrapper.ImageEffect
                alt="Logotipo"
                src={PawPrint}
                width={35}
                height={35}
              />
              <Typography variant="h6" color="primary.main">
                Mantemos você informado a cada passo, nossa comunicação
                transparente traz tranquilidade mesmo à distância.
              </Typography>
            </Grid>
            <Grid item display="flex">
              <AboutWrapper.ImageEffect
                alt="Logotipo"
                src={PawPrint}
                width={35}
                height={35}
              />
              <Typography variant="h6" color="primary.main">
                Cada pet tem suas particularidades, e nós as conhecemos,
                personalizamos nossos cuidados para atender às necessidades
                específicas do seu animal.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default About;
