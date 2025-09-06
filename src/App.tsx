import React, { useState, useEffect } from "react";
import Header from "./components/Header.tsx";
import Model from "./components/Model.tsx";
import "./index.css";
import ParametersPanel from "./components/Parameters.tsx";
import Chat from "./components/Chat.tsx";
import PromptEditor from "./components/PromptEditor.tsx";
import { sendPrompt, getTemplates } from "./api/mockApi.ts";
import TemplateButton from "./components/TemplateButton.tsx";
import { useTheme } from "./ThemeContext.tsx";

// Define message type
type Message = {
  role: "user" | "ai";
  content:
    | {
        model: string;
        style: string;
        prompt: string;
        answer: string;
      }
    | string;
  meta?: any;
};

interface Template {
  id: number;
  name: string;
  prompt: string;
}
export default function App() {
  const [parameters, setParameters] = useState({
    temperature: 0.7,
    maxTokens: 120,
  });
  const [draft, setDraft] = useState("");
  const [model, setModel] = useState("");
  const [templates, setTemplates] = useState<Template[]>([]);
  const [templatesOpen, setTemplatesOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { dark } = useTheme();
  const handleCopy = async (text) => { 
    try {
      await navigator.clipboard.writeText(text.answer);
      alert("Copied!");
    } catch {
      alert("Copy failed");
    }
  };
  const handleDownload = (msg) => {    
    const payload = msg.meta || { response: msg.content };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `response-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };
  useEffect(() => {
    let mounted = true;
    getTemplates().then((t) => {
      if (mounted) setTemplates(t);
    });
    return () => {
      mounted = false;
    };
  }, []);
  const handleSend = async (text: string) => {
    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);
    try {
      const res = await sendPrompt({
        prompt: text,
        model: model || "bai-3.5",
        parameters,
      });
      const aiMsg: Message = { role: "ai", content: res.parsed, meta: res };
      setMessages((prev) => [...prev, aiMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-bg text-text min-h-screen flex justify-center">
        <div className="w-[95%] md:w-[80%] flex flex-col items-center mt-6 md:mt-8 gap-4">
          <Header
            model={model}
            onChangeModel={setModel}
            onOpenTemplates={() => setTemplatesOpen(true)}
          />
          <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="w-full lg:w-[30%]">
              <ParametersPanel
                parameters={parameters}
                onChange={setParameters}
              />
            </div>
            <div className="w-full lg:w-[70%] flex flex-col items-start gap-6">
              <Chat
                messages={messages}
                onCopy={handleCopy}
                onDownload={handleDownload}
              />
              <div className="w-full">
                <PromptEditor
                  value={draft}
                  onChange={setDraft}
                  onSend={handleSend}
                  disabled={loading}
                />
              </div>
              <Model
                title="Templates"
                open={templatesOpen}
                onClose={() => setTemplatesOpen(false)}
              >
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {templates.map((t) => (
                    <div
                      key={t.id}
                      className={`p-4  rounded-lg  shadow-sm ${
                        dark ? "bg-[#121937]" : "border bg-bg"
                      }`}
                    >
                      <strong className="block text-base sm:text-lg">
                        {t.name}
                      </strong>
                      <small className="text-text block text-sm sm:text-base">
                        {t.prompt}
                      </small>
                      <div className="mt-3">
                        <TemplateButton
                          onClick={() => {
                            setDraft(t.prompt + " ");
                            setTemplatesOpen(false);
                          }}
                          className={`w-full sm:w-auto px-3 py-2 text-sm rounded-lg  transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            dark
                              ? 'bg-bg  hover"bg-bg'
                              : "border border-gray-300 hover:bg-gray-100"
                          }`}
                        >
                          Use Template
                        </TemplateButton>
                      </div>
                    </div>
                  ))}
                </div>
              </Model>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
