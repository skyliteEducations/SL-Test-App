"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";


export default function CBTInstructions() {
  const [agreed, setAgreed] = useState(false);
  const router = useRouter();
  
  function shiftToCBTPortal(){
    router.push("/CBT")

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-6 border border-teal-200"
      >
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4">
          CBT Exam Instructions
        </h1>

        {/* Instructions */}
        <ul className="space-y-3 text-gray-700 text-sm md:text-base">
          <li>• Ensure stable internet connection throughout the exam.</li>
          <li>• Do not refresh or close the browser window.</li>
          <li>• Each question has a fixed time limit.</li>
          <li>• Switching tabs may result in auto submission.</li>
          <li>• Keep your webcam and microphone enabled (if required).</li>
          <li>• Any malpractice will lead to disqualification.</li>
        </ul>

        {/* Checkbox */}
        <div className="flex items-center gap-2 mt-6">
          <input
            type="checkbox"
            id="agree"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            className="w-4 h-4 accent-teal-600"
          />
          <label htmlFor="agree" className="text-sm text-gray-600">
            I have read and agree to the instructions
          </label>
        </div>

        {/* Button */}
        <button
          disabled={!agreed}
          className={`mt-6 w-full py-3 rounded-xl font-semibold transition-all duration-300 
            ${
              agreed
                ? "bg-teal-600 hover:bg-teal-700 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          onClick={shiftToCBTPortal}
        >
          Start Exam
        </button>
      </motion.div>
    </div>
  );
}