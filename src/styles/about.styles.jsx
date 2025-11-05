import Image from "next/image"

import { Typography, 
  Grid, 
  Box,
} from "@mui/material"

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


const AboutWrapper = {
    ImageEffect,
    WaveImg,
    GridAbout,
    BoxAbout,
    TypographyAbout,
    TitleTypography,
    TxtTypography,
    PinkTyp,
    StyledTyp,
    StyledBox,
}

export default AboutWrapper