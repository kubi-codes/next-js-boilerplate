import {
  Container,
  Typography,
  Box,
  Button,
  Grid2 as Grid,
  CardActionArea,
} from "@mui/material";
import React from "react";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_updates_detail";

const shareLinks = {
  facebook: (url) =>
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  twitter: (url, text = "") =>
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(text)}`,
  linkedin: (url) =>
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}`,
  whatsapp: (url, text = "") =>
    `https://api.whatsapp.com/send?text=${encodeURIComponent(
      text
    )}%20${encodeURIComponent(url)}`,
};

function _updates_detail() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleShare = (platform) => {
    const currentUrl =
      typeof window !== "undefined"
        ? window.location.href
        : "https://example.com";
    const encodedUrl = encodeURIComponent(currentUrl);
    const text = "";

    let shareUrl = "#";
    switch (platform) {
      case "facebook":
        shareUrl = shareLinks.facebook(encodedUrl);
        break;
      case "twitter":
        shareUrl = shareLinks.twitter(encodedUrl, text);
        break;
      case "linkedin":
        shareUrl = shareLinks.linkedin(encodedUrl);
        break;
      case "whatsapp":
        shareUrl = shareLinks.whatsapp(encodedUrl, text);
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Box display={isMobile ? "none" : "block"}>
        <Container sx={{ pt: "7%" }}>
          <Typography variant="h1" align="center" color="primary">
            Lorem Ipsum
          </Typography>

          <Box display="flex" justifyContent="center" py={2}>
            <Button variant="contained" color="warning">
              Tag Topic
            </Button>
          </Box>

          <Typography color="secondary" align="center" fontSize="24px">
            December 23, 2023
          </Typography>

          <Grid container justifyContent="center" mt="80px" mb="80px">
            <Grid size={{ md: 9 }}>
              <Box sx={{ backgroundColor: "lightgray", height: "600px" }} />
            </Grid>
          </Grid>

          <Grid container justifyContent="space-between">
            <Grid size={{ md: 8 }}>
              <Typography variant="h5" gutterBottom>
                Lorem Ipsum
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                delectus tenetur ea. Culpa, aliquid distinctio natus dolorem,
                unde necessitatibus pariatur id hic commodi sunt illo
                reprehenderit, nisi corrupti sit cum?
              </Typography>
            </Grid>
            <Grid size={{ md: 3 }}>
              <Typography variant="h6" ml="10px" gutterBottom>
                Contributor
              </Typography>

              <Box
                display="flex"
                alignItems="center"
                gap="15px"
                mt="15px"
                mb="50px"
              >
                <Box
                  sx={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100%",
                    bgcolor: "lightgray",
                  }}
                />
                <Box>
                  <Typography variant="h6" noWrap>
                    Ratu Nabilah
                  </Typography>
                  <Typography>Jakarta</Typography>
                </Box>
              </Box>

              <Typography variant="h6" ml="10px">
                Share This Article
              </Typography>

              <Box ml="10px" display="flex" gap="25px" mt="10px">
                {React.Children.toArray(
                  [
                    { name: "facebook", icon: "facebook-logo.svg" },
                    { name: "twitter", icon: "twitter-logo.svg" },
                    { name: "linkedin", icon: "linkedin-logo.svg" },
                    { name: "whatsapp", icon: "whatsapp-logo.svg" },
                  ].map(({ name, icon }) => (
                    <img
                      src={`/icons/${icon}`}
                      alt={name}
                      width="25px"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleShare(name)}
                    />
                  ))
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box display={isMobile ? "none" : "block"}>
        <Container sx={{ pb: "100px", pt: "50px" }}>
          <Grid container justifyContent="space-between">
            <Grid size={{ md: 3 }}>
              <Box sx={{ borderBottom: "6px solid #000000", mb: "30px" }} />

              <Typography variant="h4" color="primary">
                RELATED
                <br />
                ARTICLE
              </Typography>
            </Grid>
            <Grid size={{ md: 8.5 }}>
              <Box sx={{ borderBottom: "1px solid #000000" }} />

              <Grid container justifyContent="space-between" mt="30px">
                {React.Children.toArray(
                  [
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2024/04/Strategi-Pemanfaatan-Lahan-Gambut-300x171.webp",
                      title: "Strategi Pemanfaatan Lahan Gambut Berkelanjutan",
                      date: "Apr 1, 2024",
                    },
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2024/03/Pemanfaatan-Lahan-Gambut-300x200.jpg",
                      title:
                        "Pemanfaatan Lahan Gambut untuk Pertanian Berkelanjutan",
                      date: "Mar 28, 2024",
                    },
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2025/01/Sustainable-Peatland-Cultivation-Example-300x300.jpg",
                      title:
                        "Sustainable Peatland Cultivation Example for a Greener Future",
                      date: "Jan 21, 2024",
                    },
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2025/01/Peatland-Agriculture-Potential-for-Food-Production-300x300.jpg",
                      title:
                        "Peatland Agriculture Potential for Food Production",
                      date: "Jan 21, 2025",
                    },
                  ].map((item, key, arr) => (
                    <Grid size={{ md: 5.8 }} sx={{ mb: 3 }}>
                      <Link href={`/updates/slug`}>
                        <Grid container justifyContent="space-between" mb={2.5}>
                          <Grid item size={{ md: 6 }}>
                            <Typography
                              variant="body2"
                              color="secondary"
                              gutterBottom
                            >
                              {item?.date}
                            </Typography>
                            <Typography
                              variant="h6"
                              sx={{
                                display: "-webkit-box",
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                WebkitLineClamp: 3, // Membatasi ke 2 baris
                              }}
                            >
                              {item?.title}
                            </Typography>
                          </Grid>
                          <Grid item size={{ md: 5.5 }}>
                            <CardActionArea>
                              <Box
                                bgcolor="lightgray"
                                height="115px"
                                sx={{
                                  backgroundImage: `url('${item.image}')`,
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                }}
                              ></Box>
                            </CardActionArea>
                          </Grid>
                        </Grid>
                      </Link>
                    </Grid>
                  ))
                )}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {isMobile ? <MobileView /> : null}
    </>
  );
}

export default _updates_detail;
