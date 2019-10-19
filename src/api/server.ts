import {
  RegisterUserRequest,
  CreatedArticleRequest,
  LoginRequestType,
  ArticleKistQueryParama
} from "./api.types";

const baseUrl = "https://conduit.productionready.io/api";

const axios = require("axios").default;

function getAccessToken() {
  const stringfiedData = sessionStorage.getItem("data");
  if (stringfiedData) return JSON.parse(stringfiedData).token;
}

/**
 * Post
 * /users/login
 * Respons:git
 * -------: 200 :OK
 * -------: 401 :UNAUTHRIZED
 * -------: 422 :UNEXPECTED ERROR
 * Required fields: email, password
 */

axios.interceptors.request.use(
  (config: any) => {
    const token = getAccessToken();
    if (token && token !== "") {
      config.headers["Authorization"] = "Token " + token;
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);

export function login(user: LoginRequestType) {
  const url = `${baseUrl}/users/login`;
  const payload = {
    user: user
  };
  return axios.post(url, payload);
}

/**
 * Post
 * /users
 * Respons:
 * -------: 201 :OK
 * -------: 422 :UNEXPECTED ERROR
 * Required fields: email, username, password
 */
export function register(user: RegisterUserRequest) {
  const url = `${baseUrl}/users`;
  const payload = {
    user: user
  };
  return axios.post(url, payload);
}

/**
 * Get
 * /user
 * Authentication
 * Respons:
 * -------: 200 :OK
 * -------: 401 :UNAUTHRIZED
 * -------: 422 :UNEXPECTED ERROR
 */
export function getCurrentUser() {
  const url = `${baseUrl}/user`;
  return axios.get(url);
}

/**
 * Put
 * /user
 * Authentication
 * Respons:
 * -------: 200 :OK
 * -------: 401 :UNAUTHRIZED
 * -------: 422 :UNEXPECTED ERROR
 * Accepted fields: email, username, password, image, bio
 */
export function updateUser(body: any) {
  const url = `${baseUrl}/user`;
  const payload = { user: body };
  return axios.put(url, payload);
}

/**
 * Get
 * /profiles/:username
 * Authentication:optional
 * Required: username
 */
export function getProfile(username: string) {
  if (!username) return;
  const url = `${baseUrl}/profiles/${username}`;
  return axios.get(url);
}

/**
 * post
 * /profiles/:username/follow
 * Authentication
 * Required:username
 * not working
 */
export function followUser(username: string) {
  if (!username) return;
  const url = `${baseUrl}/profiles/${username}/follow`;
  return axios.post(url, {});
}

/**
 * delete
 * /profiles/:username/follow
 * Authentication
 * Required:username
 * not working
 */
export function unFollowUser(username: string) {
  const url = `${baseUrl}/profiles/${username}/follow`;
  return axios.delete(url);
}

/**
 * GET
 * /articles/
 * Authentication:optional
 * optional paramaeters: tag, author or favorited
 * optional limit default 20
 * optional offset/skip default 20
 * Returns most recent articles globally by default
 */
export function listArticles(paramaeters: ArticleKistQueryParama) {
  const url = `${baseUrl}/articles/`;
  const payload = {
    params: paramaeters
  };
  return axios.get(url, payload);
}

/**
 * GET
 * /articles/feed
 * Authentication
 * optional limit default 20
 * optional offset/skip default 20
 * Returns most recent articles you follow
 */
export function getArticleFeed(paramaeters?: any) {
  const url = `${baseUrl}/articles/feed`;
  const payload = {
    params: paramaeters
  };
  return axios.get(url, payload);
}

/**
 * GET
 * /articles/{slug}
 * Returns an article
 */
export function getAnArticle(slug: string) {
  if (!slug || slug === "") return;
  const url = `${baseUrl}/articles/${slug}`;
  return axios.get(url);
}

/**
 * post
 * /articles
 * Required fields: title, description, body
 * optional: tagList
 * Authentication
 * will return an Article
 */
export function createArticle(article: CreatedArticleRequest) {
  if (!article.tagList) article.tagList = [];

  const url = `${baseUrl}/articles`;
  const payload = {
    article: article
  };
  return axios.post(url, payload);
}

/**
 * put
 * articles/:slug
 * Optional fields: title, description, body
 * Authentication
 * will return an Article
 */
export function updateArticle(slug: string, body: any) {
  const payload = {
    article: body
  };
  const url = `${baseUrl}/articles/${slug}`;
  axios.put(url, payload);
}

/**
 * delete
 * articles/:slug
 * Authentication
 * will return an Article
 */
export function deleteArticle(slug: string) {
  const url = `${baseUrl}/articles/${slug}`;
  return axios.delete(url);
}

/**
 * post
 * /articles/:slug/comments
 * authentiation
 * required: bodyy
 * slug=this-is-article-title-e011lz
 */

export function addCommentToArticle(comment: string, slug: string) {
  const url = `${baseUrl}/articles/${slug}/comments`;
  const payload = {
    comment: { body: comment }
  };
  return axios.post(url, payload);
}

/**
 * get
 * /articles/:slug/comments
 * authentiation:optional
 * slug=this-is-article-title-e011lz
 */

export function getCommentsByArticles(slug: string) {
  const url = `${baseUrl}/articles/${slug}/comments`;
  return axios.get(url);
}

/**
 * delete
 * /articles/{slug}/comments/{id}
 * authentication
 */
export function deleteComment(slug: string, id: string) {
  const url = `${baseUrl}/articles/${slug}/comments/ ${id}`;
  return axios.delete(url);
}

/**
 * post
 * /articles/:slug/favorite
 * authintication
 */
export function FavoriteArticle(slug: string) {
  const url = `${baseUrl}/articles/${slug}/favorite`;
  return axios.post(url, {});
}

/**
 * delete
 * /articles/:slug/favorite
 * authintication
 */
export function unFavoriteArticle(slug: string) {
  const url = `${baseUrl}/articles/${slug}/favorite`;
  return axios.delete(url);
}

/**
 * get
 * /tags
 */
export function getTags() {
  const url = `${baseUrl}/tags`;
  return axios.get(url);
}
