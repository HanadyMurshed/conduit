export interface RegisterUserRequest {
  email: string;
  username: string;
  password: string;
}

export interface CreatedArticleRequest {
  title: string;
  description: string;
  body: string;
  tagList?: string[];
}

export interface ArticleKistQueryParama {
  limit?: number;
  offset?: number;
  auther?: string;
  favorited?: string;
}

export type LoginRequestType = Pick<RegisterUserRequest, "email" | "password">;
