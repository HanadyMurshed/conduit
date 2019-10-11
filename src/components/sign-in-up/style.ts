import { fontSize, colors } from "../../utils/SystemVariables";
import { Style } from "jss";
export const style: Style = {
  form: {
    margin: "auto",
    width: "500px",
    "& div": {
      textAlign: "center"
    }
  },
  a: {
    color: colors.PrimaryColor,
    fontSize: 14,
    cursor: "pointer",
    paddingTop: 7,
    "&:hover": {
      color: colors.PrimaryDark,
      textDecoration: "underline"
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
    width: 100,
    marginLeft: 400,
    "&:hover": {
      background: colors.PrimaryDark
    }
  },
  Popper: {
    padding: 5,
    fontSize: 14,
    color: colors.TextPrimaryColor
  }
};
