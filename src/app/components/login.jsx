import { useState, useContext, useEffect  } from "react";
import { AuthContext } from "@/contexts/login.context";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ButtonLoader from "./btnLoader";
export default function Login() {

  const router = useRouter()
  useEffect(() => {
    const checkLogin = async () => {
      const isLoggedIn = await moutingLoginChecks();

      if (isLoggedIn) {
        router.push("/dashboard");
      } else {
        router.push("/");
      }
    };

    checkLogin();
  }, []);

  const { user, loginOTPSend, loginScreen, Loading, LoginStudents, forgotPassword, forgotPasswordOTP, settingNewPassword, OTPVerificationAndForgotPassword , openForgotPasswordPanel, forgotPasswordOTPSending, settingNewPasswordForgot, BackToLogin, resendOTP, BackToForgotPasswordOTPSending, moutingLoginChecks} = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [newPasswordForm, setNewPasswordForm] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [otp,setotp] = useState('')
  const [forgotPassEmail, setForgotPassEmail] = useState('')

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const login= await LoginStudents(formData.email, formData.password)
    console.log(login)
    if(login){
      router.push("/dashboard")
    }
    // console.log(formData);
  };

  function openForgotPasswordPanelFun(e){
    e.preventDefault()
    openForgotPasswordPanel()
  }

  function forgotPasswordOTPSendingFUn(e){
    e.preventDefault()
    forgotPasswordOTPSending(forgotPassEmail)
  }

  function verifyOTP(e){
    e.preventDefault()
    OTPVerificationAndForgotPassword(forgotPassEmail,otp)
  }

  function newPasswordChange(e){
    setNewPasswordForm((prev)=>({
      ...prev,
      newPassword : e.target.value
    }))
  }

  function newPasswordConfirmChange(e){
    setNewPasswordForm((prev)=>({
      ...prev,
      confirmPassword : e.target.value
    }))
  }

  function changePassword(e){
    e.preventDefault()
    settingNewPasswordForgot(forgotPassEmail, newPasswordForm.newPassword, newPasswordForm.confirmPassword)
  }

  function resendOTPFun(e){
    e.preventDefault()
    console.log("lo")
    resendOTP(forgotPassEmail)
  }

  function BackToForgotPasswordOTPSendingFun(e){
    e.preventDefault()
    BackToForgotPasswordOTPSending()
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50">
      {/* Background Blur Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-teal-300/30 blur-3xl animate-pulse" />

        <div className="absolute right-0 top-1/4 h-[28rem] w-[28rem] rounded-full bg-cyan-300/20 blur-3xl animate-pulse" />

        <div className="absolute bottom-0 left-1/2 h-[25rem] w-[25rem] -translate-x-1/2 rounded-full bg-emerald-200/30 blur-3xl animate-pulse" />
      </div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {loginScreen &&
      (
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">
            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-3xl text-center font-bold text-slate-900">
                Dev Server | QA Testing
              </h1>

              <p className="mt-2 text-center text-slate-500">
                Sign in to continue to your account
              </p>
            </div>

            <form className="space-y-5">
              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100"
                  />
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700">
                    Password
                  </label>

                  <button
                    type="button"
                    onClick={openForgotPasswordPanelFun}
                    className="cursor-pointer text-sm font-medium text-teal-600 hover:text-teal-700"
                    >
                    Forgot Password?
                  </button>
                </div>

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100"
                  />
              </div>

              {/* Remember Me */}
              

              {/* Button */}
              <button
                onClick={handleSubmit}
                className="cursor-pointer w-full rounded-xl bg-teal-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-200"
                >
                {Loading ? <ButtonLoader/> : "Sign In"}
              </button>
            </form>

            {/* Footer */}
            <div className="mt-8 text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <Link href="https://skycbt.com/signup" className="cursor-pointer font-semibold text-teal-600 hover:text-teal-700">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
      )
      }

      {loginOTPSend && (
        <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
          <div className="w-full max-w-md">
            {/* Card */}
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">
              {/* Heading */}
              <div className="mb-8">
                <h1 className="text-3xl text-center font-bold text-slate-900">
                  OTP Verification
                </h1>

                <p className="mt-2 text-center text-slate-500">
                  Enter the verification code sent to your email
                </p>
              </div>

              <form className="space-y-5">
                {/* OTP */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Verification Code
                  </label>

                  <input
                    type="text"
                    name="otp"
                    value={otp}
                    onChange={(e) => setotp(e.target.value)}
                    placeholder="● ● ● ● ● ●"
                    maxLength={6}
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      bg-gradient-to-b
                      from-white
                      to-slate-50
                      px-5
                      py-4
                      text-center
                      text-2xl
                      font-bold
                      tracking-[0.5em]
                      text-slate-800
                      shadow-sm
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-slate-300
                      focus:border-teal-500
                      focus:bg-white
                      focus:shadow-lg
                      focus:shadow-teal-100
                      focus:ring-4
                      focus:ring-teal-100
                    "
                  />
                </div>

                {/* Verify Button */}
                <button
                  // type="submit"
                  className="cursor-pointer w-full rounded-xl bg-teal-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-200"
                >
                  {Loading ? <ButtonLoader/> : "Verify OTP"}
                </button>
              </form>

              {/* Resend */}
              <div className="mt-6 text-center text-sm text-slate-500">
                Didn't receive the code?{" "}
                <button
                  type="button"
                  onClick={resendOTPFun}
                  className="cursor-pointer font-semibold text-teal-600 hover:text-teal-700"
                >
                  {Loading ? <ButtonLoader/> : "Resend OTP"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {forgotPassword && (
        <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
          <div className="w-full max-w-md">
            {/* Card */}
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">
              {/* Heading */}
              <div className="mb-8">
                <h1 className="text-3xl text-center font-bold text-slate-900">
                  Forgot Password
                </h1>

                <p className="mt-2 text-center text-slate-500">
                  Enter your email address and we'll send you a verification code
                </p>
              </div>

              <form className="space-y-5">
                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={forgotPassEmail}
                    onChange={(e) => setForgotPassEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      bg-gradient-to-b
                      from-white
                      to-slate-50
                      px-4
                      py-3
                      text-slate-900
                      outline-none
                      transition-all
                      duration-300
                      focus:border-teal-500
                      focus:bg-white
                      focus:ring-4
                      focus:ring-teal-100
                      focus:shadow-lg
                      focus:shadow-teal-100
                    "
                  />
                </div>

                {/* Button */}
                <button
                  // type="submit"
                  onClick={forgotPasswordOTPSendingFUn}
                  className="
                    cursor-pointer
                    w-full
                    rounded-xl
                    bg-teal-600
                    py-3
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-teal-700
                    hover:shadow-lg
                    hover:shadow-teal-200
                  "
                >
                  {Loading ? <ButtonLoader/> : "Send Verification Code"}
                </button>
              </form>

              {/* Footer */}
              <div className="mt-6 text-center">
                <button
                  type="button"
                  onClick={BackToLogin}
                  className="
                    cursor-pointer
                    text-sm
                    font-medium
                    text-teal-600
                    hover:text-teal-700
                  "
                >
                  Back to Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {forgotPasswordOTP && (
          <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
            <div className="w-full max-w-md">
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">
                
                {/* Heading */}
                <div className="mb-8">
                  <h1 className="text-3xl text-center font-bold text-slate-900">
                    Verify Reset Code
                  </h1>

                  <p className="mt-2 text-center text-slate-500">
                    Enter the verification code sent to your email to continue password reset
                  </p>
                </div>

                <form className="space-y-5">
                  
                  {/* OTP Input */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Verification Code
                    </label>

                    <input
                      type="text"
                      name="otp"
                      value={otp}
                      onChange={(e) => setotp(e.target.value)}
                      placeholder="● ● ● ● ● ●"
                      maxLength={6}
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-slate-200
                        bg-gradient-to-b
                        from-white
                        to-slate-50
                        px-5
                        py-4
                        text-center
                        text-2xl
                        font-bold
                        tracking-[0.5em]
                        text-slate-800
                        shadow-sm
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-slate-300
                        focus:border-teal-500
                        focus:bg-white
                        focus:ring-4
                        focus:ring-teal-100
                        focus:shadow-lg
                        focus:shadow-teal-100
                      "
                    />
                  </div>

                  {/* Verify Button */}
                  <button
                    onClick={verifyOTP}
                    className="
                      cursor-pointer
                      w-full
                      rounded-xl
                      bg-teal-600
                      py-3
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:bg-teal-700
                      hover:shadow-lg
                      hover:shadow-teal-200
                    "
                  >
                    {Loading ? <ButtonLoader/> : "Verify Code"}
                  </button>
                </form>

                {/* Footer */}
                <div className="mt-6 text-center text-sm text-slate-500">
                  Didn't receive the code?{" "}
                  <button
                    type="button"
                    onClick={resendOTPFun}
                    className="cursor-pointer font-semibold text-teal-600 hover:text-teal-700"
                  >
                    Resend Code
                  </button>
                </div>

                <div className="mt-3 text-center">
                  <button
                    type="button"
                    onClick={BackToForgotPasswordOTPSendingFun}
                    className="cursor-pointer text-sm font-medium text-slate-500 hover:text-slate-700"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
      )}

      {settingNewPassword && (
        <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">

            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-3xl text-center font-bold text-slate-900">
                Create New Password
              </h1>

              <p className="mt-2 text-center text-slate-500">
                Your identity has been verified. Set a new password for your account.
              </p>
            </div>

            <form  className="space-y-5">

              {/* New Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  New Password
                </label>

                <input
                  type="password"
                  name="newPassword"
                  value={newPasswordForm.newPassword}
                  onChange={newPasswordChange}
                  placeholder="Enter new password"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-gradient-to-b
                    from-white
                    to-slate-50
                    px-4
                    py-3
                    text-slate-900
                    outline-none
                    transition-all
                    duration-300
                    focus:border-teal-500
                    focus:bg-white
                    focus:ring-4
                    focus:ring-teal-100
                    focus:shadow-lg
                    focus:shadow-teal-100
                  "
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  value={newPasswordForm.confirmPassword}
                  onChange={newPasswordConfirmChange}
                  placeholder="Confirm new password"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-gradient-to-b
                    from-white
                    to-slate-50
                    px-4
                    py-3
                    text-slate-900
                    outline-none
                    transition-all
                    duration-300
                    focus:border-teal-500
                    focus:bg-white
                    focus:ring-4
                    focus:ring-teal-100
                    focus:shadow-lg
                    focus:shadow-teal-100
                  "
                />
              </div>

              {/* Reset Button */}
              <button
                onClick={changePassword}
                className="
                  cursor-pointer
                  w-full
                  rounded-xl
                  bg-teal-600
                  py-3
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-teal-700
                  hover:shadow-lg
                  hover:shadow-teal-200
                "
              >
                {Loading ? <ButtonLoader/> : "Reset Password"}
              </button>
            </form>

            {/* Footer */}
            <div className="mt-6 text-center text-sm text-slate-500">
              Remember your password?{" "}
              <button onClick={BackToLogin} className="cursor-pointer font-semibold text-teal-600 hover:text-teal-700">
                Back to Login
              </button>
            </div>

          </div>
        </div>
      </div>
      )}

    </div>
  );
}