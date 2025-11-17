import Image from "next/image";

import { Grid, Typography } from "@mui/material";
import { ParallaxBanner } from "react-scroll-parallax";

import MiddleGrid from "@/components/MiddleGrid";

import PetSitterService from "../../../public/images/veterinary.png";

import ServicesWrapper from "../../styles/services.styles";

const PetSitter = () => {
  return (
    <>
      <ParallaxBanner
        layers={[
          {
            image: "/images/petSitting.jpg",
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
      >
        <Grid item xs={10}>
          <Typography variant="h3" color="primary.pink" fontWeight="bold">
            Pet Sitter
          </Typography>
        </Grid>
        <ServicesWrapper.GridImage item xs={10} sm={9} md={6} lg={3} xl={3}>
          <Image
            alt="Day Care Service"
            src={PetSitterService}
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
          borderColor="primary.pink"
        >
          <Typography variant="h6" textAlign="left">
            ✓ A visita de Pet Sitter é realizada na residência do tutor, onde
            são realizados os cuidados de alimentação, reposição de água,
            higiene, recreação e passeio, sendo uma ou duas visitas ao dia.
            <br />
            ✓ São oferecidas atividades de recreação, para gasto energético e
            muita diversão para os pets.
            <br />✓ O serviço Pet Sitter atende tutores que preferem manter o
            pet no conforto da sua residência, mantendo sua rotina e hábitos,
            assim evitando estresse e ansiedade por mudança de local.
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

export default PetSitter;
