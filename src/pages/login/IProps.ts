import { RouteComponentProps } from "@reach/router";
export type IProps = {
  loginAction: any;
  loggedIn: boolean;
  classes: any;
  errorMsg: string;
} & RouteComponentProps;
