import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import{
    AppBar,
    Toolbar,
    Typography,
} from '@mui/material' 
import { Container, Grid } from '@mui/material'

import logo from '../../public/images/Logotipo_Jeni-08.png'

import {styled} from '@mui/material/styles'


const HeaderGrid = styled(Grid)(({theme}) =>({
    alignItems: 'center',
    marginLeft: theme.spacing(25),

}))

const HeaderAppBar = styled(AppBar)({
    display: 'flex',
    justifyContent: 'center',

})

const TypographyStyle = styled(Typography)`
    &:hover{
        color:  ${(props) => props.theme.palette.secondary.main};
    }
`

const Header = () => {
    return(
        <HeaderAppBar position="static" elevation={0}  sx={{height: '100px'}}>
            <Container maxWidth='md'>
                <Toolbar>
                    <HeaderGrid 
                        container 
                        xs={9}
                        display='flex'
                        justifyContent='space-around'
                    >
                        <Grid item xs={2}>
                            <Link href="/">
                                <TypographyStyle variant="h6" component="div" color='primary.pink' sx={{ flexGrow: 1 }}>
                                    Home
                                </TypographyStyle>
                            </Link>
                        </Grid>
                
                        <Grid item  xs={2}>
                            <Link href="/about">
                                <TypographyStyle variant="h6" component="div" color='primary.pink' sx={{ flexGrow: 1 }}>
                                    Sobre nós
                                </TypographyStyle>
                            </Link>
                        </Grid>
                
                        <Grid item  xs={2} textAlign='center'>
                            <Image
                                alt='Logo'
                                src={logo}
                                width={90}
                                height={90}
                            />  
                        </Grid>
                    
                        <Grid item  xs={2}>
                            <Link href="/services">
                                <TypographyStyle variant="h6" component="div" color='primary.pink' sx={{ flexGrow: 1 }}>
                                    Serviços
                                </TypographyStyle>
                            </Link>
                        </Grid>
                    
                        <Grid item  xs={2}>  
                            <Link href="/contact">
                                <TypographyStyle variant="h6" component="div" color='primary.pink' sx={{ flexGrow: 1 }}>
                                    Contato
                                </TypographyStyle>
                            </Link>
                        </Grid>
                    </HeaderGrid> 
                </Toolbar>
            </Container>
        </HeaderAppBar>  

    )
}

export default Header