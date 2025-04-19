import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Link from "next/link";

function _career_content_2() {
  return (
    <Box pt="70px">
      <Container>
        <Typography variant="h3" align="center" color="primary" mb="70px">
          WE HAVE 4 OPEN POSITION NOW!
        </Typography>

        {React.Children.toArray(
          [...new Array(5)].map((_, index) => (
            <Box bgcolor="#F5F5F5" padding="20px" borderRadius="8px" mb="20px">
              <Typography variant="h5" color="primary" gutterBottom>
                Position Name Here
              </Typography>

              <Typography>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type
              </Typography>

              <Box display="flex" justifyContent="flex-end" mt={4}>
                <Link href={`/career/${index}`}>
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{ py: "14px" }}
                  >
                    See Position
                  </Button>
                </Link>
              </Box>
            </Box>
          ))
        )}

        <Box mb={4} mt={4}>
          <Typography>
            We are always seeking talented people. In case you cannot find your
            desired position here, please send us your LinkedIn profile and give
            us your contact information. We will be in touch
          </Typography>
        </Box>

        <Button variant="outlined" sx={{ fontSize: "14px" }}>
          Share your LinkedIn Profile
        </Button>
      </Container>
    </Box>
  );
}

export default _career_content_2;
