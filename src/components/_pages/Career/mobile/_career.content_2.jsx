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

function _career_content_2() {
  return (
    <Box pt="100px">
      <Container>
        <Typography variant="h3" align="center" color="primary">
          WE HAVE 4 OPEN POSITION NOW!
        </Typography>

        <Grid container justifyContent="space-between" sx={{ mt: "100px" }}>
          <Grid size={{ md: 3 }}>
            <Box mb={4}>
              <Typography>
                We are always seeking talented people. In case you cannot find
                your desired position here, please send us your LinkedIn profile
                and give us your contact information. We will be in touch
              </Typography>
            </Box>

            <Button variant="outlined" sx={{ fontSize: "16px" }} fullWidth>
              Share your LinkedIn Profile
            </Button>
          </Grid>
          <Grid size={{ md: 8 }}>
            {React.Children.toArray(
              [...new Array(5)].map(() => (
                <Box bgcolor="#F5F5F5" padding="20px" borderRadius="8px" mb="20px">
                  <Typography variant="h5" color="primary" gutterBottom>
                    Position Name Here
                  </Typography>

                  <Typography>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type
                  </Typography>

                  <Box display="flex" justifyContent="flex-end" mt={4}>
                    <Button
                      variant="contained"
                      color="warning"
                      sx={{ py: "15px" }}
                    >
                      See Position
                    </Button>
                  </Box>
                </Box>
              ))
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default _career_content_2;
