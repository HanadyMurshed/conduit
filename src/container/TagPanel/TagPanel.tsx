import * as React from "react";
import { ButtonTag } from "../../components/ButtonTag";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { getTags } from "./duck/action";
import { Iprops } from "./Iprops";
import { style } from "./style";
import { AppState } from "../../reducers/rootReducer";
import { updatePageParamsCurrentTag } from "../../components/pageParams/duck/actions";
import { listGlobalFeedAticles } from "../../container/ArticleList/duck/action";

const useStyle = makeStyles(style);

export const Panel: React.FC<Iprops> = ({
  active = "",
  style,
  getTags,
  tags,
  updatePageParamsCurrentTag,
  listGlobalFeedAticles
}) => {
  React.useEffect(() => getTags(), []);

  const classes = useStyle();

  const handleOnClick = (title: string) => {
    updatePageParamsCurrentTag({ currentTag: title });
    listGlobalFeedAticles({ tag: title });
  };

  return (
    <div className={classes.tagPanel} style={style}>
      <Typography className="title">Populer Tags</Typography>
      <div className="body">
        {tags
          ? tags.map(e => (
              <ButtonTag
                title={e}
                active={active === e ? true : false}
                onClick={handleOnClick}
                key={e}
              />
            ))
          : null}
      </div>
    </div>
  );
};

const mapState = (state: AppState) => {
  return { tags: state.tags.tags, active: state.pageState.currentTag };
};
const mapDispaatch = {
  getTags,
  updatePageParamsCurrentTag,
  listGlobalFeedAticles
};

const TagsPanel = connect(
  mapState,
  mapDispaatch
)(Panel);

export default TagsPanel;
