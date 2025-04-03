import {
  Box,
  Container,
  Grid2 as Grid,
  Typography,
  CardActionArea,
  TextField,
  IconButton,
  Button,
  FormControlLabel,
  Checkbox,
  Chip,
  Grow,
  Pagination,
  Slide,
  Dialog,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_research_detail";
import GlobeIcon from "@/components/shared/icons/globe";
import ChevronIcon from "@/components/shared/icons/chevronDown";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function _research_detail() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [isTopicShow, setIsTopicShow] = React.useState(true);
  const [isCategoryShow, setIsCategoryShow] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box pt="10%" pb="5%" display={isMobile ? "none" : "block"}>
        <Container>
          <Typography
            component="h1"
            variant="h3"
            color="primary"
            fontFamily="Poppins"
            fontWeight="600"
          >
            PUBLICATION
          </Typography>

          <Grid container justifyContent="space-between" mt="70px">
            <Grid size={{ md: 3 }}>
              <Typography
                variant="h4"
                color="primary"
                fontFamily="Poppins"
                fontWeight="700"
                gutterBottom
              >
                Filter
              </Typography>

              <TextField
                placeholder="Search"
                fullWidth
                slotProps={{
                  input: {
                    endAdornment: (
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    ),
                  },
                }}
              />

              {/* Topic */}
              <Box
                display="flex"
                justifyContent="space-between"
                borderBottom="1px solid #979797"
                alignItems="center"
                pb="10px"
                pt="30px"
              >
                <Typography
                  fontSize="19px"
                  fontFamily="Poppins"
                  fontWeight="700"
                >
                  Topic
                </Typography>
                <IconButton onClick={() => setIsTopicShow(!isTopicShow)}>
                  {isTopicShow ? (
                    <KeyboardArrowDownIcon htmlColor="#979797" />
                  ) : (
                    <KeyboardArrowUpIcon htmlColor="#979797" />
                  )}
                </IconButton>
              </Box>

              <Grow in={isTopicShow} unmountOnExit>
                <Box mt={3} position="relative">
                  <Box mb={2}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="flex-end"
                        >
                          <Typography fontWeight={500}>
                            Peatland Agriculture <br />
                            Sustainability
                          </Typography>

                          <Chip
                            color="#000000"
                            label="11"
                            sx={{ position: "absolute", right: 0 }}
                          />
                        </Box>
                      }
                    />
                  </Box>

                  <Box mb={2}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="flex-end"
                        >
                          <Typography fontWeight={500}>
                            Sustainability
                            <br /> Food System
                          </Typography>

                          <Chip
                            color="#000000"
                            label="11"
                            sx={{ position: "absolute", right: 0 }}
                          />
                        </Box>
                      }
                    />
                  </Box>

                  <Box>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="flex-end"
                        >
                          <Typography fontWeight={500}>
                            Coconut Research <br />
                            Center
                          </Typography>

                          <Chip
                            color="#000000"
                            label="11"
                            sx={{ position: "absolute", right: 0 }}
                          />
                        </Box>
                      }
                    />
                  </Box>
                </Box>
              </Grow>

              <Box
                display="flex"
                justifyContent="space-between"
                borderBottom="1px solid #979797"
                alignItems="center"
                pb="10px"
                pt="30px"
              >
                <Typography
                  fontSize="19px"
                  fontFamily="Poppins"
                  fontWeight="700"
                >
                  Categories
                </Typography>
                <IconButton onClick={() => setIsCategoryShow(!isCategoryShow)}>
                  {isCategoryShow ? (
                    <KeyboardArrowDownIcon htmlColor="#979797" />
                  ) : (
                    <KeyboardArrowUpIcon htmlColor="#979797" />
                  )}
                </IconButton>
              </Box>

              <Grow in={isCategoryShow} unmountOnExit>
                <Box mt={3} position="relative">
                  <Box mb={2}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="flex-end"
                        >
                          <Typography fontWeight={500}>
                            Peatland Agriculture <br />
                            Sustainability
                          </Typography>

                          <Chip
                            color="#000000"
                            label="11"
                            sx={{ position: "absolute", right: 0 }}
                          />
                        </Box>
                      }
                    />
                  </Box>

                  <Box mb={2}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="flex-end"
                        >
                          <Typography fontWeight={500}>
                            Sustainability
                            <br /> Food System
                          </Typography>

                          <Chip
                            color="#000000"
                            label="11"
                            sx={{ position: "absolute", right: 0 }}
                          />
                        </Box>
                      }
                    />
                  </Box>

                  <Box>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="flex-end"
                        >
                          <Typography fontWeight={500}>
                            Coconut Research <br />
                            Center
                          </Typography>

                          <Chip
                            color="#000000"
                            label="11"
                            sx={{ position: "absolute", right: 0 }}
                          />
                        </Box>
                      }
                    />
                  </Box>
                </Box>
              </Grow>

              <Button variant="contained" color="success" sx={{ mt: 4 }}>
                Reset
              </Button>
            </Grid>
            <Grid size={{ md: 8.5 }}>
              <Grid container justifyContent="space-between" mt={5}>
                {React.Children.toArray(
                  [
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2024/11/LANDLIFE-1-pdf.jpg",
                      label: "Peatland Agriculture Sustainability",
                      title:
                        "LAND & LIFE | Edisi #1: Masih adakah lahan di masa depan?",
                      date: "Nov, 2024",
                    },
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2024/01/TJF-Greenboard-Isu-3-pdf.jpg",
                      label: "Peatland Agriculture Sustainability",
                      title:
                        "TJF Greenboard | Isu 3: Menjaga Ketahanan Pangan di Tengah Gempuran Perubahan Iklim",
                      date: "Jan, 2024",
                    },
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2024/01/annual-report-2023organized-pdf.jpg",
                      label: "Peatland Agriculture Sustainability",
                      title:
                        "Annual Report 2023: Enhancing Resilience in Food Security",
                      date: "Jan, 2023",
                    },
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2023/02/cover-annual-report-2022-18pages-196x300.jpg",
                      label: "Peatland Agriculture Sustainability",
                      title:
                        "Annual Report 2022: Securing Our Food from Crisis",
                      date: "Feb, 2023",
                    },
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2023/01/TJF-Brief-Dec-2022-1-pdf.jpg",
                      label: "Peatland Agriculture Sustainability",
                      title:
                        "Re-visiting Government of Indonesia Strategies on Food Crisis and Farmers’ Resilience",
                      date: "Dec, 2022",
                    },
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2022/06/TJF-Brief-June-2022-pdf.jpg",
                      label: "Peatland Agriculture Sustainability",
                      title:
                        "What Could be the Strategy to Strengthen Our Food System? A case study from Russia – Ukraine war",
                      date: "Jun, 2022",
                    },
                  ].map((item) => (
                    <Grid item size={{ md: 3.8 }} mb={3}>
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
                      <Typography color="warning" mt={0.5}>
                        {item.label}
                      </Typography>
                      <Typography color="secondary" fontSize="14px" my={0.5}>
                        {item.date}
                      </Typography>
                      <Link href={`/`} passHref>
                        <Typography variant="h6" fontSize="18px">
                          {item.title}
                        </Typography>
                      </Link>
                    </Grid>
                  ))
                )}

                <Box
                  display="flex"
                  width="100%"
                  justifyContent="center"
                  mt="30px"
                >
                  <Pagination
                    count={10}
                    variant="outlined"
                    shape="rounded"
                    sx={{
                      "& .MuiButtonBase-root": {
                        border: "none",
                        backgroundColor: "#D9D9D9",
                        paddingX: "32px",
                        paddingY: "22px",
                        fontWeight: 600,
                        color: "#979797",
                      },
                      "& .MuiPaginationItem-previousNext": {
                        backgroundColor: "#979797 !important",
                        color: "#fff",
                      },
                      "& .Mui-selected": {
                        backgroundColor: (props) =>
                          `${props.palette.success.main} !important`,
                        color: "#fff",
                      },
                      "& .Mui-selected:hover": {
                        backgroundColor: (props) => props.palette.success.main,
                      },
                      "& .MuiButtonBase-root:hover": {
                        backgroundColor: "#D9D9D9",
                      },
                    }}
                  />
                </Box>
              </Grid>
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

export default _research_detail;
