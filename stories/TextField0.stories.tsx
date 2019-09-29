import React from "react";
import { storiesOf } from "@storybook/react";
import { MyInput } from "../src/components/Input";

storiesOf("Input", module).add("ok", () => <MyInput />);
