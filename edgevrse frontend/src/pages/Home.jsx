import React from "react";

export default function Home() {
  return (
    <div
      className="min-h-screen text-white font-sans p-4 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url('/src/assets/bg3.jpg')`,
        backgroundColor: 'rgba(10,10,15,0.7)', // slight dark base only
        backgroundBlendMode: 'soft-light', // softer blending
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6 bg-black/40 p-3 rounded-xl shadow-md">
        <div className="flex items-center space-x-2">
          <button className="text-3xl text-pink-400">&#9776;</button>
          <h2 className="text-xl text-pink-200">Welcome,</h2>
          <span className="text-xl font-bold text-white">PROFILE NAME</span>
        </div>
        <div className="w-12 h-12 rounded-full border-2 border-pink-500 overflow-hidden">
          <img
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Wallet */}
      <div className="bg-pink-700/60 text-white px-4 py-2 rounded-xl w-max font-semibold mb-6 shadow-lg backdrop-blur-sm">
        💳 My Wallet: <span className="font-bold">$159.00</span>
      </div>

      {/* Welcome Card */}
      <div className="w-full bg-gradient-to-r from-green-600 via-purple-600 to-green-600 rounded-2xl shadow-lg p-4 md:p-6 mb-6 flex flex-row items-center justify-between text-white relative overflow-hidden">
  {/* Illustration */}
  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
    <img
      src="/src/assets/bg4.jpg"
      alt="Players"
      className="w-24 h-24 md:w-28 md:h-28 rounded-full object-contain"
    />
  </div>

  {/* Text Content */}
  <div className="flex-1 text-center md:text-left">
    <h2 className="text-lg md:text-xl font-bold text-white">WELCOME TO</h2>
    <h1 className="text-3xl md:text-4xl font-extrabold text-black">EDGEVERSE</h1>
    <p className="text-xs md:text-sm text-white mt-1">
      Available 1 December - 30 December 2025
    </p>
    <div className="mt-4 md:mt-0 md:ml-4">
    <button className="bg-white text-black font-bold px-5 py-2 text-sm rounded-full shadow-md hover:bg-black hover:text-white transition">
      UNLOCK PASS
    </button>
  </div>
  </div>

  {/* Button */}
  

  
  
</div>








      {/* Navigation Tabs */}
      <div className="flex justify-between mb-6 text-xs md:text-sm text-pink-100">
        {["EVENT ZONE", "CHAT", "GAME ZONE", "STUDY ZONE", "MORE"].map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-1">
            <div className="bg-gradient-to-tr from-[#FF5161] to-[#4666FF] p-3 rounded-full shadow hover:scale-110 transition duration-200 text-xl">
              🎮
            </div>
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* Tournament Cards */}
      {[
        {
          title: "TOURNAMENT 1",
          subtitle: "FREE FIRE",
          desc: "Game More, Worry Less",
          img: "/src/assets/ff.jpg",
        },
        {
          title: "TOURNAMENT 2",
          subtitle: "BGMI",
          desc: "India Ka Battleground",
          img: "/src/assets/bgmi.jpg",
        },
        {
          title: "TOURNAMENT 3",
          subtitle: "VALORANT",
          desc: "Gaming Excellence in Every Pixel",
          img: "/src/assets/valo.jpg",
        },
      ].map((t, i) => (
        <div
          key={i}
          className="bg-black/60 p-4 rounded-2xl mb-4 text-white shadow-2xl border border-fuchsia-500/20 backdrop-blur-sm"
        >
          <div className="flex items-center">
            <img
              src={t.img}
              alt={t.title}
              className="w-16 h-16 rounded-full object-cover border-2 border-white"
            />
            <div className="ml-4">
              <h4 className="text-lg font-bold text-pink-200">{t.title}</h4>
              <p className="text-sm font-semibold text-fuchsia-400">{t.subtitle}</p>
              <p className="text-xs text-pink-100">{t.desc}</p>
            </div>
            <div className="ml-auto flex flex-col items-end space-y-2">
              <button className="bg-black text-white text-xs px-3 py-1 rounded-full hover:bg-white hover:text-black transition duration-300">
                START
              </button>
              <button className="bg-red-600 text-white text-xs px-3 py-1 rounded-full hover:brightness-110 transition duration-300">
                ENTRY
              </button>
              <div className="flex space-x-2 mt-2 text-lg text-pink-300">
                <button>❤️</button>
                <button>🛒</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
