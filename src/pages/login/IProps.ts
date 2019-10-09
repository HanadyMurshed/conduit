import { RouteComponentProps } from "@reach/router";
import { IUser } from "../../types/conduit.types";
export type IProps = {
  classes: any;
  startSession: (token: string, username: string) => void;
} & RouteComponentProps;
