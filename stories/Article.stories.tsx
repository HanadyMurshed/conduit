import React from "react";
import { storiesOf } from "@storybook/react";
import Article from "../src/components/article/Article";

storiesOf("Feed", module).add("postedFeed", () => (
  <Article
    article={{
      slug: "slug_pk_what_ever",
      title: "One Piece",
      description: "It's an anime by the way",
      body: "Do you knw what an anime is",
      tagList: [],
      createdAt: "28/11",
      updatedAt: "29/11",
      favorited: true,
      favoritesCount: 70,
      author: {
        following: false,
        username: "Hanady",
        bio: "no bio plea",
        image: ""
      }
    }}
  />
));
