import React from "react";
import { storiesOf } from "@storybook/react";
import { Header } from "../src/components/Header";
import { UserHeader } from "../src/components/HeaderUser";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Titillium Web", "Source Serif Pro", "Merriweather Sans"].join(
      ","
    )
  }
});
storiesOf("Header", module)
  .add("Main Header", () => (
    <ThemeProvider theme={theme}>
      <Header />{" "}
    </ThemeProvider>
  ))
  .add("User Header", () => (
    <UserHeader username="Hanady" ButtonText="Edit Profile Setting" />
  ));
