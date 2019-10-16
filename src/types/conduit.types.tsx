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
  author: IProfile;
}

export type IProfile = Pick<IUser, "username" | "bio" | "image"> & {
  following: boolean;
};

export interface IUser {
  username: string;
  bio: string;
  image?: string;
  email: string;
  token: string;
}

export interface IComment {
  id: string;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: IProfile;
}
