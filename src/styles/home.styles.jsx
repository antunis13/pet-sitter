import { Grid, Typography, Paper, Box } from "@mui/material";

import { styled } from "@mui/material/styles";

const BoxContainerIcon = styled(Box)({
  marginTop: 50,
  marginBottom: 50,
  display: "flex",
  justifyContent: "center",
});

const IconGrid = styled(Grid)(({ theme }) => ({
  margin: "10px 30px 10px 30px",
  padding: 10,
}));

const TitleTypography = styled(Typography)`
  @media (max-width: 780px) {
    font-size: 50px;
    font-weight: bold;
    margin-top: 20px;
  }
`;
const TxtTypography = styled(Typography)`
  margin-left: 200px;
  text-align: left;
  @media (max-width: 780px) {
    margin-left: 0px;
  }
  @media (max-width: 375px) {
    font-size: 30px;
  }
`;
const TxtTypography2 = styled(Typography)`
  position: relative;
  width: 180px;
  left: 195px;
  bottom: 50px;
  @media (min-width: 375px) and (max-width: 425px) {
    left: 170px;
  }
  @media (max-width: 374px) {
    width: 160px;
    font-size: 25px;
    left: 150px;
    bottom: 30px;
  }
`;
const StyledBox = styled(Box)`
  margin-left: 200px;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  width: 340px;

  @media (max-width: 780px) {
    margin-left: 0px;
  }
`;

const PinkTyp = styled(Typography)`
  font-weight: bold;
  margin-left: 35px;
  @media (min-width: 375px) and (max-width: 425px) {
    font-size: 50px;
  }
  @media (max-width: 374px) {
    font-size: 40px;
  }
`;

const VerticalTyp = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  transform: "rotate(-90deg)",
  position: "relative",
  left: -10,
  top: 120,
  marginTop: -60,
}));

const GridCarousel = styled(Grid)({
  textAlign: "center",
});

const PaperCarousel = styled(Paper)(({ theme }) => ({
  padding: 10,
  textAlign: "center",
  backgroundColor: theme.palette.primary.main,
}));

const GridIconContainer = styled(Grid)`
  display: "flex";
  justify-content: center;
  flex-wrap: "nowrap";
  @media (max-width: 780px) {
    flex-wrap: wrap;
  }
`;

const HomeImgDiv = styled(Box)`
  position: absolute;
  left: 25%;
  top: 10%;
  border-radius: 20px;
  border: none;
  width: 50%;
  height: 45%;
  overflow: hidden;
`;

const HomeWrapper = {
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
  PinkTyp,
  HomeImgDiv,
};

export default HomeWrapper;
