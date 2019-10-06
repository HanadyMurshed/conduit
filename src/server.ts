/**
 *422 If a request fails any validations
 *401 for Unauthorized requests, when a request requires authentication but it isn't provided
 *403 for Forbidden requests, when a request may be valid but the user doesn't have permissions to perform the action
 *404 for Not found requests, when a resource can't be found to fulfill the request
 */

/* tslint-disable no-unused-expressions */

const baseUrl = "https://conduit.productionready.io/api";

const axios = require("axios").default;

/**
 * Post
 * /users/login
 * Respons:git
 * -------: 200 :OK
 * -------: 401 :UNAUTHRIZED
 * -------: 422 :UNEXPECTED ERROR
 * Required fields: email, password
 */
function getAccessToken() {
  return sessionStorage.getItem("token");
  // return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Njc0MDEsInVzZXJuYW1lIjoiSGFuYWR5IiwiZXhwIjoxNTc1MTc5MDk0fQ.TRk6avBRx0eU0liOQ_7ROlYisjuR5lBRzJx6q9kQE30"; //get tags
}

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

export function login(email: string, password: string) {
  const url = `${baseUrl}/users/login`;
  return axios.post(url, {
    user: {
      email: email,
      password: password
    }
  });
}

/**
 * Post
 * /users
 * Respons:
 * -------: 201 :OK
 * -------: 422 :UNEXPECTED ERROR
 * Required fields: email, username, password
 */
export function register(email: string, username: string, password: string) {
  if (
    !email ||
    !username ||
    !password ||
    email === "" ||
    username === "" ||
    password === ""
  )
    return;

  const url = `${baseUrl}/users`;
  axios
    .post(url, {
      user: {
        username: username,
        email: email,
        password: password
      }
    })
    .then((response: any) => {
      console.log(response);
    })
    .catch((error: any) => {
      //422 taken username or email
      console.log(error);
    });
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
export function getCurrentUser(token: string) {
  if (!token || token === "") return;
  const url = `${baseUrl}/user`;
  axios
    .get(url)
    .then((response: any) => {
      console.log(response);
    })
    .catch((error: any) => {
      console.log(error);
    });
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
export function updateUser(body: any, token: string) {
  if (!body || body === {} || !token || token === "") return;
  const url = `${baseUrl}/user`;
  axios
    .put(url, {
      user: body
    })
    .then((response: any) => {
      console.log(response);
    })
    .catch((error: any) => {
      console.log(error);
    });
}

/**
 * Get
 * /profiles/:username
 * Authentication:optional
 * Required: username
 */
export function getProfile(username: string) {
  if (!username || username === "") return;
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
export function followUser(username: string, token: string) {
  if (!username || username === "" || !token || token === "") return;
  const url = `${baseUrl}/profiles/${username}/follow`;
  axios
    .post(url, {})
    .then((response: any) => {
      console.log(response.data);
    })
    .catch((error: any) => {
      console.log(error);
    });
}

/**
 * delete
 * /profiles/:username/follow
 * Authentication
 * Required:username
 * not working
 */
export function unFollowUser(username: string, token: string) {
  if (!username || !token || username === "" || token === "") return;
  const url = `${baseUrl}/profiles/${username}/follow`;
  axios
    .delete(url)
    .then((response: any) => {
      console.log(response.data);
    })
    .catch((error: any) => {
      console.log(error);
    });
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
export function listArticles(
  paramaeters: { [key: string]: any },
  token?: string
) {
  if (!paramaeters) paramaeters = {};
  const myHeaders: { [key: string]: string } = {};
  if (token) myHeaders["Authorization"] = `Token ${token}`;

  myHeaders["Content-Type"] = "application/json; charset=utf-8";

  const url = `${baseUrl}/articles/`;

  return axios.get(url, {
    headers: myHeaders,
    params: paramaeters
  });
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
  if (!paramaeters) paramaeters = {};
  const url = `${baseUrl}/articles/feed`;
  return axios.get(url, {
    params: paramaeters
  });
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

interface CreateArticleRequest {
  title: string;
  description: string;
  body: string;
  token: string;
  tagList?: string[];
}
/**
 * post
 * /articles
 * Required fields: title, description, body
 * optional: tagList
 * Authentication
 * will return an Article
 */
export function createArticle(
  title: string,
  description: string,
  body: string,
  token: string,
  tagList?: string[]
) {
  if (
    !title ||
    !description ||
    !body ||
    !token ||
    title === "" ||
    description === "" ||
    body === "" ||
    token === ""
  )
    return;
  if (!tagList) tagList = [];

  const url = `${baseUrl}/articles`;
  const payload = {
    article: {
      title: title,
      description: description,
      body: body,
      tagList: tagList
    }
  };
  axios
    .post(url, payload)
    .then((response: any) => {
      console.log(response);
    })
    .catch((error: any) => {
      console.log(error);
    });
}

/**
 * put
 * articles/:slug
 * Optional fields: title, description, body
 * Authentication
 * will return an Article
 */
export function updateArticle(slug: string, body: any) {
  if (!body || body === {} || slug || slug === "") return;

  const url = `${baseUrl}/articles/${slug}`;
  axios
    .put(url, {
      article: body
    })
    .then((response: any) => {
      console.log(response);
    })
    .catch((error: any) => {
      console.log(error);
    });
}

/**
 * delete
 * articles/:slug
 * Authentication
 * will return an Article
 */
export function deleteArticle(slug: string) {
  if (!slug || slug === "") return;
  const url = `${baseUrl}/articles/${slug}`;
  axios
    .delete(url)
    .then((response: any) => {
      console.log(response);
    })
    .catch((error: any) => {
      console.log(error);
    });
}

/**
 * post
 * /articles/:slug/comments
 * authentiation
 * required: bodyy
 * slug=this-is-article-title-e011lz
 */

export function addCommentToArticle(
  comment: string,
  slug: string,
  token: string
) {
  if (
    !comment ||
    comment === "" ||
    !slug ||
    slug === "" ||
    !token ||
    token === ""
  )
    return;

  const url = `${baseUrl}/articles/${slug} /comments`;
  axios
    .post(url, {
      comment: { body: comment }
    })
    .then((Response: any) => {
      console.log(Response);
    })
    .catch((error: any) => {
      console.log(error);
    });
}

/**
 * get
 * /articles/:slug/comments
 * authentiation:optional
 * slug=this-is-article-title-e011lz
 */

export function getCommentsByArticles(slug: string, token?: string) {
  if (!slug || slug === "") return;
  const myHeaders: { [key: string]: string } = {};
  if (token) myHeaders["Authorization"] = `Token ${token}`;
  myHeaders["Content-Type"] = "application/json; charset=utf-8";

  const url = `${baseUrl}/articles/${slug}/comments`;
  axios
    .get(url, {
      headers: myHeaders
    })
    .then((Response: any) => {
      console.log(Response.data);
    })
    .catch((error: any) => {
      console.log(error);
    });
}

/**
 * delete
 * /articles/{slug}/comments/{id}
 * authentication
 */
export function deleteComment(slug: string, id: string, token: string) {
  if (!slug || slug === "" || !id || id === "" || !token || token === "")
    return;
  const url = `${baseUrl}/articles/${slug}/comments/ ${id}`;
  axios
    .delete(url)
    .then((respons: any) => {
      console.log(respons);
    })
    .catch((error: any) => {
      console.log(error);
    });
}

/**
 * post
 * /articles/:slug/favorite
 * authintication
 */
export function FavoriteArticle(slug: string, token: string) {
  if (!slug || slug === "" || token === "" || token === "") return;
  const url = `${baseUrl}/articles/${slug}/favorite`;
  axios
    .post(url, {})
    .then((response: any) => {
      console.log(response);
    })
    .catch((error: any) => {
      console.log(error);
    });
}

/**
 * delete
 * /articles/:slug/favorite
 * authintication
 */
export function unFavoriteArticle(slug: string, token: string) {
  if (!slug || slug === "" || token === "" || token === "") return;
  const url = `${baseUrl}/articles/${slug}/favorite`;
  axios
    .delete(url)
    .then((response: any) => {
      console.log(response);
    })
    .catch((error: any) => {
      console.log(error);
    });
}

/**
 * get
 * /tags
 */
export function getTags() {
  const url = `${baseUrl}/tags`;
  return axios.get(url);
}
