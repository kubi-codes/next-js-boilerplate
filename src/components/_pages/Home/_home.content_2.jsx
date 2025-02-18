import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Typography,
  Popover,
  IconButton,
} from "@mui/material";
import React from "react";
import Link from "next/link";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_home.content_2";

function _home_content_2() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [variant, setVariant] = React.useState("bg-indonesian.png");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Box
        minHeight="90vh"
        display={isMobile ? "none" : "flex"}
        alignItems="center"
        position="relative"
      >
        <Container>
          <Grid container justifyContent="space-between">
            <Grid
              item
              size={{ md: 3.5 }}
              display="flex"
              height="400px"
              alignItems="center"
            >
              <Box>
                <Box
                  bgcolor={(props) => props.palette.warning.main}
                  display="inline-block"
                  padding={1}
                  paddingX={2}
                  mb={1}
                >
                  <Typography color="#fff">
                    Suboptimal Land Agriculture Initiatives
                  </Typography>
                </Box>
                <Typography variant="h4" color="primary" gutterBottom>
                  Behind the Story:
                </Typography>
                <Typography variant="h5" color="primary" sx={{ mb: 2 }}>
                  The Journey to Successful Suboptimal Land Farming
                </Typography>
                <Typography sx={{ mb: 4 }}>
                  Discover how Indonesian farmers are transforming suboptimal
                  land into thriving farms and ensuring food security for their
                  community.
                </Typography>
                <Button variant="contained" color="success">
                  Read Full Story
                </Button>
              </Box>
            </Grid>
            <Grid item size={{ md: 7 }}>
              <Box position="relative" height="400px">
                {/* Sumatra */}
                <Box
                  sx={{
                    width: "100px",
                    height: "100px",
                    position: "absolute",
                    left: "8%",
                    top: "15%",
                    zIndex: 2,
                    cursor: "pointer",
                  }}
                  onMouseOver={() => setVariant("bg-indonesian-1.png")}
                  onMouseOut={() => setVariant("bg-indonesian.png")}
                  aria-describedby={id}
                  onClick={handleClick}
                />

                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <Box
                    padding="20px"
                    width="400px"
                    minHeight="625px"
                    position="relative"
                  >
                    <IconButton
                      sx={{ position: "absolute", right: 12, top: 5 }}
                      onClick={handleClose}
                    >
                      <img src="/icons/close.svg" />
                    </IconButton>

                    <Box mb="80px" mt="20px">
                      <Link href="#">
                        <Box
                          bgcolor="lightgray"
                          minHeight="200px"
                          position="relative"
                        >
                          <Box
                            bgcolor="#fff"
                            height="100px"
                            boxShadow="0px 1px 1px rgba(0, 0, 0, 0.1)"
                            position="absolute"
                            width="90%"
                            bottom="-50px"
                            left={0}
                            padding="10px 20px"
                          >
                            <Typography
                              variant="body2"
                              color="secondary"
                              gutterBottom
                            >
                              Sumatera - Peatland - Horticulture
                            </Typography>
                            <Typography
                              variant="h6"
                              fontSize="16px"
                              sx={{
                                display: "-webkit-box",
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                WebkitLineClamp: 2, // Membatasi ke 2 baris
                              }}
                            >
                              Rekontruksi Lahan Pertanian dengan Lahan
                              Suboptimal
                            </Typography>
                          </Box>
                        </Box>
                      </Link>
                    </Box>

                    <Box component="hr" mb="30px" />

                    <Box>
                      <Link href="#">
                        <Box
                          bgcolor="lightgray"
                          minHeight="200px"
                          position="relative"
                        >
                          <Box
                            bgcolor="#fff"
                            height="100px"
                            boxShadow="0px 1px 1px rgba(0, 0, 0, 0.1)"
                            position="absolute"
                            width="90%"
                            bottom="-50px"
                            left={0}
                            padding="10px 20px"
                          >
                            <Typography
                              variant="body2"
                              color="secondary"
                              gutterBottom
                            >
                              Sumatera - Peatland - Horticulture
                            </Typography>
                            <Typography
                              variant="h6"
                              fontSize="16px"
                              sx={{
                                display: "-webkit-box",
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                WebkitLineClamp: 2, // Membatasi ke 2 baris
                              }}
                            >
                              Rekontruksi Lahan Pertanian dengan Lahan
                              Suboptimal
                            </Typography>
                          </Box>
                        </Box>
                      </Link>
                    </Box>
                  </Box>
                </Popover>

                {/* Kalimantan */}
                <Box
                  sx={{
                    width: "70px",
                    height: "70px",
                    position: "absolute",
                    left: "21.5vw",
                    transform: "translate(-50%, 0)",
                    top: "30%",
                    zIndex: 2,
                    cursor: "pointer",
                  }}
                />
              </Box>

              {/* Papua */}
              <Box
                sx={{
                  width: "70px",
                  height: "70px",
                  position: "absolute",
                  right: "-30px",
                  transform: "translate(-50%, 0)",
                  top: "50%",
                  zIndex: 2,
                  cursor: "pointer",
                }}
              />

              <Box
                sx={{
                  height: variant === "bg-indonesian.png" ? "400px" : "410px",
                  backgroundImage: `url('/images/${variant}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  position: "absolute",
                  backgroundPosition: "center",

                  width: variant === "bg-indonesian.png" ? "60vw" : "61vw",
                  right: variant === "bg-indonesian.png" ? -8 : -26,
                  top: "25%",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {isMobile ? <MobileView /> : null}
    </>
  );
}

export default _home_content_2;
