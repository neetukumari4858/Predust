import { useEffect, useState } from "react";
import { getModels } from "../api/mockApi.ts";
import ModelSelect from "./ModelSelect.tsx";
import logo from "../assets/logo.png";
import { useTheme } from "../ThemeContext.tsx";
interface Model {
  id: string;
  name: string;
}

interface HeaderProps {
  model: string;
  onChangeModel: (value: string) => void;
  onOpenTemplates: () => void;
}

export default function Header({
  model,
  onChangeModel,
  onOpenTemplates,
}: HeaderProps) {
  const [models, setModels] = useState<Model[]>([]);
  const [loading, setLoading] = useState(true);
  const { dark, toggleTheme } = useTheme();

  useEffect(() => {
    let mounted = true;
    getModels().then((m) => {
      if (mounted) {
        setModels(m);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <div
        className={`flex flex-col sm:flex-row gap-3 sm:gap-6 shadow-md justify-between rounded items-center p-4 w-full 
        ${dark ? "bg-[#121937]" : "bg-bg border border-gray-100"}`}
      >
        <div className="text-lg font-bold text-text text-center sm:text-left w-full sm:w-auto">
          <div className="flex items-center gap-1.5">
            <img src={logo} alt="BrainyAi Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              Brainy<span className="text-text">Ai</span>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <ModelSelect
            model={model}
            models={models}
            loading={loading}
            onChangeModel={onChangeModel}
          />
          <button
            onClick={onOpenTemplates}
            aria-label="Templates"
            className={`px-3 py-2 rounded bg-bg text-text text-sm sm:text-base w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              !dark ? "border" : ""
            }`}
          >
            Templates
          </button>
          <button
            onClick={toggleTheme}
            className={`px-3 py-2 rounded bg-bg text-text text-sm sm:text-base w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              !dark ? "border" : ""
            }`}
          >
            {dark ? "Light Mode ☀️" : "Dark Mode 🌙"}
          </button>
        </div>
      </div>
    </>
  );
}
