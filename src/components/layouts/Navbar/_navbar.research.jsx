import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function _navbar() {
  const [bgColor, setBgColor] = useState("transparent");
  const [color, setColor] = useState("#fff");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("white");
        setColor("#233E83");
      } else {
        setBgColor("transparent");
        setColor("#fff");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      component="nav"
      display="flex"
      alignItems="center"
      height="12vh"
      position="fixed"
      width="100%"
      zIndex={10}
      bgcolor={bgColor}
      boxShadow={
        bgColor === "white" ? "0px 4px 12px rgba(0, 0, 0, 0.1)" : "none"
      }
      transition="background-color 0.3s ease"
    >
      <Container>
        <Grid container alignItems="center">
          <Grid size={{ md: 12 }}>
            <Box display="flex" alignItems="flex-end" gap="20px">
              <Box borderRight={`2px solid ${color}`} paddingRight="20px">
                <Link href="/">
                  <Box bgcolor="lightgray" height="45px" width="140px"></Box>
                </Link>
              </Box>

              {React.Children.toArray(
                [
                  {
                    name: "Peatland Agriculture Sustainability",
                    link: "/peatland-agriculture-sustainability",
                    desc: "Research",
                  },
                  {
                    name: "Sustainable Food System",
                    link: "/sustainable-food-system",
                  },
                  {
                    name: "Coconut Research Center",
                    link: "/coconut-research-center",
                  },
                  {
                    name: "Coastal Agriculture Water Management",
                    link: "/coastal-agriculture-water-management",
                  },
                ].map((item) => (
                  <Box maxWidth="150px" marginRight="20px">
                    <Typography fontSize="12px" color={color}>
                      {item.desc}
                    </Typography>
                    <Link href={`/topic/${item.link}`}>
                      <Typography color={color} variant="h6">
                        {item.name}
                      </Typography>
                    </Link>
                  </Box>
                ))
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default _navbar;
