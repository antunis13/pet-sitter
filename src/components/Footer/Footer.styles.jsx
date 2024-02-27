
import Image from 'next/image'

import { 
    Box, 
    Container, 
    Grid, 
    Typography, 
    Paper 
} from "@mui/material"

import {styled} from '@mui/material/styles'

const StyledPaper = styled(Paper)(({theme}) =>({
    backgroundColor: theme.palette.secondary.main,
    bottom: -2,
    left: 0,
    borderRadius: 0,
    padding: theme.spacing(4),
    width: '100%',
}))

const GridLinks = styled(Grid)({
    display:'flex',
    justifyContent:'flex-end',
    alignContent:'center',
    alignItems:'center',
    position: 'relative',
    left: 0,
    flexWrap: 'nowrap'
})

const ContainerFot = styled(Container)`
    display: flex;
    justify-content: 'center';
    align-self: 'center';
    
`

const ImageLogo = styled(Image)`
    width: 150px;
    height: 150px;

    @media(max-width: 780px){
        width: 300px;
        height: 300px;
        margin-top: 30px;
        margin-left: 35px;
    }

    @media(max-width: 360px){
        width: 230px;
        height: 230px;
        margin-top: 40px;
        margin-left: 25px;
    }
    
`

const TypographyStyle = styled(Typography)`
    &:hover{
        color:  ${(props) => props.theme.palette.primary.pink};
    }

`

const ContactBox = styled(Box)(({theme}) => ({
    display: 'flex',
    padding: theme.spacing(4),
}))

const ContactTyp = styled(Typography)(({theme}) =>({
    marginLeft: theme.spacing(3),
    color: theme.palette.primary.main,
}))

export{
    StyledPaper,
    GridLinks,
    ContainerFot,
    ImageLogo,
    TypographyStyle,
    ContactBox,
    ContactTyp
}