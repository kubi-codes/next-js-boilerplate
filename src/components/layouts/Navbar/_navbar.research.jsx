import {
  Box,
  Container,
  Grid2 as Grid,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import GlobeIcon from "@/components/shared/icons/globe";
import ChevronIcon from "@/components/shared/icons/chevronDown";

function _navbar(props) {
  console.log("props", props);
  const [bgColor, setBgColor] = useState(props?.bgColor ?? "transparent");
  const [color, setColor] = useState(props?.color ?? "#fff");


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor(props?.bgColor ?? "white");
        setColor(props?.color ?? "#233E83");
      } else {
        setBgColor(props?.bgColor ?? "transparent");
        setColor(props?.color ?? "#fff");
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
        bgColor === "white" && !props?.disableElevation
          ? "0px 4px 12px rgba(0, 0, 0, 0.1)"
          : "none"
      }
      transition="background-color 0.3s ease"
    >
      <Container>
        <Grid container alignItems="center">
          <Grid size={{ md: 12 }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="flex-end" gap="20px">
                <Box borderRight={`2px solid ${color}`} paddingRight="20px">
                  <Link href="/">
                    <Box
                      component="img"
                      height="45px"
                      width="140px"
                      src={
                        bgColor === "white"
                          ? "/images/TJF-Secondary-Blue-logo.png"
                          : "/images/TJF-White-logo.png"
                      }
                      alt="logo"
                    ></Box>
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
                      <Link href={`/research/${item.link}`}>
                        <Typography color={color} variant="h6">
                          {item.name}
                        </Typography>
                      </Link>
                    </Box>
                  ))
                )}
              </Box>

              <Box display="flex" alignItems="center" gap="30px">
                <Link href="/contact-us" passHref>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{ width: "100px", height: "33px", padding: 0 }}
                  >
                    Contact Us
                  </Button>
                </Link>

                <IconButton>
                  <Box display="flex" alignItems="center" gap={1.2}>
                    <GlobeIcon
                      color={bgColor === "white" ? "#233E83" : "#fff"}
                    />
                    <ChevronIcon
                      color={bgColor === "white" ? "#233E83" : "#fff"}
                    />
                  </Box>
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default _navbar;
