import type { Meta, StoryObj } from "@storybook/react";
import HeaderBanners from "./HeaderBanners";

const meta: Meta<typeof HeaderBanners> = {
  title: "Components/HeaderBanners",
  component: HeaderBanners,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    imageUrl: {
      control: { type: "text" },
      defaultValue: "https://www.cvent.com/sites/default/files/styles/max_1170w/public/image/2024-08/Hp2024.webp?itok=eNPdq5_M",  // Default image URL
    },
    backgroundColor: {
      control: { type: "text" },
      defaultValue: "bg-gradient-to-r from-[#0D68E0] to-[#8257D9]", // Default gradient background
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const HeaderBannerFull: Story = {
  args: {
    imageUrl: "https://www.cvent.com/sites/default/files/styles/max_1170w/public/image/2024-08/Hp2024.webp?itok=eNPdq5_M",  // Custom image URL
    backgroundColor: "bg-gradient-to-r from-[#0D68E0] to-[#8257D9]",
    heading_title: "Your all-in-one platform for every event",
    // description: "Header banner full default description"
  },
};

export const HeaderBannerMedia: Story = {
  args: {
    imageUrl: "https://www.cvent.com/sites/default/files/styles/max_1600w/public/image/2024-01/Higher%20Education%20Value%20Prop%201.webp?itok=LZPeUzJf",  // Custom image URL
    backgroundColor: "bg-gradient-to-r from-[#049F7C] to-[#8457D9]",
    heading_title: "An easy, powerful webinar platform",
    // description: "Header banner full default description"
  },
};

export const HeaderBannerModernForm: Story = {
  args: {
    imageUrl: "",  // Empty image URL, so it shows the form
    backgroundColor: "bg-gradient-to-r from-[#003673] to-[#0050ab]",
    heading_title: "Connect, captivate, and build lifelong relationships",
    // description: "Header banner full default description"
  },
};


// options: [
        //   "bg-gradient-to-r from-[#006AE1] to-[#049F7C]",
        //   "bg-gradient-to-r from-[#006AE1] to-[#8457D9]",
        //   "bg-gradient-to-r from-[#003673] to-[#0050ab]",
        //   "bg-gradient-to-r from-[#049F7C] to-[#8457D9]",
        // ],
