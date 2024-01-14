import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import Link from 'next/link'

const Header = () => {
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{height: '80px'}}>
                <Toolbar>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Link href="/">
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Home
                        </Typography>
                    </Link>
                    <Link href="/about">
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Sobre nós
                        </Typography>
                    </Link>
                    <Link href="/services">
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Nossos Serviços
                        </Typography>
                    </Link>
                    <Link href="/contact">
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Contato
                        </Typography>
                    </Link>
                    
                </Toolbar>
            </AppBar>
        </Box>

    )
}

export default Header