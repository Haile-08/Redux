import { Grid } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Applayout from "./components/applayout";
import Addpage from "./components/pages/Addpage";
import Editpage from "./components/pages/Editpage";

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
      <Routes>
        <Route path="/" element={<Applayout />} />
        <Route path="/add" element={<Addpage />} />
        <Route path="/edit" element={<Editpage />} />
      </Routes>
      <Applayout />
    </Grid>
  );
}

export default App;
