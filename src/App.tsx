import React from "react";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import Grid from "@material-ui/core/Grid";

import "./App.css";

const App: React.FC = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Navbar />
        <Header />
      </Grid>
    </Grid>
  );
};

export default App;
