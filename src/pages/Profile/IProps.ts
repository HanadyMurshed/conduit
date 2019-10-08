import { RouteComponentProps } from "@reach/router";
export type IProps = {
  classes: any;
  loggedUser: string;
} & RouteComponentProps<{
  username: string;
}>;
