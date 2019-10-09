import { type } from "os";

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
  image?: string;
}

export interface IUser extends IAuther {
  token: string;
}

export interface IComment {
  id: string;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: IAuther;
}
