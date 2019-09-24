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
}

const style = makeStyles(() => ({
  mediaCaption: {
    color: colors.PrimaryColor,
    lineHeight: 1,
    "&:hover": {
      textDecoration: ""
    }
  },
  VerticalCentreAlignCaption: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)"
  },
  VerticalCentreAlignLikes: {
    background: "red",
    position: "absolute",
    top: "50%",
    transform: "translateY(+50%)"
  },
  Containor: { position: "relative" },
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
    height: 20,
    fontSize: 20,
    margin: "0",
    padding: 0,
    color: colors.PrimaryColor
  }
}));

export default ({
  UserName,
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
              <Avatar />
            </Grid>
            <Grid item className={classes.FeedHeaderCaption}>
              <div className={classes.VerticalCentreAlignCaption}>
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
          <Grid item container spacing={2} className={classes.Containor}>
            <div className={classes.VerticalCentreAlignLikes}>
              <FavoriteIcon className={classes.like} />
              <span className={classes.like}>{LikesCount}</span>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div>{FeedHeader}</div>
          <div>{FeedBody}</div>
        </Grid>
      </Grid>
    </div>
  );
};
