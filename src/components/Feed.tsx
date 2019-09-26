import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import { colors, fontSize } from "../SystemVariables";
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
    fontSize: fontSize.small,
    lineHeight: 1,
    cursor: "pointer",
    "&:hover": {
      color: colors.PrimaryDark,
      textDecoration: "underline"
    }
  },
  VerticalCentreAlign: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)"
  },
  VerticalCentreAlignLike: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)"
  },
  Containor: {
    position: "relative",
    height: "80%",
    marginTop: "10%",
    marginButtom: "10%",
    width: "50px",
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
  mediaDhareDate: {
    color: colors.TextSecondayColor,
    fontSize: fontSize.smaller,
    opacity: 0.8,
    lineHeight: 1
  },
  like: {
    width: 18,
    height: 14,
    transition: "0.1s",
    fontSize: fontSize.normal,
    margin: "0",
    padding: 0,
    color: colors.PrimaryColor
  },
  bodyTitle: {
    cursor: "pointer",
    fontSize: fontSize.large,
    fontWeight: "bold",
    marginTop: 12
  },
  bodyText: {
    cursor: "pointer",
    fontSize: fontSize.small,
    color: colors.TextSecondayColor,
    marginBottom: 20,
    lineHeight: 1
  },
  showExtra: {
    cursor: "pointer",
    fontSize: fontSize.smaller,
    color: colors.TextSecondayColor,
    opacity: 0.8
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
  if (!img) img = "https://static.productionready.io/images/smiley-cyrus.jpg";
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
                <Typography variant="h6" className={classes.mediaDhareDate}>
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
            <div className={classes.VerticalCentreAlignLike}>
              <FavoriteIcon className={classes.like} />
              <span className={classes.like}>{LikesCount}</span>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.bodyTitle}>{FeedHeader}</Typography>
          <Typography className={classes.bodyText}>{FeedBody}</Typography>
          <Typography className={classes.showExtra}>Read more...</Typography>
        </Grid>
      </Grid>
    </div>
  );
};
