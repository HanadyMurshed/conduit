import * as React from "react";
import { ButtonTag } from "../../components/ButtonTag";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { getTags } from "./duck/action";
import { Iprops } from "./Iprops";
import { style } from "./style";
import { AppState } from "../../reducers/rootReducer";

const useStyle = makeStyles(style);

export const Panel: React.FC<Iprops> = ({
  active = "",
  style,
  onClick = () => {},
  getTags,
  tags
}) => {
  React.useEffect(() => {
    if (tags.length === 0) getTags();
  });

  const classes = useStyle();
  return (
    <div className={classes.tagPanel} style={style}>
      <Typography className="title">Populer Tags</Typography>
      <div className="body">
        {tags
          ? tags.map(e => (
              <ButtonTag
                title={e}
                active={active === e ? true : false}
                onClick={onClick}
                key={e}
              />
            ))
          : null}
      </div>
    </div>
  );
};

const mapState = (state: AppState) => {
  return { tags: state.tags.tags };
};
const mapDispaatch = { getTags };

const TagsPanel = connect(
  mapState,
  mapDispaatch
)(Panel);

export default TagsPanel;
