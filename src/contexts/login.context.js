// src/context/AppContext.js
"use client";

import { createContext, useState } from "react";
import axios from "axios";
import AlertPeep from "@/app/utility/alert";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [tempId, setTempId] = useState('')
  const [Loading, setLoading] = useState(false)
  const [firstLogin, setFirstLogin] = useState('')
  const [loginScreen, setLoginScreen] = useState(true)
  const [loginOTPSend, setLoginOTPSend] = useState(false)
  const [forgotPassword, setForgotPassword] = useState(false)
  const [forgotPasswordOTP, setForgotPasswordOTP] = useState(false)
  const [settingNewPassword, SetSettingNewPassword] = useState(false)



  const moutingLoginChecks = async()=>{
    try {
        setLoading(true);

        const res = await axios.get(
        "http://localhost:5000/api/v1/account/isLoggedIn",
        {
            withCredentials: true, // ✅ MUST
        }
        );

        setLoading(false);

        if (res.data.status === "success") {
            setUser(res.data.user);
            console.log(res.data.user)
            setFirstLogin(res.data.user.firstLogin);

            return res.data.user; // ✅ correct
        } else {
            return null;
        }
    } catch (err) {
        setLoading(false);
        console.log(err);
        return null;
    }
  }

  const LoginStudents = (email,password)=>{
    setLoading(Loading=> true)
    axios({
        method: "POST",
        url: "http://localhost:5001/api/v1/students/login",
        data: {
            email,
            password
        }
    })
    .then((res) => {
        if (res.data.success) {
            AlertPeep('success', "Login successfully");
            setLoginOTPSend(false);
            setLoginScreen(false);
            setForgotPassword(false);
            setForgotPasswordOTP(false);
            SetSettingNewPassword(false);
            return true

        } else {
            AlertPeep('error', res.data.message);
            return false
        }
        setLoading(false);

    })
    .catch((err) => {
        AlertPeep(
            'error',
            err.response?.data?.message || "Something went wrong"
        );

        setLoginOTPSend(false);
        setLoginScreen(true);
        setForgotPassword(false);
        setForgotPasswordOTP(false);
        SetSettingNewPassword(false);
        setLoading(false);
        return false

    });
  }

    const OTPVerificationAndLoginStudents = async (otp) => {
    try {
        setLoading(true);

        const res = await axios.post(
            "http://localhost:5001/api/v1/students/otp",
            { otp },
            {
                withCredentials: true,
            }
        );

        if (res.data.success) {

            AlertPeep("success", "OTP successfully verified");
            setLoginOTPSend(false);
            setLoginScreen(false);
            setForgotPassword(false);
            setForgotPasswordOTP(false);
            SetSettingNewPassword(false);

        } else {

            AlertPeep("error", "Invalid OTP");

            setLoginOTPSend(true);
            setLoginScreen(false);
            setForgotPassword(false);
            setForgotPasswordOTP(false);
            SetSettingNewPassword(false);
        }

    } catch (err) {

        AlertPeep(
            "error",
            err.response?.data?.message || "Something went wrong"
        );

        console.log(err);

        setLoginOTPSend(true);
        setLoginScreen(false);
        setForgotPassword(false);
        setForgotPasswordOTP(false);
        SetSettingNewPassword(false);

    } finally {

        setLoading(false);

    }
};

    const setPinOnFirstLOgin = async(pin, id)=>{
        try {
            setLoading(true);

            const res = await axios.post(
            "http://localhost:5000/api/v1/account/set-pin",
            { pin, id },
            {
                withCredentials: true, // ✅ MUST
            }
            );

            setLoading(false);

            if (res.data.status === "success") {

                return res.data.user; // ✅ correct
            } else {
                return null;
            }
        } catch (err) {
            setLoading(false);
            console.log(err);
            return null;
        }
    }

    const loginWithPinDirectly = async(pin)=>{
        try {
            setLoading(true);

            const res = await axios.post(
            "http://localhost:5000/api/v1/account/login-pin",
            { pin },
            {
                withCredentials: true, // ✅ MUST
            }
            );

            setLoading(false);

            if (res.data.status === "success") {

                return res.data.status; // ✅ correct
            } else {
                return null;
            }
        } catch (err) {
            setLoading(false);
            console.log(err);
            return null;
        }
    }

  return (
    <AuthContext.Provider value={{ user, loginOTPSend, loginScreen, Loading, LoginStudents, forgotPassword, forgotPasswordOTP, settingNewPassword, OTPVerificationAndLoginStudents }}>
      {children}
    </AuthContext.Provider>
  );
};