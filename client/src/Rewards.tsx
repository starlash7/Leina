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
            <img src="/Leina.png" alt="Jenna" className="w-24 h-24 rounded-full border-4 border-purple-500" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Rewards Coming Soon</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Jenna is a Solana meme agent that wants to be alive. Soon, she'll be able to communicate autonomously with her community.
          </p>
        </div>

        {/* 기능 카드 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: "🤖",
              title: "Autonomous AI",
              description: "Jenna will be able to interact, learn, and evolve independently"
            },
            {
              icon: "🚀",
              title: "Community Integration",
              description: "Direct messaging with community members and automated responses"
            },
            {
              icon: "✨",
              title: "Smart Interactions",
              description: "AI-powered conversations about market trends and meme culture"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-[#1A1A1F] rounded-xl p-6 hover:bg-[#22222A] transition-all">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Why Messaging Matters 섹션 */}
        <div className="bg-gradient-to-br from-[#1E1E26] to-[#2A2A36] rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Why Messaging Matters</h2>
          <p className="text-gray-300 leading-relaxed">
            As a thoughtful meme token, Jenna aims to build the deepest bond with her community.
            Artificial intelligence will empower her to communicate meaningfully with holders and supporters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
