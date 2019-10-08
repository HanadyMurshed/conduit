import { colors, fontSize } from "../../SystemVariables";
import { Style } from "jss";
export const style: Style = {
  root: {
    maxWidth: 600,
    border: "1px solid #e5e5e5",
    borderRadius: 5,
    overflow: "hidden"
  },
  Input: {
    width: "100%",
    padding: "15px 15px 0px 15px",
    fontSize: fontSize.normal,
    colors: colors.TextPrimaryColor
  },
  commentBody: {
    margin: 15,
    fontSize: fontSize.normal,
    colors: colors.TextPrimaryColor
  },
  topSection: { padding: 15 },

  footer: {
    borderTop: "1px solid #e5e5e5",
    background: colors.lightGray,
    height: 50
  },
  footerSmaller: {
    height: 40
  },
  avatar: {
    float: "left",
    marginLeft: 15,
    marginTop: 10,
    width: 30,
    height: 30
  },
  avatarSmaller: { width: 25, height: 25, marginTop: 8 },
  button: { float: "right", marginRight: 15, marginTop: 15, height: 25 },
  buttonSmaller: {
    width: 20,
    marginTop: 10,
    height: 20,
    color: colors.TextPrimaryColor
  },
  buttonGreen: {
    textTransform: "none",
    color: "white",
    fontSize: fontSize.smaller,
    background: colors.PrimaryColor,
    lineHeight: 1,
    width: "auto",
    marginLeft: 320,
    "&:hover": {
      background: colors.PrimaryDark
    }
  },
  username: {
    float: "left",
    paddingTop: 13,
    paddingLeft: 2,
    cursor: "pointer",

    fontSize: fontSize.smaller,
    color: colors.PrimaryColor,
    "&:hover": {
      color: colors.PrimaryDark,
      textDecoration: "underline"
    }
  },
  createdAt: {
    paddingTop: 13,
    paddingLeft: 2,
    fontSize: fontSize.smaller,
    float: "left",
    color: colors.TextSecondayColor
  }
};
