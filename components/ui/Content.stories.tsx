import { Meta, StoryObj } from "@storybook/react";
import Content from "./Content"; // Import the Content component
import { Button } from "./button"; // Import the Button component
import { Heading } from "./headings"; // Import the Heading component
import { Paragraph } from "./Paragraph"; // Import the Paragraph component
import { AnchorLink } from "./anchorLink"; // Import the AnchorLink component

const meta: Meta<typeof Content> = {
  title: "Components/Content",
  component: Content,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Heading level={1} className="text-xl font-bold">
          Welcome to Our Website
        </Heading>
        <Paragraph fontSize="lg" color="primary" textAlign="center">
          We are glad to have you here! Explore our features and start using the app today.
        </Paragraph>
        <Button variant="default" size="default" onClick={() => alert("Button clicked!")}>
          Start Now
        </Button>
        <AnchorLink variant="default" href="/request-demo">
          Request a Demo
        </AnchorLink>
      </>
    ),
  },
};

export const WithMultipleComponents: Story = {
  args: {
    children: (
      <>
        <Heading level={2} className="text-lg font-medium">
          Features
        </Heading>
        <Paragraph fontSize="md" color="secondary" textAlign="left">
          Our app provides a wide range of features to help you manage your tasks efficiently.
        </Paragraph>
        <ul>
          <li>
            <Paragraph fontSize="sm" color="secondary" textAlign="left">
              Feature 1: Task management
            </Paragraph>
          </li>
          <li>
            <Paragraph fontSize="sm" color="secondary" textAlign="left">
              Feature 2: Calendar integration
            </Paragraph>
          </li>
        </ul>
        <Button variant="outline" size="sm" onClick={() => alert("Outline button clicked!")}>
          Learn More
        </Button>
      </>
    ),
  },
};
