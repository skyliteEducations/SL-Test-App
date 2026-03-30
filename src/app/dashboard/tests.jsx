'use client'
import Image from "next/image";
import TextField from "@mui/material/TextField";
import { Box, MenuItem, ButtonCard,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Card,
  IconButton
 } from "@mui/material";
 import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from "next/navigation";

export default function Tests() {
    const router = useRouter();

    const filtersConfig = [
  {
    label: "Sort by",
    key: "sort",
    options: [
      { label: "None", value: "" },
      { label: "Price low to high", value: "low" },
      { label: "Price high to low", value: "high" },
      { label: "Most bought", value: "popular" },
    ],
  },
  {
    label: "Subject",
    key: "subject",
    options: [
      { label: "None", value: "" },
      { label: "Physics", value: "physics" },
      { label: "Chemistry", value: "chemistry" },
      { label: "Mathematics", value: "maths" },
      { label: "Biology", value: "biology" },
    ],
  },
  {
    label: "Exam",
    key: "exam",
    options: [
      { label: "None", value: "" },
      { label: "IIT JEE Mains", value: "jee-mains" },
      { label: "IIT JEE Advanced", value: "jee-adv" },
      { label: "NEET", value: "neet" },
      { label: "Aptitude", value: "aptitude" },
    ],
  },
];

    function NavigateTOMyAcc(){
        router.push("/account")

    }
    function NavigateTOTestDetails(){
        router.push("/test-details")

    }
  return (
    // <div className="bg-white h-full">
    //     <div className="searchingSection h-[20vh] p-6 fixed top-0 left-0 w-full bg-white z-10">
    //         <Box
    //             sx={{
    //                 width: '100%',
    //                 margin: "10px auto",
    //                 display: "flex",
    //                 flexDirection: "column",
    //                 gap: 2,
    //             }}
    //             >
    //             <TextField
    //                 label="Search by teacher name, exam name such as IIT JEE mocks by sumit singh ..."
    //                 variant="outlined"
    //                 // value={value}
    //                 // onChange={handleChange}
    //                 // error={error}
    //                 // helperText={error ? "Minimum 3 characters required" : "Looks good"}
    //                 fullWidth
    //             />
    //         </Box>
    //     </div>
    //     <div className="filterationSection grid grid-cols-4 gap-4 pl-6 pr-6 h-[20vh] p-6 fixed top-[20vh] left-0 w-full bg-white z-10">
    //         <Box
    //             sx={{
    //                 width: "100%",
    //                 marginBottom: "30px",
    //                 display: "flex",
    //                 flexDirection: "column",
    //                 gap: 2,
    //             }}
    //             >
    //             <TextField
    //                 select
    //                 label="Sort by"
    //                 defaultValue=""
    //                 fullWidth
    //             >
    //                 <MenuItem value="">None</MenuItem>
    //                 <MenuItem value="option1">Price low to high</MenuItem>
    //                 <MenuItem value="option2">Price high to low</MenuItem>
    //                 <MenuItem value="option3">Most buyed</MenuItem>
    //             </TextField>
    //         </Box>

    //         <Box
    //             sx={{
    //                 width: "100%",
    //                 marginBottom: "30px",
    //                 display: "flex",
    //                 flexDirection: "column",
    //                 gap: 2,
    //             }}
    //             >
    //             <TextField
    //                 select
    //                 label="Subject"
    //                 defaultValue=""
    //                 fullWidth
    //             >
    //                 <MenuItem value="">None</MenuItem>
    //                 <MenuItem value="option1">Physics</MenuItem>
    //                 <MenuItem value="option2">Chemistry</MenuItem>
    //                 <MenuItem value="option3">Mathametics</MenuItem>
    //                 <MenuItem value="option3">Biology</MenuItem>
    //             </TextField>
    //         </Box>

    //         <Box
    //             sx={{
    //                 width: "100%",
    //                 marginBottom: "30px",
    //                 display: "flex",
    //                 flexDirection: "column",
    //                 gap: 2,
    //             }}
    //             >
    //             <TextField
    //                 select
    //                 label="Exam"
    //                 defaultValue=""
    //                 fullWidth
    //             >
    //                 <MenuItem value="">None</MenuItem>
    //                 <MenuItem value="option1">IIT JEE Mains</MenuItem>
    //                 <MenuItem value="option2">IIT JEE Advanced</MenuItem>
    //                 <MenuItem value="option3">NEET</MenuItem>
    //                 <MenuItem value="option3">Aptitude</MenuItem>
    //             </TextField>
    //         </Box>
    //         <div className="grid grid-cols-2 gap-2">
    //             <Box
    //                 sx={{
    //                     width: "100%",
    //                     marginBottom: "30px",
    //                     display: "flex",
    //                     flexDirection: "column",
    //                     gap: 2,
    //                 }}
    //                 >
    //                 <Button
    //                     variant="contained"
    //                     sx={{
    //                         backgroundColor: "#0f766e",
    //                         color: "#fff",
    //                         fontWeight: "600",
    //                         // padding: "10px 24px",
    //                         height : "100%",
    //                         borderRadius: "12px",
    //                         textTransform: "none",
    //                         boxShadow: "0 4px 15px rgba(20, 184, 166, 0.4)",
    //                         transition: "all 0.3s ease",

    //                         "&:hover": {
    //                         background: "linear-gradient(135deg, #0f766e, #14b8a6)",
    //                         boxShadow: "0 6px 20px rgba(20, 184, 166, 0.6)",
    //                         transform: "translateY(-2px)",
    //                         },

    //                         "&:active": {
    //                         transform: "scale(0.97)",
    //                         },
    //                     }}
    //                     >
    //                     Apply now
    //                 </Button>
    //             </Box>

    //             <Box
    //                 sx={{
    //                     width: "100%",
    //                     marginBottom: "30px",
    //                     display: "flex",
    //                     flexDirection: "column",
    //                     gap: 2,
    //                 }}
    //                 >
    //                 <Button
    //                     variant="contained"
    //                     sx={{
    //                         backgroundColor: "transparent",
    //                         color: "#0f766e",
    //                         fontWeight: "700",
    //                         height: "100%",
    //                         borderRadius: "10px",
    //                         textTransform: "none",
    //                         border: "1px solid #0f766e",
    //                         transition: "all 0.25s ease",

    //                         "&:hover": {
    //                             backgroundColor: "rgba(15, 118, 110, 0.08)",
    //                             borderColor: "#0d9488",
    //                         },

    //                         "&:active": {
    //                             transform: "scale(0.96)",
    //                         },
    //                     }}
    //                     >
    //                     Reset
    //                 </Button>
    //             </Box>

    //         </div>
    //         {/* </div> */}
    //     </div>
    //     <div className="listSection mt-[40vh] grid grid-cols-3 mt-6 gap-8 pl-6 pr-6">
    //         {[1,2,3,4,5,6,7,8,9].map(el=>
    //         <Card
    //         sx={{
    //             maxWidth: 350,
    //             borderRadius: "16px",
    //             boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    //             overflow: "hidden"
    //         }}
    //         >
    //             {/* Banner Image */}
    //             <CardMedia
    //                 component="img"
    //                 height="180"
    //                 image="/banner.png"
    //                 alt="Exam Banner"
    //                 />

    //             {/* Content */}
    //             <CardContent>
    //                 {/* Title */}
    //                 <Typography variant="h6" fontWeight="bold" gutterBottom>
    //                 IIT JEE Full Test Series
    //                 </Typography>

    //                 {/* Description */}
    //                 <Typography variant="body2" color="text.secondary" gutterBottom>
    //                 Practice with real exam-level questions designed by top IIT coaches.
    //                 </Typography>

    //                 {/* Exam Pattern */}
    //                 <Typography
    //                 variant="body2"
    //                 sx={{
    //                     mt: 1,
    //                     mb: 2,
    //                     fontWeight: "500",
    //                     color: "#0f766e"
    //                 }}
    //                 >
    //                 Pattern: 90 Questions • 3 Hours • PCM
    //                 </Typography>

    //                 {/* Buttons */}
    //                 <Box
    //                 sx={{
    //                     display: "flex",
    //                     gap: 1,
    //                     justifyContent: "space-between"
    //                 }}
    //                 >
    //                 <Button
    //                     variant="outlined"
    //                     fullWidth
    //                     sx={{
    //                         borderRadius: "10px",
    //                         textTransform: "none",
    //                         fontWeight: "600"
    //                     }}
    //                     >
    //                     View More
    //                 </Button>

    //                 <Button
    //                     variant="contained"
    //                     fullWidth
    //                     sx={{
    //                         backgroundColor: "#0f766e",
    //                         borderRadius: "10px",
    //                         textTransform: "none",
    //                         fontWeight: "600",
    //                         "&:hover": {
    //                             backgroundColor: "#115e59"
    //                         }
    //                     }}
    //                     >
    //                     Buy Now
    //                 </Button>
    //                 </Box>
    //             </CardContent>
    //         </Card>
    // )}
    //     </div>
    // </div>

    
    <div className="bg-[#f8fafc] h-[90vh] overflow-scroll overflow-x-hidden">
        
  {/* 🔍 SEARCH BAR */}
    <div className=" top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
    
        <div className="max-w-7xl mx-auto p-4 flex items-center gap-4">

            {/* Search Field */}
            <div className="flex-1">
            <TextField
                placeholder="Search IIT JEE, NEET, teachers..."
                variant="outlined"
                fullWidth
                size="small"
                sx={{
                background: "#fff",
                borderRadius: "12px",
                }}
            />
            </div>

            {/* Button */}
            {/* <IconButton
            sx={{
                backgroundColor: "rgba(20, 184, 166, 0.1)",
                "&:hover": {
                backgroundColor: "rgba(20, 184, 166, 0.2)",
                }
            }}
            onClick={NavigateTOMyAcc}
            >
            <AccountCircleIcon sx={{ color: "#0f766e", fontSize: 32 }} />
            </IconButton> */}

        </div>

    </div>

  {/* 🎯 FILTER SECTION */}
  <div className=" top-[88px] left-0 w-full z-40 backdrop-blur-md bg-white/80 border-b border-gray-200">
    <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4 p-4">

      {filtersConfig.map((filter, i) => (
        <TextField
            key={i}
            select
            label={filter.label}
            fullWidth
            size="small"

            defaultValue=""
        >
            {filter.options.map((opt, idx) => (
            <MenuItem key={idx} value={opt.value}>
                {opt.label}
            </MenuItem>
            ))}
        </TextField>
        ))}

      {/* Buttons */}
      <div className="flex gap-2">
        <Button
          fullWidth
          variant="contained"
          sx={{
            borderRadius: "12px",
            textTransform: "none",
            fontWeight: 600,
            background: "linear-gradient(135deg, #14b8a6, #0f766e)",
            boxShadow: "0 6px 20px rgba(20,184,166,0.4)",
            "&:hover": {
              background: "linear-gradient(135deg, #0f766e, #115e59)"
            }
          }}
        >
          Apply
        </Button>

        <Button
          fullWidth
          variant="outlined"
          sx={{
            borderRadius: "12px",
            textTransform: "none",
            fontWeight: 600
          }}
        >
          Reset
        </Button>
      </div>

    </div>
  </div>

  {/* 📦 CARD SECTION */}
  <div className="max-w-7xl mx-auto pt-6 px-4 grid grid-cols-3 gap-8">

    {[1,2,3,4,5,6,7,8,9].map((el,index) => (
      <Card
        key={el}
        sx={{
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 12px 30px rgba(0,0,0,0.15)"
          }
        }}
      >
        {/* Banner */}
        <CardMedia
          component="img"
          height="180"
          image="/banner.png"
        />

        <CardContent>
          <Typography fontWeight={700} variant="h6">
            IIT JEE Mains {index+1}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Full syllabus mock tests curated by IIT experts.
          </Typography>

          <Typography sx={{ color: "#0f766e", mt: 1, mb: 2 }}>
            90 Questions • 3 Hours • PCM
          </Typography>

          <Typography sx={{ color: "#0f766e", mt: 1, mb: 2, fontSize: "1.6rem", fontWeight: "700" }}>
            Only ₹50/-
          </Typography>

          {/* Buttons */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="outlined"
              fullWidth
              sx={{ borderRadius: "10px", textTransform: "none" }}
              onClick={NavigateTOTestDetails}
            >
              View
            </Button>

            <Button
              variant="contained"
              fullWidth
              sx={{
                borderRadius: "10px",
                textTransform: "none",
                background: "linear-gradient(135deg, #14b8a6, #0f766e)"
              }}
            >
              Buy
            </Button>
          </Box>
        </CardContent>
      </Card>
    ))}

  </div>
</div>
  );
}
