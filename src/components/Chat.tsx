import { Copy } from "lucide-react";
import { useTheme } from "../ThemeContext.tsx";
export default function Chat({ messages, onCopy, onDownload }) {
  const { dark } = useTheme();

  return (
    <>
      <div
        className={`shadow-md rounded-lg p-4 w-full mx-auto 
           ${dark ? "bg-[#121937]" : "bg-bg border border-gray-300"}`}
      >
        <h2 className="text-base sm:text-lg font-semibold text-text mb-3">
          Chat / Output
        </h2>
        <div
          className={`space-y-3 max-h-[400px] overflow-y-auto rounded-md p-2 sm:p-3 
          ${dark ? "bg-[#121937]" : "bg-bg"}`}
          role="log"
          aria-live="polite"
        >
          {messages.length === 0 && (
            <div className="bg-bg text-text p-2 border border-gray-300 rounded-md text-xs sm:text-sm">
              👋 Ask me anything using the prompt editor below.
            </div>
          )}
          {messages.map((m, i) => (
            <div
              key={i}
              className={`p-2 rounded-md text-xs sm:text-sm md:text-base max-w-[85%] sm:max-w-[75%] break-words ${
                m.role === "user"
                  ? "bg-blue-500 text-white ml-auto"
                  : "bg-[#DFF2FF] text-gray-800"
              }`}
            >
              {m.role === "user" ? (
                m.content
              ) : (
                <div className="flex flex-col gap-2">
                  <p className="font-medium">
                    Model: {m.content.model} | Style:{m.content.style}
                  </p>
                  <span className=" font-medium">
                    Prompt: {m.content.prompt}
                  </span>
                  <p className=" font-medium">Answer:</p>
                  <p>{m.content.answer}</p>
                </div>
              )}

              {m.role === "ai" && (
                <div className="flex flex-wrap gap-2 mt-2">
                  <button
                    className={`flex items-center gap-1 px-2 sm:px-3 py-1 text-xs rounded-md text-text 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                    ${
                      dark
                        ? "bg-[#121937] hover:bg-bg"
                        : "bg-bg border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => onCopy(m.content)}
                  >
                    <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Copy</span>
                  </button>
                  <button
                    className={`px-2 sm:px-3 py-1 text-xs rounded-md text-text focus:outline-none focus:ring-2 focus:ring-blue-500 
                  ${
                    dark
                      ? "bg-[#121937] hover:bg-bg "
                      : "bg-bg border border-gray-300 hover:bg-gray-100"
                  }`}
                    onClick={() => onDownload(m)}
                  >
                    Download
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
