import * as React from "react";
import { updatePageParams } from "../components/pageParams/duck/actions";
import { connect } from "react-redux";
import { AppState } from "../reducers/rootReducer";
import {
  listGlobalFeedAticles,
  lisYouretFeedAticles
} from "./ArticleList/duck/action";
import { PageIndex } from "../components/PageIndex";
import { GLOBAL_FEED, YOURE_FEED } from "../components/pageParams/duck/types";

type IProps = {
  currentPage: number;
  pageCount: number;
  currentTag: string;
  articlesNumber: number;
  listGlobalFeedAticles: any;
  lisYouretFeedAticles: any;
  updatePageParams: any;
  currentTap: number;
  tabs: string[];
};

const Indexer: React.FC<IProps> = ({
  pageCount,
  currentPage,
  currentTag,
  articlesNumber,
  listGlobalFeedAticles,
  lisYouretFeedAticles,
  updatePageParams,
  tabs,
  currentTap
}) => {
  const handleIndexClickEvent = (index: number) => {
    switch (tabs[currentTap]) {
      case currentTag:
        listGlobalFeedAticles({
          offset: index * articlesNumber,
          tag: currentTag
        });
        break;

      case GLOBAL_FEED:
        listGlobalFeedAticles({ offset: index * articlesNumber });
        break;
      case YOURE_FEED:
        lisYouretFeedAticles({ offset: index * articlesNumber });
        break;
    }
    updatePageParams({ currentPage: index });
  };

  if (pageCount && pageCount > 1)
    return (
      <PageIndex
        onClick={handleIndexClickEvent}
        style={{ marginTop: 20 }}
        active={currentPage}
        PageCount={Math.ceil(pageCount / 10)}
      />
    );
  else return null;
};

const mapState = (state: AppState) => {
  return {
    pageCount: state.articlesState.count,
    currentPage: state.pageState.currentPage,
    currentTag: state.pageState.currentTag,
    currentTap: state.pageState.currentTap,
    articlesNumber: state.pageState.articlesNumber,
    tabs: state.pageState.tabs
  };
};

const Pagination = connect(
  mapState,
  { listGlobalFeedAticles, updatePageParams, lisYouretFeedAticles }
)(Indexer);

export default Pagination;
