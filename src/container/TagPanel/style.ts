import { colors } from "../../utils/SystemVariables";
import { Style } from "jss";
export const style: Style = {
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
