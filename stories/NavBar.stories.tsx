import React from "react";
import { storiesOf } from "@storybook/react";
import { NavBar } from "../src/components/NavBar";
import { ButtonNavBar } from "../src/components/ButtonNavBar";
storiesOf("Navigation Bar", module)
  .add("not logged", () => (
    <NavBar>
      <ButtonNavBar title="Home" />
      <ButtonNavBar title="Sign Up" />
      <ButtonNavBar title="Sign In" />
    </NavBar>
  ))
  .add("logged", () => (
    <NavBar>
      <ButtonNavBar title="Home" />
      <ButtonNavBar title="New Post" />
      <ButtonNavBar title="Settings" />
      <ButtonNavBar title="baby" />
    </NavBar>
  ));
