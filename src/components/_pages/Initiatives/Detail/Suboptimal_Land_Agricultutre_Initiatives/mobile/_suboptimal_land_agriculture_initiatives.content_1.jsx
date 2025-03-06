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
  TextField,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

function _suboptimal_land_agriculture_initiatives_content_1() {
  const [isLocation, setIsLocation] = React.useState(true);
  const [isTypeOfLand, setIsTypeOfLand] = React.useState(true);
  const [isTypeOfComodity, setIsTypeOfComodity] = React.useState(true);

  return (
    <Box pt="50px" pb="50px">
      <Container>
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
          sx={{ mb: "40px" }}
        />

        {React.Children.toArray(
          [...new Array(9)].map(() => (
            <Grid size={{ md: 4 }}>
              <CardActionArea sx={{ mb: "50px" }}>
                <Box bgcolor="lightgray" height="230px" position="relative">
                  <Box
                    bgcolor="#fff"
                    height="100px"
                    boxShadow="0px 1px 1px rgba(0, 0, 0, 0.1)"
                    position="absolute"
                    width="90%"
                    bottom="-20px"
                    left={0}
                    padding="10px 10px"
                  >
                    <Typography variant="body2" color="secondary" gutterBottom>
                      Papua - Peatland - Horticulture
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
                      Transformasi Lahan Suboptimal: Pemasok Hasil Tani
                      se-Sorong Raya
                    </Typography>
                  </Box>
                </Box>
              </CardActionArea>
            </Grid>
          ))
        )}

        <Box display="flex" width="100%" justifyContent="center" mt="30px">
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
      </Container>
    </Box>
  );
}

export default _suboptimal_land_agriculture_initiatives_content_1;
