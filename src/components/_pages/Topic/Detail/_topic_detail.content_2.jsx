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
      <Box mb="100px">
        <Typography variant="h4" color="primary">
          Food Security <br /> Latest Resource
        </Typography>

        <Grid container justifyContent="space-between" mt="40px">
          {React.Children.toArray(
            [
              { image: "", label: "TJF Greenboard | Issue 2: I Eat Everyday, does Food Crisis even Exist?", date: "Dec, 2025" },
              { image: "", label: "TJF Greenboard | Issue 2: I Eat Everyday, does Food Crisis even Exist?", date: "Dec, 2025" },
              { image: "", label: "TJF Greenboard | Issue 2: I Eat Everyday, does Food Crisis even Exist?", date: "Dec, 2025" },
              { image: "", label: "TJF Greenboard | Issue 2: I Eat Everyday, does Food Crisis even Exist?", date: "Dec, 2025" },
            ].map((item) => (
              <Grid item size={{ md: 2.8 }}>
                <CardActionArea>
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
  );
}

export default _topic_detail_content_2;
