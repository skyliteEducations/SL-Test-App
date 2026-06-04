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



  const moutingLoginChecks = async () => {
    try {
        setLoading(true);

        const res = await axios.get(
        `${process.env.NEXT_PUBLIC_ENVIRONMENT=='Development' ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL : process.env.NEXT_PUBLIC_BASE_URL_PROD }/api/v1/students/login-check`,
        {
            withCredentials: true,
        }
        );

        console.log("login-check:", res.data);

        return res.data.success;

    } catch (err) {

        console.log(
        "login-check error:",
        err.response?.data || err.message
        );

        return false;

    } finally {
        setLoading(false);
    }
    };

    const LoginStudents = async (email, password) => {
        try {
            setLoading(true);

            const res = await axios.post(
                "http://localhost:5001/api/v1/students/login",
                {
                    email,
                    password
                },
                {
                    withCredentials: true
                }
            );

            if (res.data.success) {
                AlertPeep('success', "Login successfully");

                setLoginOTPSend(false);
                setLoginScreen(false);
                setForgotPassword(false);
                setForgotPasswordOTP(false);
                SetSettingNewPassword(false);

                return true;
            } else {
                AlertPeep('error', res.data.message);
                return false;
            }
        } catch (err) {
            AlertPeep(
                'error',
                err.response?.data?.message || "Something went wrong"
            );

            setLoginOTPSend(false);
            setLoginScreen(true);
            setForgotPassword(false);
            setForgotPasswordOTP(false);
            SetSettingNewPassword(false);

            return false;
        } finally {
            setLoading(false);
        }
    };

    const forgotPasswordOTPSending = async (email) => {
        try {
            setLoading(true);

            const res = await axios.post(
                "http://localhost:5001/api/v1/students/forgot",
                {
                    email
                }
            );

            if (res.data.success) {
                AlertPeep('success', "OTP send to your Email Id");

                setLoginOTPSend(false);
                setLoginScreen(false);
                setForgotPassword(false);
                setForgotPasswordOTP(true);
                SetSettingNewPassword(false);

                return true;
            } else {
                AlertPeep('error', res.data.message);
                return false;
            }
        } catch (err) {
            AlertPeep(
                'error',
                err.response?.data?.message || "Something went wrong"
            );

            setLoginOTPSend(false);
            setLoginScreen(false);
            setForgotPassword(true);
            setForgotPasswordOTP(false);
            SetSettingNewPassword(false);

            return false;
        } finally {
            setLoading(false);
        }
    };

    const openForgotPasswordPanel = async()=>{
        setLoginOTPSend(false);
        setLoginScreen(false);
        setForgotPassword(true);
        setForgotPasswordOTP(false);
        SetSettingNewPassword(false);
    }

    const OTPVerificationAndForgotPassword = async (email, otp) => {
        try {
            setLoading(true);

            const res = await axios.post(
                "http://localhost:5001/api/v1/students/verify-forgot-password-otp",
                { email,otp },
                // {
                //     withCredentials: true,
                // }
            );

            if (res.data.success) {

                AlertPeep("success", "OTP successfully verified");
                setLoginOTPSend(false);
                setLoginScreen(false);
                setForgotPassword(false);
                setForgotPasswordOTP(false);
                SetSettingNewPassword(true);

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

    const settingNewPasswordForgot = async (email, newPassword, confirmPassword) => {
        try {
            setLoading(true);

            const res = await axios.post(
                "http://localhost:5001/api/v1/students/reset",
                { email, newPassword, confirmPassword},
                // {
                //     withCredentials: true,
                // }
            );

            if (res.data.success) {

                AlertPeep("success", "Password changed successfully");
                setLoginOTPSend(false);
                setLoginScreen(true);
                setForgotPassword(false);
                setForgotPasswordOTP(false);
                SetSettingNewPassword(false);

            } else {

                AlertPeep("error", "Invalid OTP");

                setLoginOTPSend(false);
                setLoginScreen(false);
                setForgotPassword(false);
                setForgotPasswordOTP(false);
                SetSettingNewPassword(true);
            }

        } catch (err) {

            AlertPeep(
                "error",
                err.response?.data?.message || "Something went wrong"
            );

            console.log(err);

            setLoginOTPSend(false);
            setLoginScreen(false);
            setForgotPassword(false);
            setForgotPasswordOTP(false);
            SetSettingNewPassword(true);

        } finally {

            setLoading(false);

        }
    };


    const resendOTP = async (email) => {
        try {
            setLoading(true);

            const res = await axios.post(
                "http://localhost:5001/api/v1/students/resend-otp-forgot-password",
                {email}
            );

            if (res.data.success) {

                AlertPeep("success", "OTP send to your Email Id");
                setLoginOTPSend(false);
                setLoginScreen(false);
                setForgotPassword(false);
                setForgotPasswordOTP(true);
                SetSettingNewPassword(false);

            } else {

                AlertPeep("error", "Invalid OTP");

                setLoginOTPSend(false);
                setLoginScreen(false);
                setForgotPassword(false);
                setForgotPasswordOTP(true);
                SetSettingNewPassword(false);
            }

        } catch (err) {

            AlertPeep(
                "error",
                err.response?.data?.message || "Something went wrong"
            );

            setLoginOTPSend(false);
            setLoginScreen(false);
            setForgotPassword(false);
            setForgotPasswordOTP(true);
            SetSettingNewPassword(false);

        } finally {

            setLoading(false);

        }
    };

    const BackToLogin = async()=>{
        setLoginOTPSend(false);
        setLoginScreen(true);
        setForgotPassword(false);
        setForgotPasswordOTP(false);
        SetSettingNewPassword(false);
    }
    const BackToForgotPasswordOTPSending = async()=>{
        setLoginOTPSend(false);
        setLoginScreen(false);
        setForgotPassword(true);
        setForgotPasswordOTP(false);
        SetSettingNewPassword(false);
    }

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
    <AuthContext.Provider value={{ user, loginOTPSend, loginScreen, Loading, LoginStudents, forgotPassword, forgotPasswordOTP, settingNewPassword, OTPVerificationAndForgotPassword, openForgotPasswordPanel, forgotPasswordOTPSending, settingNewPasswordForgot, BackToLogin, resendOTP , BackToForgotPasswordOTPSending, moutingLoginChecks}}>
      {children}
    </AuthContext.Provider>
  );
};