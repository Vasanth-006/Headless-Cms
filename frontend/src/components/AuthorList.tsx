import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS } from "../graphql/queries";

interface Author {
  name: string;
  blog?: {
    authors_connection: {
      nodes: {
        Images: {
          url: string;
        }[];
      }[];
    };
  };
}

const AuthorList: React.FC = () => {
  const { loading, error, data } = useQuery<{ authors: Author[] }>(GET_AUTHORS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data?.authors.map((author, index) => {
        const profileImage = author.blog?.authors_connection?.nodes?.[0]?.Images?.[0]?.url;

        return (
          <div key={index}>
            {profileImage && <img src={profileImage} alt={author.name} style={{width:"500px", height:"400px",}} />}
            <h3>{author.name}</h3>
            
          </div>
        );
      })}
    </div>
  );
};

export { AuthorList };
