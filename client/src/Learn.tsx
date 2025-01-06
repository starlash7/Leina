import React from 'react';

const Learn = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-yellow-500">
  <div className="fixed inset-0">
        <img
          src="/Background.png"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>


      {/* 메인 컨텐츠 */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* 프로필 섹션 */}
        <div className="flex items-center gap-4 mb-12 bg-gradient-to-br from-[#272034] to-[#0c2834] p-6 rounded-2xl">
          <img src="/Leina.png" alt="Profile" className="w-16 h-16 rounded-full ring-2 ring-yellow-500" />
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              Explore Leina: Your Learning Partner
              <span className="text-yellow-500">📚 </span>
            </h1>
            <p className="text-white mt-1">
              Hi! i'm Leina. Find your learning courses.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 크리덴셜 섹션 */}
          <div className="space-y-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-300">
              <span className="text-yellow-500">👩‍🏫</span>
              AI Learning Agent System
            </h2>
            <div className="space-y-4 bg-gradient-to-br from-[#272034] to-[#0c2834] p-6 rounded-2xl">
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
          <div className="bg-gradient-to-br from-[#272034] to-[#0c2834] rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Who is Leina?</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
            Hello, I am Leina. I'm 22 years old and living in Tokyo. Leina is an innovative AI-powered education platform. It provides features such as individual AI tutor assignment, real-time learning feedback, recording learning progress on the blockchain, and token rewards based on achievement. It also offers integrated analysis of professional AI tutors by subject, intelligent learning analysis and prediction, and the application of AI-based learning efficiency optimization algorithms.
            Leina analyzes each user's learning style and abilities to provide the optimal learning experience. By integrating blockchain technology, it maintains transparent and reliable learning records, and the token reward system incentivizes learning. Leina's core objective is to fuse AI and education to deliver personalized, customized learning solutions. Its mission is to maximize user learning efficiency and increase accessibility and equity in education. Users, I invite you to join me in shaping the future of education with Leina. I will always strive to support your growth and progress.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-xl
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
              className="w-full bg-wthie rounded-xl px-6 py-4 pl-12 text-gray-300
                         focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
