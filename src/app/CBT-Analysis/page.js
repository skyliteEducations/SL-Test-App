'use client'
import { useState } from "react";
import {
  Box,
  Button,
  Paper,
  Typography,
  Divider
} from "@mui/material";
import BasicAnalysis from "./basic";
import DrillPractice from "./drill";
import SolveDPP from "./dpp";
import RevisionSheet from "./revision";
import TestToTestComparison from "./compare";
import DestinationMeter from "./destination";


function CBTAnalysis() {

  const [activeTab, setActiveTab] = useState("basic");

  const tabs = [
    {
      key: "basic",
      label: "Basic Analysis"
    },
    {
      key: "drill",
      label: "Drill Practice"
    },
    {
      key: "dpp",
      label: "Solve DPP"
    },
    {
      key: "revision",
      label: "Revision Sheet"
    }
    ,
    {
      key: "Tests comparison",
      label: "comparision"
    }
    ,
    {
      key: "Destination",
      label: "destination"
    }
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f8fafc",
        py: 5,
        px: {
          xs: 2,
          md: 4
        }
      }}
    >

      {/* TOP SECTION */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: "32px",
          overflow: "hidden",
          background: "#ffffff",
          border: "1px solid rgba(15,23,42,0.06)",
          boxShadow: "0 20px 60px rgba(15,23,42,0.06)"
        }}
      >

        {/* top gradient */}
        <Box
          sx={{
            height: "8px",
            background:
              "linear-gradient(90deg,#14b8a6,#06b6d4)"
          }}
        />

        <Box
          sx={{
            p: {
              xs: 3,
              md: 5
            }
          }}
        >

          {/* heading */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 3
            }}
          >

            <Box>

              <Typography
                sx={{
                  fontSize: {
                    xs: "2rem",
                    md: "3rem"
                  },
                  fontWeight: 900,
                  color: "#0f172a",
                  lineHeight: 1.1
                }}
              >
                Test Analysis
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  color: "#64748b",
                  fontSize: "1rem"
                }}
              >
                Detailed performance insights and improvement plan
              </Typography>

            </Box>

            {/* score */}
            <Box
              sx={{
                px: 4,
                py: 2.5,
                borderRadius: "24px",
                background:
                  "linear-gradient(135deg,#14b8a6,#0891b2)",
                color: "white",
                minWidth: "180px",
                textAlign: "center",
                boxShadow:
                  "0 15px 35px rgba(20,184,166,0.25)"
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  opacity: 0.85
                }}
              >
                Your Score
              </Typography>

              <Typography
                sx={{
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  lineHeight: 1.1
                }}
              >
                120
              </Typography>
            </Box>

          </Box>

          {/* divider */}
          <Divider
            sx={{
              my: 4
            }}
          />

          {/* details */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr 1fr",
                md: "repeat(4,1fr)"
              },
              gap: 2.5
            }}
          >

            {[
              {
                label: "Exam",
                value: "IITJEE Mock Test"
              },
              {
                label: "Questions",
                value: "75"
              },
              {
                label: "Correct",
                value: "120"
              },
              {
                label: "Time Taken",
                value: "2h 42m"
              }
            ].map((item, i) => (

              <Box
                key={i}
                sx={{
                  p: 3,
                  borderRadius: "24px",
                  background: "#f8fafc",
                  border:
                    "1px solid rgba(148,163,184,0.12)"
                }}
              >

                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize: "0.9rem"
                  }}
                >
                  {item.label}
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    color: "#0f172a",
                    fontSize: "1.5rem",
                    fontWeight: 800
                  }}
                >
                  {item.value}
                </Typography>

              </Box>

            ))}

          </Box>

        </Box>

      </Paper>

      {/* SWITCH BUTTONS */}
      <Box
        sx={{
          mt: 5,
          display: "flex",
          gap: 2,
          flexWrap: "wrap"
        }}
      >

        {tabs.map((tab) => (

          <Button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: "16px",
              textTransform: "none",
              fontWeight: 700,
              fontSize: "0.95rem",
              transition: "0.3s",

              ...(activeTab === tab.key
                ? {
                    color: "#ffffff",
                    background:
                      "linear-gradient(135deg,#14b8a6,#0891b2)",
                    boxShadow:
                      "0 10px 25px rgba(20,184,166,0.2)"
                  }
                : {
                    color: "#0f172a",
                    background: "#ffffff",
                    border:
                      "1px solid rgba(148,163,184,0.18)"
                  })
            }}
          >
            {tab.label}
          </Button>

        ))}

      </Box>

      {/* SWITCH CONTENT */}
      <Paper
        elevation={0}
        sx={{
          mt: 4,
          borderRadius: "32px",
          background: "#ffffff",
          border: "1px solid rgba(15,23,42,0.06)",
          boxShadow: "0 15px 40px rgba(15,23,42,0.05)",
          p: {
            xs: 3,
            md: 5
          },
          minHeight: "400px"
        }}
      >

        {activeTab === "basic" && (
            <BasicAnalysis/>
        )}

        {activeTab === "drill" && (
            <DrillPractice/>
        )}

        {activeTab === "dpp" && (
            <SolveDPP/>
        )}

        {activeTab === "revision" && (
            <RevisionSheet/>
        )}

        {activeTab === "Tests comparison" && (
            <TestToTestComparison/>
        )}

        {activeTab === "Destination" && (
            <DestinationMeter/>
        )}

      </Paper>

    </Box>
  );
}

export default CBTAnalysis;