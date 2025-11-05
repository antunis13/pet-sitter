import { useState } from "react"

import {
  Drawer,
  List,
  IconButton,
  ListItemText,
  ListItemButton,
  Menu,
  MenuItem,
  Divider,
  Collapse
} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import Link from "next/link"

import {styled} from '@mui/material/styles'


const ListItemTxt = styled(ListItemText)(({theme}) => ({
  color: theme.palette.primary.pink
}))

const LinkMenu = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.pink,
})) 

const MenuHamburguer = ({className}) =>{
  const [openDrawer, setOpenDrawer] = useState(false)
  const [anchorMenu, setAnchorMenu ] = useState(false)

  const handleClick = (event) => {
    event.stopPropagation()
    setAnchorMenu(!anchorMenu)
  }
  
  const handleClose = () => {
    setAnchorMenu(false)
  }

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
        <>
          <ListItemButton 
            component="a"
            id="basic-button"
            aria-controls='customized-menu'
            aria-haspopup="true"
            onClick={handleClick}
            style={{textTransform: 'none'}}
          >
            <ListItemTxt primary="Serviços" />
            <i 
              class="fa-solid fa-angle-down fa-sm" 
              style={{
                color: '#ed7a8c', 
              }}
            ></i>
          </ListItemButton>
          <Collapse in={anchorMenu} timeout={{enter: 500, exit: 300}} unmountOnExit>
            <LinkMenu href='/services/dayCare' passHref>
              <MenuItem  onClick={handleClose}>Day Care</MenuItem>
            </LinkMenu>
            <Divider />
            <LinkMenu href='/services/dogWalk' passHref>
              <MenuItem  onClick={handleClose}>Dog Walk</MenuItem>
            </LinkMenu>
            <Divider />
            <LinkMenu href='/services/petSitter' passHref>
              <MenuItem  onClick={handleClose}>Pet Sitter</MenuItem>
            </LinkMenu>      
          </Collapse>
        </>
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