import { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext.tsx";

export default function PromptEditor({
  value,
  onChange,
  onSend,
  disabled,
}: {
  value?: string;
  onChange: (val: string) => void;
  onSend: (val: string) => void;
  disabled?: boolean;
}) {
  const [text, setText] = useState(value || "");
  useEffect(() => {
    setText(value || "");
  }, [value]);
  const submit = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };
  const { dark } = useTheme();
  return (
    <>
      <div
        className={`w-full p-3 sm:p-4 rounded-xl shadow-lg mx-auto ${
          dark ? "bg-[#121937]" : "bg-bg border border-gray-300 "
        }`}
      >
        <h2 className="text-base sm:text-lg font-semibold text-text mb-2 sm:mb-3">
          Prompt Editor
        </h2>
        <textarea
          aria-label="Prompt editor"
          placeholder="Type your prompt here…"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            onChange(e.target.value);
          }}
          disabled={disabled}
          className="w-full min-h-[100px] sm:min-h-[120px] p-2 sm:p-3 rounded-lg border border-gray-300 bg-bg text-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm sm:text-base"
        />
        <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 mt-3 sm:mt-4">
          <button
            onClick={submit}
            disabled={disabled}
            className="px-3 sm:px-4 py-2 rounded-lg text-white bg-blue-500 font-medium hover:bg-blue-600 disabled:opacity-50 w-full sm:w-auto"
          >
            Send
          </button>
          <button
            className="px-3 sm:px-4 py-2 rounded-lg border border-gray-300 text-text hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setText("")}
            disabled={disabled}
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
}
