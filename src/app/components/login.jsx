"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "@/contexts/login.context";
import Loader from "./loader";

export default function LoginPage() {
  const router = useRouter();
  
  const {user,tempId, loginWithPinDirectly,moutingLoginChecks, LoginStudents, setPinOnFirstLOgin,OTPVerificationAndLoginStudents,Loading, firstLogin} = useContext(AuthContext)
  const [loginWithPin, setLoginWithPin] = useState(false)
  const [loginOrOTPPanel, setLoginOrOTPPanel] = useState(true);
  const [openingSetPin, setOpenSetPin] = useState(false)

  useEffect(() => {
  const fetchData = async () => {
    const data = await moutingLoginChecks();
    console.log(data);

    if (data) {
      if (data.firstLogin) {
        console.log("pin");
        setOpenSetPin(true);
      } else {
        setLoginWithPin(true);
      }
    } else {
      setLoginWithPin(false);
      setOpenSetPin(false);
      setLoginOrOTPPanel(true);
    }
  };

  fetchData();
}, []);

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [otp, setOtp] = useState("");
  const [pin, setPin] = useState("");
  const [logPin, setLogPin] = useState("");



  const handleLogin = (e) => {
    e.preventDefault();
    LoginStudents(loginForm.email, loginForm.password)
    setLoginOrOTPPanel(loginOrOTPPanel=> false)
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    console.log("OTP:", otp);

    const data = await OTPVerificationAndLoginStudents(otp, tempId); // ✅ await

    console.log("DATA:", data);

    if (data) {
      if (data.firstLogin) {
        console.log("pin");
        setOpenSetPin(true);
      } else {
        router.push("/dashboard");
      }
    }
  };

  const handlePinSetup = async(e) => {
    e.preventDefault()
    const data = await setPinOnFirstLOgin(pin, tempId)
    if (data) {
      if (!(data.firstLogin)) {
        
        router.push("/dashboard");
      } else {
        // console.log("pin");
        setOpenSetPin(true);
      }
    }
  }

  const LoginWithPin = async(e)=>{
    e.preventDefault()
    const data = await loginWithPinDirectly(logPin)
    if (data=='success') {
        router.push("/dashboard");
    }else{
      console.log("Incorrect Pin")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center text-teal-700">
            Dev server | QA Testing
        </h1>
        <p className="text-center text-sm text-gray-500 mt-2">
          One Platform • All Competitive Exams
        </p>

        {(loginOrOTPPanel) ? (
          <>
            {(!openingSetPin && !loginWithPin) &&
              <form onSubmit={handleLogin} className="mt-8 space-y-5">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={loginForm.email}
                    onChange={(e) =>
                      setLoginForm((prev) => ({ ...prev, email: e.target.value }))
                    }
                    placeholder="student@example.com"
                    className="px-4 py-3 text-black rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
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
                    onChange={(e) =>
                      setLoginForm((prev) => ({ ...prev, password: e.target.value }))
                    }
                    placeholder="••••••••"
                    className="px-4 py-3 text-black rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                    />
                </div>

                <button
                  type="submit"
                  className="cursor-pointer w-full py-3 rounded-lg bg-teal-600 text-white font-semibold shadow-md hover:bg-teal-700 transition"
                  >
                  {Loading ? <Loader/> :"Login to Dashboard"}
                </button>
              </form>
              }
          </>
        ) : (
          <>
          {(!openingSetPin && !loginWithPin) &&
            <form onSubmit={handleVerifyOtp} className="mt-8 space-y-5">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-600">
                  Enter OTP
                </label>
                <input
                  type="text"
                  required
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 6-digit OTP"
                  className="px-4 py-3 text-black rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition text-center tracking-widest"
                  />
              </div>

              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-teal-600 hover:underline cursor-pointer"
                  >
                  Resend OTP
                </button>
              </div>

              <button
                type="submit"
                className="cursor-pointer w-full py-3 rounded-lg bg-teal-600 text-white font-semibold shadow-md hover:bg-teal-700 transition"
                >
                
                {Loading ? <Loader/> :"Verify OTP"}

              </button>
            </form>
              }
              </>
        )}

        {openingSetPin &&
          <form onSubmit={handlePinSetup} className="mt-8 space-y-5">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">
                Set your PIN for Login
              </label>
              <input
                type="text"
                required
                maxLength={6}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter 6-digit PIN"
                className="px-4 py-3 text-black rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition text-center tracking-widest"
              />
            </div>


            <button
              type="submit"
              className="cursor-pointer w-full py-3 rounded-lg bg-teal-600 text-white font-semibold shadow-md hover:bg-teal-700 transition"
            >
              
              {Loading ? <Loader/> :"Set PIN"}

            </button>
          </form>
        }

        {loginWithPin &&
          <form onSubmit={LoginWithPin} className="mt-8 space-y-5">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">
                Enter PIN To Login
              </label>
              <input
                type="text"
                required
                maxLength={6}
                value={logPin}
                onChange={(e) => setLogPin(e.target.value)}
                placeholder="Enter 6-digit PIN"
                className="px-4 py-3 text-black rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition text-center tracking-widest"
              />
            </div>


            <button
              type="submit"
              className="cursor-pointer w-full py-3 rounded-lg bg-teal-600 text-white font-semibold shadow-md hover:bg-teal-700 transition"
            >
              
              {Loading ? <Loader/> :"Login"}

            </button>
          </form>
        }

        <div className="mt-6 text-center text-xs text-gray-400">
          Trusted by Aspirants Across India 🇮🇳
        </div>
      </div>
    </div>
  );
}