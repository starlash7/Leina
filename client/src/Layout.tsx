import React from 'react';
import { Home, MessageSquare, BookOpen, Trophy, User } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-white text-[#b11d85]">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white backdrop-blur-sm z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Logo */}
            <Link to="/" className="flex items-center space-x-2">
  <div className="relative">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full opacity-75"></div>
    <div className="relative">
      <img
        src="/Leina.png"
        alt="Leina"
        className="w-8 h-8 rounded-full border-1 border-purple-500/50 ring-2 ring-purple-500/20"
      />
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full ring-1 ring-[#111113]"></div>
    </div>
  </div>
  <span className="text-lg font-medium">AI Agent: Leina</span>
</Link>

            {/* Right side - Navigation */}
            <div className="flex items-center space-x-8">
              <NavLink icon={<Home size={18} />} text="Home" to="/" />
              <NavLink icon={<MessageSquare size={18} />} text="Chat" to="/chat" />
              <NavLink icon={<BookOpen size={18} />} text="Learn" to="/learn" />
              <NavLink icon={<Trophy size={18} />} text="Rewards" to="/rewards" />
              <NavLink icon={<User size={18} />} text="Profile" to="/profile" />
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
};

interface NavLinkProps {
  icon: React.ReactNode;
  text: string;
  to: string;
}

const NavLink = ({ icon, text, to }: NavLinkProps) => (
  <Link
    to={to}
    className="flex items-center space-x-2 text-[#b11d85] hover:text-[#b11d85] transition-all opacity-80 hover:opacity-100"
  >
    {icon}
    <span className="text-sm">{text}</span>
  </Link>
);

export default Layout;