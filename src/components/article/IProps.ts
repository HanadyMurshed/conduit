import { IArticle } from "../../types/conduit.types";
export interface IProps {
  article: IArticle;
  classes: any;
  handleFavoritEvent?: (
    favorited: Boolean,
    slug: string,
    onFail: () => void
  ) => void;
}
