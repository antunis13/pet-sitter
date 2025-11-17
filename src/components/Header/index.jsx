import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Toolbar,
  Container,
  Menu,
  MenuItem,
  Button,
  Divider,
} from "@mui/material";

import MenuHamburguer from "../MenuHamburguer";

import logo from "../../public/images/Logotipo_Jeni-14.png";

import {
  HeaderGrid,
  HeaderAppBar,
  TypographyStyle,
  GridPages,
  LinkMenu,
  TypographyService,
} from "./Header.styles";

import style from "../Components.module.css";

const Header = () => {
  const [anchorMenu, setAnchorMenu] = useState(null);
  const openMenu = Boolean(anchorMenu);

  const handleMouseEnter = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorMenu(null);
  };
  return (
    <HeaderAppBar position="static" elevation={0}>
      <Container maxWidth="md">
        <Toolbar>
          <MenuHamburguer className={style.menuHamburguer} />
          <HeaderGrid container>
            <GridPages
              item
              className={style.menuNormal}
              sm={2}
              md={2}
              lg={2}
              xl={2}
            >
              <Link href="/">
                <TypographyStyle variant="h6" component="div">
                  Home
                </TypographyStyle>
              </Link>
            </GridPages>

            <GridPages
              item
              className={style.menuNormal}
              sm={2}
              md={2}
              lg={2}
              xl={2}
            >
              <Link href="/about">
                <TypographyStyle variant="h6" component="div">
                  Sobre nós
                </TypographyStyle>
              </Link>
            </GridPages>

            <GridPages
              item
              xs={2}
              sm={8}
              md={2}
              lg={2}
              xl={2}
              textAlign="center"
            >
              <Link href="/">
                <Image
                  alt="Logo"
                  className={style.logo}
                  src={logo}
                  width={90}
                  height={90}
                />
              </Link>
            </GridPages>

            <GridPages
              item
              className={style.menuNormal}
              sm={2}
              md={2}
              lg={2}
              xl={2}
            >
              <Button
                size="small"
                id="basic-button"
                aria-controls="customized-menu"
                aria-haspopup="true"
                onMouseEnter={handleMouseEnter}
                style={{
                  textTransform: "none",
                  color: openMenu ? "#174071" : "#ed7a8c",
                }}
              >
                <TypographyService
                  variant="h6"
                  component="div"
                  color={openMenu ? "#174071" : "primary.pink"}
                >
                  Serviços
                </TypographyService>
                <i
                  class="fa-solid fa-angle-down fa-sm"
                  style={{
                    color: openMenu ? "#174071" : "#ed7a8c",
                  }}
                ></i>
              </Button>
              <Menu
                PaperProps={{
                  sx: {
                    boxShadow: "none",
                    padding: "0px 10px 5px 10px",
                    backgroundColor: "primary.main",
                  },
                }}
                id="customized-menu"
                open={openMenu}
                anchorEl={anchorMenu}
                keepMounted
                onClose={handleMouseLeave}
                MenuListProps={{ onMouseLeave: handleMouseLeave }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Divider />
                <LinkMenu href="/services/dayCare" passHref>
                  <MenuItem onClick={handleMouseLeave}>Day Care</MenuItem>
                </LinkMenu>
                <Divider />
                <LinkMenu href="/services/dogWalk" passHref>
                  <MenuItem onClick={handleMouseLeave}>Dog Walk</MenuItem>
                </LinkMenu>
                <Divider />
                <LinkMenu href="/services/petSitter" passHref>
                  <MenuItem onClick={handleMouseLeave}>Pet Sitter</MenuItem>
                </LinkMenu>
              </Menu>
            </GridPages>

            <GridPages
              item
              className={style.menuNormal}
              sm={2}
              md={2}
              lg={2}
              xl={2}
            >
              <Link href="/contact">
                <TypographyStyle variant="h6" component="div">
                  Contato
                </TypographyStyle>
              </Link>
            </GridPages>
          </HeaderGrid>
        </Toolbar>
      </Container>
    </HeaderAppBar>
  );
};

export default Header;
