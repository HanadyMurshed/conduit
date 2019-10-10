import { RouteComponentProps } from "react-router-dom";
export type IProps = {
  classes: any;
  loggedUser: string;
} & RouteComponentProps<{ username: string }>;
