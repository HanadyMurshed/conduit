import * as React from "react";
import { Button } from "@material-ui/core";
import { MyInput } from "../Input";
import { ButtonTagCancel } from "../ButtonTagCancel";

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
  tags,
  handleBodyChange,
  handleDescribetionChange,
  handleTagsChange,
  handlePublishEvent,
  handleTitleChange,
  handleTagCnacelClick,
  onKeyDown
}) => {
  const classes = useStyle();

  return (
    <div className={classes.form}>
      <div>
        <MyInput
          value={title}
          onChange={handleTitleChange}
          // onChange={handleTitleChange}
          className={`${classes.input} ${classes.title}`}
          placeholder="Artical Title"
        />
        <MyInput
          value={describetion}
          onChange={handleDescribetionChange}
          // onChange={handleAboutChange}
          className={classes.input}
          placeholder="What's this artical about?"
        />
        <MyInput
          value={body}
          onChange={handleBodyChange}
          // onChange={handleBodyChange}
          multiline
          rows="8"
          className={`${classes.input} ${classes.multiline}`}
          placeholder="Write you're artical (in markdown)"
        />
        <MyInput
          value={tag}
          onkeydown={onKeyDown}
          onChange={handleTagsChange}
          // onChange={handleTagsChange}
          className={classes.input}
          placeholder="Enter tags"
        />
      </div>
      {tags ? (
        <div className={classes.tagPanel}>
          {tags.map(tag => (
            <ButtonTagCancel
              key={tag}
              onClick={handleTagCnacelClick}
              title={tag}
            />
          ))}
        </div>
      ) : null}
      <Button
        onClick={handlePublishEvent}
        className={classes.button}
        disableRipple
      >
        Publish Artical
      </Button>
    </div>
  );
};
