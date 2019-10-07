import React from "react";
import { storiesOf } from "@storybook/react";
import { ButtonNavBar } from "../src/components/ButtonNavBar";
import { ButtonTag } from "../src/components/ButtonTag";
import { ButtonTagCancel } from "../src/components/ButtonTagCancel";
import { Index } from "../src/components/ButtonIndex";
import SettingsIcon from "@material-ui/icons/Settings";

storiesOf("Buttons", module)
  .add("Tag Button", () => <ButtonTag title="as" />)
  .add("NavBar Button", () => <ButtonNavBar title="Home" />)
  .add("NavBar Button with icon", () => (
    <ButtonNavBar
      icon={<SettingsIcon style={{ fontSize: 18, paddingRight: 8 }} />}
      title="Home"
    />
  ))
  .add("Pager Button", () => <Index index={1} />)
  .add("Tag Button With X", () => <ButtonTagCancel title="ok" />);
