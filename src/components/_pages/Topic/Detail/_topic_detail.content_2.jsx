import {
  Box,
  Container,
  Typography,
  Grid2 as Grid,
  CardActionArea,
  IconButton,
  Slide,
  Dialog,
  Button
} from "@mui/material";
import React from "react";
import Link from "next/link";
import GlobeIcon from "@/components/shared/icons/globe";
import ChevronIcon from "@/components/shared/icons/chevronDown";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_topic_detail.content_2";
import CircleNext from "@/components/shared/icons/CircleNext";
import CirclePrev from "@/components/shared/icons/CirclePrev";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function _topic_detail_content_2() {
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
      <Box display={isMobile ? "none" : "block"}>
        <Container>
          <Box mb="100px">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Typography variant="h4" color="primary">
                Food Security <br /> Latest Resource
              </Typography>

              <Box display="flex" gap="5px">
                <IconButton sx={{ padding: "5px", height: "45px" }}>
                  <CirclePrev color="#979797" fontSize="33px" />
                </IconButton>
                <IconButton sx={{ padding: "5px", height: "45px" }}>
                  <CircleNext color="#233E83" fontSize="33px" />
                </IconButton>
              </Box>
            </Box>

            <Grid container justifyContent="space-between" mt="40px">
              {React.Children.toArray(
                [
                  {
                    image: "",
                    label:
                      "TJF Greenboard | Issue 2: I Eat Everyday, does Food Crisis even Exist?",
                    date: "Dec, 2025",
                  },
                  {
                    image: "",
                    label:
                      "TJF Greenboard | Issue 2: I Eat Everyday, does Food Crisis even Exist?",
                    date: "Dec, 2025",
                  },
                  {
                    image: "",
                    label:
                      "TJF Greenboard | Issue 2: I Eat Everyday, does Food Crisis even Exist?",
                    date: "Dec, 2025",
                  },
                  {
                    image: "",
                    label:
                      "TJF Greenboard | Issue 2: I Eat Everyday, does Food Crisis even Exist?",
                    date: "Dec, 2025",
                  },
                ].map((item) => (
                  <Grid item size={{ md: 2.8 }}>
                    <CardActionArea onClick={handleClickOpen}>
                      <Box height="400px" bgcolor="lightgray" mb={1}></Box>
                    </CardActionArea>
                    <Typography color="secondary" fontSize="14px">
                      {item.date}
                    </Typography>
                    <Typography variant="h6">{item.label}</Typography>
                  </Grid>
                ))
              )}
            </Grid>
          </Box>
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

export default _topic_detail_content_2;
