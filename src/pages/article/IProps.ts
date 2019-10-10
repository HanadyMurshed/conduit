import { RouteComponentProps } from "react-router-dom";

export type IProps = {
  classes: any;
  isLogged: boolean;
} & RouteComponentProps<{ slug: string }>;
