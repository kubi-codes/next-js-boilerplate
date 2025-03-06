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

function _research_detail() {
  const [isTopicShow, setIsTopicShow] = React.useState(true);
  const [isCategoryShow, setIsCategoryShow] = React.useState(true);

  return (
    <Box pt="100px" pb="5%">
      <Container>
        <Typography
          variant="h1"
          color="primary"
          fontFamily="Poppins"
          fontWeight="600"
          sx={{ mb: "15px" }}
        >
          PUBLICATION
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
              <Grid item size={{ xs: 5.8 }} mb={3}>
                <Link href={`/`} passHref>
                  <CardActionArea>
                    <Box
                      height="210px"
                      // bgcolor="lightgray"
                      mb={1}
                      sx={{
                        backgroundImage: `url('${item.image}')`,
                        backgroundSize: "cover",
                      }}
                    ></Box>
                  </CardActionArea>
                </Link>
                <Typography color="warning" fontSize="10px" mt={0.5}>
                  {item.label}
                </Typography>
                <Typography color="secondary" fontSize="12x" my={0.5}>
                  {item.date}
                </Typography>
                <Link href={`/`} passHref>
                  <Typography variant="h6" fontSize="12px">
                    {item.title}
                  </Typography>
                </Link>
              </Grid>
            ))
          )}

          <Box display="flex" width="100%" justifyContent="center" mt="30px" mb="50px">
            <Pagination
              count={10}
              siblingCount={0}
              variant="outlined"
              shape="rounded"
              sx={{
                "& .MuiButtonBase-root": {
                  border: "none",
                  backgroundColor: "#D9D9D9",
                  paddingX: "5px",
                  paddingY: "5px",
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
      </Container>
    </Box>
  );
}

export default _research_detail;
