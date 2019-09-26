import React from "react";
import { storiesOf } from "@storybook/react";
import NavBar from "../src/components/NavBar";
import NavBarVutton from "../src/components/ButtonNavBar";
storiesOf("Navigation Bar", module)
  .add("not logged", () => (
    <NavBar>
      <NavBarVutton title="Home" />
      <NavBarVutton title="Sign Up" />
      <NavBarVutton title="Sign In" />
    </NavBar>
  ))
  .add("logged", () => (
    <NavBar>
      <NavBarVutton title="Home" />
      <NavBarVutton title="New Post" />
      <NavBarVutton title="Settings" />
      <NavBarVutton title="baby" />
    </NavBar>
  ));
