import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./headings"; // Adjust according to your file structure

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default H1 Heading
export const H1: Story = {
  args: {
    size: "h1",
    color: "default",
    weight: "bold",
    children: "This is an H1 Heading",
  },
};

// H2 Heading with Custom Color
export const H2: Story = {
  args: {
    size: "h2",
    color: "primary",
    weight: "semibold",
    children: "This is an H2 Heading with Primary Color",
  },
};

// H3 Heading with Danger Color
export const H3: Story = {
  args: {
    size: "h3",
    color: "danger",
    weight: "normal",
    children: "This is an H3 Heading with Danger Color",
  },
};

// H4 Heading with Light Text
export const H4: Story = {
  args: {
    size: "h4",
    color: "light",
    weight: "bold",
    children: "This is an H4 Heading with Light Color",
  },
};

// H5 Heading with Bold Weight
export const H5: Story = {
  args: {
    size: "h5",
    color: "default",
    weight: "bold",
    children: "This is an H5 Heading with Bold Weight",
  },
};

// H6 Heading with Custom Font Weight
export const H6: Story = {
  args: {
    size: "h6",
    color: "secondary",
    weight: "semibold",
    children: "This is an H6 Heading with Semibold Weight",
  },
};

// All variants together
export const AllVariants: Story = {
  render: () => (
    <div>
      <Heading size="h1" color="default" weight="bold">
        H1 - Default Bold
      </Heading>
      <Heading size="h2" color="primary" weight="semibold">
        H2 - Primary Semibold
      </Heading>
      <Heading size="h3" color="danger" weight="normal">
        H3 - Danger Normal
      </Heading>
      <Heading size="h4" color="light" weight="bold">
        H4 - Light Bold
      </Heading>
      <Heading size="h5" color="default" weight="bold">
        H5 - Default Bold
      </Heading>
      <Heading size="h6" color="secondary" weight="semibold">
        H6 - Secondary Semibold
      </Heading>
    </div>
  ),
};
