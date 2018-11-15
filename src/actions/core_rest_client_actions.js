import { POST_DATA_CORE_REST } from "./types";

export function post(name, csrfToken) {
  const data = {
    name: [
      {
        value: name
      }
    ],
    type: [
      {
        value: "pokemon"
      }
    ]
  };

  return function(dispatch) {
    fetch("http://drupalql.local/node", {
      method: "POST",
      credentials: 'include',
      headers: new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Csrf-Token": csrfToken
      }),
      body: JSON.stringify(data)
    })
      .then(res => {
        dispatch({
          type: POST_DATA_CORE_REST,
          payload: res
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
