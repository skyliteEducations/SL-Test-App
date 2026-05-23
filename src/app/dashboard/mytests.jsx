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

// export default function MyTests() {
//     const router = useRouter();

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

//     function NavigateTODesclaimer(){
//         router.push("/desclaimer")

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

//             {/* Button */}
//             {/* <IconButton
//             sx={{
//                 backgroundColor: "rgba(20, 184, 166, 0.1)",
//                 "&:hover": {
//                 backgroundColor: "rgba(20, 184, 166, 0.2)",
//                 }
//             }}
//             onClick={NavigateTOMyAcc}
//             >
//             <AccountCircleIcon sx={{ color: "#0f766e", fontSize: 32 }} />
//             </IconButton> */}

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

//     {[1,2,3,4,5,6,7,8,9].map((el,index) => (
//       <Card
//         key={el}
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

//           <Typography sx={{ color: "#0f766e", mt: 1, mb: 2 }}>
//             Exam Date - 10 March 2026, 10AM
//           </Typography>

//           <Typography sx={{ color: "#0f766e", mt: 1, mb: 2, fontSize: "1.6rem", fontWeight: "700" }}>
//             Purchased
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
//               onClick={NavigateTODesclaimer}
//             >
//               Start test
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
import TextField from "@mui/material/TextField";
import { Box, MenuItem, CardContent, CardMedia, Typography, Button, Card } from "@mui/material";
import { useRouter } from "next/navigation";
import { useScroll } from "framer-motion";
import { useState } from "react";

export default function MyTests() {
  const router = useRouter();
  const [type, setType] = useState('Unattempt')

  function switchToAttempt(){
    setType(type=> 'attempt')
  }
  function switchToUnAttempt(){
    setType(type=> 'Unattempt')
  }



  return (
    <div className="bg-[#f8fafc] min-h-screen overflow-x-hidden p-4">

      

    <div className="flex items-center gap-4">
        <button onClick={switchToAttempt} className={type == 'attempt' ? "relative z-10 mt-auto px-8 py-2 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-md font-bold shadow-lg  hover:shadow-2xl transition-all duration-300" : "relative z-10 mt-auto px-8 py-2 rounded-2xl border-2 border-teal-500 text-teal-600 text-lg font-bold bg-white hover:bg-teal-500 hover:text-white shadow-md hover:shadow-2xl transition-all duration-300"}>
            Attempted Tests
        </button>
        <button onClick={switchToUnAttempt} className={type == 'Unattempt' ? "relative z-10 mt-auto px-8 py-2 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-md font-bold shadow-lg  hover:shadow-2xl transition-all duration-300" : "relative z-10 mt-auto px-8 py-2 rounded-2xl border-2 border-teal-500 text-teal-600 text-lg font-bold bg-white hover:bg-teal-500 hover:text-white shadow-md hover:shadow-2xl transition-all duration-300"}>
            Unattempted Tests
        </button>
  </div>
  <hr className="my-6 border-0 h-[2px] bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full shadow-md" />

    {type == 'attempt' &&
    <div className="max-w-7xl mx-auto pt-6 px-3 md:px-4 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1,2,3,4,5,6,7,8,9,10].map((el, index) => (
          
          <Card
          key={el}
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "30px",
            background:
            "linear-gradient(145deg, rgba(255,255,255,0.96), rgba(248,250,252,0.95))",
            border: "1px solid rgba(20,184,166,0.12)",
            boxShadow: "0 10px 30px rgba(15,23,42,0.06)",
            transition: "all 0.35s ease",
            
            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow: "0 20px 50px rgba(15,23,42,0.12)"
            }
          }}
          >

            {/* top glow */}
            <Box
              sx={{
                position: "absolute",
                top: -60,
                right: -50,
                width: 180,
                height: 180,
                borderRadius: "999px",
                background:
                "linear-gradient(135deg, rgba(20,184,166,0.22), rgba(6,182,212,0.14))",
                filter: "blur(45px)"
              }}
              />

            {/* floating icon */}
            <Box
              sx={{
                position: "absolute",
                top: 22,
                right: 22,
                width: 46,
                height: 46,
                borderRadius: "16px",
                background: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(20,184,166,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(10px)",
                fontSize: "1.3rem"
              }}
              >
              ⚡
            </Box>

            <CardContent
              sx={{
                position: "relative",
                zIndex: 2,
                p: "24px !important"
              }}
              >

              {/* badge */}
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 1.8,
                  py: 0.8,
                  borderRadius: "999px",
                  background: "rgba(20,184,166,0.08)",
                  border: "1px solid rgba(20,184,166,0.12)"
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
                    color: "#0f766e",
                    fontWeight: 700,
                    fontSize: "0.78rem",
                    letterSpacing: "0.5px"
                  }}
                  >
                  PREMIUM MOCK TEST
                </Typography>
              </Box>

              {/* title */}
              <Typography
                sx={{
                  mt: 3,
                  fontSize: {
                    xs: "1.5rem",
                    md: "1.8rem"
                  },
                  fontWeight: 900,
                  color: "#0f172a",
                  lineHeight: 1.15
                }}
                >
                IIT JEE Mains {index + 1}
              </Typography>

              {/* subtitle */}
              <Typography
                sx={{
                  mt: 1.8,
                  color: "#64748b",
                  fontSize: "0.95rem",
                  lineHeight: 1.8
                }}
                >
                Full syllabus mock test with latest IIT JEE exam pattern and advanced analytics.
              </Typography>

              {/* stats row */}
              <Box
                sx={{
                  display: "flex",
                  gap: 1.5,
                  mt: 3,
                  flexWrap: "wrap"
                }}
                >

                {[
                  { label: "Questions", value: "90" },
                  { label: "Duration", value: "3H" },
                  { label: "Subject", value: "PCM" }
                ].map((item, i) => (
                  
                  <Box
                  key={i}
                  sx={{
                    flex: 1,
                    minWidth: "85px",
                    px: 1.5,
                    py: 1.2,
                    borderRadius: "18px",
                    background: "rgba(248,250,252,0.9)",
                    border: "1px solid rgba(148,163,184,0.12)"
                  }}
                  >
                    <Typography
                      sx={{
                        color: "#64748b",
                        fontSize: "0.72rem"
                      }}
                      >
                      {item.label}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 0.3,
                        fontWeight: 800,
                        fontSize: "1rem",
                        color: "#0f172a"
                      }}
                      >
                      {item.value}
                    </Typography>
                  </Box>

))}

              </Box>

              {/* purchase + date */}
              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 2,
                  flexWrap: "wrap"
                }}
                >

                <Box
                  sx={{
                    px: 1.8,
                    py: 0.8,
                    borderRadius: "999px",
                    background: "rgba(34,197,94,0.1)",
                    border: "1px solid rgba(34,197,94,0.12)"
                  }}
                  >
                  <Typography
                    sx={{
                      color: "#15803d",
                      fontWeight: 700,
                      fontSize: "0.85rem"
                    }}
                    >
                    Purchased ✓
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize: "0.82rem",
                    fontWeight: 600
                  }}
                  >
                  10 March 2026
                </Typography>

              </Box>

              {/* buttons */}
              <Box
                sx={{
                  display: "flex",
                  gap: 1.5,
                  mt: 3.5
                }}
                >

                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    borderRadius: "16px",
                    py: 1.2,
                    textTransform: "none",
                    fontWeight: 700,
                    borderColor: "rgba(20,184,166,0.25)",
                    color: "#0f766e",
                    
                    "&:hover": {
                      borderColor: "#14b8a6",
                      background: "rgba(20,184,166,0.05)"
                    }
                  }}
                  onClick={() => router.push("/test-details")}
                  >
                  View
                </Button>

                <Button
                  fullWidth
                  sx={{
                    borderRadius: "16px",
                    py: 1.2,
                    textTransform: "none",
                    fontWeight: 800,
                    color: "white",
                    background:
                    "linear-gradient(135deg,#14b8a6,#0891b2)",
                    
                    "&:hover": {
                      background:
                      "linear-gradient(135deg,#0f766e,#0e7490)"
                    }
                  }}
                  onClick={() => router.push("/desclaimer")}
                  >
                  Start →
                </Button>

              </Box>

            </CardContent>
          </Card>
        ))}
      </div>
      }


      {type == 'Unattempt' &&
    <div className="max-w-7xl mx-auto pt-6 px-3 md:px-4 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1,2].map((el, index) => (
          
          <Card
          key={el}
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "30px",
            background:
            "linear-gradient(145deg, rgba(255,255,255,0.96), rgba(248,250,252,0.95))",
            border: "1px solid rgba(20,184,166,0.12)",
            boxShadow: "0 10px 30px rgba(15,23,42,0.06)",
            transition: "all 0.35s ease",
            
            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow: "0 20px 50px rgba(15,23,42,0.12)"
            }
          }}
          >

            {/* top glow */}
            <Box
              sx={{
                position: "absolute",
                top: -60,
                right: -50,
                width: 180,
                height: 180,
                borderRadius: "999px",
                background:
                "linear-gradient(135deg, rgba(20,184,166,0.22), rgba(6,182,212,0.14))",
                filter: "blur(45px)"
              }}
              />

            {/* floating icon */}
            <Box
              sx={{
                position: "absolute",
                top: 22,
                right: 22,
                width: 46,
                height: 46,
                borderRadius: "16px",
                background: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(20,184,166,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(10px)",
                fontSize: "1.3rem"
              }}
              >
              ⚡
            </Box>

            <CardContent
              sx={{
                position: "relative",
                zIndex: 2,
                p: "24px !important"
              }}
              >

              {/* badge */}
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 1.8,
                  py: 0.8,
                  borderRadius: "999px",
                  background: "rgba(20,184,166,0.08)",
                  border: "1px solid rgba(20,184,166,0.12)"
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
                    color: "#0f766e",
                    fontWeight: 700,
                    fontSize: "0.78rem",
                    letterSpacing: "0.5px"
                  }}
                  >
                  PREMIUM MOCK TEST
                </Typography>
              </Box>

              {/* title */}
              <Typography
                sx={{
                  mt: 3,
                  fontSize: {
                    xs: "1.5rem",
                    md: "1.8rem"
                  },
                  fontWeight: 900,
                  color: "#0f172a",
                  lineHeight: 1.15
                }}
                >
                IIT JEE Mains {index + 1}
              </Typography>

              {/* subtitle */}
              <Typography
                sx={{
                  mt: 1.8,
                  color: "#64748b",
                  fontSize: "0.95rem",
                  lineHeight: 1.8
                }}
                >
                Full syllabus mock test with latest IIT JEE exam pattern and advanced analytics.
              </Typography>

              {/* stats row */}
              <Box
                sx={{
                  display: "flex",
                  gap: 1.5,
                  mt: 3,
                  flexWrap: "wrap"
                }}
                >

                {[
                  { label: "Questions", value: "90" },
                  { label: "Duration", value: "3H" },
                  { label: "Subject", value: "PCM" }
                ].map((item, i) => (
                  
                  <Box
                  key={i}
                  sx={{
                    flex: 1,
                    minWidth: "85px",
                    px: 1.5,
                    py: 1.2,
                    borderRadius: "18px",
                    background: "rgba(248,250,252,0.9)",
                    border: "1px solid rgba(148,163,184,0.12)"
                  }}
                  >
                    <Typography
                      sx={{
                        color: "#64748b",
                        fontSize: "0.72rem"
                      }}
                      >
                      {item.label}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 0.3,
                        fontWeight: 800,
                        fontSize: "1rem",
                        color: "#0f172a"
                      }}
                      >
                      {item.value}
                    </Typography>
                  </Box>

              ))}

              </Box>

              {/* purchase + date */}
              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 2,
                  flexWrap: "wrap"
                }}
                >

                <Box
                  sx={{
                    px: 1.8,
                    py: 0.8,
                    borderRadius: "999px",
                    background: "rgba(34,197,94,0.1)",
                    border: "1px solid rgba(34,197,94,0.12)"
                  }}
                  >
                  <Typography
                    sx={{
                      color: "#15803d",
                      fontWeight: 700,
                      fontSize: "0.85rem"
                    }}
                    >
                    Score &mdash; 120/300
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize: "0.82rem",
                    fontWeight: 600
                  }}
                  >
                  Solved on 12/09/2026
                </Typography>

              </Box>

              {/* buttons */}
              <Box
                sx={{
                  display: "flex",
                  gap: 1.5,
                  mt: 3.5
                }}
                >

                <Button
                  fullWidth
                  sx={{
                    borderRadius: "16px",
                    py: 1.2,
                    textTransform: "none",
                    fontWeight: 800,
                    color: "white",
                    background:
                    "linear-gradient(135deg,#14b8a6,#0891b2)",
                    
                    "&:hover": {
                      background:
                      "linear-gradient(135deg,#0f766e,#0e7490)"
                    }
                  }}
                  onClick={() => router.push("/CBT-Analysis")}
                  >
                  Complete SKYCBT Assessment
                </Button>

              </Box>

            </CardContent>
          </Card>
        ))}
      </div>
      }
    </div>
  );
}