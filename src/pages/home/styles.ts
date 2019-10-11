import { colors, dims } from "../../utils/SystemVariables";
export const styles = {
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
  progess: {
    marginTop: 90,
    width: 30,
    color: colors.TextPrimaryColor
  }
};
