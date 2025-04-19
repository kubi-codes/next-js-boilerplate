import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

function _footer() {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: (props) => props.palette.primary.main,
          minHeight: "300px",
          paddingTop: "50px",
          paddingBottom: "40px",
          borderBottom: "1px solid #fff",
        }}
      >
        <Container>
          <Box display="flex" justifyContent="center" mb={3}>
            <Link href="/" passHref>
              <Box
                component="img"
                height="120px"
                src="/images/TJF-Primary-White-small-logo.png"
              />
            </Link>
          </Box>

          <Typography color="#fff" align="center">
            Kobexindo Tower - 2nd Floor,
            <br /> Jl. Pasir Putih Raya Blok No.E-5-D,
            <br /> Ancol, Pademangan, North Jakarta,
            <br /> Indonesia, 14430 <br />
            <br />
            Phone: (021) 6603926
            <br />
            WhatsApp: +62 815 8855 584
          </Typography>

          <Box mt={5} mb={4}>
            {React.Children.toArray(
              [
                { name: "FAQ", link: "/faq" },
                { name: "About TJF", link: "/about-us" },
                { name: "Resources", link: "/resources" },
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
                    align="center"
                  >
                    {item.name}
                  </Typography>
                </Link>
              ))
            )}
          </Box>

          <Typography
            color="#fff"
            variant="h6"
            fontSize="16px"
            fontWeight="400"
            align="center"
          >
            Connect With Us
          </Typography>

          <Box display="flex" gap="30px" mt="10px" justifyContent="center" alignItems="center">
            {React.Children.toArray(
              [
                {
                  icon: "instagram.svg",
                  link: "https://www.instagram.com/tayjuhanafoundation",
                },
                {
                  icon: "facebook.svg",
                  link: "https://www.facebook.com/tayjuhanafoundation",
                },
                {
                  icon: "youtube.svg",
                  link: "https://www.youtube.com/channel/UCLkknVMDMFg17Q01g5Ky00A",
                },
                {
                  icon: "linkedin.svg",
                  link: "https://www.linkedin.com/company/tayjuhanafoundation/",
                },
              ].map((item) => (
                <Link href={item.link} target="_blank">
                  <img src={`/icons/${item.icon}`} alt={item} />
                </Link>
              ))
            )}
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          bgcolor: (props) => props.palette.primary.main,
          py: "30px",
        }}
      >
        <Container>
          <Link href="#">
            <Typography color="#fff" align="center" sx={{ mb: 3 }}>
              Privacy Policy
            </Typography>
          </Link>
          <Typography color="#fff" align="center">
            Copyrights © 2024 Tay Juhana Foundation
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default _footer;
