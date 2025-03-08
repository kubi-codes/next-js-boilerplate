import React from "react";
import {
  Container,
  Grid2 as Grid,
  Box,
  Typography,
  CardActionArea,
} from "@mui/material";

function _about_us_content_7() {
  return (
    <Box pb="50px" >
      <Container>
        {React.Children.toArray(
          [
            {
              name: "Tay Enoku",
              job: "General Director",
              desc: `lorem ipsum sir dolor amet`,
            },
            {
              name: "Tay Ciaying",
              job: "Executive Director",
              desc: `lorem ipsum sir dolor amet`,
            },
            {
              name: "Christian Hsieh",
              job: "Advisory Boar Member",
              desc: `lorem ipsum sir dolor amet`,
            },
            {
              name: "Nurul Ihsan Fawzi",
              job: "Opereasional Manager",
              desc: `lorem ipsum sir dolor amet`,
            },
            {
              name: "Research & Learning",
              desc: `lorem ipsum sir dolor amet`,
            },
            {
              name: "Program",
              desc: `lorem ipsum sir dolor amet`,
            },
            {
              name: "Media & Communication",
              desc: `lorem ipsum sir dolor amet`,
            },
            {
              name: "Office",
              desc: `lorem ipsum sir dolor amet`,
            },
          ]?.map((item) => (
            <Box border="1px solid #233E83" borderRadius="8px" mb="20px">
              <CardActionArea
                sx={{
                  padding: 1.5,
                  paddingY: 1.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography variant="h6">{item?.name}</Typography>
                  <Typography>{item?.job}</Typography>
                </Box>

                <img src="/icons/chevron-down-warning.svg" alt="icons" />
              </CardActionArea>
            </Box>
          ))
        )}
      </Container>
    </Box>
  );
}

export default _about_us_content_7;
