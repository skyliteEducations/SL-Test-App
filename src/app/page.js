// 'use client'
// import Image from "next/image";
// import LoginPage from "./components/login";

// export default function Home() {
//   return (
//     <LoginPage/>
//   );
// }
'use client'
import { useState, useEffect } from "react";
import NextImage from "next/image";
import LoginPage from "./components/login";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  if (!isMobile) return <LoginPage />

  if (showSplash) return (
    <div className="h-screen w-screen flex flex-col bg-teal-700 overflow-hidden relative">

      {/* Background subtle circles */}
      <div className="absolute top-[-80px] right-[-80px] w-64 h-64 rounded-full bg-teal-600 opacity-40" />
      <div className="absolute bottom-[120px] left-[-60px] w-48 h-48 rounded-full bg-teal-800 opacity-30" />

      {/* TOP SECTION */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 gap-6 z-10">

        {/* Logo */}
        {/* <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-xl">
          <NextImage src="/logo1.png" width={52} height={52} alt="logo" className="rounded-xl" />
        </div> */}

        {/* Brand name */}
        <div className="text-center">
          <h1 className="text-white text-3xl font-bold tracking-tight">Skylite</h1>
          <h1 className="text-teal-200 text-3xl font-bold tracking-tight">Educations</h1>
          <p className="text-teal-300 text-sm mt-3 leading-relaxed max-w-[260px] mx-auto">
            Your complete exam prep platform for IIT JEE, NEET & more
          </p>
        </div>

        {/* Divider */}
        <div className="w-12 h-[2px] bg-teal-400 rounded-full" />

        {/* Feature list */}
        <div className="w-full flex flex-col gap-3 mt-2">
          {[
            { icon: "📝", label: "100+ Mock Tests", sub: "IIT JEE, NEET, UPSC & more" },
            { icon: "🎯", label: "Live Exam Portal", sub: "Real exam experience" },
            { icon: "📊", label: "Detailed Analytics", sub: "Track your progress" },
          ].map(({ icon, label, sub }) => (
            <div key={label} className="flex items-center gap-4 bg-white/10 px-4 py-3 rounded-2xl">
              <span className="text-xl w-8 text-center">{icon}</span>
              <div>
                <p className="text-white text-sm font-semibold">{label}</p>
                <p className="text-teal-300 text-xs">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="z-10 px-6 pb-10 flex flex-col gap-3">
        <button
          onClick={() => setShowSplash(false)}
          className="w-full py-4 rounded-2xl bg-white text-teal-700 font-bold text-base tracking-wide active:scale-95 transition-transform shadow-lg"
        >
          Get Started →
        </button>
        <p className="text-center text-teal-400 text-xs">
          Join 10,000+ students already on Skylite
        </p>
      </div>

    </div>
  )

  return <LoginPage />
}