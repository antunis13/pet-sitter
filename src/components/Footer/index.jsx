import Link from 'next/link'
import Image from 'next/image'

import { 
    Box, 
    Grid,
    List,
    Divider,
} from "@mui/material"

import logoJeni from '../../public/images/Logotipo_Jeni-18.png'

import { useTheme } from '@mui/material/styles'

import {
    StyledPaper,
    GridLinks,
    ContainerFot,
    TypographyStyle,
    ContactBox,
    ContactTyp,
    VerticalGrid,
    StyledListItemTxt,
    StyledListItem
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
                        <Link href='/' passHref>
                            <Image
                                alt='Logo'
                                src={logoJeni}
                                className={style.imageLogo}
                            />
                        </Link>
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
                       <VerticalGrid item xs={6} sm={2} md={2} lg={2} xl={3}>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                                <Box textAlign='center'>
                                <Link href='/' passHref>
                                        <TypographyStyle variant='subtitle1'>
                                            Home
                                        </TypographyStyle>
                                </Link>  
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                                <Box textAlign='center'>
                                <Link href='/about' passHref>
                                    <TypographyStyle variant='subtitle1'>
                                        Sobre nós
                                    </TypographyStyle>
                                </Link>  
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Box textAlign='center'>
                                <Link href='/contact' passHref>
                                    <TypographyStyle variant='subtitle1'>       
                                        Contato
                                    </TypographyStyle>
                                </Link>  
                                </Box>
                            </Grid>
                        </VerticalGrid> 
                          
                        <Grid item xs={6} sm={2} md={2} lg={2} xl={3} >
                            <Box textAlign='center'>
                                <TypographyStyle variant='subtitle1'>  
                                    Serviços
                                </TypographyStyle>
                                <Divider color='white' />
                                <List>
                                    <Link href='/services/dayCare' passHref>
                                        <StyledListItem>
                                                <StyledListItemTxt
                                                primary="Day Care"
                                                /> 
                                        </StyledListItem>
                                    </Link>
                                    <Link href='/services/dogWalk' passHref>
                                        <StyledListItem>
                                                <StyledListItemTxt
                                                    primary="Dog Walk"
                                                />
                                        </StyledListItem>
                                    </Link>
                                    <Link href='/services/petSitter' passHref>
                                        <StyledListItem>
                                                <StyledListItemTxt
                                                    primary="Pet Sitter"
                                                />
                                        </StyledListItem>
                                    </Link>
                                </List>
                                
                            
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
                                    jeni@jenipetsitter.com
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