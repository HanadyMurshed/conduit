import { colors, dims } from "../../SystemVariables";
export const styles = {
  page: {
    width: dims.pageWidth,
    margin: "auto",
    paddingLeft: 40,
    paddingRight: 40,
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
  }
};
