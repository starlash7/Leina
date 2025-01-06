import React from 'react';

const Rewards = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
          <div className="fixed inset-0">
        <img
          src="/Background.png"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      {/* 메인 컨텐츠 */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* 헤더 섹션 */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img src="/Leina.png" alt="Jenna" className="w-24 h-24 rounded-full border-2 border-yellow-500" />
          </div>
          <h1 className="text-4xl text-yellow-500 font-bold mb-4">Rewards Claim</h1>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Leina is a Solana Learning agent. AI tutor that helps you learn.
          </p>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Yon can learn and interact to earn token rewards based on your achievement.
          </p>
        </div>

        {/* 기능 카드 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-yellow-500">
          {[
            {
              icon: "👩‍🏫",
              title: "Autonomous AI",
              description: "Leina will be able to interact, learn, and evolve independently"
            },
            {
              icon: "🏛️",
              title: "Community Integration",
              description: "Direct messaging with community members and automated responses"
            },
            {
              icon: "✨",
              title: "Smart Interactions",
              description: "AI-powered conversations about Education learning"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-[#272034] to-[#0c2834] rounded-xl p-6 hover:bg-[#22222A] transition-all">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Why Messaging Matters 섹션 */}
        <div className="bg-gradient-to-br from-[#272034] to-[#0c2834] rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">Revolutionizing Education with AI-Powered Learning</h2>
          <p className="text-white leading-relaxed">

The platform leverages professional AI tutors tailored to specific subjects, offering real-time feedback and personalized guidance. It integrates intelligent learning analysis and prediction tools to track and optimize individual progress. By applying AI-based efficiency optimization algorithms, the system enhances learning outcomes and provides blockchain-secured progress records.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
