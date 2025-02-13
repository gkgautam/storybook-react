import { Meta, StoryObj } from "@storybook/react";
import { AnchorLink } from "./anchorLink"; // Import the component
import { action } from "@storybook/addon-actions"; // For adding actions

const meta: Meta<typeof AnchorLink> = {
  title: "Components/AnchorLink",
  component: AnchorLink,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    href: "/en/request-demo",
    onClick: action("clicked"),
    children: "Request a demo",
    className: "cta-link",
  },
};

export const White: Story = {
  args: {
    variant: "white",
    href: "/en/request-demo",
    onClick: action("clicked"),
    children: "Request a demo",
    className: "cta-link",
  },
};
