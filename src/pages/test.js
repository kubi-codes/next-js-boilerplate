import Seo from "@/components/globals/Seo";
import { useRouter } from "next/router";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";

export default function Test() {
  const router = useRouter();

  return (
    <>
      <Seo title="Test" url="" />
      <main>
        <Grid
          container
          justifyContent="center"
          height="100vh"
          alignItems="center"
        >
          <Grid item md={3}>
            <Typography
              variant="h1"
              align="center"
              fontWeight={900}
              sx={{ fontSize: "90px" }}
              gutterBottom
            >
              Testing Route
            </Typography>
            <Typography
              variant="h5"
              align="center"
              textTransform="uppercase"
              sx={{ mb: "50px", display: "block" }}
            >
              edit in src/pages/test.js
            </Typography>
            <Box mt="15px" display="flex" justifyContent="center">
              <Button size="small" onClick={() => router.replace("/")}>
                Back
              </Button>
            </Box>
          </Grid>
        </Grid>
      </main>
    </>
  );
}

// Page Config
// Home.disabledLayout = true;

export async function getServerSideProps(context) {
  const endpoints = [];

  // Return our response in the allData variable as an array
  const data = await Promise.all(
    endpoints.map((endpoint) => http.get(endpoint))
  ).then(([]) => ({}));

  return {
    props: {
      title: "Home",
      url: context?.resolvedUrl,
      data,
    }, // will be passed to the page component as props
  };
}
