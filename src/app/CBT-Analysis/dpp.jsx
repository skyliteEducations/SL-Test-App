import {
  Box,
  Paper,
  Typography,
  Button
} from "@mui/material";

function SolveDPP() {

  const dppData = [
    {
      subject: "Physics",
      totalDPPs: 3,
      weakTopics: [
        "Electromagnetic Induction",
        "Wave Optics",
        "Thermodynamics"
      ],
      questions: 45,
      duration: "60 Min"
    },
    {
      subject: "Chemistry",
      totalDPPs: 3,
      weakTopics: [
        "Thermodynamics",
        "Coordination Compounds",
        "Ionic Equilibrium"
      ],
      questions: 50,
      duration: "55 Min"
    },
    {
      subject: "Mathematics",
      totalDPPs: 3,
      weakTopics: [
        "Definite Integration",
        "Complex Numbers",
        "Matrices"
      ],
      questions: 40,
      duration: "70 Min"
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
          AI Generated DPPs
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
          Personalized Daily Practice Problems generated from your exam
          performance, weak chapters, and drill practice analysis.
        </Typography>

      </Box>

      {/* SUBJECT DPP CARDS */}
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

        {dppData.map((subject, index) => (

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

            {/* glow */}
            <Box
              sx={{
                position: "absolute",
                top: -80,
                right: -80,
                width: 220,
                height: 220,
                borderRadius: "999px",
                background:
                  "rgba(20,184,166,0.12)",
                filter: "blur(60px)"
              }}
            />

            <Box
              sx={{
                p: 4,
                position: "relative",
                zIndex: 2
              }}
            >

              {/* top row */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  alignItems: "center"
                }}
              >

                <Box>

                  <Typography
                    sx={{
                      color: "#64748b",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      letterSpacing: "0.5px"
                    }}
                  >
                    SUBJECT DPP
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1,
                      fontSize: "2.2rem",
                      fontWeight: 900,
                      color: "#0f172a"
                    }}
                  >
                    {subject.subject}
                  </Typography>

                </Box>

                {/* count */}
                <Box
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: "22px",
                    background:
                      "linear-gradient(135deg,#14b8a6,#0891b2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 900,
                    fontSize: "1.8rem",
                    boxShadow:
                      "0 10px 30px rgba(20,184,166,0.25)"
                  }}
                >
                  {subject.totalDPPs}
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
                AI generated practice sheets focused on weak concepts
                identified from your real exam analysis.
              </Typography>

              {/* stats */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mt: 4
                }}
              >

                {[
                  {
                    label: "Questions",
                    value: subject.questions
                  },
                  {
                    label: "Duration",
                    value: subject.duration
                  }
                ].map((item, i) => (

                  <Box
                    key={i}
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
                      {item.label}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 1,
                        fontWeight: 800,
                        color: "#0f172a",
                        fontSize: "1.1rem"
                      }}
                    >
                      {item.value}
                    </Typography>

                  </Box>

                ))}

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
                  Focus Topics
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

              {/* dpp list */}
              <Box
                sx={{
                  mt: 5,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2
                }}
              >

                {[1, 2, 3].map((dpp) => (

                  <Box
                    key={dpp}
                    sx={{
                      p: 2.2,
                      borderRadius: "22px",
                      background: "#f8fafc",
                      border:
                        "1px solid rgba(148,163,184,0.08)",
                      display: "flex",
                      justifyContent:
                        "space-between",
                      alignItems: "center"
                    }}
                  >

                    <Box>

                      <Typography
                        sx={{
                          fontWeight: 800,
                          color: "#0f172a"
                        }}
                      >
                        DPP {dpp}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 0.5,
                          fontSize: "0.82rem",
                          color: "#64748b"
                        }}
                      >
                        Personalized practice sheet
                      </Typography>

                    </Box>

                    <Button
                      sx={{
                        px: 3,
                        py: 1,
                        borderRadius: "14px",
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
                      Solve
                    </Button>

                  </Box>

                ))}

              </Box>

            </Box>

          </Paper>

        ))}

      </Box>

    </Box>
  );
}

export default SolveDPP;