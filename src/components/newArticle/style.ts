import { fontSize, colors } from "../../utils/SystemVariables";
import { Style } from "jss";
// import MyInput from "./Input";
export const style: Style = {
  form: {
    margin: "auto",
    width: 900
  },
  input: {
    maxHeidth: 900,
    width: "100%",
    margin: "auto",
    marginTop: 16,
    display: "flex",
    paddingLeft: 10
  },
  title: {
    height: 50,
    paddingLeft: 20,
    fontSize: 18
  },
  button: {
    textTransform: "none",
    color: "white",
    fontSize: fontSize.normal,
    background: colors.PrimaryColor,
    marginTop: 10,
    height: 50,
    width: 160,
    marginLeft: 740,
    "&:hover": {
      background: colors.PrimaryDark
    }
  },
  multiline: {
    height: "auto"
  },
  tagPanel: {
    textAlign: "left",
    marginTop: 2
  }
};
