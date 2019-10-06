import { colors, fontSize } from "../../SystemVariables";
import { Style } from "jss";
export const style: Style = {
  root: {
    borderBottom: "solid 1px" + colors.lightGray,
    paddingTop: 20,
    paddingBottom: 20
  },
  headerAvatar: { width: 30, height: 30 },
  headerTitle: {
    color: colors.PrimaryColor,
    fontSize: fontSize.small,
    lineHeight: 1,
    cursor: "pointer",
    "&:hover": {
      color: colors.PrimaryDark,
      textDecoration: "underline"
    }
  },
  headerSubTitle: {
    color: colors.TextSecondayColor,
    fontSize: fontSize.smaller,
    opacity: 0.8,
    lineHeight: 1
  },
  VerticalCentreAlign: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)"
  },
  headerCaption: {
    position: "relative",
    width: "80%"
  },
  favoriteButton: {
    borderRadius: 5,
    height: "30px",
    width: "40px",
    border: "1px solid" + colors.PrimaryColor,
    cursor: "pointer",
    transition: "0.1s",
    "&:hover": {
      background: colors.PrimaryColor
    },
    "&:hover $favoriteContent": {
      color: "white"
    },
    display: "inline-flex",
    verticalAlign: "middle"
  },
  favoriteContent: {
    position: "relative",
    top: "50%",
    transform: "translateY(-20%)",
    width: 18,
    height: 14,
    transition: "0.1s",
    fontSize: fontSize.normal,
    marginBottom: 10,
    paddingBottom: 10,
    color: colors.PrimaryColor
  },
  bodyTitle: {
    cursor: "pointer",
    fontSize: fontSize.large,
    marginTop: 9
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
};
