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
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="90vh"
      bgcolor="#f5f5f5"
    >
      <Paper elevation={1} sx={{ p: 4, width: 700, borderRadius: 3 }}>
        <Typography variant="h5" mb={2} fontWeight="bold">
          Ask Your Doubt
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Exam Dropdown */}
          <div className="grid grid-cols-2 gap-4">
            <TextField
                select
                fullWidth
                label="Select Exam"
                name="exam"
                value={formData.exam}
                onChange={handleChange}
                margin="normal"
                required
            >
                {exams.map((exam) => (
                <MenuItem key={exam} value={exam}>
                    {exam}
                </MenuItem>
                ))}
            </TextField>

            {/* Subject Dropdown */}
            <TextField
                select
                fullWidth
                label="Select Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                margin="normal"
                required
            >
                {subjects.map((sub) => (
                <MenuItem key={sub} value={sub}>
                    {sub}
                </MenuItem>
                ))}
            </TextField>

          </div>

          {/* Image Upload */}
          <Button
            variant="outlined"
            component="label"
            fullWidth
            sx={{
                mt: 2,
                borderColor: "teal",
                color: "teal",
                fontWeight: 500,
                "&:hover": {
                borderColor: "#008080",
                backgroundColor: "rgba(0,128,128,0.08)"
                }
            }}
          >
            Upload Question Image
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImageChange}
            />
          </Button>

          {/* Description */}
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Describe your doubt"
            name="description"
            value={formData.description}
            onChange={handleChange}
            margin="normal"
          />

          {/* Submit */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
             sx={{
                mt: 2,
                py: 1.2,
                backgroundColor: "teal",
                fontWeight: 600,
                "&:hover": {
                backgroundColor: "#008080"
                }
            }}
          >
            Submit Doubt
          </Button>
        </form>
      </Paper>
    </Box>
  );
}