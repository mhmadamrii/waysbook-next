import React, { useState } from "react";
import Image from "next/image";
import Cart from "@/public/assets/cart.svg";
import Logo from "@/public/assets/Logo.png";
import DefaultAvatar from "@/public/assets/avatar.png";
import Cookies from "js-cookie";

import { IconButton, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/navigation";
import { makeStyles } from "@mui/styles";

import PersonIcon from "@/public/assets/menu-navbar/person.svg";
import MessageIcon from "@/public/assets/menu-navbar/message.svg";
import LogoutIcon from "@/public/assets/menu-navbar/logout-button.svg";

const useStyles = makeStyles({
  menuItems: {
    gap: 10,
  },
});

export default function AuthenticatedNavbar() {
  const classes = useStyles();
  const router = useRouter();
  const [state, setState] = useState({
    isOpen: false,
    anchorEl: null,
  });

  const handleClose = () => {
    setState((prevState) => ({
      ...prevState,
      isOpen: false,
    }));
  };

  const handleOpenMenu = (e) => {
    setState((prevState) => ({
      ...prevState,
      anchorEl: e?.currentTarget,
      isOpen: true,
    }));
  };

  const handleLogout = () => {
    Cookies.remove("UserToken");
    router.push("/");
  };

  return (
    <>
      <div className="navbar-desktop">
        <div onClick={() => router.push("/dashboard")}>
          <Image src={Logo} width={130} height={80} alt="logo" />
        </div>

        <div>
          <IconButton>
            <Image src={Cart} width={30} height={30} alt="cart" />
          </IconButton>
          <IconButton onClick={handleOpenMenu}>
            <Image src={DefaultAvatar} width={50} height={50} alt="cart" />
          </IconButton>
        </div>
      </div>
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
          <Image src={LogoutIcon} width={20} alt="icon" />
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
