import Link from 'next/link'

import{
    AppBar,
    Typography,
    Grid,
} from '@mui/material' 

import { styled } from '@mui/material/styles'

const HeaderGrid = styled(Grid)(({theme}) =>({
    alignItems: 'center',
    marginLeft: theme.spacing(30),
}))

const HeaderAppBar = styled(AppBar)({
    display: 'flex',
    justifyContent: 'center',
    padding: 10,
})

const TypographyStyle = styled(Typography)`
    &:hover{
        color:  ${(props) => props.theme.palette.secondary.main};
    }
`
const GridPages = styled(Grid)({
    display: 'flex',
    justifyContent: 'center'
})

const LinkMenu = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.primary.pink,
})) 


export {
    HeaderGrid,
    HeaderAppBar,
    TypographyStyle,
    GridPages,
    LinkMenu,
}