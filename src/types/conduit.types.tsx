export interface IArticle {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: Boolean;
  favoritesCount: number;
  author: IAuther;
}
export interface IAuther {
  email: string;
  username: string;
  bio: string;
  image: string | null;
}

export interface IUser extends IAuther {
  token: string;
}
