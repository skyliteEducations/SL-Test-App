import {
  Box,
  Paper,
  Typography,
  LinearProgress
} from "@mui/material";

function DestinationMeter() {

  // DUMMY MARKS
  const marks = 128;

  // DESTINATION LEVELS
  const destinations = [
    {
      marks: 80,
      label: "Tier 3 Private Colleges",
      color: "#ef4444"
    },
    {
      marks: 120,
      label: "Mid Tier NIT",
      color: "#f59e0b"
    },
    {
      marks: 160,
      label: "Top NIT",
      color: "#14b8a6"
    },
    {
      marks: 220,
      label: "IIIT / Top State Colleges",
      color: "#06b6d4"
    },
    {
      marks: 280,
      label: "IIT Advanced Level",
      color: "#8b5cf6"
    }
  ];

  // CURRENT DESTINATION
  const currentDestination =
    destinations
      .filter(
        (d) => marks >= d.marks
      )
      .slice(-1)[0];

  // METER %
  const progress =
    (marks / 300) * 100;

  return (
    <Paper
      elevation={0}
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "36px",
        p: {
          xs: 4,
          md: 5
        },
        background: "#ffffff",
        border:
          "1px solid rgba(15,23,42,0.06)",
        boxShadow:
          "0 20px 60px rgba(15,23,42,0.06)"
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
            "rgba(20,184,166,0.12)",
          filter: "blur(70px)"
        }}
      />

      {/* HEADER */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
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
          Destination Meter
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
          Analyze your current exam
          standing and estimate the
          college tier based on your
          marks trajectory.
        </Typography>

      </Box>

      {/* MAIN CONTENT */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "340px 1fr"
          },
          gap: 6,
          alignItems: "center",
          position: "relative",
          zIndex: 2
        }}
      >

        {/* LEFT SIDE */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >

          {/* SCORE */}
          <Box
            sx={{
              width: 220,
              height: 220,
              borderRadius: "999px",
              background:
                "linear-gradient(135deg,#14b8a6,#0891b2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              color: "white",
              boxShadow:
                "0 20px 50px rgba(20,184,166,0.25)"
            }}
          >

            <Typography
              sx={{
                fontSize: "4rem",
                fontWeight: 900,
                lineHeight: 1
              }}
            >
              {marks}
            </Typography>

            <Typography
              sx={{
                mt: 1,
                opacity: 0.8,
                fontWeight: 700
              }}
            >
              Current Marks
            </Typography>

          </Box>

          {/* CURRENT LEVEL */}
          <Box
            sx={{
              mt: 4,
              px: 4,
              py: 2,
              borderRadius: "20px",
              background:
                "rgba(20,184,166,0.08)",
              border:
                "1px solid rgba(20,184,166,0.12)",
              textAlign: "center"
            }}
          >

            <Typography
              sx={{
                fontSize: "0.82rem",
                color: "#64748b",
                fontWeight: 700
              }}
            >
              CURRENT DESTINATION
            </Typography>

            <Typography
              sx={{
                mt: 1,
                fontWeight: 900,
                fontSize: "1.2rem",
                color:
                  currentDestination.color
              }}
            >
              {
                currentDestination.label
              }
            </Typography>

          </Box>

        </Box>

        {/* RIGHT SIDE */}
        <Box>

          {/* METER */}
          <Box
            sx={{
              position: "relative",
              pl: 5
            }}
          >

            {/* vertical line */}
            <Box
              sx={{
                position: "absolute",
                left: 18,
                top: 0,
                bottom: 0,
                width: "8px",
                borderRadius: "999px",
                background:
                  "linear-gradient(180deg,#ef4444,#f59e0b,#14b8a6,#06b6d4,#8b5cf6)"
              }}
            />

            {/* indicator */}
            <Box
              sx={{
                position: "absolute",
                left: 6,
                top: `${100 - progress}%`,
                width: 32,
                height: 32,
                borderRadius: "999px",
                background: "#ffffff",
                border:
                  "6px solid #14b8a6",
                boxShadow:
                  "0 10px 25px rgba(20,184,166,0.2)",
                transition: "0.4s"
              }}
            />

            {/* levels */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4
              }}
            >

              {destinations
                .slice()
                .reverse()
                .map((item, i) => (

                  <Box
                    key={i}
                    sx={{
                      p: 3,
                      borderRadius: "24px",
                      background:
                        marks >= item.marks
                          ? "rgba(20,184,166,0.08)"
                          : "#f8fafc",

                      border:
                        marks >= item.marks
                          ? "1px solid rgba(20,184,166,0.15)"
                          : "1px solid rgba(148,163,184,0.08)",

                      transition: "0.3s"
                    }}
                  >

                    <Typography
                      sx={{
                        fontSize: "0.82rem",
                        color: "#64748b",
                        fontWeight: 700
                      }}
                    >
                      {item.marks}+ Marks
                    </Typography>

                    <Typography
                      sx={{
                        mt: 1,
                        fontWeight: 900,
                        fontSize: "1.2rem",
                        color: item.color
                      }}
                    >
                      {item.label}
                    </Typography>

                  </Box>

                ))}

            </Box>

          </Box>

        </Box>

      </Box>

      {/* BOTTOM PROGRESS */}
      <Box
        sx={{
          mt: 6,
          position: "relative",
          zIndex: 2
        }}
      >

        <Box
          sx={{
            display: "flex",
            justifyContent:
              "space-between",
            mb: 1.5
          }}
        >

          <Typography
            sx={{
              fontWeight: 700,
              color: "#64748b"
            }}
          >
            IIT Readiness Progress
          </Typography>

          <Typography
            sx={{
              fontWeight: 900,
              color: "#0f172a"
            }}
          >
            {Math.floor(progress)}%
          </Typography>

        </Box>

        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 14,
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

    </Paper>
  );
}

export default DestinationMeter;