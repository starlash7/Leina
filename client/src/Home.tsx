import React from 'react';
import './App.css';

function App() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-pink-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-3xl mx-auto">
          {/* Avatar with glow effect */}
          <div className="relative w-64 h-64 mx-auto mb-12">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-purple-500/20 rounded-full blur-[100px]" />
            <div className="relative">
              {/* Outer ring with glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-75" />
              {/* Inner circle */}
              <div className="relative rounded-full bg-gradient-to-br from-purple-600 to-purple-800 aspect-square">
                {/* Avatar image placeholder */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <img
                    src="/Leina.png"
                    alt="Leina Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Status indicator */}
                <div className="absolute top-2 right-2 w-4 h-4 bg-green-400 rounded-full" />
              </div>
            </div>
          </div>

          {/* Title with gradient */}
          <h1 className="text-7xl font-bold mb-8 bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 text-transparent bg-clip-text tracking-tight">
          Leina: Your Learning Partner
          </h1>

          {/* Subtitle with better spacing */}
          <div className="space-y-2 mb-16">
            <p className="text-xl text-gray-300">
              Leina is an AI tutor that helps you learn.
            </p>
            <p className="text-xl text-gray-300">
              powered by AI, built for education.
            </p>
          </div>

          {/* Social buttons with better hover effects */}
          <div className="flex justify-center gap-4">
            {['Github', 'Discord', 'Twitter'].map((platform) => (
              <button
                key={platform}
                className="px-6 py-2.5 bg-[#18181b]/80 hover:bg-[#27272a]/80 rounded-lg transition-all
                          text-gray-300 hover:text-white text-sm font-medium backdrop-blur-sm
                          border border-gray-800/50 hover:border-gray-700/50"
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