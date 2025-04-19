import {
  Container,
  Typography,
  Box,
  Button,
} from "@mui/material";
import React from "react";

function _career_detail() {
  return (
    <>
      <Box pt="20%" minHeight="100vh">
        <Container>
          <Typography variant="h1" align="center" color="primary">
            Lorem Ipsum
          </Typography>

          <Box display="flex" justifyContent="center" py={2} gap="10px">
            <Button
              variant="outlined"
              color="primary"
              sx={{ height: "10px !important" }}
            >
              Tag Topic
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{ height: "10px !important" }}
            >
              Tag Topic
            </Button>
          </Box>

          <Typography variant="h5" gutterBottom>
            Lorem Ipsum
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            delectus tenetur ea. Culpa, aliquid distinctio natus dolorem, unde
            necessitatibus pariatur id hic commodi sunt illo reprehenderit, nisi
            corrupti sit cum?
          </Typography>

          <Box
            bgcolor={(props) => props.palette.primary.main}
            padding="30px"
            borderRadius="8px"
            mt="50px"
          >
            <Typography
              align="center"
              color="#fff"
              fontSize="24px"
              gutterBottom
            >
              If you are interested in this position, please send your resume to
              email
            </Typography>
            <Typography align="center" color="warning" variant="h4">
              hrd@tjf.com
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default _career_detail;
