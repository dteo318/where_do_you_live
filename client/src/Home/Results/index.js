import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Review from "./review";
import Map from "./map";

const Results = ({ resultsData, center }) => {
  return (
    <Grid container spacing={3} marginTop={1}>
      <Grid item xs={12} sm={7} md={9}>
        <Map markers={resultsData.map((data) => data.coords)} center={center} />
      </Grid>
      <Grid item xs={12} sm={5} md={3}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5">Location Reviews</Typography>
          <Box
            sx={{
              marginTop: "1rem",
              display: "flex",
              flexDirection: "column",
              overflow: "auto",
              maxHeight: "70vh",
              gap: "1rem",
            }}
          >
            {resultsData.map((data, idx) => (
              <Review reviewData={data} key={idx} />
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Results;
