// src/context/AppContext.js
"use client";

import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [tempId, setTempId] = useState('')
  const [Loading, setLoading] = useState(false)
  const [firstLogin, setFirstLogin] = useState('')

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
        method : "POST",
        url : "http://localhost:5000/api/v1/account/login",
        data : {
            email,
            password
        }
    }).then(res=>{
        console.log(res)
        setUser(user=> res.data)
        console.log(res.data.id)
        setTempId(tempId=> res.data.id)
        setLoading(Loading=> false)

    })
  }

    const OTPVerificationAndLoginStudents = async (otp, id) => {
        try {
            setLoading(true);

            const res = await axios.post(
            "http://localhost:5000/api/v1/account/otp-verification",
            { otp, id },
            {
                withCredentials: true, // ✅ MUST
            }
            );

            setLoading(false);

            if (res.data.status === "success") {
            setUser(res.data.user);
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
    <AuthContext.Provider value={{ user, loginWithPinDirectly,moutingLoginChecks ,tempId,LoginStudents, OTPVerificationAndLoginStudents, Loading, firstLogin, setPinOnFirstLOgin }}>
      {children}
    </AuthContext.Provider>
  );
};