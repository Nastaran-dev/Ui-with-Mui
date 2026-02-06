"use client";
import Box from "@mui/material/Box";
import Image from "next/image";
import "../master.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
const ScrollAnimation = {
  initial: { opacity: 0.3, y: 50, scale: 0.9 },
  inView: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
  },
};
const ScrollAnimationText = {
  initial: { opacity:0.3, x: 50, scale: 0.5 },
  inView: {
    opacity:1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
  },
};
const Textanime = motion(Typography)
export default function Video() {
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);
  const hoverStates = [isHovering1, isHovering2, isHovering3, isHovering4];
  const setHoverStates = [
    setIsHovering1,
    setIsHovering2,
    setIsHovering3,
    setIsHovering4,
  ];

  const imageSources = [
    "/images/image1.webp",
    "/images/image2.webp",
    "/images/image3.webp",
    "/images/image4.webp",
  ];

  const typogarfy = {
    fontSize: { xs: "40px", md: "70px" },
    fontWeight: "600",
    transition: "color 0.3s ease-in-out",
  };

  const typogarfyimage = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      cursor: "pointer",
      "& .MuiTypography-root": {
        color: "#765fbc",
      },
    },
  };

  const listItemsData = [
    { title: "Star Branding", imageSrc: imageSources[0], stateIndex: 0 },
    { title: "Print Design", imageSrc: imageSources[1], stateIndex: 1 },
    { title: "UIUX Design", imageSrc: imageSources[2], stateIndex: 2 },
    { title: "Digital Marketing", imageSrc: imageSources[3], stateIndex: 3 },
  ];

  return (
    <motion.div
      variants={ScrollAnimation}
      whileInView="inView"
      viewport={{ amount: 0.3 }}
      initial="initial"
    >
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        >
          <Box
            sx={{
              width: { xs: "150px" },
              height: { xs: "150px" },
              transform: "translateX(5%)",
              position: "absolute",
              zIndex: "9",
            }}
          >
            <Image
              className="anime"
              src="/images/rotate.webp"
              fill={true}
              alt="hi"
            ></Image>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            transform: "translateY(90px)",
            position: "relative",
            zIndex: "3",
          }}
        >
          <img src="/images/rotate.svg" alt="hi"></img>
        </Box>
      </Box>

      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Image
          src="/images/video.webp"
          width={1700}
          height={700}
          style={{
            borderBottomRightRadius: "50px",
            borderBottomLeftRadius: "50px",
            borderTopRightRadius: "5px",
            borderTopLeftRadius: "5px",
            transform: "translateY(50px)",
            position: "relative",
            zIndex: "2",
          }}
          alt="hi"
        ></Image>
      </Box>
      <Box
        sx={{
          backgroundColor: "#2A3030",
          borderBottomRightRadius: "80px",
          borderBottomLeftRadius: "80px",
        }}
      >
        <List
          sx={{
            width: "100%",
            height: "100%",
            color: "white",
            backgroundImage:
              "linear-gradient(to right top, #5c45b5, #45439c, #353f82, #2c3867, #28314c, #232f41, #232d36, #26292b, #272b2c, #282d2e, #292e2f, #2a3030)",
            backgroundSize: "cover",
            cursor: "pointer",
            borderRadius: "80px",
          }}
        >
          {listItemsData.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                sx={typogarfyimage}
                onMouseEnter={() => setHoverStates[index](true)}
                onMouseLeave={() => setHoverStates[index](false)}
              >
                <Textanime
                  variants={ScrollAnimationText}
                  viewport={{ amount: 0.3 }}
                  sx={typogarfy}
                >
                  {item.title}
                </Textanime>
                <Image
                  src={item.imageSrc}
                  width={200}
                  height={200}
                  alt={item.title}
                  style={{
                    borderRadius: "20px",
                    marginTop: "50px",
                    transition:
                      "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
                    opacity: hoverStates[index] ? 1 : 0,
                    transform: hoverStates[index] ? "scale(1)" : "scale(0.95)",
                    transform: hoverStates[index]
                      ? "rotate(20deg)"
                      : "rotate(0)",
                    marginLeft: "20px",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </motion.div>
  );
}
