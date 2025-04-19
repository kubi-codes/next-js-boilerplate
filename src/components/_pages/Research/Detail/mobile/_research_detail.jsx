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
import Link from "next/link";

function _research_detail() {

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
                title: "Annual Report 2022: Securing Our Food from Crisis",
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
              <Grid item size={{ xs: 5.8 }} mb={3}>
                <Link href={`/`} passHref>
                  <CardActionArea>
                    <Box
                      height="210px"
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
                </Link>
                <Typography color="warning" fontSize="10px" mt={0.5}>
                  {item.label}
                </Typography>
                <Typography color="secondary" fontSize="12x" my={0.5}>
                  {item.date}
                </Typography>
                <Link href={`/`} passHref>
                  <Typography
                    variant="h6"
                    fontSize="12px"
                    sx={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      WebkitLineClamp: 3, // Membatasi ke 2 baris
                    }}
                  >
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
            mb="50px"
          >
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
