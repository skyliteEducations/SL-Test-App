import {
  Box,
  Paper,
  Typography,
  Button,
  LinearProgress
} from "@mui/material";

function RevisionSheet() {

  const revisionData = [
    {
      subject: "Physics",
      weakTopics: [
        "Wave Optics",
        "Electromagnetic Induction",
        "Thermodynamics"
      ],
      pages: 24,
      progress: 72
    },
    {
      subject: "Chemistry",
      weakTopics: [
        "Ionic Equilibrium",
        "Coordination Compounds",
        "Thermodynamics"
      ],
      pages: 18,
      progress: 54
    },
    {
      subject: "Mathematics",
      weakTopics: [
        "Definite Integration",
        "Complex Numbers",
        "Matrices"
      ],
      pages: 20,
      progress: 66
    }
  ];

  return (
    <Box>

      {/* HEADER */}
      <Box
        sx={{
          mb: 5
        }}
      >

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
          Revision Sheets
        </Typography>

        <Typography
          sx={{
            mt: 1.5,
            color: "#64748b",
            fontSize: "1rem",
            lineHeight: 1.8,
            maxWidth: "760px"
          }}
        >
          AI generated revision notes and concise sheets created from
          your weak topics, wrong questions, and overall exam analysis.
        </Typography>

      </Box>

      {/* SUBJECT SHEETS */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "repeat(3,1fr)"
          },
          gap: 4
        }}
      >

        {revisionData.map((subject, index) => (

          <Paper
            key={index}
            elevation={0}
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "34px",
              background: "#ffffff",
              border:
                "1px solid rgba(15,23,42,0.06)",
              boxShadow:
                "0 15px 40px rgba(15,23,42,0.06)",
              transition: "0.35s",

              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow:
                  "0 25px 60px rgba(15,23,42,0.12)"
              }
            }}
          >

            {/* top glow */}
            <Box
              sx={{
                position: "absolute",
                top: -90,
                right: -90,
                width: 240,
                height: 240,
                borderRadius: "999px",
                background:
                  "rgba(20,184,166,0.12)",
                filter: "blur(70px)"
              }}
            />

            <Box
              sx={{
                p: 4,
                position: "relative",
                zIndex: 2
              }}
            >

              {/* top */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  alignItems: "flex-start"
                }}
              >

                <Box>

                  <Typography
                    sx={{
                      color: "#64748b",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      letterSpacing: "0.5px"
                    }}
                  >
                    REVISION PDF
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1,
                      fontSize: "2.3rem",
                      fontWeight: 900,
                      color: "#0f172a"
                    }}
                  >
                    {subject.subject}
                  </Typography>

                </Box>

                {/* pdf icon */}
                <Box
                  sx={{
                    width: 72,
                    height: 72,
                    borderRadius: "24px",
                    background:
                      "linear-gradient(135deg,#14b8a6,#0891b2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 900,
                    fontSize: "1.3rem",
                    boxShadow:
                      "0 12px 30px rgba(20,184,166,0.25)"
                  }}
                >
                  PDF
                </Box>

              </Box>

              {/* line */}
              <Box
                sx={{
                  width: 70,
                  height: 5,
                  borderRadius: "999px",
                  background:
                    "linear-gradient(90deg,#14b8a6,#06b6d4)",
                  mt: 3
                }}
              />

              {/* desc */}
              <Typography
                sx={{
                  mt: 3,
                  color: "#64748b",
                  lineHeight: 1.9,
                  fontSize: "0.96rem"
                }}
              >
                Personalized concise revision sheet covering only
                your weak concepts and previously incorrect questions.
              </Typography>

              {/* stats */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mt: 4
                }}
              >

                <Box
                  sx={{
                    flex: 1,
                    p: 2,
                    borderRadius: "20px",
                    background: "#f8fafc",
                    border:
                      "1px solid rgba(148,163,184,0.08)"
                  }}
                >

                  <Typography
                    sx={{
                      fontSize: "0.78rem",
                      color: "#64748b"
                    }}
                  >
                    Total Pages
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1,
                      fontWeight: 800,
                      color: "#0f172a",
                      fontSize: "1.15rem"
                    }}
                  >
                    {subject.pages} Pages
                  </Typography>

                </Box>

                <Box
                  sx={{
                    flex: 1,
                    p: 2,
                    borderRadius: "20px",
                    background: "#f8fafc",
                    border:
                      "1px solid rgba(148,163,184,0.08)"
                  }}
                >

                  <Typography
                    sx={{
                      fontSize: "0.78rem",
                      color: "#64748b"
                    }}
                  >
                    Coverage
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1,
                      fontWeight: 800,
                      color: "#0f172a",
                      fontSize: "1.15rem"
                    }}
                  >
                    {subject.progress}%
                  </Typography>

                </Box>

              </Box>

              {/* weak topics */}
              <Box
                sx={{
                  mt: 4
                }}
              >

                <Typography
                  sx={{
                    fontWeight: 800,
                    color: "#0f172a",
                    mb: 2
                  }}
                >
                  Included Weak Topics
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1.5
                  }}
                >

                  {subject.weakTopics.map(
                    (topic, i) => (

                      <Box
                        key={i}
                        sx={{
                          px: 2,
                          py: 1,
                          borderRadius: "999px",
                          background:
                            "rgba(20,184,166,0.08)",
                          border:
                            "1px solid rgba(20,184,166,0.12)"
                        }}
                      >

                        <Typography
                          sx={{
                            color: "#0f766e",
                            fontSize: "0.82rem",
                            fontWeight: 700
                          }}
                        >
                          {topic}
                        </Typography>

                      </Box>

                    )
                  )}

                </Box>

              </Box>

              {/* progress */}
              <Box
                sx={{
                  mt: 5
                }}
              >

                <Box
                  sx={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    mb: 1
                  }}
                >

                  <Typography
                    sx={{
                      color: "#64748b",
                      fontWeight: 700,
                      fontSize: "0.9rem"
                    }}
                  >
                    Revision Completion
                  </Typography>

                  <Typography
                    sx={{
                      color: "#0f172a",
                      fontWeight: 800
                    }}
                  >
                    {subject.progress}%
                  </Typography>

                </Box>

                <LinearProgress
                  variant="determinate"
                  value={subject.progress}
                  sx={{
                    height: 10,
                    borderRadius: "999px",
                    background:
                      "rgba(148,163,184,0.12)",

                    "& .MuiLinearProgress-bar": {
                      background:
                        "linear-gradient(90deg,#14b8a6,#06b6d4)"
                    }
                  }}
                />

              </Box>

              {/* buttons */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mt: 5
                }}
              >

                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    py: 1.3,
                    borderRadius: "16px",
                    textTransform: "none",
                    fontWeight: 800,
                    borderColor:
                      "rgba(20,184,166,0.25)",
                    color: "#0f766e",

                    "&:hover": {
                      borderColor: "#14b8a6",
                      background:
                        "rgba(20,184,166,0.05)"
                    }
                  }}
                >
                  Preview
                </Button>

                <Button
                  fullWidth
                  sx={{
                    py: 1.3,
                    borderRadius: "16px",
                    textTransform: "none",
                    fontWeight: 800,
                    color: "#ffffff",
                    background:
                      "linear-gradient(135deg,#14b8a6,#0891b2)",

                    "&:hover": {
                      background:
                        "linear-gradient(135deg,#0f766e,#0e7490)"
                    }
                  }}
                >
                  Download PDF
                </Button>

              </Box>

            </Box>

          </Paper>

        ))}

      </Box>

    </Box>
  );
}

export default RevisionSheet;