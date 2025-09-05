import { useTheme } from "../ThemeContext.tsx";

interface Model {
  id: string;
  name: string;
}

interface ModelSelectProps {
  model: string;
  models: Model[];
  loading?: boolean;
  onChangeModel: (value: string) => void;
}

export default function ModelSelect({
  model,
  models,
  loading = false,
  onChangeModel,
}: ModelSelectProps) {
  const { dark } = useTheme();
  return (
    <select
      aria-label="Select model"
      value={model}
      onChange={(e) => onChangeModel(e.target.value)}
      disabled={loading}
      className={`px-3 py-2 rounded bg-bg text-text text-sm sm:text-base w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        !dark ? "border" : ""
      }`}
    >
      <option value="">Select Model</option>
      {models.map((m) => (
        <option key={m.id} value={m.id}>
          {m.name}
        </option>
      ))}
    </select>
  );
}
