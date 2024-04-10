
import { 
    Box, 
    Container, 
    Grid, 
    Typography, 
    Paper,
    ListItemText,
    ListItem
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

const VerticalGrid = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
})

const StyledListItem = styled(ListItem)({
    textAlign: 'center',
})

const StyledListItemTxt = styled(ListItemText)`
    color: ${(props) => props.theme.palette.primary.main};
    transition: ease 500ms;
    &:hover{
        color: ${(props) => props.theme.palette.primary.pink};
    }

`

const ContainerFot = styled(Container)`
    display: flex;
    justify-content: 'center';
    align-self: 'center';
    margin-top: 20px;
    
`


const TypographyStyle = styled(Typography)`
    color: ${(props) => props.theme.palette.primary.main};
    transition: ease 500ms;

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
    TypographyStyle,
    ContactBox,
    ContactTyp,
    VerticalGrid,
    StyledListItem,
    StyledListItemTxt,
}