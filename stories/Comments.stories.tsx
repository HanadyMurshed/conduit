import React from "react";
import { storiesOf } from "@storybook/react";
import { CommenShow } from "../src/components/comment/CommentShow";
import { CommentWrite } from "../src/components/comment/CommentWrite";

storiesOf("Comments", module)
  .add("Show", () => (
    <CommenShow
      comment={{
        body: "dsssssss",
        updatedAt: "",
        createdAt: "2019/5/2",
        author: { username: "Hanady", bio: "no need", following: false },
        id: "sdfdsfsfd"
      }}
    />
  ))
  .add("Hide", () => <CommentWrite comment="" />);
