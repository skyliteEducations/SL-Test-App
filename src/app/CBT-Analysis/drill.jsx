import {
  Box,
  Paper,
  Typography,
  Button
} from "@mui/material";

function DrillPractice() {

  const wrongQuestions = 18;
  const conceptMistakes = 11;
  const sillyMistakes = 7;

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
          Drill Practice
        </Typography>

        <Typography
          sx={{
            mt: 1.5,
            color: "#64748b",
            fontSize: "1rem",
            lineHeight: 1.8,
            maxWidth: "720px"
          }}
        >
          Re-attempt all incorrectly answered questions in a focused environment
          to identify whether mistakes were caused by concepts or exam pressure.
        </Typography>

      </Box>

      {/* TOP CARDS */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            lg: "repeat(3,1fr)"
          },
          gap: 3,
          mb: 5
        }}
      >

        {[
          {
            title: "Wrong Questions",
            value: wrongQuestions,
            color: "#ef4444"
          },
          {
            title: "Concept Mistakes",
            value: conceptMistakes,
            color: "#f59e0b"
          },
          {
            title: "Pressure Mistakes",
            value: sillyMistakes,
            color: "#14b8a6"
          }
        ].map((item, i) => (

          <Paper
            key={i}
            elevation={0}
            sx={{
              p: 4,
              borderRadius: "30px",
              background: "#ffffff",
              border:
                "1px solid rgba(15,23,42,0.06)",
              boxShadow:
                "0 10px 30px rgba(15,23,42,0.05)"
            }}
          >

            <Typography
              sx={{
                color: "#64748b",
                fontSize: "0.95rem",
                fontWeight: 600
              }}
            >
              {item.title}
            </Typography>

            <Typography
              sx={{
                mt: 2,
                fontSize: "3rem",
                fontWeight: 900,
                color: item.color,
                lineHeight: 1
              }}
            >
              {item.value}
            </Typography>

          </Paper>

        ))}

      </Box>

      {/* MAIN DRILL CARD */}
      <Paper
        elevation={0}
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "36px",
          p: {
            xs: 4,
            md: 6
          },
          background:
            "linear-gradient(135deg,#0f172a,#111827)",
          color: "white",
          boxShadow:
            "0 20px 60px rgba(15,23,42,0.2)"
        }}
      >

        {/* glow */}
        <Box
          sx={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 260,
            height: 260,
            borderRadius: "999px",
            background:
              "rgba(20,184,166,0.18)",
            filter: "blur(60px)"
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 2
          }}
        >

          {/* badge */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 1,
              borderRadius: "999px",
              background:
                "rgba(255,255,255,0.08)",
              border:
                "1px solid rgba(255,255,255,0.08)"
            }}
          >

            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "999px",
                background: "#14b8a6"
              }}
            />

            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.5px"
              }}
            >
              PERFORMANCE RECOVERY
            </Typography>

          </Box>

          {/* heading */}
          <Typography
            sx={{
              mt: 4,
              fontSize: {
                xs: "2.2rem",
                md: "4rem"
              },
              fontWeight: 900,
              lineHeight: 1.05
            }}
          >
            Rebuild Accuracy
          </Typography>

          {/* desc */}
          <Typography
            sx={{
              mt: 3,
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.9,
              maxWidth: "720px"
            }}
          >
            This drill session contains only the questions you answered
            incorrectly in the original exam. Solve them again under low pressure
            conditions to identify weak concepts and improve retention.
          </Typography>

          {/* info row */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              mt: 5
            }}
          >

            {[
              {
                label: "Questions",
                value: `${wrongQuestions}`
              },
              {
                label: "Estimated Time",
                value: "28 Min"
              },
              {
                label: "Mode",
                value: "Focused Practice"
              }
            ].map((item, i) => (

              <Box
                key={i}
                sx={{
                  px: 3,
                  py: 2,
                  borderRadius: "20px",
                  background:
                    "rgba(255,255,255,0.06)",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                  minWidth: "170px"
                }}
              >

                <Typography
                  sx={{
                    color:
                      "rgba(255,255,255,0.6)",
                    fontSize: "0.82rem"
                  }}
                >
                  {item.label}
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    fontWeight: 800,
                    fontSize: "1.25rem"
                  }}
                >
                  {item.value}
                </Typography>

              </Box>

            ))}

          </Box>

          {/* button */}
          <Button
            sx={{
              mt: 5,
              px: 5,
              py: 1.7,
              borderRadius: "18px",
              textTransform: "none",
              fontWeight: 800,
              fontSize: "1rem",
              color: "#ffffff",
              background:
                "linear-gradient(135deg,#14b8a6,#0891b2)",
              boxShadow:
                "0 12px 30px rgba(20,184,166,0.2)",

              "&:hover": {
                background:
                  "linear-gradient(135deg,#0f766e,#0e7490)"
              }
            }}
          >
            Start Drill Practice
          </Button>

        </Box>

      </Paper>

    </Box>
  );
}

export default DrillPractice;