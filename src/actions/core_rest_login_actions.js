import { LOG_IN_CORE_REST } from "./types";
import axios from "axios";

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
    axios({
      method: "POST",
      url: "http://drupalql.local/user/login",
      headers: {
        // withCredentials: true, // Is dit nodig????
        // crossdomain: true,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: formBody
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
