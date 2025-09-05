import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useState } from "react";
import ParametersPanel from "../components/Parameters.tsx";

const meta: Meta<typeof ParametersPanel> = {
  title: "Components/ParametersPanel",
  component: ParametersPanel,
};
export default meta;

type Story = StoryObj<typeof ParametersPanel>;

export const Default: Story = {
  render: () => {
    const [parameters, setParameters] = useState({
      temperature: 0.7,
      maxTokens: 120,
    });
    return <ParametersPanel parameters={parameters} onChange={setParameters} />;
  },
};
