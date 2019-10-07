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

export type loginRequest = Pick<RegisterUserRequest, "email" | "password">;

