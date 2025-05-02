import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const gradientStyle = {
    background: "linear-gradient(90deg, #ff416c 0%, #9d50bb 100%)",
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('/src/assets/bg1.jpg'), linear-gradient(to bottom right, #1a002e, #32004e)",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Glow Border */}
      <div className="absolute w-[360px] h-[520px] rounded-2xl z-0 animate-glow-ring border-4 border-purple-500/40"></div>

      {/* Login Box */}
      <div className="w-full max-w-sm p-8 rounded-2xl bg-black/60 backdrop-blur-md shadow-2xl relative z-10 animate-fade-in">
        <h1 className="text-white text-4xl font-light mb-2">Welcome</h1>
        <h2 className="text-purple-400 text-5xl font-bold mb-8 tracking-wide">BACK</h2>

        <div className="space-y-5">
          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-3.5 text-white" size={18} />
            <input
              placeholder="Email Adress"
              className="pl-10 w-full py-3 bg-white/10 backdrop-blur-sm text-white placeholder-white border-none rounded-full focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-4 top-3.5 text-white" size={18} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="pl-10 pr-10 w-full py-3 bg-white/10 backdrop-blur-sm text-white placeholder-white border-none rounded-full focus:outline-none"
            />
            <div
              className="absolute right-4 top-3.5 text-white cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </div>
          </div>

          {/* Remember me */}
          <div className="flex items-center text-white text-sm">
            <input type="checkbox" className="mr-2 accent-purple-500" />
            Remember for 30 days
          </div>

          {/* Login Button */}
          <button
            className="w-full mt-2 text-white font-bold py-3 rounded-full text-lg shadow-md hover:opacity-90 transition border border-white"
            style={gradientStyle}
          >
            LOG IN
          </button>

          {/* Forgot Password */}
          <div className="text-center">
            <a href="#" className="text-white text-sm underline">
              Forgot Password?
            </a>
          </div>
        </div>

        {/* Sign Up Link */}
        <p className="text-white text-center mt-6 text-sm">
          Don’t have an account?{" "}
          <a href="/signup" className="text-purple-300 font-semibold underline">
            Sign up
          </a>
        </p>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow-ring {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
            box-shadow: 0 0 20px rgba(157, 80, 187, 0.4);
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
            box-shadow: 0 0 30px rgba(157, 80, 187, 0.7);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-glow-ring {
          animation: glow-ring 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
