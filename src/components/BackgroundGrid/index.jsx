import Image from "next/image";

import { Grid } from "@mui/material";

import { styled } from "@mui/material/styles";

const MainGrid = styled(Grid)({
  width: "100%",
  top: 40,
});

const Image1 = styled(Image)`
  height: 60%;
  width: 100%;
`;
const BackgroundGrid = ({ image, width }) => {
  return (
    <MainGrid container xs={width}>
      <Image1 alt="Foto" src={image} />
    </MainGrid>
  );
};

export default BackgroundGrid;
