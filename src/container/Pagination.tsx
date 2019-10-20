import * as React from "react";
import { updatePageParams } from "../components/pageParams/duck/actions";
import { connect } from "react-redux";
import { AppState } from "../reducers/rootReducer";
import { makeStyles } from "@material-ui/styles";
import { listGlobalFeedAticles } from "./ArticleList/duck/action";
import { PageIndex } from "../components/PageIndex";

type IProps = {
  currentPage: number;
  pageCount: number;
  currentTag: string;
  articlesNumber: number;
  listGlobalFeedAticles: any;
  updatePageParams: any;
};

const Indexer: React.FC<IProps> = ({
  pageCount,
  currentPage,
  currentTag,
  articlesNumber,
  listGlobalFeedAticles,
  updatePageParams
}) => {
  const handleIndexClickEvent = (index: number) => {
    if (currentTag)
      listGlobalFeedAticles({
        offset: index * articlesNumber,
        tag: currentTag
      });
    else listGlobalFeedAticles({ offset: index * articlesNumber });
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
    articlesNumber: state.pageState.articlesNumber
  };
};

const Pagination = connect(
  mapState,
  { listGlobalFeedAticles, updatePageParams }
)(Indexer);

export default Pagination;
