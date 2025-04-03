import {
  Box,
  Button,
  CardActionArea,
  Container,
  Grid2 as Grid,
  Typography,
  Slide,
  Dialog,
  IconButton,
} from "@mui/material";
import React from "react";
import Link from "next/link";

import GlobeIcon from "@/components/shared/icons/globe";
import ChevronIcon from "@/components/shared/icons/chevronDown";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_home.content_5";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function _home_content_5() {
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
      <Box mt="15vh" display={isMobile ? "none" : "block"}>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 4 }}
          >
            <Grid item size={{ md: 6 }}>
              <Typography variant="h4" color="primary" gutterBottom>
                LATEST ISSUES
              </Typography>
              <Typography>
                Uncover the secrets to thriving on less. Explore innovative
                farming practices for suboptimal lands in our new issue:
              </Typography>
            </Grid>
            <Grid item>
              <Link href={`/magazine`}>
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ padding: "16px 32px" }}
                >
                  View All
                </Button>
              </Link>
            </Grid>
          </Grid>

          <Grid container justifyContent="space-between">
            {React.Children.toArray(
              [
                {
                  image:
                    "https://tayjuhanafoundation.org/wp-content/uploads/2024/01/TJF-Greenboard-Isu-3-pdf.jpg",
                  label:
                    "TJF Greenboard | Isu 3: Menjaga Ketahanan Pangan di Tengah Gempuran Perubahan Iklim",
                  date: "Jan, 2024",
                },
                {
                  image:
                    "https://tayjuhanafoundation.org/wp-content/uploads/2025/02/Buku-Series-1-Wetland-2025-pdf.jpg",
                  label: "Buku Kisah Sukses Bertani di Lahan Basah",
                  date: "Feb, 2025",
                },
                {
                  image:
                    "https://tayjuhanafoundation.org/wp-content/uploads/2024/07/Brief-TJF-July-2024-Coconut-based-Agroforesty-pdf.jpg",
                  label:
                    "Coconut-based Agroforestry-Paludiculture to Improve Peatlands Sustainability and Food Security",
                  date: "Jul, 2024",
                },
                {
                  image:
                    "https://tayjuhanafoundation.org/wp-content/uploads/2023/12/TJF-POLICY-BRIEF-SEPT-2023-2-pdf.jpg",
                  label:
                    "TJF Policy Brief: Governance Strategies for Boosting Farmer Capacity and Productivity Amidst El-Nino Challenges in Indonesia",
                  date: "Sep, 2024",
                },
              ].map((item) => (
                <Grid item size={{ md: 2.8 }}>
                  <CardActionArea onClick={handleClickOpen}>
                    <Box
                      height="450px"
                      // bgcolor="lightgray"
                      mb={1}
                      sx={{
                        backgroundImage: `url('${item.image}')`,
                        backgroundSize: "100% 100%",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        border: "1px solid lightgray",
                      }}
                    ></Box>
                  </CardActionArea>
                  <Typography
                    sx={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      WebkitLineClamp: 3, // Membatasi ke 2 baris
                      mb: 1,
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography color="secondary" fontSize="14px">
                    {item.date}
                  </Typography>
                </Grid>
              ))
            )}
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

export default _home_content_5;
