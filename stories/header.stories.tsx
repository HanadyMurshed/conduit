import React from "react";
import { storiesOf } from "@storybook/react";
import { Header } from "../src/components/Header";
import { UserHeader } from "../src/components/HeaderUser";

storiesOf("Header", module)
  .add("Main Header", () => <Header />)
  .add("User Header", () => (
    <UserHeader username="Hanady" ButtonText="Edit Profile Setting" />
  ));
