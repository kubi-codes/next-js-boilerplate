import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_footer";

function _footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        sx={{
          bgcolor: (props) => props.palette.primary.main,
          minHeight: "300px",
          paddingY: "50px",
        }}
        display={isMobile ? "none" : "block"}
      >
        <Container>
          <Grid container justifyContent="space-between" sx={{ mb: 3 }}>
            <Grid item size={{ md: 1.4 }}>
              <Link href="/">
                <Box
                  height="150px"
                  sx={{
                    backgroundImage: `url('/images/TJF-Primary-White-small-logo.png')`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </Link>
            </Grid>
            <Grid item size={{ md: 3 }}>
              <Typography color="#fff">
                Kobexindo Tower – 2nd Floor, Jl. Pasir Putih Raya Blok No.E-5-D,
                Ancol, Pademangan, North Jakarta, Indonesia, 14430
                <br /> <br />
                Phone: (021) 6603926 <br />
                WhatsApp: +62 815 8855 584
              </Typography>
            </Grid>
            <Grid item size={{ md: 1 }}>
              {React.Children.toArray(
                [
                  { name: "FAQ", link: "/faq" },
                  { name: "About TJF", link: "/about-us" },
                  { name: "Resources", link: "/resources" },
                ].map((item) => (
                  <Link href={item.link}>
                    <Typography
                      color="#fff"
                      variant="h6"
                      fontSize="16px"
                      fontWeight="400"
                      sx={{ mb: 2 }}
                    >
                      {item.name}
                    </Typography>
                  </Link>
                ))
              )}
            </Grid>
            <Grid item size={{ md: 1 }}>
              {React.Children.toArray(
                [
                  { name: "Career", link: "/career" },
                  { name: "Contact Us", link: "/contact-us" },
                ].map((item) => (
                  <Link href={item.link}>
                    <Typography
                      color="#fff"
                      variant="h6"
                      fontSize="16px"
                      fontWeight="400"
                      sx={{ mb: 2 }}
                    >
                      {item.name}
                    </Typography>
                  </Link>
                ))
              )}
            </Grid>
            <Grid item size={{ md: 2 }}>
              <Typography
                color="#fff"
                variant="h6"
                fontSize="16px"
                fontWeight="400"
              >
                Connect With Us
              </Typography>

              <Box display="flex" gap="30px" mt="10px">
                {React.Children.toArray(
                  [
                    "instagram.svg",
                    "facebook.svg",
                    "youtube.svg",
                    "linkedin.svg",
                  ].map((item) => <img src={`/icons/${item}`} />)
                )}
              </Box>
            </Grid>
          </Grid>

          <Box component="hr" sx={{ borderColor: "#fff", mt: 4, mb: 2 }} />
          <Box display="flex" justifyContent="space-between">
            <Link href="#">
              <Typography color="#fff">Privacy Policy</Typography>
            </Link>
            <Typography color="#fff">
              Copyrights © 2024 Tay Juhana Foundation
            </Typography>
          </Box>
        </Container>
      </Box>

      {isMobile ? <MobileView /> : null}
    </>
  );
}

export default _footer;
