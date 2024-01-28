import { useState } from "react"

import { Drawer, List, ListItem, IconButton, ListItemText, ListItemButton,  } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import Link from "next/link"

const MenuHamburguer = ({className}) =>{
    const [openDrawer, setOpenDrawer] = useState(false)

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return
        }
    
        setOpenDrawer(open)
      }
    
    const list = () => (
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <Link href="/" passHref>
              <ListItemButton component="a">
                <ListItemText primary="Home" />
              </ListItemButton>
            </Link>
            <Link href="/about" passHref>
              <ListItemButton component="a">
                <ListItemText primary="Sobre nós" />
              </ListItemButton>
            </Link>
            <Link href="/services" passHref>
              <ListItemButton component="a">
                <ListItemText primary="Serviços" />
              </ListItemButton>
            </Link>
            <Link href="/contact" passHref>
              <ListItemButton component="a">
                <ListItemText primary="Contato" />
              </ListItemButton>
            </Link>
            
          </List>
        </div>
    )

    return(
        <>
            <IconButton 
              edge='start' 
              color="inherit" 
              aria-label="menu" 
              onClick={toggleDrawer(true)}
              className={className}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>        
        </>
    )

}

export default MenuHamburguer