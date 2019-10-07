import { IArticle, IAuther } from "../../types/conduit.types";
export interface IState {
  articles: IArticle[];
  count: number;
  pageCount: number;
  currentPage: number;
  tabs: string[];
  author: IAuther;
  selectedTab: number;
}
