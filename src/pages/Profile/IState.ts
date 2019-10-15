import { IArticle } from "../../types/conduit.types";
import { IProfile } from "../../types/conduit.types";
export interface IState {
  articles: IArticle[];
  count: number;
  username: string;
  pageCount: number;
  currentPage: number;
  tabs: string[];
  author: IProfile;
  selectedTab: number;
  toSetting: boolean;
  toHome: boolean;
  loadingProfile: boolean;
  loadingArticles: boolean;
  loadingArticle: boolean;
}
