import Grid from "@mui/material/Grid";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Footer() {
  const menuitems1 = ["About Us", "Projects", "Service", "Contact"];
  const menuitems2 = ["Style Guide", "License", "Changelog", "Password"];
  const menuitems3 = ["Facebook", "Instagram", "Linkedin", "Pinterest"];
  const stylemenu = {
    fontweight: "600",
    fontSize: { xs: "12px", md: "20px" },
    color: "white",
    padding: { xs: "3px", md: "10px" },
  };
  const titlemenu = {
    fontSize: { xs: "15px", md: "35px" },
    fontweight: "800",
    color: "white",
  };
  return (
    <Grid
      container
      spacing={4}
      sx={{
        backgroundImage:
          "radial-gradient(circle, #4d417f, #3b3663, #2c2b48, #20202e, #141415);",
        padding: { xs: "10px", md: "70px" },
        borderRadius: "20px",
        margin: "10px 10px",
        position: "relative",
      }}
    >
      <Grid item xs={12} sm={6}>
        <Typography variant="body1" color="initial" sx={{ ...titlemenu, p: 1 }}>
          Home
        </Typography>
        {menuitems1.map((val, i) => (
          <Box key={i} sx={{ p: 1 }}>
            <Typography sx={stylemenu}>{val}</Typography>
          </Box>
        ))}
      </Grid>

      <Grid item xs={12} sm={3}>
        <Typography variant="body1" color="initial" sx={{ ...titlemenu, p: 1 }}>
          TEMPLATE
        </Typography>
        {menuitems2.map((val, i) => (
          <Box key={i} sx={{ p: 1 }}>
            <Typography sx={stylemenu}>{val}</Typography>
          </Box>
        ))}
      </Grid>

      <Grid item xs={12} sm={3}>
        <Typography variant="body1" color="initial" sx={{ ...titlemenu, p: 1 }}>
          Social Media
        </Typography>
        {menuitems3.map((val, i) => (
          <Box key={i} sx={{ p: 1 }}>
            <Typography sx={stylemenu}>{val}</Typography>
          </Box>
        ))}
      </Grid>
      <Grid
        xs={12}
        md={6}
        border="2px solid green"
        sx={{
          background: "#444649",
          borderRadius: "20px",
          border: "1px solid white",
          padding: { xs: "20px", md: "50px" },
          margin: " auto",
        }}
      >
        <Grid>
          <Typography
            variant="body1"
            sx={{ color: "white", fontSize: { xs: "15px", md: "25px" } }}
          >
            Subscribe to Our
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "white",
              fontSize: { xs: "30px", md: "40px" },
              fontWeight: "600",
            }}
          >
            Newsletter
          </Typography>
          <Box>
            <TextField
              fullWidth
              label="Your email here"
              id="Your email here"
              sx={{
                background: "#555759",
                borderRadius: "20px",
                overflow: "hidden",
                "&::placeholder": {
                  color: "white",
                },

                "&:hover": {
                  backgroundColor: "#555759 !important",
                },

                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent",
                    borderWidth: "3px",
                  },
                  "& input": {
                    color: "white",
                  },

                  "&:hover fieldset": {
                    borderColor: "#7b63c3",
                    borderRadius: "20px",
                  },
                },

                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white",
                  padding: "10px",
                },
              }}
            />
            <Button
              variant="contained"
              disableElevation
              sx={{
                background: "#5a4b99",
                marginTop: "10px",
                padding: { xs: "10px", md: "15px 30px" },
                fontSize: { md: "20px" },
                borderRadius: "20px",
              }}
            >
              subscribe
            </Button>
            <Typography
              variant="body1"
              color="initial"
              sx={{ color: "white", marginTop: "30px" }}
            >
              “Your monthly dose of creativity, delivered straight to your
              inbox.”
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Typography
        variant="h6"
        color="initial"
        sx={{
           fontSize:{xs:"5px" , md:"20px"}, 
          position: "absolute",
          bottom: "0",
          padding:{xs:"20px" , md:"15px"},
          color: "white",
          margin: "auto",
        }}
      >
        © 2025 Designed by Olynex Powered by Webflow
      </Typography>
      
    </Grid>
  );
}
