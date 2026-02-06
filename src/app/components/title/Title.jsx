"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Video from "./Videocomponent.jsx/Video";
import { motion } from "framer-motion";
const containerAnime = {
  initial: { opacity: 0, x: -30 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.1 },
  },
};
const buttonVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  hover: { scale: 1.03 },
};
const ChildAnime = {
  initial: { translateX: -3000, x: -100 },
  animate: {
    translateX: 0,
    x: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};
export default function Title() {
  return (
    <Box 
        variants={containerAnime}
        initial="initial"
        animate="animate">
      <Typography
        component={motion.h1}
        variants={ChildAnime}
        initial="initial"
        animate="animate"
        sx={{
          marginTop: { xs: "50px", xl: "10px" },
          padding: { xs: "0 5px", md: "0  20%", xl: "5%" },
          fontSize: { xs: "30px", md: "50px", lg: "70px", xl: "120px" },
          textAlign: "center",
          color: "#39495e",
          fontWeight: "600",
        }}
      >
        Scale your brand with unlimited design
      </Typography>
      <Typography
        component={motion.h1}
        variants={ChildAnime}
        initial="initial"
        animate="animate"
        sx={{
          textAlign: "center",
          marginTop: { xs: "15%", sm: "1%" },
          padding: { xs: "0 5px", md: "0  20%", xl: "0 30%" },
          fontSize: { md: "17px" },
          color: "#39495e",
          fontWeight: "600",
        }}
      >
        Unlock endless creative possibilities and keep your brand growing with
        on-demand, high-quality design solutions tailored to your vision.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: { xs: "15%", sm: "2%" },
        }}
      >
        <Button
         component={motion.h1}
          variants={buttonVariants}
            initial="initial"
        animate="animate"
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "15px 20px",
            backgroundColor: "#7b63c3",
            borderRadius: "30px",
            "&:hover": { backgroundColor: "#433b7b" },
          }}
        >
          Get Started
        </Button>
      </Box>
      <Video />
    </Box>
  );
}
