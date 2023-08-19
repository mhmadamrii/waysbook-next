"use client";

import Image from "next/image";
import Logo from "@/public/assets/Logo.png";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import WindowIcon from "@mui/icons-material/Window";
import HomeIcon from "@mui/icons-material/Home";
import {
  Drawer,
  Divider,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Squash as Humberger } from "hamburger-react";
import { useState, useCallback } from "react";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
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
  return (
    <>
      <div className="mobile-navbar">
        <div data-aos="fade-right" data-aos-duration="1500">
          <Image src={Logo} width={110} height={75} alt="logo image" />
        </div>

        <div data-aos="fade-left" data-aos-duration="1500">
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
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
        </Box>
      </Drawer>
    </>
  );
}
