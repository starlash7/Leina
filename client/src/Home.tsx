import React from 'react';
import './App.css';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0B] overflow-hidden">
      {/* 배경 이미지 */}
      <div className="fixed inset-0">
        <img
          src="/Background.png"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* 그라데이션 효과 */}
      <div className="fixed inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-pink-500/10 rounded-full blur-[120px]" />
      </div>

      {/* 메인 컨텐츠 */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-3xl mx-auto">
          {/* 프로필 이미지 섹션 */}
          <div className="relative w-48 h-48 mx-auto mb-12">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]" />
            <div className="relative w-full h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-75" />
              <div className="relative w-full h-full rounded-full">
                <img
                  src="/Leina.png"
                  alt="Leina Avatar"
                  className="w-full h-full object-cover rounded-full"
                />
                {/* 별 모양 상태 표시 */}
                <div className="absolute -top-1 -right-1 w-6 h-6">
                  <div className="absolute inset-0">
                    <div className="absolute w-full h-full animate-pulse">
                      <div className="absolute inset-0 bg-yellow-400 rounded-full blur-sm opacity-40"></div>
                    </div>
                    <svg
                      viewBox="0 0 24 24"
                      className="w-full h-full text-yellow-400"
                      fill="currentColor"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 타이틀 */}
          <h1 className="text-7xl font-bold mb-8 bg-gradient-to-r from-[#4ADE80] via-[#FDE047] to-[#4ADE80] text-transparent bg-clip-text tracking-tight">
            Leina: Your Learning Partner
          </h1>

          {/* 서브타이틀 */}
          <div className="space-y-2 mb-16">
            <p className="text-xl text-white">
              Leina is an AI tutor that helps you learn.
            </p>
            <p className="text-xl text-white">
              powered by AI, built for education.
            </p>
          </div>

          {/* 소셜 버튼 */}
          <div className="flex justify-center gap-4">
            {['Github', 'Discord', 'Twitter'].map((platform) => (
              <button
                key={platform}
                className="px-6 py-2.5 bg-white/90 hover:bg-white/95 rounded-lg transition-all
                          text-purple-500 hover:text-pink-500 text-sm font-medium backdrop-blur-sm
                          border border-purple-200 hover:border-pink-300 shadow-sm"
              >
                {platform}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
