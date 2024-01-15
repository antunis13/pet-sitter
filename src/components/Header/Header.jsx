import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import{
    AppBar,
    Toolbar,
    Typography,
} from '@mui/material' 
import { Container, Grid } from '@mui/material'

import logo from '../../public/images/logo.png'

import {styled} from '@mui/material/styles'

const HeaderGrid = styled(Grid)(({theme}) =>({
    alignItems: 'center',
    marginLeft: theme.spacing(45)
}))

const Header = () => {
    
    return(
        
        <AppBar position="static" elevation={0}  sx={{height: '80px'}}>
            <Container maxWidth='lg'>
                <Toolbar>
                    <HeaderGrid container spacing={6}>
                        <Grid item >
                            <Link href="/">
                                <Typography variant="h6" component="div" color='primary.light' sx={{ flexGrow: 1 }}>
                                    Home
                                </Typography>
                            </Link>
                        </Grid>
                
                        <Grid item >
                            <Link href="/about">
                                <Typography variant="h6" component="div" color='primary.light' sx={{ flexGrow: 1 }}>
                                    Sobre nós
                                </Typography>
                            </Link>
                        </Grid>
                
                        <Grid item >
                            <Image
                                alt='Logo'
                                src={logo}
                                width={30}
                                height={30}
                            />  
                        </Grid>
                    
                        <Grid item >
                            <Link href="/services">
                                <Typography variant="h6" component="div" color='primary.light' sx={{ flexGrow: 1 }}>
                                    Serviços
                                </Typography>
                            </Link>
                        </Grid>
                    
                        <Grid item >  
                            <Link href="/contact">
                                <Typography variant="h6" component="div" color='primary.light' sx={{ flexGrow: 1 }}>
                                    Contato
                                </Typography>
                            </Link>
                        </Grid>
                    </HeaderGrid> 
                    <Grid container spacing={1}>
                        <Grid item >  
                            <a href="https://wa.me/5511992673254" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-square-whatsapp fa-xl" style={{color: 'rgb(23, 64, 113)'}}></i>
                            </a>
                        </Grid>
                        <Grid item >  
                            <a href="https://www.instagram.com/jenipetsitter/">
                                <i class="fa-brands fa-square-instagram fa-xl" style={{color: 'rgb(23, 64, 113)'}}></i>
                            </a>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>  

    )
}

export default Header