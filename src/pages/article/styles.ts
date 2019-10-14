import { colors, dims, fontSize } from "../../utils/SystemVariables";
export const styles: import("jss").Style = {
  page: {
    width: dims.pageWidth + 40,
    margin: "auto",
    paddingLeft: 20,
    paddingRight: 20,
    minWidth: 500,
    marginTop: 30
  },
  tagPanel: {
    background: colors.lightGray,
    padding: "8px 5px 8px 5px",
    "& .title": {
      color: colors.TextPrimaryColor,
      fontSize: 14,
      padding: 0
    }
  },
  link: {
    color: colors.PrimaryColor,
    fontSize: 14,
    cursor: "pointer",
    textDecoration: "none",
    paddingTop: 7,
    "&:hover": {
      color: colors.PrimaryDark,
      textDecoration: "underline"
    }
  },
  footer: {
    marginTop: 70,
    paddingTop: 50,
    margin: "auto",
    borderTop: "solid 1px " + colors.lightGray
  },
  comment: {
    margin: "auto",
    marginBottom: 15
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
  }
};
