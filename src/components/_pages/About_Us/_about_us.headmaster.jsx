import {
  Container,
  Grid2 as Grid,
  Box,
  Typography,
  Button,
} from "@mui/material";
import React from "react";

function _about_us_headmaster() {
  return (
    <Box minHeight="150vh" paddingTop="8vh" position="relative">
      <Container>
        <Grid container>
          <Grid
            item
            size={{ md: 6 }}
            display="flex"
            alignItems="center"
            sx={{ minHeight: "95vh" }}
          >
            <Box maxWidth="70%" mt="10vh">
              <Typography variant="h1" color="primary" gutterBottom>
                WHO WE ARE?
              </Typography>

              <Typography>
                Tay Juhana Foundation (TJF) is a nonprofit organization
                dedicated to promote the advocacy of cultivation of suboptimal
                lands into productive lands, through the most environmentally,
                economically, and socially sustainable manner. <br />
                <br /> Our work is based on the prevalence of food insecurity
                and undernourishment regionally and globally. It is largely
                exacerbated by climate-related shocks, social conflict and
                violence, and other challenges caused by economic slowdowns.
                <br />
                <br />
                Legally established in 2013 and actively operated since 2017,
                TJF is now ready to be an agent of change for the mentioned
                causes. We welcome any collaboration from both local and
                international communities. Together, we can contribute more
                through various research, technology, and community development
                projects within he area of sustainable agriculture in suboptimal
                lands. Our aspiration is to improve food security while
                combatting the adverse effects of climate change and building
                self-sufficient communities.
                <br />
                <br /> Our approach is adaptive and philanthropic while being
                critical and constructive. We are willing to provide all
                resources we have for the greater good and are dedicated to
                utilize all available tools for the greatest possible impact. We
                work with a sense of urgency and commit to see problems from
                multiple perspectives. These values motivate us to produce
                high-quality result and encourage everyone to do the same in
                their own capacity.
              </Typography>
            </Box>
          </Grid>
          <Grid item size={{ md: 6 }}>
            <Box
              sx={{
                backgroundColor: "lightgray",
                height: "103vh",
                position: "absolute",
                width: "50vw",
                marginTop: "-8vh",
              }}
            />

            <Box marginTop="104vh" position="relative">
              <Box component="img" src="/icons/comma-top-success.svg" position="absolute" top="-60px" left={0} />
              <Typography textAlign="right" variant="h3" color="success" lineHeight="63px">
                Providing Food for Humanity <br /> through Sustainable
                Suboptimal
                <br /> Land Cultivation
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default _about_us_headmaster;
