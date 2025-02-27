import React from "react";
import { useQuery, gql } from "@apollo/client";

//  Define a Type for Blog Data
interface Blog {
  documentId: string;
  Title: string;
  cover: string;
  date: string;
  content: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

//  GraphQL Query
const GET_BLOGS = gql`
  query {
    blogs {
      documentId
      Title
      cover
      date
      content
      slug
      description
      createdAt
      updatedAt
      publishedAt
    }
  }
`;

const BlogList: React.FC = () => {
  const { loading, error, data } = useQuery<{ blogs: Blog[] }>(GET_BLOGS); 
  //   Explicitly tell TypeScript that `data` will have `blogs: Blog[]`

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // //  Ensure `data.blogs` is not undefined
  // if (!data?.blogs?.length) {
  //   return <p>No blogs found.</p>;
  // }

  return (
    <div>
      <h1>Blog List</h1>
      {data?.blogs.map((blog) => (
        <div key={blog.documentId}>
          <h2>{blog.Title}</h2>
          <p><strong>Cover:</strong> {blog.cover}</p>
          <p><strong>Date:</strong> {blog.date}</p>
          <p><strong>Description:</strong> {blog.description}</p>
          <p><strong>Content:</strong> {blog.content}</p>
          <p><strong>Slug:</strong> {blog.slug}</p>
          <p><strong>Created At:</strong> {blog.createdAt}</p>
          <p><strong>Updated At:</strong> {blog.updatedAt}</p>
          <p><strong>Published At:</strong> {blog.publishedAt}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
