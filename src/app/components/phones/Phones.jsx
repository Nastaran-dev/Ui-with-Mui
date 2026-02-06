"use client"
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import SendIcon from '@mui/icons-material/Send'; 
import { motion } from 'framer-motion';
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
const MotionTypography = motion(Box);
const styles = {
  title: {
    fontSize: { xs: "25px", md: "35px" },
    fontWeight: "600",
  },
 
  subtitle: {
    fontSize: { xs: "15px", md: "18px" },
    marginTop: "10px",
    opacity: 0.8,
  }, buttonStyle: {
    borderRadius: "20px",
    backgroundColor: "#656e7f",
    border: "1px solid white",
    color: "white",
    marginTop: "10px",
    minWidth: '120px',
    textTransform: 'none',
  },
};

const phoneData = [
  {
    id: 1,
    title: "Brand Identity",
    description: "Crafting cohesive identities that make your brand unforgettable and resonate deeply.",
    imageUrl: "/images/phone1.webp",
    service1: "Visual Design",
    service2: "Strategy",
    metric1Label: "Customer Rate",
    metric1Value: "14%",
    metric2Label: "User Satisfaction",
    metric2Value: "98%",
  },
  {
    id: 2,
    title: "Core Development",
    description: "Building robust, scalable, and high-performance web applications from the ground up.",
    imageUrl: "/images/phone2.webp",
    service1: "Frontend Dev",
    service2: "Backend Dev",
    metric1Label: "Performance Score",
    metric1Value: "92/100",
    metric2Label: "System Uptime",
    metric2Value: "99.9%",
  },
  {
    id: 3,
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile apps designed for superior user experience.",
    imageUrl: "/images/phone3.webp",
    service1: "iOS/Android",
    service2: "Testing Suite",
    metric1Label: "App Downloads",
    metric1Value: "500k+",
    metric2Label: "Average Rating",
    metric2Value: "4.7",
  },
];


const FeatureCard = ({ data, styles }) => {

  const mainContainerStyles = {
    display: "flex",
    flexDirection: { xs: "column", md: "row" }, 
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1400px",
    margin: "0 auto 40px auto", 
    padding: "20px",
    borderRadius: "25px",
    backgroundImage: "linear-gradient(to right, #301d4a, #251a3b, #1c172c, #15131d, #0c0c0c);",
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    
  };

  return (
    <MotionTypography variants={ScrollAnimation}
          whileInView="inView"
          viewport={{ amount: 0.3 }}
          initial="initial"  sx={{...mainContainerStyles , overflowX:"hidden"}}>
      <Box sx={{ width: { xs: "100%", md: "28%" }, padding: "20px", marginBottom: { xs: "20px", md: "0" } }}>
        <Typography variant="h4" color="white" sx={styles.title}>
          {data.title}
        </Typography>
        <Typography variant="body1" color="white" sx={styles.subtitle}>
          {data.description}
        </Typography>
      </Box>

    
      <Box sx={{ width: { xs: "90%", md: "28%" }, marginY: { xs: 2, md: 0 } }}>
        <Image 
          src={data.imageUrl} 
          width={600} 
          height={600} 
          alt={`${data.title} showcase`}
          style={{ width: '100%', height: 'auto', borderRadius: '15px' }}
        />
      </Box>

     
      <Box sx={{ width: { xs: "100%", md: "38%" }, padding: "20px" }}>
        <Typography variant="h5" color="white" sx={{ ...styles.title, fontSize: "24px", fontWeight: 500 }}>
          Services Provided
        </Typography>
        
       
        <Stack direction="row" spacing={1} sx={{ marginTop: "15px", flexWrap: 'wrap' }}>
          <Button variant="outlined" sx={styles.buttonStyle}>
            {data.service1}
          </Button>
          <Button variant="contained" sx={styles.buttonStyle}>
            {data.service2}
          </Button>
        </Stack>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          sx={{ ...styles.buttonStyle, width: '100%', mt: 2 }}
        >
          Let's Discuss
        </Button>
        
        <Box sx={{ display: "flex", gap: "30px", marginTop: { xs: "30px", md: "50px" } }}>
          <Box>
            <Typography variant="body2" color="white" sx={styles.subtitle}>
              {data.metric1Label}
            </Typography>
            <Typography variant="h6" color="white" sx={{ fontWeight: 700, fontSize: "22px" }}>
              {data.metric1Value}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="white" sx={styles.subtitle}>
              {data.metric2Label}
            </Typography>
            <Typography variant="h6" color="white" sx={{ fontWeight: 700, fontSize: "22px" }}>
              {data.metric2Value}
            </Typography>
          </Box>
        </Box>
      </Box>
    </MotionTypography>
  );
};



export default function Phones() {
  return (
    <Box sx={{ width: "100%", padding: { xs: "4px", md: "20px" } }}>
      <Typography variant="h3" color="#3d4048" textAlign="center" sx={{ mb: 4, mt: 2 , fontWeight:"600" }}>
      Recent Works
      </Typography>
      {phoneData.map((item) => (
        <FeatureCard 
          key={item.id} 
          data={item} 
          styles={styles} 
        />
      ))}
    </Box>
  );
}
