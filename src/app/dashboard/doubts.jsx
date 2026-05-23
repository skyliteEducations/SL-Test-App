import React, { useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Typography,
  Paper
} from "@mui/material";

const exams = ["JEE", "NEET", "UPSC", "SSC"];
const subjects = ["Physics", "Chemistry", "Maths", "Biology"];

export default function AskDoubtForm() {
  const [formData, setFormData] = useState({
    exam: "",
    subject: "",
    description: "",
    image: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Doubt Submitted!");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        py: 6,
        background: "#f8fafc"
      }}
    >

      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: "960px",
          borderRadius: "32px",
          overflow: "hidden",
          background: "#ffffff",
          border: "1px solid rgba(15,23,42,0.06)",
          boxShadow: "0 20px 60px rgba(15,23,42,0.08)"
        }}
      >

        {/* top accent */}
        <Box
          sx={{
            height: "6px",
            background:
              "linear-gradient(90deg,#14b8a6,#06b6d4)"
          }}
        />

        <Box sx={{ p: { xs: 3, md: 5 } }}>

          {/* header */}
          <Box sx={{ mb: 5 }}>

            <Typography
              sx={{
                fontSize: {
                  xs: "2rem",
                  md: "2.8rem"
                },
                fontWeight: 900,
                color: "#0f172a",
                letterSpacing: "-1px",
                lineHeight: 1.1
              }}
            >
              Ask Your Doubt
            </Typography>

            <Typography
              sx={{
                mt: 1.5,
                color: "#64748b",
                fontSize: "1rem",
                lineHeight: 1.8,
                maxWidth: "560px"
              }}
            >
              Submit your academic query with supporting details and receive expert guidance.
            </Typography>

          </Box>

          <form onSubmit={handleSubmit}>

            {/* dropdowns */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr 1fr"
                },
                gap: 2.5
              }}
            >

              <TextField
                select
                fullWidth
                label="Select Exam"
                name="exam"
                value={formData.exam}
                onChange={handleChange}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "18px",
                    background: "#f8fafc",
                    transition: "0.3s",

                    "& fieldset": {
                      borderColor: "rgba(148,163,184,0.2)"
                    },

                    "&:hover fieldset": {
                      borderColor: "#14b8a6"
                    },

                    "&.Mui-focused fieldset": {
                      borderColor: "#14b8a6",
                      borderWidth: "2px"
                    }
                  }
                }}
              >
                {exams.map((exam) => (
                  <MenuItem key={exam} value={exam}>
                    {exam}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                fullWidth
                label="Select Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "18px",
                    background: "#f8fafc",
                    transition: "0.3s",

                    "& fieldset": {
                      borderColor: "rgba(148,163,184,0.2)"
                    },

                    "&:hover fieldset": {
                      borderColor: "#14b8a6"
                    },

                    "&.Mui-focused fieldset": {
                      borderColor: "#14b8a6",
                      borderWidth: "2px"
                    }
                  }
                }}
              >
                {subjects.map((sub) => (
                  <MenuItem key={sub} value={sub}>
                    {sub}
                  </MenuItem>
                ))}
              </TextField>

            </Box>

            {/* upload section */}
            <Box
              sx={{
                mt: 3,
                p: 4,
                borderRadius: "24px",
                border: "1.5px dashed rgba(20,184,166,0.25)",
                background:
                  "linear-gradient(180deg,#ffffff,#f8fafc)",
                transition: "0.3s",

                "&:hover": {
                  borderColor: "#14b8a6",
                  background:
                    "linear-gradient(180deg,#ffffff,#f0fdfa)"
                }
              }}
            >

              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  color: "#0f172a"
                }}
              >
                Upload Question Image
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  color: "#64748b",
                  fontSize: "0.95rem"
                }}
              >
                Attach screenshots or handwritten questions for better assistance.
              </Typography>

              <Button
                variant="outlined"
                component="label"
                sx={{
                  mt: 3,
                  px: 3.5,
                  py: 1.2,
                  borderRadius: "14px",
                  textTransform: "none",
                  fontWeight: 700,
                  borderColor: "#14b8a6",
                  color: "#0f766e",

                  "&:hover": {
                    borderColor: "#0f766e",
                    background: "rgba(20,184,166,0.05)"
                  }
                }}
              >
                Choose File

                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </Button>

            </Box>

            {/* description */}
            <TextField
              fullWidth
              multiline
              rows={5}
              label="Describe your doubt"
              name="description"
              value={formData.description}
              onChange={handleChange}
              margin="normal"
              sx={{
                mt: 3,

                "& .MuiOutlinedInput-root": {
                  borderRadius: "22px",
                  background: "#f8fafc",

                  "& fieldset": {
                    borderColor: "rgba(148,163,184,0.2)"
                  },

                  "&:hover fieldset": {
                    borderColor: "#14b8a6"
                  },

                  "&.Mui-focused fieldset": {
                    borderColor: "#14b8a6",
                    borderWidth: "2px"
                  }
                }
              }}
            />

            {/* submit */}
            <Button
              type="submit"
              fullWidth
              sx={{
                mt: 4,
                py: 1.6,
                borderRadius: "18px",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 800,
                color: "#ffffff",
                background:
                  "linear-gradient(135deg,#14b8a6,#0891b2)",
                boxShadow:
                  "0 12px 30px rgba(20,184,166,0.2)",
                transition: "0.3s",

                "&:hover": {
                  background:
                    "linear-gradient(135deg,#0f766e,#0e7490)",
                  transform: "translateY(-2px)",
                  boxShadow:
                    "0 18px 40px rgba(20,184,166,0.28)"
                }
              }}
            >
              Submit Doubt
            </Button>

          </form>

        </Box>
      </Paper>
    </Box>
  );
}