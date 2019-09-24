import React from "react";
import { storiesOf } from "@storybook/react";
import Feed from "../src/component/Feed";

storiesOf("Feed", module).add("postedFeed", () => (
  <Feed
    UserName="Hanady Murshed"
    ShareDate="Tuesday 2 /25"
    FeedBodyText="Hello word"
    FeedBodyTitle="Hello word"
    LikesCount={0}
  />
));
