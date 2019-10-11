import { IComment } from "../../types/conduit.types";

export interface IProps {
  className?: string;
  deleteButtonShow?: boolean;
  comment: IComment;
  onClick?: (id: string) => void;
}
