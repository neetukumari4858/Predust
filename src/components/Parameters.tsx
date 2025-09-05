import { useTheme } from "../ThemeContext.tsx";

export default function ParametersPanel({ parameters, onChange }) {
  const { temperature = 0.7, maxTokens = 120 } = parameters || {}
  // Compute percentage for background fill
  const tempPercent = (temperature / 1) * 100
  const tokenPercent = ((maxTokens - 30) / (400 - 30)) * 100
  const { dark } = useTheme();
  return (
    <>
    <div className={`${dark ? "w-full max-w-md p-6 rounded-xl bg-[#121937] text-text shadow-lg" : "w-full max-w-md p-6 rounded-xl bg-bg text-text shadow-lg border border-gray-300" }`}>
      <h2 className="text-lg font-semibold mb-4">Parameters</h2>
      <div className="grid gap-6">
        <div>
          <label className="flex justify-between text-sm mb-1">
            <span>Temperature</span>
            <span>{temperature.toFixed(2)}</span>
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={temperature}
            onChange={(e) =>
              onChange({ ...parameters, temperature: parseFloat(e.target.value) })
            }
            style={{
              background: `linear-gradient(to right, #3b82f6 ${tempPercent}%, #dde0e3ff ${tempPercent}%)`,
            }}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer
                       [&::-webkit-slider-thumb]:appearance-none
                       [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
                       [&::-webkit-slider-thumb]:rounded-full
                       [&::-webkit-slider-thumb]:bg-blue-500
                       [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white
                       [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4
                       [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-500
                       [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white"
          />
          <p className="text-xs text-slate-400 mt-2">
            Lower = focused; higher = creative.
          </p>
        </div>
        <div>
          <label className="flex justify-between text-sm mb-1">
            <span>Max Tokens</span>
            <span>{maxTokens}</span>
          </label>
          <input
            type="range"
            min="30"
            max="400"
            step="10"
            value={maxTokens}
            onChange={(e) =>
              onChange({ ...parameters, maxTokens: parseInt(e.target.value) })
            }
            style={{
              background: `linear-gradient(to right, #3b82f6 ${tokenPercent}%, #dde0e3ff ${tokenPercent}%)`,
            }}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer
                       [&::-webkit-slider-thumb]:appearance-none
                       [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
                       [&::-webkit-slider-thumb]:rounded-full
                       [&::-webkit-slider-thumb]:bg-blue-500
                       [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white
                       [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4
                       [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-500
                       [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white"
          />
          <p className="text-xs text-slate-400 mt-2">
            Controls response length.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
