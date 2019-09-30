import * as React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import { fontSize, colors } from "../SystemVariables";
import { MyInput } from "./Input";
// import MyInput from "./Input";

const useStyle = makeStyles({
  form: {
    width: "500px",
    "& div": {
      textAlign: "center"
    }
  },
  title: {
    height: 50,
    paddingLeft: 20,
    fontSize: 18
  },
  input: {
    width: 900,
    margin: "auto",
    marginTop: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "&::placeholder": {
      color: "black"
    }
  },
  button: {
    textTransform: "none",
    color: "white",
    fontSize: fontSize.normal,
    background: colors.PrimaryColor,
    marginTop: 16,
    height: 50,
    width: 160,
    marginLeft: 740,
    "&:hover": {
      background: colors.PrimaryDark
    }
  },

  multiline: {
    height: "auto"
  }
});
export const NewPost = () => {
  const classes = useStyle();

  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };
  const handleAboutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAbout(event.currentTarget.value);
  };
  const handleBodyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBody(event.currentTarget.value);
  };
  const handleTagsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTags(event.currentTarget.value);
  };
  return (
    <form className={classes.form}>
      <div>
        <MyInput
          value={title}
          onChange={handleTitleChange}
          className={classes.input + " " + classes.title}
          placeholder="Artical Title"
        />
        <MyInput
          value={about}
          onChange={handleAboutChange}
          className={classes.input}
          placeholder="What's this artical about?"
        />
        <MyInput
          value={body}
          onChange={handleBodyChange}
          multiline
          rows="8"
          className={classes.input + " " + classes.multiline}
          placeholder="Write you're artical (in markdown)"
        />
        <MyInput
          value={tags}
          onChange={handleTagsChange}
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
