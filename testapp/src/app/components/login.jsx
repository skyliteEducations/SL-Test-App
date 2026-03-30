"use client";



const exams = [
  "IIT JEE",
  "NEET",
  "UPSC",
  "SSC CGL",
  "SSC CHSL",
  "CAT",
  "GATE",
  "CLAT",
  "NDA",
  "CDS",
  "IBPS PO",
  "IBPS Clerk",
  "SBI PO",
  "SBI Clerk",
  "RRB NTPC",
  "RRB Group D",
  "CTET",
  "UGC NET",
  "CSIR NET",
  "CA",
  "CMA",
  "CS",
  "BITSAT",
  "VITEEE",
  "AIIMS",
  "JIPMER",
  "State PSC"
];

import { motion } from "framer-motion";
import { useState } from "react";
// import useAuthStore from "../store/auth.store";
import { useRouter } from "next/navigation";


export default function LoginPage() {
    const router = useRouter();

    // const {loginUser, checkForLogin, isLoggedIn} = useAuthStore();

  const [loginForm, setLoginForm] = useState({
    email : "",
    password : ""
  })

  const handleLogin = (e) => {
    e.preventDefault();
    // const signal = loginUser(loginForm)
    router.push("/dashboard")
    if(signal){
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center">

      {/* 🌌 Floating Exam Names */}
      <div className="absolute inset-0 pointer-events-none">
        {exams.map((exam, i) => (
          <motion.span
            key={i}
            initial={{
              x: Math.random() * 1000 - 500,
              y: Math.random() * 800 - 400,
              opacity: 0.15
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0]
            }}
            transition={{
              duration: 12 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute text-teal-700 font-semibold text-sm md:text-base blur-[0.5px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          >
            {exam}
          </motion.span>
        ))}
      </div>

      {/* 🎓 LOGIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-xl p-8 backdrop-blur-md"
      >

        <h1 className="text-3xl font-bold text-center text-teal-700">
          Student Login
        </h1>

        <p className="text-center text-sm text-gray-500 mt-2">
          One Platform • All Competitive Exams
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              required
              value={loginForm.email}
              onChange={(el) => setLoginForm((prev)=>({
                ...prev,
                email : el.target.value
              }))}
              placeholder="student@example.com"
              className="px-4 py-3 text-[#000000] rounded-lg border border-gray-300 focus:border-teal-500 placeholder:text-[#00000050] focus:ring-2 focus:ring-teal-200 outline-none transition"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              required
              value={loginForm.password}
              onChange={(el) => setLoginForm((prev)=>({
                ...prev,
                password : el.target.value
              }))}
              placeholder="••••••••"
              className="px-4 text-[#000000] placeholder:text-[#00000050] py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="cursor-pointer w-full py-3 rounded-lg bg-teal-600 text-white font-semibold shadow-md hover:bg-teal-700 transition"
          >
            Login to Dashboard
          </motion.button>
        </form>

        <div className="mt-6 text-center text-xs text-gray-400">
          Trusted by Aspirants Across India 🇮🇳
        </div>
      </motion.div>
    </div>
  );
}
