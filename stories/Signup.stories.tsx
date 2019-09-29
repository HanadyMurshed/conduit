import React from "react";
import { storiesOf } from "@storybook/react";
import { SignUp, SignIn } from "../src/components/SignUpIn";

storiesOf("SignUp", module).add("SignUp", () => <SignUp />);
storiesOf("Signin", module).add("SignIn", () => <SignIn />);
