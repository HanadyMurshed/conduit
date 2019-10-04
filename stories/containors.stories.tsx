import React from "react";
import { storiesOf } from "@storybook/react";
import { SignUp, SignIn } from "../src/components/SignUpIn";
import { Settings } from "../src/components/Settings";
import { NewPost } from "../src/components/NewPost";
import { TagsPanel } from "../src/components/TagPanel";

storiesOf("Containors", module)
  .add("Settings", () => (
    <Settings userName="Hanady" email="Hanady_Morshed@hotmail.com" />
  ))
  .add("Sign Up", () => <SignUp />)
  .add("Sign In", () => <SignIn />)
  .add("New Post", () => <NewPost />)
  .add("Tag Panel", () => <TagsPanel active="ok" tags={["ok", "no"]} />);
