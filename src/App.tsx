import React from "react";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import Grid from "@material-ui/core/Grid";

import "./App.css";

const App: React.FC = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <NavBar />
        <Header />
      </Grid>
    </Grid>
  );
};

export default App;
