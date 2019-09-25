import React from "react";
import { storiesOf } from "@storybook/react";
import Feed from "../src/component/Feed";

storiesOf("Feed", module).add("postedFeed", () => (
  <Feed
    UserName="Hanady Murshed"
    ShareDate="Wed Sep 25 2019"
    FeedBodyText="Hello word"
    FeedBodyTitle="sadsadsadsa"
    LikesCount={0}
  />
));
