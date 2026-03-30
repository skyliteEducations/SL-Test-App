// 'use client'
// import Image from "next/image";
// import { useState } from "react";

// function Portal(){
//     return(
//         <div className="w-full h-[100vh] grid grid-cols-12">
//             <div className="col-span-9 w-full h-[100vh] bg-[#f7f7f7]">
//                 <div className="h-[10vh] w-full bg-teal-700 flex items-center justify-between px-6">
//                     <div className="flex items-center justify-center gap-4">
//                         <h1 className="text-white text-lg md:text-xl font-semibold">
//                             IIT JEE EXAM 09
//                         </h1>

//                         {/* Right - Timer */}
//                         <div className="text-white text-sm md:text-base font-medium bg-teal-600 px-4 py-1 rounded-lg">
//                             Time Left: 01:30:00
//                         </div>
//                     </div>
//                     <div className="flex items-center justify-center gap-4">
//                         <button className="cursor-pointer px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600">
//                             Physics
//                         </button>

//                         <button className="cursor-pointer px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600">
//                             Chemsitry
//                         </button>

//                         <button className="cursor-pointer px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600">
//                             Maths
//                         </button>
//                     </div>

//                 </div>
//                 <div className="h-[80vh] w-full bg-white  grid grid-cols-10">
//                     <div className="questionArea bg-[#e7e7e750] col-span-7 w-full h-full flex flex-col items-center justify-center">
//                         <div className="relative w-[100%] h-full rounded-lg overflow-hidden">
//                             <Image
//                                 src="/question.png"
//                                 fill
//                                 alt="question"
//                                 className="object-contain"
//                             />
//                         </div>
                        
//                     </div>
//                     <div className="optionArea col-span-3 p-4 flex flex-col items-start gap-2">
//                         <h2 className="text-black font-bold mb-4">Choose correct answer</h2>

//                         {[1,2,3,4].map((el,index)=>(
//                             <button 
//                                 key={index}
//                                 className="w-full text-left p-2 border text-black cursor-pointer rounded mb-2 hover:bg-teal-100"
//                             >
//                                 ● Option {index+1}
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="h-[10vh] w-full bg-teal-700 flex items-center justify-between px-6">
  
//                 {/* Left Side Buttons */}
//                 <div className="flex gap-3">
//                     <button className="cursor-pointer bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-500 transition">
//                     Mark for Review
//                     </button>

//                     <button className="cursor-pointer bg-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-600 transition">
//                     Save & Mark for Review
//                     </button>
//                 </div>

//                 {/* Right Side Button */}
//                 <button className="cursor-pointer bg-teal-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-teal-600 transition">
//                     Save & Next →
//                 </button>

//                 </div>
//             </div>
//             <div className="col-span-3 w-full h-[100vh] bg-[#f7f7f7]">
//                 <div className="h-[10vh] bg-teal-700 w-full border-l border-[#f7f7f7] flex items-center justify-center ">
//                     <p className="" >Name - Gursimran kaur</p>
//                 </div>
//                 <div className="h-[80vh] w-full flex p-4 gap-4 flex-col overflow-scroll overflow-x-auto">
//                     <div className="questionOverview flex items-center gap-4 flex-wrap p-3 bg-white rounded shadow-sm">
                        
//                         {/* Not Visited */}
//                         <div className="flex items-center gap-2">
//                             <div className="w-6 h-6 flex items-center justify-center text-xs border rounded bg-gray-100 text-black">
//                                 89
//                             </div>
//                             <span className="text-sm text-gray-700">Not Visited</span>
//                         </div>

//                         {/* Not Answered */}
//                         <div className="flex items-center gap-2">
//                             <div className="w-6 h-6 flex items-center justify-center text-xs rounded bg-orange-500 text-white">
//                                 1
//                             </div>
//                             <span className="text-sm text-gray-700">Not Answered</span>
//                         </div>

//                         {/* Answered */}
//                         <div className="flex items-center gap-2">
//                             <div className="w-6 h-6 flex items-center justify-center text-xs rounded bg-green-500 text-white">
//                                 0
//                             </div>
//                             <span className="text-sm text-gray-700">Answered</span>
//                         </div>

//                         {/* Marked for Review */}
//                         <div className="flex items-center gap-2">
//                             <div className="w-6 h-6 flex items-center justify-center text-xs rounded bg-purple-600 text-white">
//                                 0
//                             </div>
//                             <span className="text-sm text-gray-700">Marked for Review</span>
//                         </div>

//                         {/* Answered & Marked */}
//                         <div className="flex items-center gap-2">
//                             <div className="w-6 h-6 flex items-center justify-center text-xs rounded bg-purple-700 text-white relative">
//                                 0
//                                 <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
//                             </div>
//                             <span className="text-sm text-gray-700">
//                                 Answered & Marked for Review
//                                 <span className="text-xs text-gray-500 block">
//                                     (will be considered for evaluation)
//                                 </span>
//                             </span>
//                         </div>

//                     </div>
//                     <h2 className="text-black font-bold mb-4">Questions panel</h2>
//                     {["Physics", "Chemistry", "Mathametics"].map((section,index) => (
//                         <div key={section} className="mb-4">
                            
//                             {/* Section Title */}
//                             <h3 className="font-semibold mb-2 text-black">
//                                 {section}
//                             </h3>

//                             {/* Question Boxes */}
//                             <div className="grid grid-cols-5 gap-2">
//                                 {Array.from({ length: 30 }).map((_, index) => (
//                                     <div
//                                         key={index}
//                                         className="w-10 h-10 flex items-center justify-center border border-teal-500 rounded cursor-pointer hover:bg-teal-100 text-teal-600 font-bold"
//                                     >
//                                         {index + 1}
//                                     </div>
//                                 ))}
//                                 <hr className="col-span-5 border-0 h-[2px] bg-gradient-to-r from-transparent via-teal-500 to-transparent  mt-8" />
//                             </div>

//                         </div>
//                     ))}
//                 </div>
//                 <div className="h-[10vh] w-full bg-teal-700 border-l border-[#f7f7f7] flex items-center justify-center">
//                     <button className="cursor-pointer bg-teal-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-teal-600 transition">
//                     Submit
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }


// export default Portal

// 'use client'
// import Image from "next/image";
// import { useState } from "react";

// function Portal() {
//   const [activeSection, setActiveSection] = useState("Physics");
//   const [showPanel, setShowPanel] = useState(false);
//   const [currentQuestion, setCurrentQuestion] = useState(1);

//   const sections = ["Physics", "Chemistry", "Mathematics"];

//   return (
//     <div className="w-full min-h-screen flex flex-col lg:grid lg:grid-cols-12 bg-[#f7f7f7]">

//       {/* ── MAIN AREA ── */}
//       <div className="flex flex-col w-full lg:col-span-9 min-h-screen">

//         {/* TOP NAVBAR */}
//         <div className="h-auto min-h-[60px] lg:h-[10vh] w-full bg-teal-700 flex flex-wrap items-center justify-between px-3 py-2 gap-2">
//           <div className="flex items-center gap-2 flex-wrap">
//             <h1 className="text-white text-base md:text-xl font-semibold">IIT JEE EXAM 09</h1>
//             <div className="text-white text-xs md:text-sm font-medium bg-teal-600 px-3 py-1 rounded-lg">
//               Time Left: 01:30:00
//             </div>
//           </div>

//           {/* Subject Tabs */}
//           <div className="flex items-center gap-2 flex-wrap">
//             {sections.map((s) => (
//               <button
//                 key={s}
//                 onClick={() => setActiveSection(s)}
//                 className={`cursor-pointer px-3 py-1.5 text-sm rounded transition font-medium ${
//                   activeSection === s
//                     ? "bg-white text-teal-700"
//                     : "bg-teal-500 text-white hover:bg-teal-600"
//                 }`}
//               >
//                 {s}
//               </button>
//             ))}
//             {/* Mobile panel toggle */}
//             <button
//               className="lg:hidden cursor-pointer bg-teal-500 text-white px-3 py-1.5 text-sm rounded hover:bg-teal-600 transition"
//               onClick={() => setShowPanel(true)}
//             >
//               📋 Panel
//             </button>
//           </div>
//         </div>

//         {/* QUESTION + OPTIONS */}
//         <div className="flex-1 w-full bg-white flex flex-col lg:grid lg:grid-cols-10">

//           {/* Question Image — full width on mobile */}
//           <div className="questionArea bg-[#e7e7e750] col-span-7 w-full flex items-center justify-center p-2 min-h-[50vw] lg:min-h-0 lg:h-full">
//             <div className="relative w-full h-[55vw] sm:h-[45vw] lg:h-full rounded-lg overflow-hidden">
//               <Image
//                 src="/question.png"
//                 fill
//                 alt="question"
//                 className="object-contain"
//                 priority
//               />
//             </div>
//           </div>

//           {/* Options */}
//           <div className="optionArea col-span-3 p-4 flex flex-col items-start gap-2 border-t lg:border-t-0 lg:border-l border-gray-200">
//             <h2 className="text-black font-bold mb-2 text-sm lg:text-base">Choose correct answer</h2>
//             {[1, 2, 3, 4].map((_, index) => (
//               <button
//                 key={index}
//                 className="w-full text-left p-2 border text-black text-sm cursor-pointer rounded mb-1 hover:bg-teal-100 transition"
//               >
//                 ● Option {index + 1}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* BOTTOM ACTION BAR */}
//         <div className="h-auto min-h-[60px] lg:h-[10vh] w-full bg-teal-700 flex flex-wrap items-center justify-between px-3 py-2 gap-2">
//           <div className="flex gap-2 flex-wrap">
//             <button className="cursor-pointer bg-yellow-400 text-black px-3 py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-yellow-500 transition">
//               Mark for Review
//             </button>
//             <button className="cursor-pointer bg-purple-500 text-white px-3 py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-purple-600 transition">
//               Save & Mark for Review
//             </button>
//           </div>
//           <button className="cursor-pointer bg-teal-500 text-white px-4 py-2 rounded-lg text-xs md:text-sm font-semibold hover:bg-teal-600 transition">
//             Save & Next →
//           </button>
//         </div>
//       </div>

//       {/* ── SIDE PANEL (desktop always visible, mobile as overlay) ── */}

//       {/* Mobile Overlay Backdrop */}
//       {showPanel && (
//         <div
//           className="fixed inset-0 bg-black/50 z-40 lg:hidden"
//           onClick={() => setShowPanel(false)}
//         />
//       )}

//       <div
//         className={`
//           fixed top-0 right-0 h-full w-[85vw] max-w-[340px] z-50 flex flex-col bg-[#f7f7f7] shadow-2xl transition-transform duration-300
//           ${showPanel ? "translate-x-0" : "translate-x-full"}
//           lg:static lg:translate-x-0 lg:w-full lg:max-w-none lg:col-span-3 lg:h-screen lg:flex lg:shadow-none
//         `}
//       >
//         {/* Panel Header */}
//         <div className="h-[60px] lg:h-[10vh] bg-teal-700 w-full border-l border-[#f7f7f7] flex items-center justify-between px-4">
//           <p className="text-white text-sm font-medium">Name — Gursimran Kaur</p>
//           <button
//             className="lg:hidden text-white text-xl leading-none"
//             onClick={() => setShowPanel(false)}
//           >
//             ✕
//           </button>
//         </div>

//         {/* Panel Body */}
//         <div className="flex-1 w-full flex flex-col p-3 gap-3 overflow-y-auto overflow-x-hidden">

//           {/* Legend */}
//           <div className="questionOverview flex flex-wrap items-center gap-3 p-3 bg-white rounded shadow-sm">
//             {[
//               { bg: "bg-gray-100 text-black border", count: 89, label: "Not Visited" },
//               { bg: "bg-orange-500 text-white", count: 1, label: "Not Answered" },
//               { bg: "bg-green-500 text-white", count: 0, label: "Answered" },
//               { bg: "bg-purple-600 text-white", count: 0, label: "Marked for Review" },
//             ].map(({ bg, count, label }) => (
//               <div key={label} className="flex items-center gap-1.5">
//                 <div className={`w-6 h-6 flex items-center justify-center text-xs rounded ${bg} shrink-0`}>
//                   {count}
//                 </div>
//                 <span className="text-xs text-gray-700">{label}</span>
//               </div>
//             ))}
//             <div className="flex items-center gap-1.5">
//               <div className="w-6 h-6 flex items-center justify-center text-xs rounded bg-purple-700 text-white relative shrink-0">
//                 0
//                 <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
//               </div>
//               <span className="text-xs text-gray-700">
//                 Answered & Marked
//                 <span className="text-[10px] text-gray-500 block">(considered for evaluation)</span>
//               </span>
//             </div>
//           </div>

//           <h2 className="text-black font-bold text-sm">Questions Panel</h2>

//           {/* Questions per section */}
//           {sections.map((section) => (
//             <div key={section} className="mb-2">
//               <h3 className="font-semibold mb-2 text-black text-sm">{section}</h3>
//               <div className="grid grid-cols-5 gap-1.5">
//                 {Array.from({ length: 30 }).map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentQuestion(index + 1)}
//                     className={`w-9 h-9 flex items-center justify-center border rounded cursor-pointer text-xs font-bold transition ${
//                       currentQuestion === index + 1
//                         ? "bg-teal-600 text-white border-teal-600"
//                         : "border-teal-500 text-teal-600 hover:bg-teal-100"
//                     }`}
//                   >
//                     {index + 1}
//                   </button>
//                 ))}
//               </div>
//               <hr className="mt-4 border-0 h-[2px] bg-gradient-to-r from-transparent via-teal-400 to-transparent" />
//             </div>
//           ))}
//         </div>

//         {/* Submit */}
//         <div className="h-[60px] lg:h-[10vh] w-full bg-teal-700 border-l border-[#f7f7f7] flex items-center justify-center">
//           <button className="cursor-pointer bg-teal-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-600 transition text-sm">
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Portal;

// 'use client'
// import Image from "next/image";
// import { useState, useRef, useEffect, useCallback } from "react";

// /* ── Pinch-zoom + double-tap fullscreen image viewer ── */
// function ZoomableImage({ src, alt }) {
//   const containerRef = useRef(null);
//   const [scale, setScale] = useState(1);
//   const [offset, setOffset] = useState({ x: 0, y: 0 });
//   const [isFullscreen, setIsFullscreen] = useState(false);

//   const lastTap = useRef(0);
//   const lastDist = useRef(null);
//   const lastOffset = useRef({ x: 0, y: 0 });
//   const startTouches = useRef(null);

//   const clampOffset = useCallback((ox, oy, sc) => {
//     const el = containerRef.current;
//     if (!el) return { x: ox, y: oy };
//     const maxX = Math.max(0, (el.offsetWidth * (sc - 1)) / 2);
//     const maxY = Math.max(0, (el.offsetHeight * (sc - 1)) / 2);
//     return {
//       x: Math.min(maxX, Math.max(-maxX, ox)),
//       y: Math.min(maxY, Math.max(-maxY, oy)),
//     };
//   }, []);

//   const reset = () => { setScale(1); setOffset({ x: 0, y: 0 }); };

//   const handleTouchStart = (e) => {
//     if (e.touches.length === 2) {
//       const dx = e.touches[0].clientX - e.touches[1].clientX;
//       const dy = e.touches[0].clientY - e.touches[1].clientY;
//       lastDist.current = Math.hypot(dx, dy);
//     } else if (e.touches.length === 1) {
//       lastDist.current = null;
//       lastOffset.current = { ...offset };
//       startTouches.current = [{ clientX: e.touches[0].clientX, clientY: e.touches[0].clientY }];
//     }
//   };

//   const handleTouchMove = (e) => {
//     e.preventDefault();
//     if (e.touches.length === 2 && lastDist.current) {
//       const dx = e.touches[0].clientX - e.touches[1].clientX;
//       const dy = e.touches[0].clientY - e.touches[1].clientY;
//       const dist = Math.hypot(dx, dy);
//       const newScale = Math.min(5, Math.max(1, scale * (dist / lastDist.current)));
//       setScale(newScale);
//       setOffset(clampOffset(offset.x, offset.y, newScale));
//       lastDist.current = dist;
//     } else if (e.touches.length === 1 && scale > 1 && startTouches.current) {
//       const dx = e.touches[0].clientX - startTouches.current[0].clientX;
//       const dy = e.touches[0].clientY - startTouches.current[0].clientY;
//       setOffset(clampOffset(lastOffset.current.x + dx, lastOffset.current.y + dy, scale));
//     }
//   };

//   const handleTouchEnd = (e) => {
//     if (e.changedTouches.length === 1 && e.touches.length === 0) {
//       const now = Date.now();
//       if (now - lastTap.current < 280) {
//         scale > 1 ? reset() : setIsFullscreen(true);
//       }
//       lastTap.current = now;
//     }
//     if (scale < 1.05) reset();
//   };

//   if (isFullscreen) {
//     return (
//       <div
//         style={{
//           position: "fixed", inset: 0, background: "#000", zIndex: 9999,
//           display: "flex", alignItems: "center", justifyContent: "center",
//         }}
//         onClick={() => { setIsFullscreen(false); reset(); }}
//       >
//         <div style={{ position: "relative", width: "100%", height: "100%" }}>
//           <Image src={src} alt={alt} fill style={{ objectFit: "contain" }} priority />
//         </div>
//         <div style={{
//           position: "absolute", top: 16, right: 16, background: "rgba(255,255,255,0.18)",
//           color: "#fff", borderRadius: 8, padding: "6px 14px", fontSize: 13, cursor: "pointer",
//         }}>✕ Close</div>
//         <div style={{
//           position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)",
//           background: "rgba(255,255,255,0.12)", color: "#fff", borderRadius: 8,
//           padding: "6px 14px", fontSize: 12,
//         }}>Tap anywhere to close</div>
//       </div>
//     );
//   }

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         width: "100%", height: "100%", overflow: "hidden",
//         touchAction: "none", userSelect: "none", position: "relative",
//         background: "#e7f7f5", borderRadius: 8,
//         display: "flex", alignItems: "center", justifyContent: "center",
//       }}
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       <div style={{
//         transform: `scale(${scale}) translate(${offset.x / scale}px, ${offset.y / scale}px)`,
//         transformOrigin: "center center",
//         transition: scale === 1 ? "transform 0.2s ease" : "none",
//         width: "100%", height: "100%", position: "relative",
//       }}>
//         <Image src={src} alt={alt} fill style={{ objectFit: "contain" }} priority />
//       </div>

//       {scale === 1 && (
//         <div style={{
//           position: "absolute", bottom: 10, right: 10,
//           background: "rgba(0,0,0,0.45)", color: "#fff",
//           borderRadius: 20, padding: "4px 10px", fontSize: 11, pointerEvents: "none",
//         }}>
//           Pinch to zoom · Double-tap for fullscreen
//         </div>
//       )}
//       {scale > 1.05 && (
//         <button
//           onTouchEnd={(e) => { e.stopPropagation(); reset(); }}
//           style={{
//             position: "absolute", top: 10, right: 10, background: "rgba(0,0,0,0.5)",
//             color: "#fff", borderRadius: 20, padding: "4px 12px",
//             fontSize: 12, border: "none", cursor: "pointer",
//           }}
//         >Reset</button>
//       )}
//     </div>
//   );
// }

// /* ── Main Portal ── */
// export default function Portal() {
//   const [activeSection, setActiveSection] = useState("Physics");
//   const [showPanel, setShowPanel] = useState(false);
//   const [currentQuestion, setCurrentQuestion] = useState(1);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);

//   const sections = ["Physics", "Chemistry", "Mathematics"];

//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 1024);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);

//   /* ── MOBILE LAYOUT ── */
//   if (isMobile) {
//     return (
//       <div style={{ width: "100%", minHeight: "100vh", background: "#f7f7f7", display: "flex", flexDirection: "column", fontFamily: "sans-serif" }}>

//         {/* Top bar */}
//         <div style={{ background: "#0f766e", padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
//           <div>
//             <div style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>IIT JEE EXAM 09</div>
//             <div style={{ color: "#99f6e4", fontSize: 12 }}>Q{currentQuestion} · {activeSection}</div>
//           </div>
//           <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//             <div style={{ background: "#0d9488", color: "#fff", borderRadius: 8, padding: "5px 12px", fontSize: 13, fontWeight: 600 }}>
//               ⏱ 01:30:00
//             </div>
//             <button
//               onClick={() => setShowPanel(true)}
//               style={{ background: "#0d9488", color: "#fff", border: "none", borderRadius: 8, padding: "7px 13px", fontSize: 14, cursor: "pointer" }}
//             >📋</button>
//           </div>
//         </div>

//         {/* Section tabs */}
//         <div style={{ display: "flex", background: "#134e4a", padding: "6px 10px", gap: 8, overflowX: "auto" }}>
//           {sections.map(s => (
//             <button
//               key={s}
//               onClick={() => setActiveSection(s)}
//               style={{
//                 padding: "6px 18px", borderRadius: 20, border: "none", cursor: "pointer",
//                 fontSize: 13, fontWeight: 600, whiteSpace: "nowrap",
//                 background: activeSection === s ? "#fff" : "transparent",
//                 color: activeSection === s ? "#0f766e" : "#99f6e4",
//               }}
//             >{s}</button>
//           ))}
//         </div>

//         {/* ── QUESTION IMAGE — hero zone ── */}
//         <div style={{
//           width: "100%",
//           height: "62vw",
//           maxHeight: 370,
//           minHeight: 200,
//           background: "#e7f7f5",
//           position: "relative",
//           flexShrink: 0,
//         }}>
//           <ZoomableImage src="/question.png" alt="Question" />
//         </div>

//         {/* Options */}
//         <div style={{ padding: "14px 14px 110px 14px", flex: 1 }}>
//           <p style={{ fontWeight: 700, color: "#134e4a", marginBottom: 12, fontSize: 15, margin: "0 0 12px" }}>
//             Choose the correct answer
//           </p>
//           <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//             {["A", "B", "C", "D"].map((opt, i) => (
//               <button
//                 key={opt}
//                 onClick={() => setSelectedOption(i)}
//                 style={{
//                   display: "flex", alignItems: "center", gap: 12,
//                   padding: "12px 14px", borderRadius: 10, cursor: "pointer",
//                   textAlign: "left", fontSize: 14,
//                   background: selectedOption === i ? "#ccfbf1" : "#fff",
//                   outline: selectedOption === i ? "2px solid #0f766e" : "1px solid #d1d5db",
//                   border: "none",
//                   color: "#134e4a", fontWeight: selectedOption === i ? 700 : 400,
//                   transition: "all 0.15s",
//                 }}
//               >
//                 <span style={{
//                   width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   background: selectedOption === i ? "#0f766e" : "#e7f7f5",
//                   color: selectedOption === i ? "#fff" : "#0f766e",
//                   fontWeight: 700, fontSize: 13,
//                 }}>{opt}</span>
//                 Option {i + 1}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* ── FLOATING ACTION BAR ── */}
//         <div style={{
//           position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100,
//           background: "#0f766e",
//           padding: "10px 12px calc(10px + env(safe-area-inset-bottom)) 12px",
//           display: "flex", gap: 8, alignItems: "center",
//           boxShadow: "0 -4px 20px rgba(0,0,0,0.2)",
//         }}>
//           <button style={{
//             flex: 1, padding: "11px 0", borderRadius: 10, border: "none",
//             background: "#facc15", color: "#78350f", fontWeight: 700, fontSize: 12, cursor: "pointer",
//           }}>Mark Review</button>
//           <button style={{
//             flex: 1, padding: "11px 0", borderRadius: 10, border: "none",
//             background: "#a855f7", color: "#fff", fontWeight: 700, fontSize: 12, cursor: "pointer",
//           }}>Save & Mark</button>
//           <button style={{
//             flex: 2, padding: "11px 0", borderRadius: 10, border: "none",
//             background: "#fff", color: "#0f766e", fontWeight: 800, fontSize: 14, cursor: "pointer",
//           }}>Save & Next →</button>
//         </div>

//         {/* Panel backdrop */}
//         {showPanel && (
//           <div
//             style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200 }}
//             onClick={() => setShowPanel(false)}
//           />
//         )}

//         {/* ── SIDE DRAWER PANEL ── */}
//         <div style={{
//           position: "fixed", top: 0, right: 0, bottom: 0,
//           width: "82vw", maxWidth: 320,
//           background: "#f7f7f7", zIndex: 201, display: "flex", flexDirection: "column",
//           transform: showPanel ? "translateX(0)" : "translateX(100%)",
//           transition: "transform 0.28s cubic-bezier(.4,0,.2,1)",
//           boxShadow: "-6px 0 24px rgba(0,0,0,0.2)",
//         }}>
//           <div style={{ background: "#0f766e", padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//             <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>Gursimran Kaur</span>
//             <button onClick={() => setShowPanel(false)} style={{ background: "none", border: "none", color: "#fff", fontSize: 22, cursor: "pointer", lineHeight: 1 }}>✕</button>
//           </div>

//           <div style={{ padding: "10px", background: "#fff", margin: 10, borderRadius: 10, display: "flex", flexWrap: "wrap", gap: 8 }}>
//             {[
//               { bg: "#e5e7eb", text: "#374151", count: 89, label: "Not Visited" },
//               { bg: "#f97316", text: "#fff", count: 1, label: "Not Answered" },
//               { bg: "#22c55e", text: "#fff", count: 0, label: "Answered" },
//               { bg: "#9333ea", text: "#fff", count: 0, label: "Marked" },
//             ].map(({ bg, text, count, label }) => (
//               <div key={label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
//                 <div style={{ width: 24, height: 24, borderRadius: 6, background: bg, color: text, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700 }}>{count}</div>
//                 <span style={{ fontSize: 11, color: "#4b5563" }}>{label}</span>
//               </div>
//             ))}
//           </div>

//           <div style={{ flex: 1, overflowY: "auto", padding: "0 10px 10px" }}>
//             {sections.map(section => (
//               <div key={section} style={{ marginBottom: 16 }}>
//                 <p style={{ fontWeight: 700, color: "#0f766e", fontSize: 13, margin: "10px 0 8px" }}>{section}</p>
//                 <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6 }}>
//                   {Array.from({ length: 30 }).map((_, i) => (
//                     <button
//                       key={i}
//                       onClick={() => { setCurrentQuestion(i + 1); setShowPanel(false); }}
//                       style={{
//                         height: 36, borderRadius: 8, border: "none", cursor: "pointer",
//                         fontSize: 13, fontWeight: 700,
//                         background: currentQuestion === i + 1 ? "#0f766e" : "#e7f7f5",
//                         color: currentQuestion === i + 1 ? "#fff" : "#0f766e",
//                       }}
//                     >{i + 1}</button>
//                   ))}
//                 </div>
//                 <hr style={{ margin: "14px 0 0", border: "none", borderTop: "1.5px solid #99f6e4" }} />
//               </div>
//             ))}
//           </div>

//           <div style={{ padding: "12px 16px", background: "#0f766e" }}>
//             <button style={{
//               width: "100%", padding: "13px", borderRadius: 10, border: "none",
//               background: "#fff", color: "#0f766e", fontWeight: 800, fontSize: 15, cursor: "pointer",
//             }}>Submit Exam</button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   /* ── DESKTOP LAYOUT (unchanged) ── */
//   return (
//     <div className="w-full h-[100vh] grid grid-cols-12">
//       <div className="col-span-9 w-full h-[100vh] bg-[#f7f7f7]">
//         <div className="h-[10vh] w-full bg-teal-700 flex items-center justify-between px-6">
//           <div className="flex items-center justify-center gap-4">
//             <h1 className="text-white text-lg md:text-xl font-semibold">IIT JEE EXAM 09</h1>
//             <div className="text-white text-sm md:text-base font-medium bg-teal-600 px-4 py-1 rounded-lg">
//               Time Left: 01:30:00
//             </div>
//           </div>
//           <div className="flex items-center justify-center gap-4">
//             {sections.map(s => (
//               <button
//                 key={s}
//                 onClick={() => setActiveSection(s)}
//                 className={`cursor-pointer px-4 py-2 rounded transition font-medium ${activeSection === s ? "bg-white text-teal-700" : "bg-teal-500 text-white hover:bg-teal-600"}`}
//               >{s}</button>
//             ))}
//           </div>
//         </div>

//         <div className="h-[80vh] w-full bg-white grid grid-cols-10">
//           <div className="col-span-7 w-full h-full bg-[#e7e7e750] p-3">
//             <div className="relative w-full h-full rounded-lg overflow-hidden">
//               <ZoomableImage src="/question.png" alt="question" />
//             </div>
//           </div>
//           <div className="col-span-3 p-4 flex flex-col items-start gap-2 border-l border-gray-100">
//             <h2 className="text-black font-bold mb-4">Choose correct answer</h2>
//             {["A", "B", "C", "D"].map((opt, index) => (
//               <button
//                 key={opt}
//                 onClick={() => setSelectedOption(index)}
//                 className={`w-full text-left p-3 rounded-lg mb-1 cursor-pointer transition flex items-center gap-3 border ${
//                   selectedOption === index
//                     ? "bg-teal-50 border-teal-500 font-semibold text-teal-800"
//                     : "border-gray-200 text-black hover:bg-teal-50"
//                 }`}
//               >
//                 <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${selectedOption === index ? "bg-teal-600 text-white" : "bg-teal-100 text-teal-700"}`}>{opt}</span>
//                 Option {index + 1}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="h-[10vh] w-full bg-teal-700 flex items-center justify-between px-6">
//           <div className="flex gap-3">
//             <button className="cursor-pointer bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-500 transition">Mark for Review</button>
//             <button className="cursor-pointer bg-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-600 transition">Save & Mark for Review</button>
//           </div>
//           <button className="cursor-pointer bg-teal-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-teal-600 transition">Save & Next →</button>
//         </div>
//       </div>

//       <div className="col-span-3 w-full h-[100vh] bg-[#f7f7f7]">
//         <div className="h-[10vh] bg-teal-700 w-full border-l border-[#f7f7f7] flex items-center justify-center">
//           <p className="text-white font-medium">Name — Gursimran Kaur</p>
//         </div>
//         <div className="h-[80vh] w-full flex p-4 gap-4 flex-col overflow-y-auto overflow-x-hidden">
//           <div className="flex items-center gap-4 flex-wrap p-3 bg-white rounded shadow-sm">
//             {[
//               { bg: "bg-gray-100 text-black border", count: 89, label: "Not Visited" },
//               { bg: "bg-orange-500 text-white", count: 1, label: "Not Answered" },
//               { bg: "bg-green-500 text-white", count: 0, label: "Answered" },
//               { bg: "bg-purple-600 text-white", count: 0, label: "Marked for Review" },
//             ].map(({ bg, count, label }) => (
//               <div key={label} className="flex items-center gap-2">
//                 <div className={`w-6 h-6 flex items-center justify-center text-xs rounded ${bg}`}>{count}</div>
//                 <span className="text-sm text-gray-700">{label}</span>
//               </div>
//             ))}
//             <div className="flex items-center gap-2">
//               <div className="w-6 h-6 flex items-center justify-center text-xs rounded bg-purple-700 text-white relative">
//                 0<span className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
//               </div>
//               <span className="text-sm text-gray-700">Answered & Marked<span className="text-xs text-gray-500 block">(considered for evaluation)</span></span>
//             </div>
//           </div>

//           <h2 className="text-black font-bold">Questions Panel</h2>
//           {sections.map(section => (
//             <div key={section} className="mb-4">
//               <h3 className="font-semibold mb-2 text-black">{section}</h3>
//               <div className="grid grid-cols-5 gap-2">
//                 {Array.from({ length: 30 }).map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentQuestion(index + 1)}
//                     className={`w-10 h-10 flex items-center justify-center border rounded cursor-pointer font-bold text-sm transition ${
//                       currentQuestion === index + 1
//                         ? "bg-teal-600 text-white border-teal-600"
//                         : "border-teal-500 text-teal-600 hover:bg-teal-100"
//                     }`}
//                   >{index + 1}</button>
//                 ))}
//                 <hr className="col-span-5 border-0 h-[2px] bg-gradient-to-r from-transparent via-teal-500 to-transparent mt-8" />
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="h-[10vh] w-full bg-teal-700 border-l border-[#f7f7f7] flex items-center justify-center">
//           <button className="cursor-pointer bg-teal-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-teal-600 transition">Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client'
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";


/* ── Pinch-zoom + double-tap/click fullscreen + mouse wheel + drag ── */
function ZoomableImage({ src, alt }) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);

  /* shared refs so handlers always see latest values without stale closures */
  const stateRef = useRef({ scale: 1, offset: { x: 0, y: 0 } });
  const lastTap = useRef(0);
  const lastDist = useRef(null);
  const lastOffset = useRef({ x: 0, y: 0 });
  const startTouches = useRef(null);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const clampOffset = useCallback((ox, oy, sc) => {
    const el = containerRef.current;
    if (!el) return { x: ox, y: oy };
    const maxX = Math.max(0, (el.offsetWidth * (sc - 1)) / 2);
    const maxY = Math.max(0, (el.offsetHeight * (sc - 1)) / 2);
    return {
      x: Math.min(maxX, Math.max(-maxX, ox)),
      y: Math.min(maxY, Math.max(-maxY, oy)),
    };
  }, []);

  const applyState = (sc, ox, oy) => {
    const clamped = clampOffset(ox, oy, sc);
    stateRef.current = { scale: sc, offset: clamped };
    setScale(sc);
    setOffset(clamped);
  };

  const reset = () => applyState(1, 0, 0);

  /* ── MOUSE: scroll-to-zoom ── */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e) => {
      e.preventDefault();
      const { scale: sc, offset: off } = stateRef.current;
      const delta = e.deltaY > 0 ? 0.9 : 1.1;
      const newScale = Math.min(5, Math.max(1, sc * delta));
      applyState(newScale, off.x, off.y);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [clampOffset]);

  /* ── MOUSE: double-click = fullscreen ── */
  const handleDoubleClick = () => {
    const { scale: sc } = stateRef.current;
    sc > 1 ? reset() : setIsFullscreen(true);
  };

  /* ── MOUSE: drag to pan when zoomed ── */
  const handleMouseDown = (e) => {
    if (stateRef.current.scale <= 1) return;
    isDragging.current = true;
    dragStart.current = { x: e.clientX - stateRef.current.offset.x, y: e.clientY - stateRef.current.offset.y };
    e.preventDefault();
  };
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const ox = e.clientX - dragStart.current.x;
    const oy = e.clientY - dragStart.current.y;
    const { scale: sc } = stateRef.current;
    applyState(sc, ox, oy);
  };
  const handleMouseUp = () => { isDragging.current = false; };

  /* ── TOUCH: pinch zoom ── */
  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      lastDist.current = Math.hypot(dx, dy);
    } else if (e.touches.length === 1) {
      lastDist.current = null;
      lastOffset.current = { ...stateRef.current.offset };
      startTouches.current = [{ clientX: e.touches[0].clientX, clientY: e.touches[0].clientY }];
    }
  };
  const handleTouchMove = (e) => {
    e.preventDefault();
    const { scale: sc } = stateRef.current;
    if (e.touches.length === 2 && lastDist.current) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      const newScale = Math.min(5, Math.max(1, sc * (dist / lastDist.current)));
      applyState(newScale, stateRef.current.offset.x, stateRef.current.offset.y);
      lastDist.current = dist;
    } else if (e.touches.length === 1 && sc > 1 && startTouches.current) {
      const dx = e.touches[0].clientX - startTouches.current[0].clientX;
      const dy = e.touches[0].clientY - startTouches.current[0].clientY;
      applyState(sc, lastOffset.current.x + dx, lastOffset.current.y + dy);
    }
  };
  const handleTouchEnd = (e) => {
    if (e.changedTouches.length === 1 && e.touches.length === 0) {
      const now = Date.now();
      if (now - lastTap.current < 280) {
        stateRef.current.scale > 1 ? reset() : setIsFullscreen(true);
      }
      lastTap.current = now;
    }
    if (stateRef.current.scale < 1.05) reset();
  };

  if (isFullscreen) {
    return (
      <div
        style={{
          position: "fixed", inset: 0, background: "#000", zIndex: 9999,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
        onClick={() => { setIsFullscreen(false); reset(); }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image src={src} alt={alt} fill style={{ objectFit: "contain" }} priority />
        </div>
        <div style={{
          position: "absolute", top: 16, right: 16, background: "rgba(255,255,255,0.18)",
          color: "#fff", borderRadius: 8, padding: "6px 14px", fontSize: 13, cursor: "pointer",
        }}>✕ Close</div>
        <div style={{
          position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)",
          background: "rgba(255,255,255,0.12)", color: "#fff", borderRadius: 8,
          padding: "6px 14px", fontSize: 12,
        }}>Click anywhere to close</div>
      </div>
    );
  }

  

  return (
    <div
      ref={containerRef}
      onDoubleClick={handleDoubleClick}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        width: "100%", height: "100%", overflow: "hidden",
        touchAction: "none", userSelect: "none", position: "relative",
        cursor: scale > 1 ? "grab" : "zoom-in",
        background: "#e7f7f5", borderRadius: 8,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div style={{
        transform: `scale(${scale}) translate(${offset.x / scale}px, ${offset.y / scale}px)`,
        transformOrigin: "center center",
        transition: scale === 1 ? "transform 0.2s ease" : "none",
        width: "100%", height: "100%", position: "relative",
      }}>
        <Image src={src} alt={alt} fill style={{ objectFit: "contain" }} priority />
      </div>

      {scale === 1 && (
        <div style={{
          position: "absolute", bottom: 10, right: 10,
          background: "rgba(0,0,0,0.45)", color: "#fff",
          borderRadius: 20, padding: "4px 10px", fontSize: 11, pointerEvents: "none",
        }}>
          Scroll to zoom · Double-click for fullscreen
        </div>
      )}
      {scale > 1.05 && (
        <button
          onTouchEnd={(e) => { e.stopPropagation(); reset(); }}
          style={{
            position: "absolute", top: 10, right: 10, background: "rgba(0,0,0,0.5)",
            color: "#fff", borderRadius: 20, padding: "4px 12px",
            fontSize: 12, border: "none", cursor: "pointer",
          }}
        >Reset</button>
      )}
    </div>
  );
}

/* ── Main Portal ── */
export default function Portal() {
    const router = useRouter();

  function submitExam(){
    router.push("/exam-submit")

  }
  const [activeSection, setActiveSection] = useState("Physics");
  const [showPanel, setShowPanel] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const sections = ["Physics", "Chemistry", "Mathematics"];

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ── MOBILE LAYOUT ── */
  if (isMobile) {
    return (
      <div style={{ width: "100%", minHeight: "100vh", background: "#f7f7f7", display: "flex", flexDirection: "column", fontFamily: "sans-serif" }}>

        {/* Top bar */}
        <div style={{ background: "#0f766e", padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
          <div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>IIT JEE EXAM 09</div>
            <div style={{ color: "#99f6e4", fontSize: 12 }}>Q{currentQuestion} · {activeSection}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ background: "#0d9488", color: "#fff", borderRadius: 8, padding: "5px 12px", fontSize: 13, fontWeight: 600 }}>
              ⏱ 01:30:00
            </div>
            <button
              onClick={() => setShowPanel(true)}
              style={{ background: "#0d9488", color: "#fff", border: "none", borderRadius: 8, padding: "7px 13px", fontSize: 14, cursor: "pointer" }}
            >📋</button>
          </div>
        </div>

        {/* Section tabs */}
        <div style={{ display: "flex", background: "#134e4a", padding: "6px 10px", gap: 8, overflowX: "auto" }}>
          {sections.map(s => (
            <button
              key={s}
              onClick={() => setActiveSection(s)}
              style={{
                padding: "6px 18px", borderRadius: 20, border: "none", cursor: "pointer",
                fontSize: 13, fontWeight: 600, whiteSpace: "nowrap",
                background: activeSection === s ? "#fff" : "transparent",
                color: activeSection === s ? "#0f766e" : "#99f6e4",
              }}
            >{s}</button>
          ))}
        </div>

        {/* ── QUESTION IMAGE — hero zone ── */}
        <div style={{
          width: "100%",
          height: "62vw",
          maxHeight: 370,
          minHeight: 200,
          background: "#e7f7f5",
          position: "relative",
          flexShrink: 0,
        }}>
          <ZoomableImage src="/question.png" alt="Question" />
        </div>

        {/* Options */}
        <div style={{ padding: "14px 14px 110px 14px", flex: 1 }}>
          <p style={{ fontWeight: 700, color: "#134e4a", marginBottom: 12, fontSize: 15, margin: "0 0 12px" }}>
            Choose the correct answer
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {["A", "B", "C", "D"].map((opt, i) => (
              <button
                key={opt}
                onClick={() => setSelectedOption(i)}
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "12px 14px", borderRadius: 10, cursor: "pointer",
                  textAlign: "left", fontSize: 14,
                  background: selectedOption === i ? "#ccfbf1" : "#fff",
                  outline: selectedOption === i ? "2px solid #0f766e" : "1px solid #d1d5db",
                  border: "none",
                  color: "#134e4a", fontWeight: selectedOption === i ? 700 : 400,
                  transition: "all 0.15s",
                }}
              >
                <span style={{
                  width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: selectedOption === i ? "#0f766e" : "#e7f7f5",
                  color: selectedOption === i ? "#fff" : "#0f766e",
                  fontWeight: 700, fontSize: 13,
                }}>{opt}</span>
                Option {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* ── FLOATING ACTION BAR ── */}
        <div style={{
          position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100,
          background: "#0f766e",
          padding: "10px 12px calc(10px + env(safe-area-inset-bottom)) 12px",
          display: "flex", gap: 8, alignItems: "center",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.2)",
        }}>
          <button style={{
            flex: 1, padding: "11px 0", borderRadius: 10, border: "none",
            background: "#facc15", color: "#78350f", fontWeight: 700, fontSize: 12, cursor: "pointer",
          }}>Mark Review</button>
          <button style={{
            flex: 1, padding: "11px 0", borderRadius: 10, border: "none",
            background: "#a855f7", color: "#fff", fontWeight: 700, fontSize: 12, cursor: "pointer",
          }}>Save & Mark</button>
          <button style={{
            flex: 2, padding: "11px 0", borderRadius: 10, border: "none",
            background: "#fff", color: "#0f766e", fontWeight: 800, fontSize: 14, cursor: "pointer",
          }}>Save & Next →</button>
        </div>

        {/* Panel backdrop */}
        {showPanel && (
          <div
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200 }}
            onClick={() => setShowPanel(false)}
          />
        )}

        {/* ── SIDE DRAWER PANEL ── */}
        <div style={{
          position: "fixed", top: 0, right: 0, bottom: 0,
          width: "82vw", maxWidth: 320,
          background: "#f7f7f7", zIndex: 201, display: "flex", flexDirection: "column",
          transform: showPanel ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.28s cubic-bezier(.4,0,.2,1)",
          boxShadow: "-6px 0 24px rgba(0,0,0,0.2)",
        }}>
          <div style={{ background: "#0f766e", padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>Gursimran Kaur</span>
            <button onClick={() => setShowPanel(false)} style={{ background: "none", border: "none", color: "#fff", fontSize: 22, cursor: "pointer", lineHeight: 1 }}>✕</button>
          </div>

          <div style={{ padding: "10px", background: "#fff", margin: 10, borderRadius: 10, display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              { bg: "#e5e7eb", text: "#374151", count: 89, label: "Not Visited" },
              { bg: "#f97316", text: "#fff", count: 1, label: "Not Answered" },
              { bg: "#22c55e", text: "#fff", count: 0, label: "Answered" },
              { bg: "#9333ea", text: "#fff", count: 0, label: "Marked" },
            ].map(({ bg, text, count, label }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 24, height: 24, borderRadius: 6, background: bg, color: text, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700 }}>{count}</div>
                <span style={{ fontSize: 11, color: "#4b5563" }}>{label}</span>
              </div>
            ))}
          </div>

          <div style={{ flex: 1, overflowY: "auto", padding: "0 10px 10px" }}>
            {sections.map(section => (
              <div key={section} style={{ marginBottom: 16 }}>
                <p style={{ fontWeight: 700, color: "#0f766e", fontSize: 13, margin: "10px 0 8px" }}>{section}</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6 }}>
                  {Array.from({ length: 30 }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setCurrentQuestion(i + 1); setShowPanel(false); }}
                      style={{
                        height: 36, borderRadius: 8, border: "none", cursor: "pointer",
                        fontSize: 13, fontWeight: 700,
                        background: currentQuestion === i + 1 ? "#0f766e" : "#e7f7f5",
                        color: currentQuestion === i + 1 ? "#fff" : "#0f766e",
                      }}
                    >{i + 1}</button>
                  ))}
                </div>
                <hr style={{ margin: "14px 0 0", border: "none", borderTop: "1.5px solid #99f6e4" }} />
              </div>
            ))}
          </div>

          <div style={{ padding: "12px 16px", background: "#0f766e" }}>
            <button style={{
              width: "100%", padding: "13px", borderRadius: 10, border: "none",
              background: "#fff", color: "#0f766e", fontWeight: 800, fontSize: 15, cursor: "pointer",
            }}>Submit Exam</button>
          </div>
        </div>
      </div>
    );
  }

  /* ── DESKTOP LAYOUT (unchanged) ── */
  return (
    <div className="w-full h-[100vh] grid grid-cols-12">
      <div className="col-span-9 w-full h-[100vh] bg-[#f7f7f7]">
        <div className="h-[10vh] w-full bg-teal-700 flex items-center justify-between px-6">
          <div className="flex items-center justify-center gap-4">
            <h1 className="text-white text-lg md:text-xl font-semibold">IIT JEE EXAM 09</h1>
            <div className="text-white text-sm md:text-base font-medium bg-teal-600 px-4 py-1 rounded-lg">
              Time Left: 01:30:00
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            {sections.map(s => (
              <button
                key={s}
                onClick={() => setActiveSection(s)}
                className={`cursor-pointer px-4 py-2 rounded transition font-medium ${activeSection === s ? "bg-white text-teal-700" : "bg-teal-500 text-white hover:bg-teal-600"}`}
              >{s}</button>
            ))}
          </div>
        </div>

        <div className="h-[80vh] w-full bg-white grid grid-cols-10">
          <div className="col-span-7 w-full h-full bg-[#e7e7e750] p-3">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <ZoomableImage src="/question.png" alt="question" />
            </div>
          </div>
          <div className="col-span-3 p-4 flex flex-col items-start gap-2 border-l border-gray-100">
            <h2 className="text-black font-bold mb-4">Choose correct answer</h2>
            {["A", "B", "C", "D"].map((opt, index) => (
              <button
                key={opt}
                onClick={() => setSelectedOption(index)}
                className={`w-full text-left p-3 rounded-lg mb-1 cursor-pointer transition flex items-center gap-3 border ${
                  selectedOption === index
                    ? "bg-teal-50 border-teal-500 font-semibold text-teal-800"
                    : "border-gray-200 text-black hover:bg-teal-50"
                }`}
              >
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${selectedOption === index ? "bg-teal-600 text-white" : "bg-teal-100 text-teal-700"}`}>{opt}</span>
                Option {index + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="h-[10vh] w-full bg-teal-700 flex items-center justify-between px-6">
          <div className="flex gap-3">
            <button className="cursor-pointer bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-500 transition">Mark for Review</button>
            <button className="cursor-pointer bg-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-600 transition">Save & Mark for Review</button>
          </div>
          <button className="cursor-pointer bg-teal-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-teal-600 transition">Save & Next →</button>
        </div>
      </div>

      <div className="col-span-3 w-full h-[100vh] bg-[#f7f7f7]">
        <div className="h-[10vh] bg-teal-700 w-full border-l border-[#f7f7f7] flex items-center justify-center">
          <p className="text-white font-medium">Name — Gursimran Kaur</p>
        </div>
        <div className="h-[80vh] w-full flex p-4 gap-4 flex-col overflow-y-auto overflow-x-hidden">
          <div className="flex items-center gap-4 flex-wrap p-3 bg-white rounded shadow-sm">
            {[
              { bg: "bg-gray-100 text-black border", count: 89, label: "Not Visited" },
              { bg: "bg-orange-500 text-white", count: 1, label: "Not Answered" },
              { bg: "bg-green-500 text-white", count: 0, label: "Answered" },
              { bg: "bg-purple-600 text-white", count: 0, label: "Marked for Review" },
            ].map(({ bg, count, label }) => (
              <div key={label} className="flex items-center gap-2">
                <div className={`w-6 h-6 flex items-center justify-center text-xs rounded ${bg}`}>{count}</div>
                <span className="text-sm text-gray-700">{label}</span>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center text-xs rounded bg-purple-700 text-white relative">
                0<span className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
              </div>
              <span className="text-sm text-gray-700">Answered & Marked<span className="text-xs text-gray-500 block">(considered for evaluation)</span></span>
            </div>
          </div>

          <h2 className="text-black font-bold">Questions Panel</h2>
          {sections.map(section => (
            <div key={section} className="mb-4">
              <h3 className="font-semibold mb-2 text-black">{section}</h3>
              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: 30 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestion(index + 1)}
                    className={`w-10 h-10 flex items-center justify-center border rounded cursor-pointer font-bold text-sm transition ${
                      currentQuestion === index + 1
                        ? "bg-teal-600 text-white border-teal-600"
                        : "border-teal-500 text-teal-600 hover:bg-teal-100"
                    }`}
                  >{index + 1}</button>
                ))}
                <hr className="col-span-5 border-0 h-[2px] bg-gradient-to-r from-transparent via-teal-500 to-transparent mt-8" />
              </div>
            </div>
          ))}
        </div>
        <div className="h-[10vh] w-full bg-teal-700 border-l border-[#f7f7f7] flex items-center justify-center">
          <button onClick={submitExam} className="cursor-pointer bg-teal-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-teal-600 transition">Submit</button>
        </div>
      </div>
    </div>
  );
}
