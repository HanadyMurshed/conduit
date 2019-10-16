import { RouteComponentProps } from "@reach/router";
import { IUser } from "../../types/conduit.types";
export type IProps = {
  loginAction: any;
  user: any;
  classes: any;
  startSession: (user: IUser) => void;
} & RouteComponentProps;
