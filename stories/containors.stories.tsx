import React from "react";
import { storiesOf } from "@storybook/react";
import { SignUp } from "../src/components/sign-in-up/SignUp";
import { SignIn } from "../src/components/sign-in-up/SignIn";
import { Settings } from "../src/components/settings/Settings";
import { NewArticle } from "../src/components/newArticle/NewArticle";
import { TagsPanel } from "../src/components/TagPanel";

storiesOf("Containors", module)
  .add("Settings", () => (
    <Settings userName="Hanady" email="Hanady_Morshed@hotmail.com" />
  ))
  .add("Sign Up", () => <SignUp />)
  .add("Sign In", () => <SignIn />)
  .add("New Post", () => <NewArticle />)
  .add("Tag Panel", () => <TagsPanel active="ok" tags={["ok", "no"]} />);
