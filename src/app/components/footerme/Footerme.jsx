"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { keyframes } from "@mui/system";
import Image from "next/image";

const morphBox = keyframes`
  0% {
    border-radius: 62% 38% 53% 57% / 59% 18% 30% 10%;
  }
  33% {
    border-radius: 75% 25% 40% 60% / 35% 65% 65% 35%;
  }
  66% {
    border-radius: 45% 55% 70% 30% / 70% 40% 30% 60%;
  }
  100% {
    border-radius: 62% 38% 53% 57% / 59% 18% 30% 10%;
  }
`;

const morphImg = keyframes`
  0% {
    border-radius: 72% 28% 62% 38% / 69% 59% 41% 31%;
  }
  33% {
    border-radius: 50% 50% 40% 60% / 75% 25% 25% 75%;
  }
  66% {
    border-radius: 65% 35% 55% 45% / 30% 70% 40% 90%;
  }
  100% {
    border-radius: 72% 28% 62% 38% / 69% 59% 41% 31%;
  }
`;

export default function ProfileCard() {
  const icons = [
    "/images/github-fill (1).svg",
    "/images/linkedin-box-fill.svg",
    "/images/instagram-fill.svg",
  ];

  return (
    <Box
      sx={{
        minHeight: "50vh",
        width:"100%",
          background: "linear-gradient(to bottom right, #616061, #000)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: 420, md: 700 },
          height: { xs: "auto", md: 500 },
        //   bgcolor: "rgb(44,44,53)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 3,
        }}
      >
        {/* Morph Box */}
        <Box
          
   sx={{
    width: { xs: 220, sm: 260, md: 300 },
    aspectRatio: "1 / 1.15",
    position: "relative",
    p: 2,
    animation: `${morphBox} 7s linear infinite`,
    background: "linear-gradient(to bottom right, #616061, #000)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mb: { xs: 3, md: 0 },
    overflow: "visible", // ⭐ خیلی مهم

    "&:hover .social-icon": {
      transform: {
        xs: "translateX(170px)",
        sm: "translateX(200px)",
        md: "translateX(230px)",
      },
      opacity: 1,
    },
  }}
        >
          {/* Image */}
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "relative",
              overflow: "hidden",
              animation: `${morphImg} 7s linear infinite`,
              zIndex:999
            }}
          >
            <Image
              src="/images/nacy.jpg"
              alt="profile"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </Box>

          {/* Social Icons */}
          <Box
           sx={{
    position: "absolute",
    // left: 0,
    // top: "50%",
    // transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: 2,
    zIndex: 800,
  }}
          >
            {icons.map((icon, i) => (
              <Link
      key={i}
      href="#"
      className="social-icon"
      sx={{
        width: 50,
        height: 50,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(80px)",

        transition: "transform 0.7s cubic-bezier(.4,0,.2,1), opacity 0.5s",

        boxShadow:
          "0 0 5px #4d5353, 0 0 20px #677676",

        "&:hover": {
          boxShadow:
            "0 0 10px #b577b8, 0 0 30px #9c33b6",
          transform: {
            xs: "translateX(100px) scale(1.1)",
            sm: "translateX(200px) scale(1.1)",
            md: "translateX(230px) scale(1.1)",
          },
        },
      }}
    >
      <Image src={icon} alt="" width={24} height={24} />
    </Link>
            ))}
          </Box>
        </Box>

        {/* Text */}
        <Typography
          sx={{
            mt: 3,
            fontSize: { xs: 18, sm: 20, md: 23 },
            color: "#fff",
            fontFamily: "sans-serif",
          }}
        >
         Nastaran
        </Typography>

        <Typography
          sx={{
            mt: 1,
            fontSize: { xs: 14, sm: 15 },
            color: "#ccc",
          }}
        >
          Front-end Developer
        </Typography>
      </Box>
    </Box>
  );
}
