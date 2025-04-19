import {
  Container,
  Grid2 as Grid,
  Typography,
  Box,
  Button,
} from "@mui/material";
import React, { useState } from "react";

function _about_us_content_4() {
  const [showAll, setShowAll] = useState(false);

  const values = [
    {
      img: "/images/our-values/Group 94.png",
      title: "Respect",
      body: "We maintain our deep respect towards people and Mother Nature. We realize that the success of our mission depends largely on the active involvement of local people, partners, and all other stakeholders. It always becomes the utmost importance for us to demonstrate awareness and sensitivity towards local cultures, values, and traditions.",
    },
    {
      img: "/images/our-values/Group 108.png",
      title: "Evidence-based",
      body: "Our work is based on the best available science and we are committed to continuously conduct the soundest scientific researches. We strive to be expert in our field and persevere to constantly be able to deliver impactful, evidence-based solutions.",
    },
    {
      img: "/images/our-values/Group 96.png",
      title: "Innovation",
      body: "We strongly value creative ideas and are committed to push boundaries to provide new, effective solutions to handle potential challenges coming our way. We encourage innovative experimentation with new approaches and commit to share the results to the world.",
    },
    {
      img: "/images/our-values/Group 100.png",
      title: "Inclusiveness",
      body: "We believe in the importance of the diversity of views and perspectives in our work, as well as the inclusion of diverse backgrounds, beliefs and cultures in our organization. We encourage inclusive dialogue so that everyone has the opportunity to offer their viewpoint at the table.",
    },
    {
      img: "/images/our-values/Group 105.png",
      title: "Collaboration",
      body: "In resolving the global, interdisciplinary issues, we are open for collaboration with all layers of society that share mutual interest and earn the trust by being competent and constantly building rapport with them.",
    },
    {
      img: "/images/our-values/Group 102.png",
      title: "Sustainability",
      body: "We put the balance of all sustainability pillars as our utmost priority. Our work must be implemented through the most environmentally, economically, and socially sensitive manners in order to produce tangible, long-lasting benefits for both the ecosystem and the people.",
    },
  ];

  const visibleValues = showAll ? values : values.slice(0, 3);

  return (
    <Box mb="80px">
      <Container>
        <Typography
          variant="h3"
          color="primary"
          align="center"
          gutterBottom
          sx={{ mb: 2 }}
        >
          OUR VALUES
        </Typography>
        <Typography align="center" sx={{ mb: "50px" }}>
          As the basis of our organizational drive...
        </Typography>

        <Grid container justifyContent="space-around" rowGap={3}>
          {visibleValues.map((item, index) => (
            <Grid item key={index} size={{ md: 4.5 }}>
              <Box display="flex" gap="30px" alignItems="center">
                <Box
                  height="70px"
                  minWidth="70px"
                  maxWidth="70px"
                  display="block"
                  sx={{
                    backgroundImage: `url('${item.img}')`,
                    backgroundSize: "contain",
                  }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    fontSize="16px"
                    color="primary"
                    gutterBottom
                  >
                    {item.title}
                  </Typography>
                  <Typography>{item.body}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {!showAll && (
          <Box display="flex" justifyContent="center" mt="50px">
            <Button
              variant="contained"
              color="success"
              onClick={() => setShowAll(true)}
            >
              Load More
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default _about_us_content_4;
