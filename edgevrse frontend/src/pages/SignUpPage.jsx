import React from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
export default function SignUpPage() {
    const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const gradientStyle = {
    background: "linear-gradient(90deg, #9d50bb 0%, #6e48aa 100%)",
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
      {/* Glow Ring Animation */}
      <div className="absolute w-[380px] h-[580px] rounded-2xl z-0 animate-glow-ring border-4 border-purple-500/40"></div>

      {/* Signup Box */}
      <div className="w-full max-w-md p-8 rounded-2xl bg-black/60 backdrop-blur-md shadow-2xl relative z-10 animate-fade-in">
        <h1 className="text-white text-3xl font-light mb-1">Create an</h1>
        <h2 className="text-white text-4xl font-bold mb-8">Account!</h2>

        <div className="space-y-6 pr-6">
          <div className="relative">
            <FaUser className="absolute left-4 top-3.5 text-white" size={18} />
            <input
              placeholder="Username"
              className="pl-10 w-full py-3 bg-white/10 backdrop-blur-sm text-white placeholder-white border-none rounded-full focus:outline-none"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-3.5 text-white" size={18} />
            <input
              placeholder="Email Address"
              className="pl-10 w-full py-3 bg-white/10 backdrop-blur-sm text-white placeholder-white border-none rounded-full focus:outline-none"
            />
          </div>

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

          <div className="relative">
            <FaLock className="absolute left-4 top-3.5 text-white" size={18} />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="pl-10 pr-10 w-full py-3 bg-white/10 backdrop-blur-sm text-white placeholder-white border-none rounded-full focus:outline-none"
            />
            <div
              className="absolute right-4 top-3.5 text-white cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </div>
          </div>

          <button
            className="w-full mt-4 text-white font-bold py-3 rounded-full text-lg shadow-md hover:opacity-90 transition animate-pulse"
            style={gradientStyle}
          >
            LOG IN
          </button>

          <p className="text-white text-center mt-6">
            Already have an account?{' '}
            <a href="/login" className="text-purple-300 underline">Sign in</a>
          </p>
        </div>
      </div>

      {/* Tailwind Keyframes */}
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
