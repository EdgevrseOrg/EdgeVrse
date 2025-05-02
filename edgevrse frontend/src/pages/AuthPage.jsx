import React from "react";
import { useNavigate } from 'react-router-dom';

export default function AuthPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-gradient-to-br from-purple-800 via-black to-black text-white p-4 overflow-hidden relative">
      
      {/* Soft Background Pulse */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-purple-900 via-transparent to-purple-900 opacity-10 animate-pulse z-0"></div>

      {/* Auth Box with Animated Glow Ring */}
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl relative z-10">
        <div className="relative w-full max-w-md p-6 bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-2xl border border-purple-500 overflow-hidden animate-fade-in-up">
          
          {/* Glowing Ring Effect */}
          <div className="absolute inset-0 z-[-1] rounded-2xl border-2 border-purple-500 opacity-30 blur-lg animate-glow-ring"></div>

          {/* Logo Section */}
          <div className="flex items-center space-x-4 mb-10 animate-pulse">
            <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center text-black font-bold text-xl shadow-lg">
              logo
            </div>
            <span className="text-xl font-semibold tracking-wide">EDGEVRSE</span>
          </div>

          {/* Main Text */}
          <h1 className="text-4xl font-light mb-1">Let’s Get</h1>
          <h1 className="text-4xl font-bold text-pink-500 mb-6">Started!</h1>

          {/* Sign In Button */}
          <button 
            onClick={() => navigate("/login")} 
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-full font-semibold shadow-md 
              hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out animate-pulse"
          >
            SIGN IN
          </button>

          {/* Divider */}
          <div className="text-center my-4 text-sm text-gray-300">OR SIGN UP WITH</div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-6">
            <button className="bg-white p-3 rounded-full shadow hover:scale-110 transition-transform duration-300">
              <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" className="w-6 h-6" />
            </button>
            <button className="bg-white p-3 rounded-full shadow hover:scale-110 transition-transform duration-300">
              <img src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" alt="Phone" className="w-6 h-6" />
            </button>
          </div>

          {/* Footer Text */}
          <div className="text-center text-sm">
            <span className="text-gray-400">DIDN'T HAVE ACCOUNT?</span>{" "}
            <button 
              onClick={() => navigate("/signup")} 
              className="text-white font-semibold underline hover:text-purple-300 transition-colors duration-300"
            >
              SIGN UP NOW
            </button>
          </div>
        </div>
      </div>

      {/* Tailwind Animation Keyframes */}
      <style jsx>{`
       

        @layer utilities {
          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out both;
          }

          .animate-glow-ring {
            animation: glowRing 3s ease-in-out infinite;
          }

          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes glowRing {
            0%, 100% {
              transform: scale(1);
              opacity: 0.4;
              box-shadow: 0 0 20px rgba(157, 80, 187, 0.4);
            }
            50% {
              transform: scale(1.05);
              opacity: 0.7;
              box-shadow: 0 0 40px rgba(157, 80, 187, 0.8);
            }
          }
        }
      `}</style>
    </div>
  );
}
