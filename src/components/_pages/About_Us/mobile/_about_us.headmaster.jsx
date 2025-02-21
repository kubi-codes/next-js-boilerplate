import { Container, Grid2 as Grid, Box, Typography } from "@mui/material";
import React from "react";

function _about_us_headmaster() {
  return (
    <Box minHeight="150vh" paddingTop="8vh" position="relative">
      <Container>
        <Box mt="50px">
          <Typography variant="h1" color="primary" gutterBottom>
            WHO WE ARE?
          </Typography>

          <Typography>
            Tay Juhana Foundation (TJF) is a nonprofit organization dedicated to
            promote the advocacy of cultivation of suboptimal lands into
            productive lands, through the most environmentally, economically,
            and socially sustainable manner. <br />
            <br /> Our work is based on the prevalence of food insecurity and
            undernourishment regionally and globally. It is largely exacerbated
            by climate-related shocks, social conflict and violence, and other
            challenges caused by economic slowdowns.
            <br />
            <br />
            Legally established in 2013 and actively operated since 2017, TJF is
            now ready to be an agent of change for the mentioned causes. We
            welcome any collaboration from both local and international
            communities. Together, we can contribute more through various
            research, technology, and community development projects within he
            area of sustainable agriculture in suboptimal lands. Our aspiration
            is to improve food security while combatting the adverse effects of
            climate change and building self-sufficient communities.
            <br />
            <br /> Our approach is adaptive and philanthropic while being
            critical and constructive. We are willing to provide all resources
            we have for the greater good and are dedicated to utilize all
            available tools for the greatest possible impact. We work with a
            sense of urgency and commit to see problems from multiple
            perspectives. These values motivate us to produce high-quality
            result and encourage everyone to do the same in their own capacity.
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: "lightgray",
            height: "450px",
            width: "100%",
            backgroundImage: `url('/images/bg-aboutUs.jpg')`,
            backgroundSize: "cover",
          }}
        />

        <Box marginTop="70px" position="relative">
          <Box
            component="img"
            src="/icons/comma-top-success.svg"
            position="absolute"
            top="-50px"
            left={0}
            width="60px"
          />
          <Typography
            textAlign="right"
            variant="h3"
            color="success"
            lineHeight="48px"
          >
            Providing Food <br /> for Humanity through <br /> Sustainable
            Suboptimal
            <br /> Land Cultivation
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default _about_us_headmaster;
