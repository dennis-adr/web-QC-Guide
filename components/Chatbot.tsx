import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, StopCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, Role } from '../types';

export const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: Role.MODEL,
      text: "Halo! 👋 Saya Navigator QA Technocenter.\n\nSaya bisa bantu carikan info prosedur SIT/UAT atau jelaskan status bug dengan cepat. Mau tanya apa?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: Role.USER,
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Create a temporary placeholder for the model response
      const modelMessageId = (Date.now() + 1).toString();
      const initialModelMessage: ChatMessage = {
          id: modelMessageId,
          role: Role.MODEL,
          text: '', // Start empty for streaming
          timestamp: new Date()
      };
      
      setMessages(prev => [...prev, initialModelMessage]);

      const stream = await sendMessageToGemini(userMessage.text);
      
      let accumulatedText = "";

      for await (const chunk of stream) {
          accumulatedText += chunk;
          
          setMessages(prev => prev.map(msg => 
              msg.id === modelMessageId 
                  ? { ...msg, text: accumulatedText }
                  : msg
          ));
      }

    } catch (error) {
      console.error(error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: Role.MODEL,
        text: "Maaf, sepertinya ada gangguan koneksi. Boleh coba kirim pertanyaan lagi?",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-8rem)] p-4 flex flex-col">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-slate-900 p-4 flex items-center space-x-3 shadow-md z-10">
          <div className="bg-blue-500 p-2 rounded-lg">
             <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold">QA Navigator AI</h3>
            <p className="text-blue-200 text-xs">Technocenter Support</p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50 scrollbar-thin">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start space-x-3 ${
                msg.role === Role.USER ? 'flex-row-reverse space-x-reverse' : 'flex-row'
              }`}
            >
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  msg.role === Role.USER ? 'bg-blue-600' : 'bg-emerald-600'
                }`}
              >
                {msg.role === Role.USER ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-white" />}
              </div>
              
              <div
                className={`max-w-[85%] rounded-2xl p-4 shadow-sm text-sm leading-relaxed ${
                  msg.role === Role.USER
                    ? 'bg-blue-600 text-white rounded-tr-none'
                    : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                }`}
              >
                {msg.role === Role.USER ? (
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                ) : (
                  <div className="prose prose-sm prose-slate max-w-none prose-p:my-2 prose-ul:my-1 prose-li:my-0">
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-200">
          <form onSubmit={handleSend} className="relative flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanya prosedur, status bug, atau komplain..."
              className="w-full pl-4 pr-12 py-3 bg-slate-100 border-0 rounded-xl text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className={`absolute right-2 p-2 rounded-lg transition-colors ${
                isLoading || !input.trim()
                  ? 'text-slate-400 bg-transparent cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
              }`}
            >
              {isLoading ? (
                  <StopCircle className="w-5 h-5 animate-pulse" />
              ) : (
                  <Send className="w-5 h-5" />
              )}
            </button>
          </form>
          <div className="text-center mt-2">
            <p className="text-[10px] text-slate-400">AI Technocenter • Selalu cek dokumen asli untuk konfirmasi.</p>
          </div>
        </div>
      </div>
    </div>
  );
};