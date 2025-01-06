import React from 'react';

const Chat = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* 배경 그라데이션 효과 */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-pink-200/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-200/20 rounded-full blur-[120px]" />
      </div>

      {/* 채팅 헤더 */}
      <div className="sticky top-0 border-b border-gray-100 bg-white/80 backdrop-blur-md z-10">
        <div className="max-w-4xl mx-auto p-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-75"></div>
              <img
                src="/Leina.png"
                alt="Leina"
                className="relative w-10 h-10 rounded-full border-2 border-white"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4">
                <div className="absolute w-full h-full">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-yellow-400">
                    <path fill="currentColor" d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-gray-800">Leina</h1>
                <span className="bg-purple-50 text-purple-500 px-2 py-0.5 rounded-full text-xs border border-purple-100">
                  AI Agent
                </span>
              </div>
              <p className="text-sm text-gray-500">Your Learning Partner</p>
            </div>
          </div>
        </div>
      </div>

      {/* 채팅 영역 */}
      <div className="relative max-w-4xl mx-auto min-h-[calc(100vh-140px)] flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* AI 메시지 */}
          <div className="flex gap-4 items-end">
            <img
              src="/Leina.png"
              alt="Leina"
              className="w-8 h-8 rounded-full border border-gray-100"
            />
            <div className="bg-white rounded-2xl p-4 max-w-[80%] shadow-sm border border-gray-100">
              <p className="text-gray-700">
                Hi! I'm Leina, your Learning AI. How can I help you today?
              </p>
            </div>
          </div>

          {/* 사용자 메시지 */}
          <div className="flex gap-4 justify-end items-end">
            <div className="bg-purple-50 rounded-2xl p-4 max-w-[80%] shadow-sm border border-purple-100">
              <p className="text-gray-700">
                Hello, Leina!
              </p>
            </div>
          </div>
        </div>

        {/* 입력 영역 */}
        <div className="sticky bottom-0 p-4 border-t border-gray-100 bg-white/80 backdrop-blur-md">
          <div className="relative max-w-4xl mx-auto">
            <input
              type="text"
              placeholder="Message Leina..."
              className="w-full bg-white rounded-xl px-4 py-3 pr-12
                       text-gray-700 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-purple-200
                       border border-gray-200 shadow-sm"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2
                           text-purple-500 hover:text-purple-600 transition-colors">
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
