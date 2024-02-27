import Link from 'next/link'

import { 
    Box, 
    Grid, 
} from "@mui/material"

import logoJeni from '../../public/images/Logotipo_Jeni-18.png'

import { useTheme } from '@mui/material/styles'

import {
    StyledPaper,
    GridLinks,
    ContainerFot,
    ImageLogo,
    TypographyStyle,
    ContactBox,
    ContactTyp
} from './Footer.styles'

import style from '../Components.module.css'

const Footer = () =>{
    const theme = useTheme()
    return(
        <StyledPaper component='footer' className={style.footer}>
            <ContainerFot maxWidth='lg'>
                <Grid 
                    container
                    xs={3}
                    display='block'
                >
                    <Grid item xs={2} sm={2} md={2} lg={2} xl={3} >                   
                        <ImageLogo
                            alt='Logo'
                            src={logoJeni}
                        />
                    </Grid>
              
                </Grid>
                    <Grid
                        container
                        xs={8}
                        display='flex'
                        justifyContent='space-around'
                        alignContent='center'
                        className={style.pagesLinks}
                    >
                          
                        <Grid item xs={6} sm={2} md={2} lg={2} xl={3} >
                            <Box textAlign='center'>
                            <Link href='/' passHref>
                                    <TypographyStyle variant='subtitle1' color='primary.main'>
                                        Home
                                    </TypographyStyle>
                            </Link>  
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={2} md={2} lg={2} xl={3} >
                            <Box textAlign='center'>
                            <Link href='/about' passHref>
                                <TypographyStyle variant='subtitle1' color='primary.main'>
                                    Sobre nós
                                </TypographyStyle>
                            </Link>  
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={2} md={2} lg={2} xl={3} >
                            <Box textAlign='center'>
                            <Link href='/services' passHref>
                                <TypographyStyle variant='subtitle1' color='primary.main'>  
                                    Serviços
                                </TypographyStyle>
                            </Link>  
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={2} md={2} lg={2} xl={3}>
                            <Box textAlign='center'>
                            <Link href='/contact' passHref>
                                <TypographyStyle variant='subtitle1' color='primary.main'>       
                                    Contato
                                </TypographyStyle>
                            </Link>  
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} className={style.contactBox}>
                            <ContactBox>
                                <i class="fa-solid fa-location-dot fa-2x" style={{color: theme.palette.primary.main}}></i>
                                <ContactTyp variant='h5'>
                                    Jundiaí
                                </ContactTyp>
                            </ContactBox>
                            <ContactBox>
                                <a href="https://www.instagram.com/jenipetsitter/">
                                <i class="fa-brands fa-instagram fa-2x" style={{color: theme.palette.primary.main }}></i>
                                </a>
                                <ContactTyp variant='h5'>
                                    jenipetsitter
                                </ContactTyp>
                            </ContactBox>
                            <ContactBox>
                                <a href="https://wa.me/5511992673254" target="_blank" rel="noopener noreferrer">
                            <i class="fa-brands fa-whatsapp fa-2x" style={{color: theme.palette.primary.main }}
                            ></i>
                                </a>
                                <ContactTyp variant='h5'>
                                    (11) 99267-3254
                                </ContactTyp>
                            </ContactBox>
                            <ContactBox>
                                <i class="fa-regular fa-envelope fa-2x" style={{color: theme.palette.primary.main}}></i>
                                <ContactTyp variant='h6'>
                                    emaildeContato@gmail.com
                                </ContactTyp>
                            </ContactBox>
                    </Grid>
                    <GridLinks 
                        container 
                        xs={2}
                        columnSpacing={3}   
                        className={style.gridLinks}
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
                    </GridLinks>
            </ContainerFot>
        </StyledPaper>
    )
}

export default Footer