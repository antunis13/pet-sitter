import Image from "next/image";
import Link from "next/link";
import { Grid, Typography, Avatar } from "@mui/material";

import MiddleGrid from "@/components/MiddleGrid";
import BackgroundGrid from "@/components/BackgroundGrid";

import Carousel from "react-material-ui-carousel";

import {
  Background,
  DayCare,
  DogWalk,
  PetSitter,
  Barto,
  Zara,
  Mel,
} from "../../public/images";

import HomeWrapper from "../styles/home.styles";

import { useTheme } from "@mui/material/styles";

const Home = () => {
  const theme = useTheme();
  const feedbacks = [
    {
      name: "Bartô",
      image: Barto,
      text: "Barth não gosta de sair de casa, aqui é o espaço dele, onde tem sua rotina mantida. Jeni fez toda a diferença quando precisei me ausentar e não quis stressa lo. Ela cuidou muito bem, superou minhas expectativas com mimos, me tranquilizou com fotos e vídeos e para minha maior surpresa ajustou seus horários aos dele. Estou saindo de viagem novamente e tranquila pois sei que meu pequeno está sob os melhores cuidados. Gratidão Jenifer",
    },
    {
      name: "Zara",
      image: Zara,
      text: "A Jeniffer é uma benção na minha vida! Cuida da Zarinha desde quando ela tinha 2 meses! Ela tem um amor e cuidado pelos animais que eu não consigo explicar! Confio de olhos fechados ❤️❤️❤️",
    },
    {
      name: "Mel",
      image: Mel,
      text: "Super responsável com horário, carinhosa e atenciosa.",
    },
  ];

  return (
    <>
      <BackgroundGrid image={Background} width={12} />

      <MiddleGrid>
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
          <HomeWrapper.TxtTypography color="secondary.main" variant="h4">
            Na Jeni, cada detalhe é <br /> cuidadosamente planejado para
          </HomeWrapper.TxtTypography>

          <Grid xs={12} sm={11} md={12} lg={12} xl={12}>
            <HomeWrapper.StyledBox>
              <HomeWrapper.VerticalTyp variant="h4">
                uma
              </HomeWrapper.VerticalTyp>
              <HomeWrapper.PinkTyp
                variant="h2"
                color="primary.pink"
                lineHeight={1}
              >
                proporcionar experiência única
              </HomeWrapper.PinkTyp>
              <HomeWrapper.TxtTypography2
                variant="h4"
                color="secondary.main"
                lineHeight={1}
              >
                para você e seu pet
              </HomeWrapper.TxtTypography2>
            </HomeWrapper.StyledBox>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={11} md={12} lg={12} xl={12}>
          <HomeWrapper.TitleTypography color="primary.pink" variant="h2">
            Conheça nossos serviços
          </HomeWrapper.TitleTypography>
        </Grid>

        <HomeWrapper.BoxContainerIcon>
          <HomeWrapper.GridIconContainer
            container
            spacing={4}
            display="flex"
            flexWrap="nowrap"
          >
            <HomeWrapper.IconGrid item xs={9} sm={8} md={6} lg={2} xl={4}>
              <Link href="/services/dogWalk">
                <Image
                  alt="Dog Walk icon"
                  src={DogWalk}
                  layout="responsive"
                  width={90}
                  height={90}
                />
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={theme.palette.secondary.main}
                >
                  Dog Walk
                </Typography>
              </Link>
            </HomeWrapper.IconGrid>
            <HomeWrapper.IconGrid item xs={9} sm={8} md={6} lg={2} xl={4}>
              <Link href="/services/petSitter">
                <Image
                  src={PetSitter}
                  alt="Pet sitter icon"
                  layout="responsive"
                  width={90}
                  height={90}
                />
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={theme.palette.secondary.main}
                >
                  Pet Sitter
                </Typography>
              </Link>
            </HomeWrapper.IconGrid>
            <HomeWrapper.IconGrid item xs={9} sm={8} md={6} lg={2} xl={4}>
              <Link href="/services/dayCare">
                <Image
                  src={DayCare}
                  alt="Day care icon"
                  layout="responsive"
                  width={90}
                  height={90}
                />
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={theme.palette.secondary.main}
                >
                  Day Care
                </Typography>
              </Link>
            </HomeWrapper.IconGrid>
          </HomeWrapper.GridIconContainer>
        </HomeWrapper.BoxContainerIcon>
      </MiddleGrid>

      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        rowSpacing={6}
        backgroundColor={theme.palette.primary.pink}
      >
        <Grid item xs={12}>
          <Typography variant="h2" sx={{ color: theme.palette.primary.main }}>
            Feedbacks
          </Typography>
        </Grid>
        <HomeWrapper.GridCarousel item xs={6} marginBottom={10}>
          <Carousel animation="slide" duration="800">
            {feedbacks.map((feedback, index) => (
              <HomeWrapper.PaperCarousel key={index}>
                <Avatar sx={{ width: 80, height: 80, margin: "auto" }}>
                  <Image
                    src={feedback.image}
                    alt={feedback.name}
                    width={80}
                    height={80}
                    layout="fixed"
                  />
                </Avatar>
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  {feedback.name}
                </Typography>
                <Typography variant="body1">{feedback.text}</Typography>
              </HomeWrapper.PaperCarousel>
            ))}
          </Carousel>
        </HomeWrapper.GridCarousel>
      </Grid>
    </>
  );
};

export default Home;
