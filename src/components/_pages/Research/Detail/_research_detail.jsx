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
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_research_detail";

function _research_detail() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [isTopicShow, setIsTopicShow] = React.useState(true);
  const [isCategoryShow, setIsCategoryShow] = React.useState(true);

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
                      image: "/images/magazine-example.jpg",
                      label: "Peatland Agriculture Sustainability",
                      title:
                        "Integrated water management practice in tropical peatland agriculture has low carbon emissions and subsidence rates",
                      date: "Dec, 2025",
                    },
                    {
                      image: "/images/magazine-example.jpg",
                      label: "Peatland Agriculture Sustainability",
                      title:
                        "Integrated water management practice in tropical peatland agriculture has low carbon emissions and subsidence rates",
                      date: "Dec, 2025",
                    },
                    {
                      image: "/images/magazine-example.jpg",
                      label: "Peatland Agriculture Sustainability",
                      title:
                        "Integrated water management practice in tropical peatland agriculture has low carbon emissions and subsidence rates",
                      date: "Dec, 2025",
                    },
                    {
                      image: "/images/magazine-example.jpg",
                      label: "Peatland Agriculture Sustainability",
                      title:
                        "Integrated water management practice in tropical peatland agriculture has low carbon emissions and subsidence rates",
                      date: "Dec, 2025",
                    },
                    {
                      image: "/images/magazine-example.jpg",
                      label: "Peatland Agriculture Sustainability",
                      title:
                        "Integrated water management practice in tropical peatland agriculture has low carbon emissions and subsidence rates",
                      date: "Dec, 2025",
                    },
                    {
                      image: "/images/magazine-example.jpg",
                      label: "Peatland Agriculture Sustainability",
                      title:
                        "Integrated water management practice in tropical peatland agriculture has low carbon emissions and subsidence rates",
                      date: "Dec, 2025",
                    },
                  ].map((item) => (
                    <Grid item size={{ md: 3.8 }} mb={3}>
                      <Link href={`/`} passHref>
                        <CardActionArea>
                          <Box
                            height="450px"
                            // bgcolor="lightgray"
                            mb={1}
                            sx={{
                              backgroundImage: `url('${item.image}')`,
                              backgroundSize: "cover",
                            }}
                          ></Box>
                        </CardActionArea>
                      </Link>
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

      {isMobile ? <MobileView /> : null}
    </>
  );
}

export default _research_detail;
