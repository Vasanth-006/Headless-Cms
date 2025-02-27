import type { Preview } from "@storybook/react";
import { withApollo } from "./decorators/withApollo";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withApollo], // ApolloProvider here
  // tags: ["autodocs"],
};

export default preview;
