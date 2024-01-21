import Link from 'next/link'
import Image from 'next/image'

import { 
    Box, 
    Container, 
    Grid, 
    Typography, 
    Paper 
} from "@mui/material"

import logoJeni from '../public/images/Logotipo_Jeni-06.png'

import { useTheme } from '@mui/material/styles'
import {styled} from '@mui/material/styles'

const StyledPaper = styled(Paper)(({theme}) =>({
    backgroundColor: theme.palette.secondary.main,
    bottom: -2,
    left: 0,
    padding: theme.spacing(4),
    width: '100%',
}))

const TypographyStyle = styled(Typography)`
    &:hover{
        color:  ${(props) => props.theme.palette.primary.pink};
    }
`


const Footer = () =>{
    const theme = useTheme()
    return(
        <StyledPaper component='footer'>
            <Container maxWidth='lg' xs={10} >
                <Grid container xs={12}>
                    <Grid container xs={2}>
                        <Image
                            alt='Logo'
                            src={logoJeni}
                            width={150}
                            height={150}
                        />
                    </Grid>
                    <Grid 
                        container 
                        columnSpacing={1}
                        xs={10}
                        display='flex'
                        justifyContent='center'
                        alignContent='center'
                    >
                        <Grid item xs={6} sm={2}>
                            <Box textAlign='center'>
                            <Link href='/' passHref>
                                    <TypographyStyle variant='subtitle1' color='primary.main'>
                                        Home
                                    </TypographyStyle>
                            </Link>  
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={2}>
                            <Box textAlign='center'>
                            <Link href='/about' passHref>
                                    <TypographyStyle variant='subtitle1' color='primary.main'>
                                        Sobre nós
                                    </TypographyStyle>
                            </Link>  
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={2}>
                            <Box textAlign='center'>
                            <Link href='/services' passHref>
                                    <TypographyStyle variant='subtitle1' color='primary.main'>  
                                        Serviços
                                    </TypographyStyle>
                            </Link>  
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={2}>
                            <Box textAlign='center'>
                            <Link href='/contact' passHref>
                                    <TypographyStyle variant='subtitle1' color='primary.main'>       
                                        Contato
                                    </TypographyStyle>
                            </Link>  
                            </Box>
                        </Grid>
                        <Grid 
                            container 
                            xs={2} 
                            columnSpacing={3}
                            display='flex'
                            justifyContent='flex-end'
                            alignContent='end'
                        >
                            <Grid item>  
                                <a href="https://wa.me/5511992673254" target="_blank" rel="noopener noreferrer">
                                    <i class="fa-brands fa-whatsapp fa-2x" style={{color: theme.palette.primary.main }}
                                    ></i>
                                </a>
                            </Grid>
                            <Grid item >  
                                <a href="https://www.instagram.com/jenipetsitter/">
                                    <i class="fa-brands fa-instagram fa-2x" style={{color: theme.palette.primary.main }}></i>
                                </a>
                            </Grid>

                        </Grid>
                        
                    </Grid>
                </Grid>
            </Container>
        </StyledPaper>
    )
}

export default Footer