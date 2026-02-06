"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  animate,
  useInView,
  useTransform,
} from "framer-motion";
import Typography from "@mui/material/Typography";

export default function CountUp({
  value,
  suffix = "",
  duration = 2.5,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const count = useMotionValue(0);

  const display = useTransform(count, (latest) =>
    `${Math.floor(latest)}${suffix}`
  );

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration,
      ease: "linear",
    });

    return controls.stop;
  }, [isInView, value, duration, count]);

  return (
    <Typography
      ref={ref}
      component={motion.span}
      sx={{
        fontSize: "30px",
        fontWeight: 600,
        paddingBottom: { xs: "20px", md: "50px" },
      }}
    >
      {display}
    </Typography>
  );
}
