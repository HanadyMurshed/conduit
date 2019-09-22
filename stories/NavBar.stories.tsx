import React from "react";
import { storiesOf } from "@storybook/react";
import NavBar from "../src/component/NavBar";
import { Button } from "@material-ui/core";
storiesOf("NavBar", module)
  .add("logged", () => (
    <NavBar title="conduit">
      <Button>SETTINGS</Button>
      <Button>MY FEEDS</Button>
      <Button>USER NAME</Button>
    </NavBar>
  ))
  .add("not logged", () => (
    <NavBar title="conduit">
      <Button>SIGN UP</Button>
      <Button>SIGN IN</Button>
    </NavBar>
  ));
