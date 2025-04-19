import { Container, Grid2 as Grid, Box, IconButton } from "@mui/material";
import React from "react";

function _about_us_content_1() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const videoId = "oyDz7GAsfCg"; // ID video YouTube
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const iframeSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1&rel=0&disablekb=1`;

  return (
    <Box
      mb="50px"
      mt="50px"
      sx={{
        backgroundImage: "url('/images/bg-grid.png')",
        paddingBottom: "20px",
        zIndex: -2,
      }}
    >
      <Container>
        <Box position="relative">
          {!isPlaying ? (
            <Box zIndex={3}>
              <Box
                component="img"
                src="/icons/play-error.svg"
                position="absolute"
                width="50px"
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
                height="200px"
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
            </Box>
          ) : (
            <Box
              component="iframe"
              width="100%"
              height="200px"
              src={iframeSrc}
              title="YouTube Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              zIndex={2}
            />
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default _about_us_content_1;
