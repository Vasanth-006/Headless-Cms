import type { Meta, StoryObj } from "@storybook/react";
import FigmaImg from "../components/FigmaImg";

const meta: Meta<typeof FigmaImg> = {
  title: "Components/FigmaImg",
  component: FigmaImg,
};

export default meta;

type Story = StoryObj<typeof FigmaImg>;

export const Default: Story = {};
