import React, { useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  Button
} from "@mui/material";

export default function ComplaintPage() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const complaints = [
    { id: 1, title: "App not loading", date: "12 Mar 2026" },
    { id: 2, title: "Image upload issue", date: "10 Mar 2026" }
  ];

  return (
    <Box
      sx={{
        height: "90vh",
        width: "100%",
        p: 3,
        bgcolor: "#f1f5f9"
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          height: "100%",
          width: "100%",
          m: 0
        }}
      >
        {/* LEFT SIDE */}
        <Grid item xs={12} md={5}>
          <Paper
            sx={{
              height: "100%",
              width: "100%",
              p: 3,
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 8px 20px rgba(0,0,0,0.06)"
            }}
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="700"
                mb={3}
                color="#0f766e"
              >
                Raise Complaint
              </Typography>

              <TextField
                fullWidth
                label="Title"
                size="small"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                multiline
                rows={5}
                label="Description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                sx={{ mb: 2 }}
              />

              <Button
                component="label"
                variant="outlined"
                fullWidth
                sx={{
                  py: 1.2,
                  borderRadius: "10px",
                  borderColor: "#0f766e",
                  color: "#0f766e",
                  fontWeight: 600,
                  "&:hover": {
                    borderColor: "#115e59",
                    backgroundColor: "rgba(15,118,110,0.08)"
                  }
                }}
              >
                Upload File
                <input hidden type="file" />
              </Button>
            </Box>

            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                py: 1.3,
                borderRadius: "10px",
                backgroundColor: "#0f766e",
                fontWeight: 700,
                letterSpacing: "0.5px",
                boxShadow: "0 6px 15px rgba(15,118,110,0.3)",
                "&:hover": {
                  backgroundColor: "#115e59"
                }
              }}
            >
              SUBMIT COMPLAINT
            </Button>
          </Paper>
        </Grid>

        {/* RIGHT SIDE */}
        <Grid item xs={12} md={7}>
          <Paper
            sx={{
              height: "100%",
              width: "100%",
              p: 3,
              borderRadius: "16px",
              overflowY: "auto",
              boxShadow: "0 8px 20px rgba(0,0,0,0.06)"
            }}
          >
            <Typography
              variant="h5"
              fontWeight="700"
              mb={3}
              color="#0f766e"
            >
              Your Complaints
            </Typography>

            {complaints.map((item) => (
              <Box
                key={item.id}
                sx={{
                  p: 2,
                  mb: 2,
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "0.2s",
                  "&:hover": {
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
                  }
                }}
              >
                <Box>
                  <Typography fontWeight="600">
                    {item.title}
                  </Typography>
                  <Typography fontSize="13px" color="gray">
                    {item.date}
                  </Typography>
                </Box>

                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    borderColor: "#0f766e",
                    color: "#0f766e",
                    textTransform: "none",
                    fontWeight: 500,
                    "&:hover": {
                      borderColor: "#115e59",
                      backgroundColor: "rgba(15,118,110,0.08)"
                    }
                  }}
                >
                  View
                </Button>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}