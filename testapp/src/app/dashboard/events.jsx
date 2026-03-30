import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItemButton,
  ListItemText
} from "@mui/material";

const examData = {
  "IIT JEE": {
    date: "April 2026",
    details: "JEE Main + Advanced for engineering admissions."
  },
  NEET: {
    date: "May 2026",
    details: "Medical entrance exam for MBBS/BDS."
  },
  UPSC: {
    date: "June 2026",
    details: "Civil Services Preliminary exam."
  },
  SSC: {
    date: "July 2026",
    details: "Government job recruitment exams."
  }
};

export default function PremiumExamUI() {
  const [selectedExam, setSelectedExam] = useState("SSC");

  return (
    <div className="flex items-center justify-center h-full">

        <Box display="flex" height="70vh" bgcolor="#eef2f3"sx={{
        minWidth: "90%",   // 👈 width control
        mx: "auto",          // 👈 center horizontally
        // mt: 4,               // 👈 thoda top spacing (optional)
        borderRadius: "12px"
        }} >
        
        {/* 🔷 LEFT PANEL */}
        <Box
            sx={{
            width: "260px",
            background: "#0f766e",
            color: "#fff",
        borderRadius: "12px",
            
            p: 3
            }}
        >
            <Typography variant="h5" mb={3} fontWeight="bold">
            Exams
            </Typography>

            <List>
            {Object.keys(examData).map((exam) => (
                <ListItemButton
                key={exam}
                onClick={() => setSelectedExam(exam)}
                sx={{
                    borderRadius: "12px",
                    mb: 1,
                    px: 2,
                    py: 1.2,
                    transition: "0.3s",
                    background:
                    selectedExam === exam
                        ? "rgba(255,255,255,0.15)"
                        : "transparent",
                    backdropFilter:
                    selectedExam === exam ? "blur(6px)" : "none",
                    "&:hover": {
                    background: "rgba(255,255,255,0.2)"
                    }
                }}
                >
                <ListItemText primary={exam} />
                </ListItemButton>
            ))}
            </List>
        </Box>

        {/* 🔶 RIGHT PANEL */}
        <Box flex={1} p={5}>
            <Paper
            elevation={0}
            sx={{
                p: 5,
                borderRadius: "20px",
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
            }}
            >
            {/* Title */}
            <Typography
                variant="h3"
                fontWeight="bold"
                color="#0f766e"
                mb={3}
            >
                {selectedExam}
            </Typography>

            {/* Date */}
            <Box mb={3}>
                <Typography variant="h6" color="text.secondary">
                📅 Exam Date
                </Typography>
                <Typography fontSize="18px" fontWeight="500">
                {examData[selectedExam].date}
                </Typography>
            </Box>

            {/* Details */}
            <Box>
                <Typography variant="h6" color="text.secondary">
                📘 Details
                </Typography>
                <Typography fontSize="16px">
                {examData[selectedExam].details}
                </Typography>
            </Box>
            </Paper>
        </Box>
        </Box>
    </div>
  );
}