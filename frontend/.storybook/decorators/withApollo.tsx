
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Decorator } from "@storybook/react"; // Import Storybook Decorator type

//  Create Apollo Client
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql", // Change if needed
  cache: new InMemoryCache(),
});

//  Explicitly type the function as a Storybook Decorator
export const withApollo: Decorator = (Story) => (
  <ApolloProvider client={client}>
    <Story />
  </ApolloProvider>
);
