
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Decorator } from "@storybook/react"; // Import Storybook Decorator type
import React from "react";

//  Create Apollo Client
const client = new ApolloClient({
  // uri:"https:localhost:1337/graphql",
  uri: "https://headless-cms-1-nqq0.onrender.com", // Change based on backend url needed
  cache: new InMemoryCache(),
});

//  Explicitly type the function as a Storybook Decorator
export const withApollo: Decorator = (Story) => (
  <ApolloProvider client={client}>
    <Story />
  </ApolloProvider>
);
