import * as React from "react";
import { Button } from "@material-ui/core";
import { MyInput } from "../Input";
import { makeStyles } from "@material-ui/styles";
import { style } from "./style";
import { IProps } from "./IProps";
// import MyInput from "./Input";

const useStyle = makeStyles(style);

export const NewArticle: React.FC<IProps> = ({
  title,
  body,
  describetion,
  tag,
  tags
}) => {
  const classes = useStyle();

  return (
    <form className={classes.form}>
      <div>
        <MyInput
          value={title}
          // onChange={handleTitleChange}
          className={`${classes.input} ${classes.title}`}
          placeholder="Artical Title"
        />
        <MyInput
          value={describetion}
          // onChange={handleAboutChange}
          className={classes.input}
          placeholder="What's this artical about?"
        />
        <MyInput
          value={body}
          // onChange={handleBodyChange}
          multiline
          rows="8"
          className={`${classes.input} ${classes.multiline}`}
          placeholder="Write you're artical (in markdown)"
        />
        <MyInput
          value={tag}
          // onChange={handleTagsChange}
          className={classes.input}
          placeholder="Enter tags"
        />
      </div>
      <Button className={classes.button} disableRipple>
        Publish Artical
      </Button>
    </form>
  );
};
