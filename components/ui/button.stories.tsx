import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    onClick: action("default clicked"),
    children: "Default Button",
    className: "shadow-lg",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    size: "default",
    onClick: action("destructive clicked"),
    children: "Destructive Button",
    className: "shadow-lg",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "default",
    onClick: action("outline clicked"),
    children: "Outline Button",
    className: "shadow-lg",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "default",
    onClick: action("secondary clicked"),
    children: "Secondary Button",
    className: "shadow-lg",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "default",
    onClick: action("ghost clicked"),
    children: "Ghost Button",
    className: "shadow-lg",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    size: "default",
    onClick: action("link clicked"),
    children: "Link Button",
    className: "shadow-lg",
  },
};

export const Small: Story = {
  args: {
    variant: "default",
    size: "sm",
    onClick: action("small button clicked"),
    children: "Small Button",
    className: "shadow-lg",
  },
};

export const Large: Story = {
  args: {
    variant: "default",
    size: "lg",
    onClick: action("large button clicked"),
    children: "Large Button",
    className: "shadow-lg",
  },
};

export const IconButton: Story = {
  args: {
    variant: "default",
    size: "icon",
    onClick: action("icon button clicked"),
    children: (
      <svg width="16" height="16" fill="currentColor" className="bi bi-star">
        <path d="M8 .25l1.23 4.59h4.77l-3.85 2.78 1.47 4.62-3.62-2.64-3.62 2.64L5.85 12.4l-3.85-2.78h4.77L8 .25z" />
      </svg>
    ),
    className: "shadow-lg",
  },
};

export const Disabled: Story = {
  args: {
    variant: "default",
    size: "default",
    onClick: action("disabled button clicked"),
    children: "Disabled Button",
    disabled: true,
    className: "shadow-lg",
  },
};

export const AsChild: Story = {
  args: {
    variant: "default",
    size: "default",
    onClick: action("asChild clicked"),
    children: "AsChild Button",
    asChild: true,
    className: "shadow-lg",
  },
};
