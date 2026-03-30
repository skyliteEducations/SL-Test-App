'use client'

import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SupportIcon from "@mui/icons-material/Support";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ChatIcon from "@mui/icons-material/Chat";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import DescriptionIcon from "@mui/icons-material/Description";

export default function FloatingActions() {

  const actions = [
    { icon: <ChatIcon />, name: "Ask Semo for help" },          // 💬 chat
    { icon: <ReportProblemIcon />, name: "Recent complain" }, // ⚠️ complaint
    { icon: <DescriptionIcon />, name: "Last test report" },  // 📄 report
    { icon: <HelpOutlineIcon />, name: "Recent doubt" }       // ❓ doubt
    ];

  return (
    <div className="fixed bottom-10 right-6 z-50">
      
      <SpeedDial
        ariaLabel="Quick Actions"
        icon={<HelpOutlineIcon />}
        sx={{
          "& .MuiFab-primary": {
            backgroundColor: "#0f766e",
            "&:hover": {
              backgroundColor: "#115e59"
            }
          }
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            sx={{
              "& .MuiFab-primary": {
                backgroundColor: "#14b8a6",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#0f766e"
                }
              }
            }}
            onClick={() => console.log(action.name)}
          />
        ))}
      </SpeedDial>

    </div>
  );
}