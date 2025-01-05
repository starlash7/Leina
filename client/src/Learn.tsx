import React from 'react';

const Learn = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">



      {/* 메인 컨텐츠 */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* 프로필 섹션 */}
        <div className="flex items-center gap-4 mb-12 bg-[#111113] p-6 rounded-2xl">
          <img src="/Leina.png" alt="Profile" className="w-16 h-16 rounded-full ring-2 ring-purple-500" />
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              Explore Leina: Your Learning Partner
              <span className="text-purple-500">📚 </span>
            </h1>
            <p className="text-gray-400 mt-1">
              Hi! i'm Leina. Find your learning courses.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 크리덴셜 섹션 */}
          <div className="space-y-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-300">
              <span className="text-purple-500">👩‍🏫</span>
              AI Learning Agent System
            </h2>
            <div className="space-y-4 bg-[#111113] p-6 rounded-2xl">
              {[
                'Assigning AI Tutors to Individuals',
                'Real-time Learning Feedback',
                'Record learning progress on the blockchain',
                'Token rewards based on achievement',
                'Provides integrated analysis of professional AI tutors by subject',
                'Intelligent Learning Analysis and Prediction',
                'Application of AI-based learning efficiency optimization algorithms'
              ].map((credential, index) => (
                <div key={index}
                     className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#1A1A1F] transition-all">
                  <span className="text-yellow-500">⭐</span>
                  <span className="text-gray-300 hover:text-white transition-colors">{credential}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why This Matters 섹션 */}
          <div className="bg-gradient-to-br from-[#1E1E26] to-[#2A2A36] rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Why This Matters</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Behind every successful meme token is a developer who knows how to build.
              Jenna Meme Agent isn't just about fun; it's backed by a proven developer
              with real achievements and a commitment to excellence.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl
                             text-white font-medium transition-all transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        {/* 검색바 */}
        <div className="mt-12 mb-12">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search features, updates, community..."
              className="w-full bg-[#111113] rounded-xl px-6 py-4 pl-12 text-gray-300
                         focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
