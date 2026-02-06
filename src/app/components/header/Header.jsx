"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Button from "@mui/material/Button";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {motion } from "framer-motion";
export default function Header() {
const [showmenu, setShowmenu] = useState(false);
  const menuitems = ["Home", "Servises", "About", " termonal ", "concat"];
  
  const buttonVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  hover: { scale: 1.03 },
};
  const MButton = motion(Button); 
  const containervarients={
    initial:{opacity:0 , y:-20 , },
    animate:{opacity:1 , y:0 , transition:{duration:0.6 , ease:"easeOut" ,   staggerChildren: 0.1  }}
  }
  const Mbox=motion(Box)
  const BoxTypo=motion(Typography)
  
  const menuItemSx = {
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "-100%",
      height: "1.5px",
      width: "100%",
      backgroundColor: "white",
      transition: "all 0.4s ease",
    },
    "&:hover:after": {
      left: 0,
    },
  };

  return (
    <motion.div variants={containervarients} initial="initial" animate="animate"  >
      <AppBar
        position="static"
        sx={{ backgroundColor: "#eaeaf3", boxShadow: "none" }}
      >
        <Toolbar>
          <Mbox
            
            sx={{
              padding: "5px",
              width: { lg: "80px" },
            }}
          >
            <Image
              src="/images/logo.svg"
              width={50}
              height={50}
              alt="hi"
            ></Image>
          </Mbox>
          < BoxTypo
           
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, color: "#5a4b99", fontWeight: "600" }}
          >
            Pixgrow
          </ BoxTypo>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ color: "#5a4b99", display: { md: "none" } }}
            onClick={() => setShowmenu(!showmenu)}
          >
            {showmenu ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "flex", gap: "30px" },
                justifyContent: "center",
                backgroundColor: "#39495e",
                color: "#fff",
                padding: "10px 30px",
                borderRadius: "20px",
                cursor: "pointer",
              }}
            >
              {menuitems.map((val, i) => {
                return (
                  <BoxTypo variants={buttonVariants} key={i} variant="subtitle2" sx={menuItemSx}>
                    {val}
                  </BoxTypo>
                );
              })}
            </Box>
          </Box>
          {/* /////////////////////////////////// */}
          <MButton
            variants={buttonVariants}
            initial="initial" animate="animate" whileHover="hover" 
            transition={{ duration: 0.5 }}
              variant="contained"
              disableElevation
              sx={{
                display: { xs: "none", md: "flex" },
                borderRadius: "20px",
                width: { md: "30%", lg: "23%", xl: "15%" },
                padding: "10px 30px",
                backgroundColor: "#7b63c3",
                "&:hover": {
                  backgroundColor: "#433b7b",
                },
              }}
              >
              Buy template
          </MButton>
          {/* /////////////////////////////////////////// */}
        </Toolbar>
        {showmenu && (
          <Box
            sx={{
              display: { md: "none", flexWrap: "wrap" },
            }}
          >
            <Box
              sx={{
                display: { md: "none", flexWrap: "wrap" },
                backgroundColor: "#433b7b",
                color: "#fff",
                borderRadius: "10px",
                margin: "10px",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              {menuitems.map((val, i) => {
                return (
                  <BoxTypo
                
                    key={i}
                    variant="subtitle1"
                    sx={{
                      ...menuItemSx,
                      padding: "5px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {val}
                  </BoxTypo>
                );
              })}
            </Box>
          </Box>
        )}
      </AppBar>
    </motion.div>
  );
}
