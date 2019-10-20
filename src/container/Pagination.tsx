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
  articlesNumber: number;
  listGlobalFeedAticles: any;
  updatePageParams: any;
};

const useStyle = makeStyles({
  loadingMsg: {
    color: "black",
    opacity: 0.8,
    fontSize: 14,
    marginTop: 40
  }
});

const Indexer: React.FC<IProps> = ({
  pageCount,
  currentPage,
  articlesNumber,
  listGlobalFeedAticles,
  updatePageParams
}) => {
  console.log(
    pageCount,
    currentPage,
    articlesNumber,
    pageCount && pageCount > 1
  );
  const handleIndexClickEvent = (index: number) => {
    listGlobalFeedAticles({ offset: index * articlesNumber });
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
    articlesNumber: state.pageState.articlesNumber
  };
};

const Pagination = connect(
  mapState,
  { listGlobalFeedAticles, updatePageParams }
)(Indexer);

export default Pagination;
