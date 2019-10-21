import * as React from "react";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { AppState } from "../../reducers/rootReducer";
import { IArticle } from "../../types/conduit.types";
import Article from "../../components/article/Article";
import {
  listGlobalFeedAticles,
  favoriteANnArticle,
  unFavoriteANnArticle
} from "./duck/action";

type IProps = {
  articles: IArticle[];
  loading: boolean;
  listGlobalFeedAticles: any;
  unFavoriteANnArticle: any;
  favoriteANnArticle: any;
};

export const Articles: React.FC<IProps> = ({
  loading,
  articles,
  unFavoriteANnArticle,
  favoriteANnArticle,
  listGlobalFeedAticles
}) => {
  React.useEffect(() => {
    listGlobalFeedAticles();
  }, []);
  const handleFavoritEvent = (favorited: Boolean, slug: string) => {
    console.log("hey");
    favorited ? unFavoriteANnArticle(slug) : favoriteANnArticle(slug);
  };

  if (articles.length === 0 && !loading)
    return (
      <Typography style={{ color: "black", opacity: 0.6 }}>
        No article found... yet
      </Typography>
    );
  return (
    <React.Fragment>
      {articles.map((e: IArticle) => (
        <Article
          handleFavoritEvent={handleFavoritEvent}
          key={e.slug}
          article={e}
        />
      ))}
    </React.Fragment>
  );
};

const mapState = (state: AppState) => {
  return {
    articles: state.articlesState.articles,
    count: state.articlesState.count,
    loading: state.articlesState.loading
  };
};
const mapDispaatch = {
  listGlobalFeedAticles,
  favoriteANnArticle,
  unFavoriteANnArticle
};

const ListArticles = connect(
  mapState,
  mapDispaatch
)(Articles);

export default ListArticles;
