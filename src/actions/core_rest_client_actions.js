import { POST_DATA_CORE_REST } from "./types";


export function post(name) {
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
        withCredentials: true,
        "Content-Type": "application/json",
        Accept: "application/json"
      }),
      body: data
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
