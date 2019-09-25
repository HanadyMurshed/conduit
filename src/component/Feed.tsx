import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import { colors } from "../urils";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

interface Props {
  UserName: string;
  ShareDate: string;
  LikesCount: number;
  FeedBodyTitle: string;
  FeedBodyText: string;
  img?: string;
}

const style = makeStyles(() => ({
  mediaCaption: {
    color: colors.PrimaryColor,
    lineHeight: 1,
    "&:hover": {
      textDecoration: ""
    }
  },
  VerticalCentreAlign: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)"
  },
  Containor: {
    position: "relative",
    height: "80%",
    marginTop: "10%",
    marginButtom: "10%",
    width: "100%",
    border: "1px solid" + colors.PrimaryColor,
    cursor: "pointer",
    transition: "0.1s",
    borderRadius: 5,
    "&:hover": {
      background: colors.PrimaryColor
    },
    "&:hover FavoriteIcon": {
      color: colors.TagBackgroundColor
    },
    "&:hover span": {
      color: "white"
    }
  },
  FeedHeaderCaption: {
    position: "relative",
    width: "80%"
  },
  shareDate: {
    color: colors.TextSecondayColor,
    lineHeight: 1
  },
  like: {
    width: 18,
    height: 14,
    transition: "0.1s",
    fontSize: 18,
    margin: "0",
    padding: 0,
    color: colors.PrimaryColor
  }
}));

export default ({
  UserName,
  img,
  ShareDate,
  LikesCount,
  FeedBodyTitle: FeedHeader,
  FeedBodyText: FeedBody
}: Props) => {
  const classes = style();
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={11}>
          <Grid container spacing={1}>
            <Grid item>
              <Avatar src={img} />
            </Grid>
            <Grid item className={classes.FeedHeaderCaption}>
              <div className={classes.VerticalCentreAlign}>
                <Typography variant="h6" className={classes.mediaCaption}>
                  {UserName}
                </Typography>
                <Typography variant="h6" className={classes.shareDate}>
                  {ShareDate}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <Grid
            item
            container
            justify="center"
            spacing={2}
            className={classes.Containor}
          >
            <div className={classes.VerticalCentreAlign}>
              <FavoriteIcon className={classes.like} />
              <span className={classes.like}>{LikesCount}</span>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div>{FeedHeader}</div>
          <div>{FeedBody}</div>
          <div>Read more...</div>
        </Grid>
      </Grid>
    </div>
  );
};
