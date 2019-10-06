import { fontSize, colors } from "../../SystemVariables";
import { Style } from "jss";
// import MyInput from "./Input";
export const style: Style = {
  form: {
    margin: "auto",
    width: "500px",
    "& div": {
      textAlign: "center"
    }
  },
  title: {
    fontSize: 34,
    opacity: 0.9
  },
  input: {
    width: 500,
    margin: "auto",
    height: 50,
    fontSize: 18,
    marginTop: 16,
    paddingLeft: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "&::placeholder": {
      color: "black"
    }
  },
  button: {
    textTransform: "none",
    color: "white",
    fontSize: fontSize.normal,
    background: colors.PrimaryColor,
    marginTop: 16,
    height: 50,
    width: 180,
    marginLeft: 320,
    "&:hover": {
      background: colors.PrimaryDark
    }
  },
  RedButton: {
    textTransform: "none",
    color: colors.darkRed,
    fontSize: 14,
    background: "white",
    border: "solid 1px" + colors.darkRed,
    marginTop: 16,
    width: 180,
    transition: "0.2s",
    "&:hover": {
      background: colors.darkRed,
      color: "white"
    }
  },
  url: {
    fontSize: 14
  },
  multiline: {
    height: "auto"
  }
};
