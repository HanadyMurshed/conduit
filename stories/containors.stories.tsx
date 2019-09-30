import React from "react";
import { storiesOf } from "@storybook/react";
import { SignUp, SignIn } from "../src/components/SignUpIn";
import { Settings } from "../src/components/Settings";
import { NewPost } from "../src/components/NewPost";

storiesOf("settings", module).add("settings", () => <Settings />);
storiesOf("SignUp", module).add("SignUp", () => <SignUp />);
storiesOf("Signin", module).add("SignIn", () => <SignIn />);
storiesOf("New Post", module).add("New Post", () => <NewPost />);
