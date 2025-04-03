import {
  Box,
  Container,
  Grid2 as Grid,
  Typography,
  CardActionArea,
  IconButton,
  Grow,
  FormControlLabel,
  Checkbox,
  Chip,
  Button,
  Pagination,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_magazine.content_1";
import Link from "next/link";

function _suboptimal_land_agriculture_initiatives_content_1() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [isCategories, setIsCategories] = React.useState(true);

  const [categories, setCategories] = React.useState([]);

  const handleCategories = (value, variant) => {
    if (!value) {
      setCategories(categories?.filter((item) => item !== variant));
    } else {
      setCategories([...categories, ...[variant]]);
    }
  };

  const handleReset = () => {
    setCategories([]);
  };

  return (
    <>
      <Box pt="150px" pb="100px" display={isMobile ? "none" : "block"}>
        <Container>
          <Typography variant="h1" color="primary" sx={{ mb: "70px" }}>
            MAGAZINE
          </Typography>

          <Grid container justifyContent="space-between">
            <Grid size={{ md: 2.5 }}>
              <Typography
                variant="h4"
                color="primary"
                fontFamily="Poppins"
                fontWeight="700"
                gutterBottom
              >
                Filter
              </Typography>

              {/* Topic */}
              <Box
                display="flex"
                justifyContent="space-between"
                borderBottom="1px solid #979797"
                alignItems="center"
                pt="10px"
              >
                <Typography
                  fontSize="19px"
                  fontFamily="Poppins"
                  fontWeight="700"
                >
                  Categories
                </Typography>
                <IconButton onClick={() => setIsCategories(!isCategories)}>
                  {isCategories ? (
                    <KeyboardArrowDownIcon htmlColor="#979797" />
                  ) : (
                    <KeyboardArrowUpIcon htmlColor="#979797" />
                  )}
                </IconButton>
              </Box>

              <Grow in={isCategories} unmountOnExit>
                <Box mt={1} position="relative">
                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={(e) =>
                            handleCategories(e.target.checked, "Categories 1")
                          }
                          checked={Boolean(
                            categories?.find((item) => item === "Categories 1")
                          )}
                        />
                      }
                      label={
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="flex-end"
                        >
                          <Typography fontWeight={500}>Categories 1</Typography>

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

              <Button
                variant="contained"
                color="success"
                sx={{ mt: 3, py: "15px" }}
                onClick={handleReset}
              >
                Reset
              </Button>
            </Grid>
            <Grid size={{ md: 8.7 }} sx={{ pt: "100px" }}>
              <Grid container justifyContent="space-between">
                {React.Children.toArray(
                  [
                    {
                      image: "/images/magazine-example.jpg",
                      label: `Integrated water management
practice in tropical peatland
agriculture has low carbon
emissions and subsidence rates`,
                      category: "Magazine Categori",
                      date: "Dec, 2025",
                    },
                    {
                      image: "/images/magazine-example.jpg",
                      label: `Integrated water management
practice in tropical peatland
agriculture has low carbon
emissions and subsidence rates`,
                      category: "Magazine Categori",
                      date: "Dec, 2025",
                    },
                    {
                      image: "/images/magazine-example.jpg",
                      label: `Integrated water management
practice in tropical peatland
agriculture has low carbon
emissions and subsidence rates`,
                      category: "Magazine Categori",
                      date: "Dec, 2025",
                    },
                    {
                      image: "/images/magazine-example.jpg",
                      label: `Integrated water management
practice in tropical peatland
agriculture has low carbon
emissions and subsidence rates `,
                      category: "Magazine Categori",
                      date: "Dec, 2025",
                    },
                    {
                      image: "/images/magazine-example.jpg",
                      label: `Integrated water management
practice in tropical peatland
agriculture has low carbon
emissions and subsidence rates `,
                      category: "Magazine Categori",
                      date: "Dec, 2025",
                    },
                    {
                      image: "/images/magazine-example.jpg",
                      label: `Integrated water management
practice in tropical peatland
agriculture has low carbon
emissions and subsidence rates `,
                      category: "Magazine Categori",
                      date: "Dec, 2025",
                    },
                  ].map((item) => (
                    <Grid item size={{ md: 3.7 }} sx={{ mb: 3 }}>
                      <CardActionArea>
                        <Box
                          height="450px"
                          // bgcolor="lightgray"
                          mb={1}
                          sx={{
                            backgroundImage: `url('${item.image}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        ></Box>
                      </CardActionArea>
                      <Typography color="warning">{item.category}</Typography>{" "}
                      <Typography color="secondary" sx={{ my: 1 }}>
                        {item.date}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {item.label}
                      </Typography>
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

export default _suboptimal_land_agriculture_initiatives_content_1;
