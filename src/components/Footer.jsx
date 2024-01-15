import Link from 'next/link'

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
    position: 'fixed',
    bottom: -2,
    left: 0,
    padding: theme.spacing(4),
    width: '100%'
}))

const Footer = () =>{
    return(
        <StyledPaper component='footer'>
            <Container maxWidth='lg'>
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={2}>
                        <Box textAlign='center'>
                        <Link href='#' passHref>
                                <Typography variant='subtitle1' color='primary.light'>
                                    Logo
                                </Typography>
                        </Link>  
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                        <Box textAlign='center'>
                        <Link href='/' passHref>
                                <Typography variant='subtitle1' color='primary.light'>
                                    Home
                                </Typography>
                        </Link>  
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                        <Box textAlign='center'>
                        <Link href='/about' passHref>
                                <Typography variant='subtitle1' color='primary.light'>
                                    Sobre nós
                                </Typography>
                        </Link>  
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                        <Box textAlign='center'>
                        <Link href='/services' passHref>
                                <Typography variant='subtitle1' color='primary.light'>  
                                    Serviços
                                </Typography>
                        </Link>  
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                        <Box textAlign='center'>
                        <Link href='/contact' passHref>
                                <Typography variant='subtitle1' color='primary.light'>       
                                    Contato
                                </Typography>
                        </Link>  
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </StyledPaper>
    )
}

export default Footer