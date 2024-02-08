import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import{
    AppBar,
    Toolbar,
    Typography,
    Container,
    Grid,
} from '@mui/material' 

import MenuHamburguer from '../MenuHamburguer'

import logo from '../../public/images/Logotipo_Jeni-14.png'

import {styled} from '@mui/material/styles'
import style from '../Components.module.css'

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



const Header = () => {
    return(
        <HeaderAppBar position="static" elevation={0}  >
            <Container maxWidth='md'>
                <Toolbar>
                    <MenuHamburguer className={style.menuHamburguer} />
                    <HeaderGrid 
                        container 
                        
                    >
                        <GridPages item className={style.menuNormal} sm={2} md={2} lg={2} xl={2}>
                            <Link href="/">
                                <TypographyStyle variant="h6" component="div" color='primary.pink'>
                                    Home
                                </TypographyStyle>
                            </Link>
                        </GridPages>
                
                        <GridPages item className={style.menuNormal} sm={2} md={2} lg={2} xl={2}>
                            <Link href="/about">
                                <TypographyStyle variant="h6" component="div" color='primary.pink'>
                                    Sobre nós
                                </TypographyStyle>
                            </Link>
                        </GridPages>

                        <GridPages item xs={1} sm={8} md={2} lg={2} xl={2} textAlign='center'>
                            <Link href='/'>
                                <Image
                                    alt='Logo'
                                    className={style.logo}
                                    src={logo}
                                    width={90}
                                    height={90}
                                />  
                            </Link>
                        </GridPages>

                        <GridPages item className={style.menuNormal} sm={2} md={2} lg={2} xl={2}>
                            <Link href="/services">
                                <TypographyStyle variant="h6" component="div" color='primary.pink'>
                                    Serviços
                                </TypographyStyle>
                            </Link>
                        </GridPages>

                        <GridPages item className={style.menuNormal} sm={2} md={2} lg={2} xl={2}>  
                            <Link href="/contact">
                                <TypographyStyle variant="h6" component="div" color='primary.pink'>
                                    Contato
                                </TypographyStyle>
                            </Link>
                        </GridPages>
                        
                    </HeaderGrid> 
                </Toolbar>
            </Container>
        </HeaderAppBar>  

    )
}

export default Header