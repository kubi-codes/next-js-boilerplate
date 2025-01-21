import { Container, Grid2 as Grid, Typography, Box } from "@mui/material";
import React from "react";

function _about_us_content_4() {
  return (
    <Box mb="150px">
      <Container>
        <Grid container justifyContent="center" mb="50px">
          <Grid item size={{ md: 9 }}>
            <Typography
              variant="h3"
              color="primary"
              align="center"
              gutterBottom
              sx={{ mb: 5 }}
            >
              OUR VALUES
            </Typography>
            <Typography align="center">
              As the basis of our organizational drive in achieving tangible
              results through longstanding commitment, we have set the following
              core values. These core values are not mere platitudes; they are
              deeply instilled within all who represent our organization and
              responsibly manifested by them at all levels of our work.
            </Typography>
          </Grid>
        </Grid>

        <Grid container justifyContent="space-around" rowGap={5}>
          {React.Children.toArray(
            [
              {
                img: "",
                title: "Respect",
                body: "We maintain our deep respect towards people and Mother Nature. We realize that the success of our mission depends largely on the active involvement of local people, partners, and all other stakeholders. It always becomes the utmost importance for us to demonstrate awareness and sensitivity towards local cultures, values, and traditions.",
              },
              {
                img: "",
                title: "Evidence-based",
                body: "Our work is based on the best available science and we are committed to continuously conduct the soundest scientific researches. We strive to be expert in our field and persevere to constantly be able to deliver impactful, evidence-based solutions.",
              },
              {
                img: "",
                title: "Innovation",
                body: "We strongly value creative ideas and are committed to push boundaries to provide new, effective solutions to handle potential challenges coming our way. We encourage innovative experimentation with new approaches and commit to share the results to the world.",
              },
              {
                img: "",
                title: "Inclusiveness",
                body: "We believe in the importance of the diversity of views and perspectives in our work, as well as the inclusion of diverse backgrounds, beliefs and cultures in our organization. We encourage inclusive dialogue so that everyone has the opportunity to offer their viewpoint at the table.",
              },
              {
                img: "",
                title: "Collaboration",
                body: "In resolving the global, interdisciplinary issues, we are open for collaboration with all layers of society that share mutual interest and earn the trust by being competent and constantly building rapport with them.",
              },
              {
                img: "",
                title: "Sustainability",
                body: "We put the balance of all sustainability pillars as our utmost priority. Our work must be implemented through the most environmentally, economically, and socially sensitive manners in order to produce tangible, long-lasting benefits for both the ecosystem and the people.",
              },
            ].map((item) => (
              <Grid item size={{ md: 4.5 }}>
                <Box display="flex" gap="30px" alignItems="center">
                  <Box
                    bgcolor="lightgray"
                    height="70px"
                    minWidth="70px"
                    maxWidth="70px"
                    display="block"
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      fontSize="18px"
                      color="primary"
                      gutterBottom
                    >
                      {item.title}
                    </Typography>
                    <Typography>{item.body}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </Box>
  );
}

export default _about_us_content_4;
