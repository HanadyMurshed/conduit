import { IArticle, IComment } from "../../types/conduit.types";
export interface IState {
  username: string;
  commentList: IComment[];
  image: string;
  currentComment: string;
  toHome: boolean;
  article: IArticle;
}
