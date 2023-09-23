"use client";

import * as React from "react";
import Cookies from "js-cookie";
import Image from "next/image";
import Logo from "@/public/assets/Logo.png";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import WindowIcon from "@mui/icons-material/Window";
import HomeIcon from "@mui/icons-material/Home";
import Cart from "@/public/assets/cart.svg";
import PersonIcon from "@/public/assets/menu-navbar/person.svg";
import MessageIcon from "@/public/assets/menu-navbar/message.svg";
import LogoutIconNav from "@/public/assets/menu-navbar/logout-button.svg";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import {
  Drawer,
  Divider,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import DefaultAvatar from "@/public/assets/avatar.png";
import { Squash as Humberger } from "hamburger-react";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "@/contexts/cart-context";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  menuItems: {
    gap: 10,
  },
});

export default function MobileNavbar({ userAuthenticated }) {
  const router = useRouter();
  const classes = useStyles();
  const { cart } = React.useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [state, setState] = useState({
    isOpen: false,
    anchorEl: null,
  });
  const handleCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);

  const listsMenu = [
    {
      id: 1,
      menu: "Window",
      icon: <WindowIcon />,
    },
    {
      id: 1,
      menu: "Home",
      icon: <HomeIcon />,
    },
  ];

  const handleOpenModal = (info) => {
    router.push(`?modal_${info}=true`);
  };

  const handleOpenMenu = (e) => {
    setState((prevState) => ({
      ...prevState,
      anchorEl: e?.currentTarget,
      isOpen: true,
    }));
  };

  const handleClose = () => {
    setState((prevState) => ({
      ...prevState,
      isOpen: false,
    }));
  };

  const handleLogout = () => {
    Cookies.remove("UserToken");
    router.push("/");
  };

  const getCookie = () => {
    return Cookies.get("UserToken"); // Return the cookie value
  };

  React.useEffect(() => {
    const userToken = getCookie();
    if (userToken) {
      setUserToken(userToken);
    } else {
      return;
    }
  }, []); // This useEffect will run once on component mount
  console.log(userToken);

  return (
    <>
      <div className="mobile-navbar">
        <div data-aos="fade-right" data-aos-duration="1500">
          <Image src={Logo} width={110} height={75} alt="logo image" />
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          className="right-navbar-section"
        >
          {userToken ? (
            <>
              <IconButton onClick={() => router.push("/cart")}>
                <Badge badgeContent={cart?.length} color="error">
                  <Image src={Cart} width={30} height={30} alt="cart" />
                </Badge>
              </IconButton>
              <IconButton onClick={handleOpenMenu}>
                <Image src={DefaultAvatar} width={50} height={50} alt="cart" />
              </IconButton>
            </>
          ) : (
            <div />
          )}

          <Humberger toggled={isOpen} toggle={setIsOpen} />
        </div>
      </div>

      <Drawer open={isOpen} onClose={handleCloseDrawer} anchor="left">
        <Box sx={{ width: 250 }}>
          <List>
            {listsMenu.map((menu, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{menu?.icon}</ListItemIcon>
                  <ListItemText primary={menu?.menu} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />

          {userToken ? (
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleOpenModal("login")}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          ) : (
            <>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleOpenModal("login")}>
                  <ListItemIcon>
                    <LoginIcon />
                  </ListItemIcon>
                  <ListItemText primary="Login" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleOpenModal("register")}>
                  <ListItemIcon>
                    <HowToRegIcon />
                  </ListItemIcon>
                  <ListItemText primary="Register" />
                </ListItemButton>
              </ListItem>
            </>
          )}
        </Box>
      </Drawer>
      <Menu
        open={state?.isOpen}
        anchorEl={state?.anchorEl}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: 160,
          },
        }}
      >
        <MenuItem onClick={handleClose} className={classes.menuItems}>
          <Image src={PersonIcon} width={20} alt="icon" />
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose} className={classes.menuItems}>
          <Image src={MessageIcon} width={20} alt="icon" />
          Complain
        </MenuItem>
        <MenuItem onClick={handleLogout} className={classes.menuItems}>
          <Image src={LogoutIconNav} width={20} alt="icon" />
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
