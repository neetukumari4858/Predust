import { ReactNode } from "react";
import { useTheme } from "../ThemeContext.tsx";

interface ModalProps {
  title: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ title, open, onClose, children }: ModalProps) {
  const { dark } = useTheme();
  if (!open) return null;
  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 text-text"
        onClick={onClose}
        aria-modal="true"
        role="dialog"
      >
        <div
          className="
          bg-bg rounded-xl shadow-lg w-full max-w-lg p-5 
          max-h-[90vh] overflow-y-auto
          sm:mx-4 sm:rounded-xl
          sm:w-full sm:max-w-lg
          md:max-w-2xl
        "
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4 sticky top-0 bg-bg">
            <h2 className="text-lg font-semibold">{title}</h2>
            <button
              onClick={onClose}
              className={`px-3 py-1 text-sm rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                dark
                  ? "bg-[#121937]"
                  : "border border-gray-300 hover:bg-gray-100"
              }`}
            >
              Close
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
