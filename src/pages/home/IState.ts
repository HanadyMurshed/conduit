import { IArticle } from "../../types/conduit.types";
export interface IState {
  articles: IArticle[];
  count: number;
  tags: string[];
  currentPage: number;
  pageCount: number;
  tabs: string[];
  currentTag: string;
}

export interface IStateLogged extends IState {
  currentTab: number;
}
