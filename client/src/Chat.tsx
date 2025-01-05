import React from 'react';

const Chat = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      {/* 채팅 헤더 */}
      <div className="border-b border-gray-800/40 p-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <img
            src="/Leina.png"
            alt="Jenna"
            className="w-10 h-10 rounded-full border-2 border-purple-500"
          />
          <div>
            <h1 className="text-lg font-bold flex items-center gap-2">
              Leina
              <span className="bg-purple-600/20 text-purple-400 px-2 py-0.5 rounded-full text-xs">
                AI Agent
              </span>
            </h1>
            <p className="text-sm text-gray-400">Online</p>
          </div>
        </div>
      </div>

      {/* 채팅 영역 */}
      <div className="max-w-4xl mx-auto h-[calc(100vh-180px)] flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* AI 메시지 */}
          <div className="flex gap-4">
            <img
              src="/Leina.png"
              alt="Jenna"
              className="w-8 h-8 rounded-full"
            />
            <div className="bg-[#111113] rounded-2xl p-4 max-w-[80%]">
              <p className="text-gray-300">
                Hi! I'm Leina, your Learning AI. How can I help you today?
              </p>
            </div>
          </div>

          {/* 사용자 메시지 */}
          <div className="flex gap-4 justify-end">
            <div className="bg-purple-600/20 rounded-2xl p-4 max-w-[80%]">
              <p className="text-gray-300">
                Tell me about your AI capabilities!
              </p>
            </div>
          </div>

          {/* AI 응답 */}
          <div className="flex gap-4">
            <img
              src="/Leina.png"
              alt="Jenna"
              className="w-8 h-8 rounded-full"
            />
            <div className="bg-[#111113] rounded-2xl p-4 max-w-[80%]">
              <p className="text-gray-300">
                I specialize in three main areas:
                <br/><br/>
                1. Advanced natural language processing
                <br/>
                2. Real-time market analysis
                <br/>
                3. Autonomous trading decisions
                <br/><br/>
                Would you like to know more about any of these capabilities?
              </p>
            </div>
          </div>
        </div>

        {/* 입력 영역 */}
        <div className="p-4 border-t border-gray-800/40">
          <div className="relative">
            <input
              type="text"
              placeholder="Message Jenna..."
              className="w-full bg-[#111113] rounded-xl px-4 py-3 pl-4 pr-12
                       text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2
                           text-purple-500 hover:text-purple-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
