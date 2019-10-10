import { IArticle, IComment } from "../../types/conduit.types";
export interface IState {
  article: IArticle;
  username: string;
  commentList: IComment[];
  image: string;
  currentComment: string;
  toHome: boolean;
}
