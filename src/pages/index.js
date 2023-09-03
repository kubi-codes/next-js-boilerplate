import Seo from "@/components/globals/Seo";
import { useRouter } from "next/router";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import { store, persistor } from "@/store"; // Impor store Redux Anda
import { useDispatch, useSelector } from "react-redux";
import * as authReducers from "@/store/reducers/auth.reducers";

export default function Home(props) {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      <Seo title="Home" url="" />
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
              Welcome
            </Typography>
            <Typography
              variant="h5"
              align="center"
              textTransform="uppercase"
              sx={{ mb: "50px", display: "block" }}
            >
              edit in src/pages/index.js
            </Typography>
            <Box mt="15px" display="flex" justifyContent="center">
              <Button size="small" onClick={() => router.replace("/test")}>
                Test Route
              </Button>
              <Button
                size="small"
                onClick={() => dispatch(authReducers.setToken("test"))}
              >
                Test redux
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
  await persistor.persist();
  const state = store.getState();

  // Return our response in the allData variable as an array
  const data = await Promise.all(
    endpoints.map((endpoint) => http.get(endpoint))
  ).then(([]) => ({}));

  return {
    props: {
      title: "Home",
      url: context?.resolvedUrl,
      data,
      state,
    }, // will be passed to the page component as props
  };
}
