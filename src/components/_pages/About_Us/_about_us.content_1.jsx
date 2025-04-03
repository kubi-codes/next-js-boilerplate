import { Container, Grid2 as Grid, Box } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_about_us.content_1";

function _about_us_content_1() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isPlaying, setIsPlaying] = React.useState(false);

  const videoId = "oyDz7GAsfCg"; // ID video YouTube
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const iframeSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <>
      <Box
        sx={{
          backgroundImage: "url('/images/bg-grid.png')",
          marginBottom: "50px",
          paddingBottom: "1px",
          paddingBottom: "50px",
          zIndex: -2,
        }}
        display={isMobile ? "none" : "block"}
      >
        <Container>
          <Grid container justifyContent="center">
            <Grid item size={{ md: 9 }}>
              <Box position="relative">
                {!isPlaying ? (
                  <>
                    <Box
                      component="img"
                      src="/icons/play-error.svg"
                      position="absolute"
                      top="50%"
                      left="50%"
                      sx={{
                        transform: "translate(-50%, -50%)",
                        cursor: "pointer",
                      }}
                      zIndex={2}
                      onClick={() => setIsPlaying(true)}
                    />
                    <Box
                      height="580px"
                      width="100%"
                      bgcolor="lightgray"
                      position="relative"
                      sx={{
                        backgroundImage: `url(${thumbnailUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        cursor: "pointer",
                      }}
                      onClick={() => setIsPlaying(true)}
                    />
                  </>
                ) : (
                  <Box
                    component="iframe"
                    width="100%"
                    height="580px"
                    src={iframeSrc}
                    title="YouTube Video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {isMobile ? <MobileView /> : null}
    </>
  );
}

export default _about_us_content_1;
