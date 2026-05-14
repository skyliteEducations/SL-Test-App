// 'use client'
// import Image from "next/image";
// import TextField from "@mui/material/TextField";
// import { Box, MenuItem, ButtonCard,
//   CardContent,
//   CardMedia,
//   Typography,
//   Button,
//   Card,
//   IconButton
//  } from "@mui/material";
//  import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { useRouter } from "next/navigation";
// import { useContext } from "react";
// import { TestContext } from "@/contexts/test.context";
// import { useEffect } from "react";
// import { ConstructionOutlined } from "@mui/icons-material";

// export default function Tests() {
//   console.log("Component render hua?") 
//     const router = useRouter();
    

//     const {loadQuestionPaper,MathsTest, PhysicsTest, ChemistryTest, fullTest} = useContext(TestContext)
//     useEffect(el=>{
//       console.log("goes")
//       loadQuestionPaper()
//     }, [])

//     console.log(fullTest)


//     const filtersConfig = [
//   {
//     label: "Sort by",
//     key: "sort",
//     options: [
//       { label: "None", value: "" },
//       { label: "Price low to high", value: "low" },
//       { label: "Price high to low", value: "high" },
//       { label: "Most bought", value: "popular" },
//     ],
//   },
//   {
//     label: "Subject",
//     key: "subject",
//     options: [
//       { label: "None", value: "" },
//       { label: "Physics", value: "physics" },
//       { label: "Chemistry", value: "chemistry" },
//       { label: "Mathematics", value: "maths" },
//       { label: "Biology", value: "biology" },
//     ],
//   },
//   {
//     label: "Exam",
//     key: "exam",
//     options: [
//       { label: "None", value: "" },
//       { label: "IIT JEE Mains", value: "jee-mains" },
//       { label: "IIT JEE Advanced", value: "jee-adv" },
//       { label: "NEET", value: "neet" },
//       { label: "Aptitude", value: "aptitude" },
//     ],
//   },
// ];

//     function NavigateTOMyAcc(){
//         router.push("/account")

//     }
//     function NavigateTOTestDetails(){
//         router.push("/test-details")

//     }
//   return (
    
//     <div className="bg-[#f8fafc] h-[90vh] overflow-scroll overflow-x-hidden">
        
//   {/* 🔍 SEARCH BAR */}
//     <div className=" top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
    
//         <div className="max-w-7xl mx-auto p-4 flex items-center gap-4">

//             {/* Search Field */}
//             <div className="flex-1">
//             <TextField
//                 placeholder="Search IIT JEE, NEET, teachers..."
//                 variant="outlined"
//                 fullWidth
//                 size="small"
//                 sx={{
//                 background: "#fff",
//                 borderRadius: "12px",
//                 }}
//             />
//             </div>

           

//         </div>

//     </div>

//   {/* 🎯 FILTER SECTION */}
//   <div className=" top-[88px] left-0 w-full z-40 backdrop-blur-md bg-white/80 border-b border-gray-200">
//     <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4 p-4">

//       {filtersConfig.map((filter, i) => (
//         <TextField
//             key={i}
//             select
//             label={filter.label}
//             fullWidth
//             size="small"

//             defaultValue=""
//         >
//             {filter.options.map((opt, idx) => (
//             <MenuItem key={idx} value={opt.value}>
//                 {opt.label}
//             </MenuItem>
//             ))}
//         </TextField>
//         ))}

//       {/* Buttons */}
//       <div className="flex gap-2">
//         <Button
//           fullWidth
//           variant="contained"
//           sx={{
//             borderRadius: "12px",
//             textTransform: "none",
//             fontWeight: 600,
//             background: "linear-gradient(135deg, #14b8a6, #0f766e)",
//             boxShadow: "0 6px 20px rgba(20,184,166,0.4)",
//             "&:hover": {
//               background: "linear-gradient(135deg, #0f766e, #115e59)"
//             }
//           }}
//         >
//           Apply
//         </Button>

//         <Button
//           fullWidth
//           variant="outlined"
//           sx={{
//             borderRadius: "12px",
//             textTransform: "none",
//             fontWeight: 600
//           }}
//         >
//           Reset
//         </Button>
//       </div>

//     </div>
//   </div>

//   {/* 📦 CARD SECTION */}
//   <div className="max-w-7xl mx-auto pt-6 px-4 grid grid-cols-3 gap-8">

//     {fullTest?.map((el,index) => (
//       <Card
//         key={index}
//         sx={{
//           borderRadius: "18px",
//           overflow: "hidden",
//           boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
//           transition: "all 0.3s ease",
//           "&:hover": {
//             transform: "translateY(-8px)",
//             boxShadow: "0 12px 30px rgba(0,0,0,0.15)"
//           }
//         }}
//       >
//         {/* Banner */}
//         <CardMedia
//           component="img"
//           height="180"
//           image="/banner.png"
//         />

//         <CardContent>
//           <Typography fontWeight={700} variant="h6">
//             IIT JEE Mains {index+1}
//           </Typography>

//           <Typography variant="body2" color="text.secondary">
//             Full syllabus mock tests curated by IIT experts.
//           </Typography>

//           <Typography sx={{ color: "#0f766e", mt: 1, mb: 2 }}>
//             90 Questions • 3 Hours • PCM
//           </Typography>

//           <Typography sx={{ color: "#0f766e", mt: 1, mb: 2, fontSize: "1.6rem", fontWeight: "700" }}>
//             Only ₹XXX/-
//           </Typography>

//           {/* Buttons */}
//           <Box sx={{ display: "flex", gap: 1 }}>
//             <Button
//               variant="outlined"
//               fullWidth
//               sx={{ borderRadius: "10px", textTransform: "none" }}
//               onClick={NavigateTOTestDetails}
//             >
//               View
//             </Button>

//             <Button
//               variant="contained"
//               fullWidth
//               sx={{
//                 borderRadius: "10px",
//                 textTransform: "none",
//                 background: "linear-gradient(135deg, #14b8a6, #0f766e)"
//               }}
//             >
//               Buy
//             </Button>
//           </Box>
//         </CardContent>
//       </Card>
//     ))}

//   </div>
// </div>
//   );
// }
'use client'
import Image from "next/image";
import TextField from "@mui/material/TextField";
import { Box, MenuItem, CardContent, CardMedia, Typography, Button, Card } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { TestContext } from "@/contexts/test.context";

export default function Tests() {
  const router = useRouter();
  const { loadQuestionPaper, fullTest } = useContext(TestContext)
  
  useEffect(() => {
    loadQuestionPaper()
  }, [])

  const filtersConfig = [
    {
      label: "Sort by", key: "sort",
      options: [
        { label: "None", value: "" },
        { label: "Price low to high", value: "low" },
        { label: "Price high to low", value: "high" },
        { label: "Most bought", value: "popular" },
      ],
    },
    {
      label: "Subject", key: "subject",
      options: [
        { label: "None", value: "" },
        { label: "Physics", value: "physics" },
        { label: "Chemistry", value: "chemistry" },
        { label: "Mathematics", value: "maths" },
        { label: "Biology", value: "biology" },
      ],
    },
    {
      label: "Exam", key: "exam",
      options: [
        { label: "None", value: "" },
        { label: "IIT JEE Mains", value: "jee-mains" },
        { label: "IIT JEE Advanced", value: "jee-adv" },
        { label: "NEET", value: "neet" },
        { label: "Aptitude", value: "aptitude" },
      ],
    },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen overflow-x-hidden">

      {/* 🔍 SEARCH BAR */}
      <div className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto p-3 md:p-4">
          <TextField
            placeholder="Search IIT JEE, NEET, teachers..."
            variant="outlined"
            fullWidth
            size="small"
            sx={{ background: "#fff", borderRadius: "12px" }}
          />
        </div>
      </div>

      {/* 🎯 FILTER SECTION */}
      <div className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto p-3 md:p-4">
          
          {/* Large screen — sab ek line mein */}
          <div className="hidden md:flex gap-3 items-center">
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

            {/* Buttons same line pe */}
            <Button
              variant="contained"
              sx={{
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 600,
                whiteSpace: "nowrap",
                minWidth: "90px",
                background: "linear-gradient(135deg, #14b8a6, #0f766e)",
                boxShadow: "0 6px 20px rgba(20,184,166,0.4)",
                "&:hover": { background: "linear-gradient(135deg, #0f766e, #115e59)" }
              }}
            >
              Apply
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 600,
                whiteSpace: "nowrap",
                minWidth: "80px",
              }}
            >
              Reset
            </Button>
          </div>

          {/* Small screen — inputs upar, buttons neeche */}
          <div className="flex md:hidden flex-col gap-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
            </div>

            {/* Buttons neeche full width */}
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
                  "&:hover": { background: "linear-gradient(135deg, #0f766e, #115e59)" }
                }}
              >
                Apply
              </Button>
              <Button
                fullWidth
                variant="outlined"
                sx={{ borderRadius: "12px", textTransform: "none", fontWeight: 600 }}
              >
                Reset
              </Button>
            </div>
          </div>

        </div>
      </div>
      {/* 📦 CARD SECTION */}
      {/* 1 col mobile → 2 col sm → 3 col lg */}
      <div className="max-w-7xl mx-auto pt-6 px-3 md:px-4 pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {fullTest?.map((el, index) => (
          <Card
            key={index}
            sx={{
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.15)"
              }
            }}
          >
            <CardMedia
              component="img"
              height="160"
              image="/banner.png"
            />
            <CardContent>
              <Typography fontWeight={700} variant="h6" fontSize={{ xs: "1rem", md: "1.25rem" }}>
                IIT JEE Mains {index + 1}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Full syllabus mock tests curated by IIT experts.
              </Typography>

              <Typography sx={{ color: "#0f766e", mt: 1 }} fontSize="0.85rem">
                90 Questions • 3 Hours • PCM
              </Typography>

              <Typography sx={{ color: "#0f766e", mt: 1, mb: 2, fontSize: "1.4rem", fontWeight: "700" }}>
                Only ₹XXX/-
              </Typography>

              <Box sx={{ display: "flex", gap: 1 }}>
                <Button
                  variant="outlined"
                  fullWidth
                  size="small"
                  sx={{ borderRadius: "10px", textTransform: "none" }}
                  onClick={() => router.push("/test-details")}
                >
                  View
                </Button>
                <Button
                  variant="contained"
                  fullWidth
                  size="small"
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