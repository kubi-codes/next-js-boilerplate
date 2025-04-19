import {
  Container,
  Grid2 as Grid,
  Box,
  Typography,
  Button,
  Slide,
  CardActionArea,
  Dialog,
  IconButton
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_home.headmaster";
import GlobeIcon from "@/components/shared/icons/globe";
import ChevronIcon from "@/components/shared/icons/chevronDown";
import Link from "next/link";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function _home_headmaster() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        minHeight="90vh"
        paddingTop="8vh"
        position="relative"
        display={isMobile ? "none" : "block"}
      >
        <Container>
          <Grid container>
            <Grid
              item
              size={{ md: 6 }}
              display="flex"
              alignItems="center"
              sx={{ minHeight: "95vh" }}
            >
              <Box>
                <Typography variant="h1" color="primary" gutterBottom>
                  OUR FUTURE FOOD
                </Typography>
                <Box
                  sx={{
                    backgroundColor: (props) => props.palette.warning.main,
                  }}
                  display="inline-block"
                  pt={1.2}
                  px={1}
                  mb={3}
                >
                  <Typography variant="h1" color="#fff" y>
                    BEGINS HERE
                  </Typography>
                </Box>

                <Box width="80%" mb={4}>
                  <Typography>
                    The future of food begins here, on lands often overlooked:
                    suboptimal land. Let's unlock their potential and build a
                    sustainable future together.
                  </Typography>
                </Box>

                <Link href={`/our-story`}>
                  <Button variant="contained" color="success">
                    READ OUR STORY
                  </Button>
                </Link>

                <Grid
                  container
                  justifyContent="space-between"
                  mt={8}
                  width="95%"
                >
                  <Grid item size={{ md: 5.5 }}>
                    <Box component="hr" />
                    <CardActionArea onClick={handleClickOpen}>
                      <Typography color="secondary" sx={{ my: 1 }}>
                        Resources
                      </Typography>
                      <Typography variant="h6" lineHeight="22px">
                        Coconut-based Agroforestry Paludiculture to Improve
                        Peatlands Sustainability and Food Security
                      </Typography>
                    </CardActionArea>
                  </Grid>
                  <Grid item size={{ md: 5.5 }}>
                    <Box component="hr" />
                    <CardActionArea onClick={handleClickOpen}>
                      <Typography color="secondary" sx={{ my: 1 }}>
                        Resources
                      </Typography>
                      <Typography variant="h6" lineHeight="22px">
                        Integrated water management practice in tropical
                        peatland agriculture has low carbon emissions and
                        subsidence rates
                      </Typography>
                    </CardActionArea>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item size={{ md: 6 }}>
              <Box
                sx={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundImage: `url('/images/bg-homepage.jpg')`,
                  height: "103vh",
                  position: "absolute",
                  width: "50vw",
                  marginTop: "-8vh",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Box height="100vh" overflow="hidden">
          <Grid container>
            <Grid size={{ md: 6 }} position="relative">
              <Box position="absolute" top="20px" left="30px">
                <Link href="/">
                  <Box
                    component="img"
                    height="45px"
                    width="140px"
                    src={"/images/TJF-White-logo.png"}
                    alt="logo"
                    sx={{
                      filter: "drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.5))",
                    }}
                  ></Box>
                </Link>
              </Box>

              <Box
                height="100vh"
                mb={1}
                sx={{
                  backgroundImage: `url('/images/magazine-example.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></Box>
            </Grid>
            <Grid
              size={{ md: 6 }}
              sx={{
                backgroundColor: (theme) => theme.palette.primary.main,
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <IconButton
                sx={{ position: "absolute", top: "20px", right: "50px" }}
              >
                <Box display="flex" alignItems="center" gap={1.2}>
                  <GlobeIcon color={"#fff"} />
                  <ChevronIcon color={"#fff"} />
                </Box>
              </IconButton>

              <Box p={5}>
                <Typography variant="h1" color="#fff" sx={{ mb: 2 }}>
                  The Magazine
                </Typography>
                <Typography fontSize="18px" color="#fff">
                  March 2024
                </Typography>

                <Box
                  sx={{
                    borderBottom: "1px solid #fff",
                    maxWidth: "60%",
                    my: "20px",
                  }}
                />

                <Typography fontSize="18px" color="#fff" sx={{ mb: 1 }}>
                  Tema : Tema 1
                </Typography>

                <Typography fontSize="18px" color="#fff" sx={{ mb: 5 }}>
                  Contributor : Contributor 1, Contributor 2
                </Typography>

                <Box width="80%">
                  <Typography fontSize="12px" color="#fff" sx={{ mb: 5 }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Typography>
                </Box>

                <Box display="flex" gap={2}>
                  <Button color="success" variant="contained">
                    Download PDF Mobile
                  </Button>
                  <Button color="warning" variant="contained">
                    Download Print Version
                  </Button>
                </Box>
              </Box>

              <Box
                bgcolor={(props) => props.palette.warning.main}
                height="100vh"
                width="70px"
                position="relative"
                mt={-1}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "-10%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{
                      transform: "rotate(270deg)",
                      width: "200px",
                      "&:hover": {
                        backgroundColor: (props) => props.palette.warning.main,
                      },
                    }}
                    disableElevation
                    disableTouchRipple
                  >
                    Read
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Dialog>

      {isMobile ? <MobileView /> : null}
    </>
  );
}

export default _home_headmaster;
