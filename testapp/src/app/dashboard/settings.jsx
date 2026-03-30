'use client'

import { TextField, Button } from "@mui/material";

export default function SettingsForms() {
  return (
    <div className="w-full min-h-[90vh] bg-[#f1f5f9] flex justify-center p-6">
      
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* LEFT - PASSWORD */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-lg font-bold text-teal-700 mb-4">
            Change Password
          </h2>

          <div className="flex flex-col gap-4">
            <TextField label="Current Password" type="password" size="small" fullWidth />
            <TextField label="New Password" type="password" size="small" fullWidth />
            <TextField label="Confirm Password" type="password" size="small" fullWidth />

            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#0f766e",
                fontWeight: 600,
                "&:hover": { backgroundColor: "#115e59" }
              }}
            >
              Update Password
            </Button>
          </div>
        </div>

        {/* RIGHT - PIN */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-lg font-bold text-teal-700 mb-4">
            Change PIN
          </h2>

          <div className="flex flex-col gap-4">
            <TextField label="Current PIN" type="password" size="small" fullWidth />
            <TextField label="New PIN" type="password" size="small" fullWidth />
            <TextField label="Confirm PIN" type="password" size="small" fullWidth />

            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#0f766e",
                fontWeight: 600,
                "&:hover": { backgroundColor: "#115e59" }
              }}
            >
              Update PIN
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}