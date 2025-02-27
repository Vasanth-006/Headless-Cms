import { gql } from "@apollo/client";

export const GET_AUTHORS = gql`
  query Authors {
  authors {
    name
    blog {
      date
      authors_connection {
        nodes {
          Images {
            url
          }
        }
      }
    }
  }
}
`;
