import Image from "next/image";

import { Grid, Typography } from "@mui/material";
import { ParallaxBanner } from "react-scroll-parallax";

import MiddleGrid from "@/components/MiddleGrid";
import DayCareService from "../../../public/images/dog-food.png";

import ServicesWrapper from "../../styles/services.styles";

const DayCare = () => {
  return (
    <>
      <ParallaxBanner
        layers={[
          {
            image: "/images/daycare.jpeg",
            speed: -40,
          },
        ]}
        style={{ height: "70vh", position: "relative", zIndex: 1 }}
      />

      <MiddleGrid
        container
        rowSpacing={4}
        display="flex"
        justifyContent="space-between"
        backgroundColor="primary.main"
        sx={{ marginTop: 0, paddingTop: 0 }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="primary.pink" fontWeight="bold">
            Day Care
          </Typography>
        </Grid>
        <ServicesWrapper.GridImage item xs={10} sm={9} md={6} lg={3} xl={3}>
          <Image
            alt="Day Care Service"
            src={DayCareService}
            width={400}
            height={300}
          />
        </ServicesWrapper.GridImage>
        <ServicesWrapper.BoxGrid
          item
          xs={12}
          sm={9}
          md={6}
          lg={6}
          xl={6}
          borderRight="2px solid"
          marginLeft={15}
          borderColor="primary.pink"
        >
          <Typography variant="h5" textAlign="left" color="secondary.main">
            ✓ Os cuidados do Day care acontecem na residência do nosso time,
            onde são realizados os cuidados de alimentação, reposição de água,
            higiene, recreação e passeio no dog place durante o dia.
            <br />
            ✓ Com atividades de enriquecimento ambiental, brincadeiras com
            estímulos cognitivos, momento SPA e com padrão de hospedagem
            exclusiva para o seu pet.
            <br />✓ O serviços Day care atende tutores que buscam companhia para
            o seu pet, com moniramento 24h/dia, mantendo sua rotina e hábitos,
            assim evitando estresse por separação.
          </Typography>
          <br />
          <Typography variant="h3" color="primary.pink" fontWeight="bold">
            Preços
          </Typography>
          <br />
          <Grid display="flex" justifyContent="center">
            <Typography variant="h6">1x semana........</Typography>
            <Typography variant="h6">100 R$</Typography>
          </Grid>
          <Grid display="flex" justifyContent="center">
            <Typography variant="h6">2x semana........</Typography>
            <Typography variant="h6">180 R$</Typography>
          </Grid>
        </ServicesWrapper.BoxGrid>
      </MiddleGrid>
    </>
  );
};

export default DayCare;
