import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useState } from "react";
import ModelSelect from "../components/ModelSelect.tsx";

const meta: Meta<typeof ModelSelect> = {
  title: "Components/ModelSelect",
  component: ModelSelect,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof ModelSelect>;

const sampleModels = [
  { id: "bai-3.5", name: "BAI-3.5" },
  { id: "bai-4", name: "BAI-4" },
  { id: "bai-4.5", name: "BAI-4.5" },
];

export const Default: Story = {
  render: () => {
    const [selectedModel, setSelectedModel] = useState("");
    return (
      <ModelSelect
        model={selectedModel}
        models={sampleModels}
        onChangeModel={setSelectedModel}
      />
    );
  },
};

export const Loading: Story = {
  render: () => (
    <ModelSelect
      model=""
      models={sampleModels}
      onChangeModel={() => {}}
      loading={true}
    />
  ),
};
