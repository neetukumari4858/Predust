import type { Meta, StoryObj } from "@storybook/react-webpack5";
import TemplateButton from "../components/TemplateButton.tsx";
const meta: Meta<typeof TemplateButton> = {
  title: "Components/TemplateButton",
  component: TemplateButton,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof TemplateButton>;

export const Default: Story = {
  args: {
    children: "Use Template",
    onClick: () => alert("Template used!"),
  },
};
