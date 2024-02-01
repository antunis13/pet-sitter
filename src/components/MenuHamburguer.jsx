import { useState } from "react"

import { Drawer, List, IconButton, ListItemText, ListItemButton,  } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import Link from "next/link"

import {styled} from '@mui/material/styles'


const ListItemTxt = styled(ListItemText)(({theme}) => ({
  color: theme.palette.primary.pink
}))
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
                <ListItemTxt primary="Home" />
              </ListItemButton>
            </Link>
            <Link href="/about" passHref>
              <ListItemButton component="a">
                <ListItemTxt primary="Sobre nós" />
              </ListItemButton>
            </Link>
            <Link href="/services" passHref>
              <ListItemButton component="a">
                <ListItemTxt primary="Serviços" />
              </ListItemButton>
            </Link>
            <Link href="/contact" passHref>
              <ListItemButton component="a">
                <ListItemTxt primary="Contato" />
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
              <MenuIcon
                fontSize="large"
              />
            </IconButton>
            <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>        
        </>
    )

}

export default MenuHamburguer