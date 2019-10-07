import { IArticle } from "../../types/conduit.types";
export interface IProps {
  article: IArticle;
  classes: any;
  handleFavoritEvent?: (
    favorited: boolean,
    slug: string,
    fun: () => void
  ) => void;
}
