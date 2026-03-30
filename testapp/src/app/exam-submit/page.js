'use client'

import { Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useRouter } from "next/navigation";

export default function SubmitSuccess() {

    const router = useRouter()

    function moveToDashboard(){
        router.push("/dashboard")
    }

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a]">
      
      {/* 🔥 GRADIENT ANIMATION */}
      <div className="absolute inset-0 z-0 animate-gradient bg-[linear-gradient(120deg,#0f766e,#14b8a6,#0f766e)] opacity-20"></div>

      {/* 🔥 FLOATING PARTICLES */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-teal-400 rounded-full opacity-40 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* 🔷 GLASS CARD */}
      <div className="relative z-10 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl p-10 max-w-md w-full text-center text-white">
        
        {/* ICON */}
        <div className="flex justify-center mb-4">
          <CheckCircleIcon sx={{ fontSize: 70, color: "#5eead4" }} />
        </div>

        {/* TITLE */}
        <h1 className="text-2xl font-bold mb-2">
          Exam Submitted 🎉
        </h1>

        {/* MESSAGE */}
        <p className="text-sm text-gray-200 mb-6">
          Your exam has been successfully submitted.  
          You can check your results and analysis on your dashboard.
        </p>

        {/* BUTTON */}
        <Button
          variant="contained"
          fullWidth
          onClick={moveToDashboard}
          sx={{
            py: 1.2,
            background: "linear-gradient(135deg,#14b8a6,#0f766e)",
            fontWeight: 600,
            borderRadius: "10px",
            "&:hover": {
              background: "linear-gradient(135deg,#0f766e,#115e59)"
            }
          }}
        >
          Go to Dashboard →
        </Button>

      </div>

      {/* 🔥 CUSTOM ANIMATIONS */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); opacity: 0.4; }
          50% { transform: translateY(-20px); opacity: 0.8; }
          100% { transform: translateY(0px); opacity: 0.4; }
        }

        .animate-float {
          animation: float linear infinite;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
      `}</style>

    </div>
  );
}