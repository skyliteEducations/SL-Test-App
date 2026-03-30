'use client'
import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField
} from "@mui/material";

const MyAccount = () => {

    const [btnVal, setBtnVal] = useState()
    function whichBtn(el, val){
        console.log(val)
        setBtnVal(btnVal=> val)
    }

  return (
    <div className="min-h-screen overflow-hidden bg-[#fff] px-10 py-8 relative ">
    <img
        src="/circle1.png"
        alt="illustration"
        className="absolute top-[-10%]  right-[-10%] w-80 opacity-100 pointer-events-none select-none"
    />
    <img
        src="/circle1.png"
        alt="illustration"
        className="absolute bottom-[-10%]  left-[-5%] w-80 opacity-100 pointer-events-none select-none"
    />
      {/* Page Title */}
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, mb: 4, color: "#111827" }}
      >
        My Account
      </Typography>

      {/* Main Layout */}
      <div className="flex gap-8">

        {/* 🔥 Sidebar */}
        <div className="w-[260px]">

          {[
            { label: "My details", active: true },
            { label: "My Tests" },
            { label: "My Doubts" },
            { label: "My Complains" },
            { label: "Account settings" },
          ].map((item, i) => (
            <div
              key={i}
              onClick={(el)=>whichBtn(el,item.label)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 cursor-pointer text-sm
                ${
                  btnVal == item.label
                    ? "bg-teal-100 text-teal-700 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              <div className="w-4 h-4 rounded-full border border-gray-400"></div>
              {item.label}
            </div>
          ))}
        </div>

        {/* 💎 Right Content Card */}
        <div className="flex-1 z-10 h-[75vh] bg-white rounded-xl shadow-sm p-8 border border-gray-200">
          {btnVal == 'My details' &&
            <div className="bg-white rounded-xl border p-6">

                <h2 className="text-xl font-semibold text-gray-800">
                    my details
                </h2>

                <p className="text-gray-500 mt-2 text-sm">
                    details of user
                </p>

            </div>
          }
         
        </div>
      </div>
    </div>
  );
};

export default MyAccount;