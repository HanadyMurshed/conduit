import { IComment } from "../../types/conduit.types";
import { Link } from "react-router-dom";

export interface IProps {
  className?: string;
  deleteButtonShow?: boolean;
  comment: IComment;
  usernameLink?: JSX.Element;
  onClick?: (id: string) => void;
}
