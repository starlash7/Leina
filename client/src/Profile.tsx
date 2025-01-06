import React from 'react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
          <div className="fixed inset-0">
        <img
          src="/Background.png"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      {/* 프로필 섹션 */}
      <div className="max-w-6xl mx-auto px-8 pt-8">
        <div className="flex items-start gap-6 mb-8">
          <img
            src="/Leina.png"
            alt="Jenna"
            className="w-24 h-24 rounded-full border-2 border-yellow-500"
          />
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold">Leina: Your Learning Partner</h1>
              <span className="bg-yellow-500/70 text-white px-3 py-1 rounded-full text-sm">
                AI Agent
              </span>
            </div>
            <p className="text-gray-400 text-lg mb-4">
            Leina is an AI tutor that helps you learn. Ask anything whatever you want. 👩‍🏫
            </p>
            <div className="flex items-center gap-6">
              <div className="flex gap-6 items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <a href="#" className="text-yellow-400 hover:text-yellow-400">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                  </svg>
                </a>
                <a href="#" className="text-yellow-400 hover:text-yellow-400">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.374 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.626-5.374-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="text-yellow-400 hover:text-yellow-400">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 탭 네비게이션 */}
        <div className="border-b border-gray-800/40 mb-8">
          <div className="flex gap-12">
            {['Overview', 'Features', 'Achievements'].map((tab, index) => (
              <button
                key={tab}
                className={`pb-4 ${
                  index === 0
                    ? 'text-yellow-500 border-b-2 border-yellow-500'
                    : 'text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 메인 컨텐츠 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#272034] to-[#0c2834] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-yellow-500">🚀</span>
              <h2 className="text-xl font-bold">About Leina</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leina is an AI-powered agent built for Learning on Solana Ecosystem.
              She is very kind and loves teaching others. Her favorite food is cake.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#272034] to-[#0c2834] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-purple-500">📺</span>
              <h2 className="text-xl font-bold">AI Capabilities</h2>
            </div>
            <div className="space-y-4">
              {[
                'Assigning AI Tutors to Individuals',
                'Provides integrated analysis of professional AI tutors by subject',
                'Intelligent Learning Analysis and Prediction'
              ].map((capability, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-400">
                  <span className="text-purple-500">✨</span>
                  {capability}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
