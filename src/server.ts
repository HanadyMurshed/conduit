/**
 *422 If a request fails any validations
 *401 for Unauthorized requests, when a request requires authentication but it isn't provided
 *403 for Forbidden requests, when a request may be valid but the user doesn't have permissions to perform the action
 *404 for Not found requests, when a resource can't be found to fulfill the request
 */

/* tslint-disable no-unused-expressions */

const baseUrl = "https://conduit.productionready.io/api";

const axios = require("axios").default;

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Njc0MDEsInVzZXJuYW1lIjoiSGFuYWR5IiwiZXhwIjoxNTc1MTc5MDk0fQ.TRk6avBRx0eU0liOQ_7ROlYisjuR5lBRzJx6q9kQE30"; //get tags

/**
 * Post
 * /users/login
 * Respons:git
 * -------: 200 :OK
 * -------: 401 :UNAUTHRIZED
 * -------: 422 :UNEXPECTED ERROR
 * Required fields: email, password
 */
export function login(email: string, password: string) {
  if (!email || !password || email === "" || password === "") return;
  axios
    .post(
      `${baseUrl}/users/login`,
      {
        user: {
          email: email,
          password: password
        }
      },
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      }
    )
    .then((response: any) => {
      console.log(response);
    })
    .catch((error: any) => {
      //422 invalid email or password
      return "error";
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
  axios
    .post(
      `${baseUrl}/users`,
      {
        user: {
          username: username,
          email: email,
          password: password
        }
      },
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      }
    )
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
  if (!token || token === "")
    axios
      .get(`${baseUrl}/user`, {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json; charset=utf-8"
        }
      })
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
  axios
    .put(
      `${baseUrl}/user`,
      {
        user: body
      },
      {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json; charset=utf-8"
        }
      }
    )
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
export function getProfile(username: string, token?: string) {
  if (!username || username === "") return;
  const headers: { [key: string]: string } = {};
  if (token) headers["Authorization"] = `Token ${token}`;
  headers["Content-Type"] = "application/json; charset=utf-8";

  axios
    .get(`${baseUrl}/profiles/${username}`, {
      headers: headers
    })
    .then((response: any) => {
      console.log(response);
    })
    .catch((error: any) => {
      console.log(error);
    });
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
  axios
    .post(
      `${baseUrl}/profiles/${username}/follow`,
      {},
      {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json; charset=utf-8"
        }
      }
    )
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
  axios
    .delete(`${baseUrl}/profiles/${username}/follow`, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json; charset=utf-8"
      }
    })
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
  return axios.get(`${baseUrl}/articles/`, {
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
export function getArticleFeed(token: string, paramaeters?: any) {
  if (!token || token === "") return;
  if (!paramaeters) paramaeters = {};
  axios
    .get(`${baseUrl}/articles/feed`, {
      params: paramaeters,
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then((response: any) => {
      console.log(response.data);
    })
    .catch((error: any) => {
      console.log(error);
    });
}

/**
 * GET
 * /articles/{slug}
 * Returns an article
 */
export function getAnArticle(slug: string) {
  if (!slug || slug === "") return;
  axios
    .get(`${baseUrl}/articles/${slug}`)
    .then((response: any) => {
      console.log(response);
    })
    .catch((error: any) => {
      console.log(error);
    });
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
  axios
    .post(
      `${baseUrl}/articles`,
      {
        article: {
          title: title,
          description: description,
          body: body,
          tagList: tagList
        }
      },
      {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json; charset=utf-8"
        }
      }
    )
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
  axios
    .put(
      `${baseUrl}/articles/${slug}`,
      {
        article: body
      },
      {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json; charset=utf-8"
        }
      }
    )
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
  axios
    .delete(`${baseUrl}/articles/${slug}`, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json; charset=utf-8"
      }
    })
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
  axios
    .post(
      `${baseUrl}/articles/${slug} /comments`,
      {
        comment: { body: comment }
      },
      {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json; charset=utf-8"
        }
      }
    )
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
  axios
    .get(`${baseUrl}/articles/${slug}/comments`, {
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
  axios
    .delete(`${baseUrl}/articles/${slug}/comments/ ${id}`, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json; charset=utf-8"
      }
    })
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
  axios
    .post(
      `${baseUrl}/articles/${slug}/favorite`,
      {},
      {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json; charset=utf-8"
        }
      }
    )
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
  axios
    .delete(`${baseUrl}/articles/${slug}/favorite`, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json; charset=utf-8"
      }
    })
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
  axios
    .get(`${baseUrl}/tags`)
    .then((response: any) => {
      console.log(response.data);
    })
    .catch((error: any) => {
      console.log(error);
    });
}
