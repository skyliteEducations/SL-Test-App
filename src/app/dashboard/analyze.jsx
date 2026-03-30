import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";

const performanceData = [
  { test: "Test 1", score: 60 },
  { test: "Test 2", score: 75 },
  { test: "Test 3", score: 68 },
  { test: "Test 4", score: 85 }
];

const subjectData = [
  { name: "Physics", value: 70 },
  { name: "Chemistry", value: 80 },
  { name: "Maths", value: 65 }
];

const COLORS = ["#0f766e", "#14b8a6", "#5eead4"];

export default function AnalyzeDashboard() {
  return (
    <div className="h-[90vh] overflow-scroll overflow-x-hidden">
        <Box
            sx={{
                p: 3,
                bgcolor: "#f1f5f9",
                minHeight: "90vh",
                overflowY: "auto",   // 👈 vertical scroll
                overflowX: "hidden"  // 👈 horizontal hide
            }}
            >
        
        {/* TOP STATS */}
        <Grid container spacing={3}>
            {[
                { title: "Total Tests", value: "24" },
                { title: "Avg Score", value: "72%" },
                { title: "Best Score", value: "91%" }
            ].map((item, i) => (
                <Grid item xs={12} md={4} key={i}>
                <Paper
                sx={{
                    p: 3,
                    borderRadius: "16px",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.06)"
                    }}
                    >
                <Typography color="gray">{item.title}</Typography>
                <Typography
                    variant="h4"
                    fontWeight="700"
                    color="#0f766e"
                    >
                    {item.value}
                </Typography>
                </Paper>
            </Grid>
            ))}
        </Grid>

        {/* GRAPHS */}
        <Grid container spacing={3} mt={1}>
            
            {/* LINE CHART */}
            <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, borderRadius: "16px" }}>
                <Typography mb={2} fontWeight="600">
                Performance Trend
                </Typography>
                <LineChart width={400} height={250} data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="test" />
                <YAxis />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#0f766e"
                    strokeWidth={3}
                    />
                </LineChart>
            </Paper>
            </Grid>

            {/* BAR CHART */}
            <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, borderRadius: "16px" }}>
                <Typography mb={2} fontWeight="600">
                Subject Performance
                </Typography>
                <BarChart width={400} height={250} data={subjectData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#14b8a6" radius={[6, 6, 0, 0]} />
                </BarChart>
            </Paper>
            </Grid>

            {/* PIE CHART */}
            <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, borderRadius: "16px" }}>
                <Typography mb={2} fontWeight="600">
                Accuracy Distribution
                </Typography>
                <PieChart width={400} height={250}>
                <Pie
                    data={subjectData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    >
                    {subjectData.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index]} />
                    ))}
                </Pie>
                <Tooltip />
                </PieChart>
            </Paper>
            </Grid>

        </Grid>
        </Box>
    </div>
  );
}