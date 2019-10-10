import { RouteComponentProps } from "react-router-dom";

export type IProps = {
  classes: any;
} & RouteComponentProps<{ slug: string }>;
