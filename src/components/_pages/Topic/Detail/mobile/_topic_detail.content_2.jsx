import {
  Box,
  Container,
  Typography,
  Grid2 as Grid,
  CardActionArea,
} from "@mui/material";
import React from "react";

function _topic_detail_content_2() {
  return (
    <Container>
      <Box mb="100px" mt="20px">
        <Typography variant="h5" color="primary">
          Food Security <br /> Latest Resource
        </Typography>

        <Grid container justifyContent="space-between" mt="20px">
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
              <Grid item size={{ xs: 5.8 }} sx={{ mb: 1.5 }}>
                <CardActionArea>
                  <Box height="210px" bgcolor="lightgray" mb={1}></Box>
                </CardActionArea>
                <Typography color="secondary" fontSize="12px" gutterBottom>
                  {item.date}
                </Typography>
                <Typography variant="h6" fontSize="12px">
                  {item.label}
                </Typography>
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Container>
  );
}

export default _topic_detail_content_2;
