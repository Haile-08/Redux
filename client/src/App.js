import { Grid } from "@mui/material";

import Applayout from "./components/applayout";

function App() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ backgroundColor: "#2f3542" }}
    >
      <Applayout />
    </Grid>
  );
}

export default App;
