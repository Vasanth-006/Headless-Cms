import type { Meta, StoryObj } from "@storybook/react";
import { AuthorList } from "../components/AuthorList";
import { withApollo } from "../../.storybook/decorators/withApollo"; // Note : Apollo Provider is used have to use in all

const meta: Meta<typeof AuthorList> = {
  title: "Components/AuthorList",
  component: AuthorList,
  decorators: [withApollo],
};

export default meta;
type Story = StoryObj<typeof AuthorList>;

export const Default: Story = {};
