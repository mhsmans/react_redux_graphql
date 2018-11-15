import { LOG_IN_CORE_REST } from "./types";
import { FETCH_CSRF_TOKEN } from "./types";

export function login(name, pass) {
  const data = {
    name: name,
    pass: pass,
    form_id: "user_login_form"
  };

  const formBody = Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

  return function(dispatch) {
    fetch("http://drupalql.local/user/login", {
      method: "POST",
      credentials: "include", // This is needed to store cookie in browser cookie storage. This is not visible on all browsers.
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded"
      }),
      body: formBody
    })
      .then(res => {
        dispatch({
          type: LOG_IN_CORE_REST,
          payload: res
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function getCsrfToken() {
  return function(dispatch) {
    fetch("http://drupalql.local/rest/session/token", {
      method: "GET",
    })
      .then(res => res.text())
      .catch(err => {
        console.log(err);
      })
      .then(token => {
        dispatch({
          type: FETCH_CSRF_TOKEN,
          payload: token
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
