/**
 *422 If a request fails any validations
 *401 for Unauthorized requests, when a request requires authentication but it isn't provided
 *403 for Forbidden requests, when a request may be valid but the user doesn't have permissions to perform the action
 *404 for Not found requests, when a resource can't be found to fulfill the request
 */

const baseUrl = "https://conduit.productionready.io/api";

const axios = require("axios").default;

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Njc0MDEsInVzZXJuYW1lIjoiSGFuYWR5IiwiZXhwIjoxNTc1MTc5MDk0fQ.TRk6avBRx0eU0liOQ_7ROlYisjuR5lBRzJx6q9kQE30"; //get tags

// async function getTags() {
//   axios
//     .get(baseUrl + "/tags")
//     .then((response: any) => {
//       console.log(response.data);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

// //get  articles
// async function getArticles() {
//   axios
//     .get(baseUrl + "/articles")
//     .then((response: any) => {
//       console.log(response.data);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

/**
 * Post
 * /users/login
 * Respons:
 * -------: 200 :OK
 * -------: 401 :UNAUTHRIZED
 * -------: 422 :UNEXPECTED ERROR
 * Required fields: email, password
 */
async function login(user: { email: string; password: string }) {
  if (!user || !user.email || !user.password) return;
  axios
    .post(
      baseUrl + "/users/login",
      {
        user: user
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
async function register(user: {
  email: string;
  username: string;
  password: string;
}) {
  if (!user || !user.email || !user.username || !user.password) return;
  axios
    .post(
      baseUrl + "/users",
      {
        user: {
          username: "hadolado",
          email: "hadolado@try.try",
          password: "jakejake"
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
async function getCurrentUser() {
  axios
    .get(baseUrl + "/user", {
      headers: {
        Authorization: "Token " + token,
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
async function updateUser(body: any) {
  if (!body || body == {}) return;
  axios
    .put(
      baseUrl + "/user",
      {
        user: body
      },
      {
        headers: {
          Authorization: "Token " + token,
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

updateUser({ username: "Hana" });
