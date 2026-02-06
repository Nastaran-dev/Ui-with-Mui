"use client";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import Box from "@mui/material/Box";
import { useState } from "react";
import { motion } from "framer-motion";
const ScrollAnimation = {
  initial: { y: -200, scale:-1.3, opacity: 0 },
  inView: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};
const MotionTypography = motion(Box);
const styles = {
  questionStyles: {
    fontSize: { xs: "16px", md: "25px" },
    color:"#3d4048",
    fontWeight: "600",
  },
  iconStyles: {
    color: "#6b57ae",
    marginLeft: "10px",
    fontSize: "30px",
  },
  Boxstyles: {
    width: { md: "50%" },
    padding: {xs:"5px", md: "20px" },
  },
  Borderstyle: {
    padding: "10px",
    margin: { xs: "10px 0", md: " 0 0" },
    background: "#fff",
    width: "100%",
  },
};
const dataAccordion = [
  {
    id: "1",
    question: " Where is your agency based?",
    info: "Share your feedback anytime via our contact form, email, or project dashboard. We value your insights as they help us improve our process and deliver better results. Every piece of feedback is reviewed to enhance your experience with our agency.",
  },
  {
    id: "2",
    question: "How can I give support to your agency?",
    info: "Share your feedback anytime via our contact form, email, or project dashboard. We value your insights as they help us improve our process and deliver better results. Every piece of feedback is reviewed to enhance your experience with our agency.",
  },
  {
    id: "3",
    question: "How can I give support to your agency?",
    info: "Share your feedback anytime via our contact form, email, or project dashboard. We value your insights as they help us improve our process and deliver better results. Every piece of feedback is reviewed to enhance your experience with our agency.",
  },
  {
    id: "4",
    question: "What should I do if I have a complaint?",
    info: "Share your feedback anytime via our contact form, email, or project dashboard. We value your insights as they help us improve our process and deliver better results. Every piece of feedback is reviewed to enhance your experience with our agency.",
  },
  {
    id: "5",
    question: " What is your agency's purpose?",
    info: "Share your feedback anytime via our contact form, email, or project dashboard. We value your insights as they help us improve our process and deliver better results. Every piece of feedback is reviewed to enhance your experience with our agency.",
  },
  {
    id: "6",
    question: "What are your agency's hours?",
    info: "Share your feedback anytime via our contact form, email, or project dashboard. We value your insights as they help us improve our process and deliver better results. Every piece of feedback is reviewed to enhance your experience with our agency.",
  },
  {
    id: "7",
    question: "How can I reach your agency for support?",
    info: "Share your feedback anytime via our contact form, email, or project dashboard. We value your insights as they help us improve our process and deliver better results. Every piece of feedback is reviewed to enhance your experience with our agency.",
  },
  {
    id: "8",
    question: "What services does your agency offer?",
    info: "Share your feedback anytime via our contact form, email, or project dashboard. We value your insights as they help us improve our process and deliver better results. Every piece of feedback is reviewed to enhance your experience with our agency.",
  },
];

const Feachercard = ({ data, styles, expanded, onChange }) => {
  return (
    <MotionTypography sx={styles.Boxstyles}  variants={ScrollAnimation}
          whileInView="inView"
          viewport={{ amount: 0.3 }}
          initial="initial">
      <Accordion
        sx={{
          ...styles.Borderstyle,
          borderRadius: expanded ? "20px !important" : "40px !important",
        }}
        expanded={expanded}
        onChange={onChange}
      >
        <AccordionSummary
          expandIcon={<ArrowDropDownCircleIcon sx={styles.iconStyles} />}
          aria-controls={`panel${data.id}-content`}
          id={`panel${data.id}-header`}
        >
          <Typography component="span" sx={styles.questionStyles}>
            {data.question}
          </Typography>
        </AccordionSummary>

        <AccordionDetails>{data.info}</AccordionDetails>
      </Accordion>
    </MotionTypography>
  );
};

export default function AccordionUsage() {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panelId) => (event, isExpanded) => {
    setExpanded(isExpanded ? panelId : false);
  };

  return (
    <Box sx={{ display: { md: "flex" }, flexWrap: "wrap" }}>
      {dataAccordion.map((val) => {
        return (
          <Feachercard
            key={val.id}
            data={val}
            styles={styles}
            expanded={expanded === val.id}
            onChange={handleChange(val.id)}
          />
        );
      })}
    </Box>
  );
}
