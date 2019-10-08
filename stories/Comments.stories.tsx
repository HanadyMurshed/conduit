import React from "react";
import { storiesOf } from "@storybook/react";
import { CommenShow } from "../src/components/comment/CommentShow";
import { CommentWrite } from "../src/components/comment/CommentWrite";

storiesOf("Comments", module)
  .add("Show", () => <CommenShow />)
  .add("Hide", () => <CommentWrite />);
