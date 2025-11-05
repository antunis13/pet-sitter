
import { 
    Typography, 
    Grid,
    Box,
} from "@mui/material"

import { styled } from "@mui/material/styles"

const FormBox = styled(Box)({
    textAlign: 'start'
})

const ContactBox = styled(Box)(({theme}) => ({
    display: 'flex',
    padding: theme.spacing(4),
}))

const ContactTyp = styled(Typography)(({theme}) =>({
    marginLeft: theme.spacing(3),
}))

const FormDiv = styled('div')(({theme}) => ({
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
}))

const GridForm = styled(Grid)({
    padding: '10px',
    margin: '10px'
})

const ContactWrapper = {
    FormBox,
    ContactBox,
    ContactTyp,
    FormDiv,
    GridForm,
}

export default ContactWrapper