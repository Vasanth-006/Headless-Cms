
import { withApollo } from '../../.storybook/decorators/withApollo'; // Ensure ApolloProvider wraps the component
import  BlogList  from '../components/BlogList';

export default {
  title: "Components/BlogList",
  component: BlogList,
  decorators: [withApollo], // Ensures Apollo Client is used in Storybook
};

export const Default = () => <BlogList />;
