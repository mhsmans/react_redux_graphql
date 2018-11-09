import { FETCH_DATA_GRAPHQL } from "./types";
import Apolloclient from "apollo-boost";
import gql from "graphql-tag";

const client = new Apolloclient({
  uri: "http://drupalql.local/graphql"
});

// Fetch data from qraphql endpoint.
export const fetchGraphqlData = () => dispatch => {
  client
    .query({ query })
    .then(res => res.data)
    .then(data =>
      dispatch({
        type: FETCH_DATA_GRAPHQL,
        payload: data.nodeQuery.entities
      })
    )
    .catch(err => {
      console.log(err);
    });
};

// Graphql query.
export const query = gql`
  query {
    nodeQuery {
      entities {
        ... on NodePokemon {
          Name: title
          HP: fieldHp
          Id:nid
          Height: fieldHeight
          Abilities: fieldAbilities {
            ... on FieldNodeFieldAbilities {
              Ability: entity {
                name
              }
            }
          }
          Type: fieldType {
            ... on FieldNodeFieldType {
              Typename: entity {
                name
              }
            }
          }
        }
      }
    }
  }
`;
