"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import CountUp from "./Counter";
const ScrollAnimation = {
  initial: { x: -200, scale: 0.95, opacity: 0 },
  inView: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};
const MotionTypography = motion(Typography);
export default function Info() {
  return (
    <Box>
      <Box>
        <MotionTypography
          variants={ScrollAnimation}
          whileInView="inView"
          // viewport={{ amount: 0.4 }}
          initial="initial"
          sx={{
            fontSize: { xs: "15px", md: "30px" },
            padding: { xs: "10px", md: "20px" },
            textAlign: "center",
          }}
        >
          We’re a creative agency driven by design, strategy, and storytelling.
          Our mission is to help brands stand out through bold ideas, thoughtful
          design, and impactful digital experiences.
        </MotionTypography>
        <Box
          sx={{
            display: "flex",
            gap: "15px",
            fontSize: "30px",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <CountUp value={8000} suffix="+" />
          <CountUp value={48} suffix="%" />
          <CountUp value={5300} suffix="+" />
          <CountUp value={100} suffix="+" />
        </Box>
      </Box>
    </Box>
  );
}
