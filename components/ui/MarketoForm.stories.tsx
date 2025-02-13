import { Meta, StoryObj } from "@storybook/react";
import MartekoForm from "./MartekoForm";

const meta: Meta<typeof MartekoForm> = {
  title: "Components/MartekoForm",
  component: MartekoForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      source: {
        // Tells Storybook to generate the static HTML automatically for the source tab
        type: 'auto',  // Tells Storybook to automatically generate the HTML source
      },
    },
  },
  argTypes: {
    title: {
      control: { type: "text" },
      defaultValue: "Join our Newsletter",
    },
    description: {
      control: { type: "text" },
      defaultValue: "Stay updated with the latest news and offers.",
    },
    buttonLabel: {
      control: { type: "text" },
      defaultValue: "Subscribe Now",
    },
    onSubmit: { action: "submitted" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default variant
export const Default: Story = {
  args: {
    title: "Join our Newsletter",
    description: "Stay updated with the latest news and offers.",
    buttonLabel: "Subscribe Now",
  },
};

// Custom background variant
export const CustomBackground: Story = {
  args: {
    title: "Sign Up for Updates",
    description: "Get exclusive access to new features and promotions.",
    buttonLabel: "Sign Up",
  },
};
