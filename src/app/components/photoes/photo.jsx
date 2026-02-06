"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ScrollAnimation = {
  initial: { y: -100, opacity: 0 },
  inView: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

const teamMembers = [
  {
    id: 1,
    name: "Brooklyn Simmons",
    role: "Creative Designer",
    img: "/images/man1.webp",
  },
  {
    id: 2,
    name: "Brooklyn Simmons",
    role: "Creative Designer",
    img: "/images/man2.webp",
  },
  {
    id: 3,
    name: "Brooklyn Simmons",
    role: "Creative Designer",
    img: "/images/man3.webp",
  },
];

export default function NestedGrid() {
  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member) => (
          <Grid item xs={12} md={4} key={member.id}>
            <MotionBox
              variants={ScrollAnimation}
              initial="initial"
              whileInView="inView"
              viewport={{ amount: 0.4 }}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "flex" },
                alignItems: "center",
              }}
            >
              <Box sx={{ borderRadius: "40px", overflow: "hidden", mb: 2 }}>
                <Image
                  src={member.img}
                  width={200}
                  height={200}
                  alt={member.name}
                  style={{
                    display: "block",
                    backgroundColor: "#6958cc",
                    width: "100%",
                    boxShadow: "inset 0px -66px 51px 0px rgba(21, 13, 55, 1)"
                  }}
                />
              </Box>
              <Typography
                sx={{ fontWeight: 600, fontSize: { xs: 18, md: 20 } }}
              >
                {member.name}
              </Typography>
              <Typography sx={{ textAlign: "center", mt: 1, opacity: 0.7 }}>
                {member.role}
              </Typography>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
