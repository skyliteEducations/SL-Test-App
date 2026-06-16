import React, { useState , useContext, useEffect} from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  Button
} from "@mui/material";
import ScienceIcon from '@mui/icons-material/Science';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { ChapterContext } from "../../contexts/chapterwise.context";
import { useRouter } from "next/navigation";
import FullScreenLoader from "../components/fullLoader";
const mathsExamDistribution = [
  { chapterName: 'Continuity_and_Differentiability', difficultyLevel: 'Easy', numberOfQuestions: 1 },
  { chapterName: 'Differentiation', difficultyLevel: 'Medium', numberOfQuestions: 1 },
  { chapterName: 'Application_of_Derivatives', difficultyLevel: 'Easy', numberOfQuestions: 1 },
  { chapterName: 'Monotonicity_and_Maxima-Minima_of_Functions', difficultyLevel: 'Easy', numberOfQuestions: 1 },
  { chapterName: 'Progression_and_Series', difficultyLevel: 'Medium', numberOfQuestions: 1 },
  { chapterName: 'Indefinite_Integration', difficultyLevel: 'Hard', numberOfQuestions: 1 },
  { chapterName: 'Differential_Equations', difficultyLevel: 'Hard', numberOfQuestions: 0 },
  { chapterName: 'Definite_Integration', difficultyLevel: 'Hard', numberOfQuestions: 1 },
  { chapterName: 'Complex_Numbers', difficultyLevel: 'Hard', numberOfQuestions: 1 },
  { chapterName: 'Area', difficultyLevel: 'Medium', numberOfQuestions: 1 },
  { chapterName: 'Three-Dimensional_Geometry', difficultyLevel: 'Hard', numberOfQuestions: 0 },
  { chapterName: 'Different_Products_of_Vectors_and_Their_Geometrical_Applications', difficultyLevel: 'Hard', numberOfQuestions: 1 },
  { chapterName: 'Binomial_Theorem', difficultyLevel: 'Medium', numberOfQuestions: 1 },
  { chapterName: 'Circle', difficultyLevel: 'Easy', numberOfQuestions: 1 },
  { chapterName: 'Determinants', difficultyLevel: 'Easy', numberOfQuestions: 1 },
  { chapterName: 'Ellipse', difficultyLevel: 'Medium', numberOfQuestions: 1 },
  { chapterName: 'Hyperbola', difficultyLevel: 'Hard', numberOfQuestions: 1 },
  { chapterName: 'Introduction_to_Vectors', difficultyLevel: 'Hard', numberOfQuestions: 0 },
  { chapterName: 'Matrices', difficultyLevel: 'Hard', numberOfQuestions: 1 },
  { chapterName: 'Inverse_Trigonometric_Functions', difficultyLevel: 'Hard', numberOfQuestions: 0 },
  { chapterName: 'Parabola', difficultyLevel: 'Easy', numberOfQuestions: 1 },
  { chapterName: 'Permutation_and_Combination', difficultyLevel: 'Easy', numberOfQuestions: 1 },
  { chapterName: 'Straight_Lines', difficultyLevel: 'Medium', numberOfQuestions: 1 },
  { chapterName: 'Probability', difficultyLevel: 'Medium', numberOfQuestions: 1 }
];

const biology = [
  { chapterName: "Microbes in Human Welfare" },
  { chapterName: "Chemical Coordination and Integration" },
  { chapterName: "Biodiversity and Conservation" },
  { chapterName: "Cell Cycle and Cell Division" },
  { chapterName: "Breathing and Exchange of Gases" },
  { chapterName: "Photosynthesis in Higher Plants" },
  { chapterName: "Excretory Products and Their Elimination" },
  { chapterName: "Respiration in Plants" },
  { chapterName: "Reproduction in Organisms" },
  { chapterName: "Environmental Issues" },
  { chapterName: "Reproductive Health" },
  { chapterName: "Strategies For Enhancement in Food Production" },
  { chapterName: "Structural Organisation in Animals" },
  { chapterName: "Anatomy of Flowering Plants" },
  { chapterName: "Biotechnology and Its Applications" },
  { chapterName: "Evolution" },
  { chapterName: "Principles of Inheritance and variation" },
  { chapterName: "Cell The Unit of Life" },
  { chapterName: "Sexual Reproduction in Flowering Plants" },
  { chapterName: "Morphology of Flowering Plants" },
  { chapterName: "Transport in Plants" },
  { chapterName: "Biological Classification" },
  { chapterName: "Locomotion and Movement" },
  { chapterName: "Animal Kingdom" },
  { chapterName: "Ecosystem" },
  { chapterName: "Human Reproduction" },
  { chapterName: "Molecular basis of Inheritance" },
  { chapterName: "Plant Growth and Development" },
  { chapterName: "Mineral Nutrition" },
  { chapterName: "The Living World" },
  { chapterName: "Neural Control and Coordination" },
  { chapterName: "Body Fluids and Circulation" },
  { chapterName: "Organisms and Populations" },
  { chapterName: "Biomolecules" },
  { chapterName: "Biotechnology Principles and Process" },
  { chapterName: "Digestion and Absorption" },
  { chapterName: "Human Health and Disease" },
  { chapterName: "Plant Kingdom" }
]
export default function ChapterWise() {
    const {fetchPhysicsChapters, physicsList, fetchPhysicsChapterSheets, physicsSheets, fetchPhysicsChapterSheetExtracted, Loading, fetchChemistryChapters, organicChapters, inorganicChapters, physicalChapters, fetchChemistryChapterSheets , chemistrySheets, fetchMathsChapters, mathsList, fetchMathsChapterSheets, mathsSheets, mathsSearch, filterMathsList, filterPhysicsList, physicsSearch, filterOrganicChapters, organicSearch, inorganicSearch, filterInorganicChapters, physicalSearch, filterPhysicalChapters} = useContext(ChapterContext)
    const router = useRouter()
    const [chemistryCatagory, setChemistryCatagory] = useState("organic")
    useEffect(el=>{
        fetchPhysicsChapters()
        fetchChemistryChapters()
        fetchMathsChapters()
    }, [])

    const [subject, setSubject] = useState('physics')
    const [exam, setExam] = useState('IITJEE')
    const [innerView, setInnerView] = useState({
        view : false,
        name : ""
    })

    function switchToOrganic(){
        setChemistryCatagory(chemistryCatagory=> "organic")
    }

    function switchToInorganic(){
        setChemistryCatagory(chemistryCatagory=> "inorganic")
    }

    function switchToPhysical(){
        setChemistryCatagory(chemistryCatagory=> "physical")
    }

    function switchToMaths(){
        setSubject(subject=> 'maths')
        setInnerView((innerView)=>({
            ...innerView,
            view : false,
            name : ''
        }))
    }
    function switchToPhysics(){
        setSubject(subject=> 'physics')
        setInnerView((innerView)=>({
            ...innerView,
            view : false,
            name : ''
        }))
    }
    function switchToChemistry(){
        setSubject(subject=> 'chemistry')
        setInnerView((innerView)=>({
            ...innerView,
            view : false,
            name : ''
        }))
    }
    function switchToBiology(){
        setSubject(subject=> 'biology')
        setInnerView((innerView)=>({
            ...innerView,
            view : false,
            name : ''
        }))
    }
    function setView(name){
        setInnerView((innerView)=>({
            ...innerView,
            view : true,
            name : name
        }))
        if(subject=='physics'){
            fetchPhysicsChapterSheets(name);
        }else if(subject=='chemistry'){
            fetchChemistryChapterSheets(name);
        }else if(subject=='maths'){
            fetchMathsChapterSheets(name);
        }
    }


    const ExtractedSheet = async (sheetId) => {
        try {
            const data = await fetchPhysicsChapterSheetExtracted(sheetId, innerView.name, subject);

            if (!data) {
                console.log("Sheet fetch failed");
                return;
            }
            if(subject=='physics'){
                router.push(`/chaptwerwise/physics?sheetId=${sheetId}`);
            }else if(subject=='chemistry'){
                router.push(`/chaptwerwise/chemsitry?sheetId=${sheetId}`);
            }else if(subject=='maths'){
                router.push(`/chaptwerwise/maths?sheetId=${sheetId}`);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const viewSolutionFun = async(sheetId)=>{
        if(subject=='maths'){
            router.push(`/chapterwise-analytics?subject=${subject}&sheet=${sheetId}&chapterName=${localStorage.getItem("Maths_chapterwise_active_sheet_name")}`)
        }else if(subject=='physics'){
            router.push(`/chapterwise-analytics?subject=${subject}&sheet=${sheetId}&chapterName=${innerView.name}`)
        }else if(subject=='chemistry'){
            router.push(`/chapterwise-analytics?subject=${subject}&sheet=${sheetId}&chapterName=${innerView.name}`)
        }
    }

    const activeClass =
    "px-6 cursor-pointer py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 font-semibold border border-slate-200 shadow-sm transition-colors duration-200";

    const inactiveClass =
    "px-6 cursor-pointer py-2.5 rounded-xl text-slate-500 font-medium hover:text-slate-900 transition-colors duration-200";
    
    function searchMathsChapters(text){
        mathsSearch(text.target.value, mathsList)
    }

    function searchPhysicsChapters(text){
        physicsSearch(text.target.value, physicsList)
    }

    function searchOrganicChapters(text){
        organicSearch(text.target.value, organicChapters)
    }

    function searchInOrganicChapters(text){
        inorganicSearch(text.target.value, inorganicChapters)
    }

    function searchPhysicalChapters(text){
        physicalSearch(text.target.value, physicalChapters)
    }

    return(
        <div className="h-full w-full bg-white p-4 overflow-scroll overflow-x-hidden">
            {Loading &&
                <FullScreenLoader/>
            }
            <div className="flex flex-wrap items-center gap-2 p-1 bg-slate-100 rounded-2xl w-fit">
                <button
                    onClick={switchToPhysics}
                    className={subject === "physics" ? activeClass : inactiveClass}
                >
                    Physics
                </button>

                <button
                    onClick={switchToChemistry}
                    className={subject === "chemistry" ? activeClass : inactiveClass}
                >
                    Chemistry
                </button>

                {exam === "IITJEE" && (
                    <button
                        onClick={switchToMaths}
                        className={subject === "maths" ? activeClass : inactiveClass}
                    >
                        Mathematics
                    </button>
                )}

                {exam === "NEET" && (
                    <button
                        onClick={switchToBiology}
                        className={subject === "biology" ? activeClass : inactiveClass}
                    >
                        Biology
                    </button>
                )}
            </div>
            <hr className="my-6 border-0 h-[2px] bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full shadow-md" />

            {(subject=='maths' && exam=='IITJEE' && !innerView.view) &&
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-[#f5f7f9] rounded-xl">
                    {/* <div className="relative w-full max-w-md col-span-3">
                        <input
                            type="text"
                            placeholder="Search chapter..."
                            onChange={(e)=>searchMathsChapters(e)}
                            defaultValue={''}
                            className="
                                w-full
                                pl-12
                                pr-4
                                py-3
                                rounded-xl
                                border
                                border-gray-200
                                bg-white
                                text-gray-700
                                placeholder:text-gray-400
                                shadow-sm
                                outline-none
                                transition-all
                                duration-200
                                focus:border-teal-500
                                focus:ring-4
                                focus:ring-teal-100
                                focus:shadow-md
                            "
                        />

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.05 6.05a7.5 7.5 0 0 0 10.6 10.6Z"
                            />
                        </svg>
                    </div> */}
                    <div className="relative w-full col-span-1 sm:col-span-2 lg:col-span-3">
                        <input
                            type="text"
                            placeholder="Search chapter..."
                            onChange={(e)=>searchMathsChapters(e)}
                            className="
                                w-full
                                pl-12
                                pr-4
                                py-3
                                rounded-xl
                                border
                                border-gray-200
                                bg-white
                                text-gray-700
                                placeholder:text-gray-400
                                shadow-sm
                                outline-none
                                transition-all
                                duration-200
                                focus:border-teal-500
                                focus:ring-4
                                focus:ring-teal-100
                                focus:shadow-md
                            "
                        />

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.05 6.05a7.5 7.5 0 0 0 10.6 10.6Z"
                            />
                        </svg>
                    </div>
                    {filterMathsList?.map((el, index) => (
                        <div
                        key={index}
                        className="relative overflow-hidden group bg-white rounded-[32px] p-8 min-h-[320px] border border-teal-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
                        >
                        {/* top dots */}
                        <div className="absolute top-4 right-4 grid grid-cols-4 gap-1 opacity-30">
                            {[...Array(16)].map((_, i) => (
                                <span
                                key={i}
                                className="w-1 h-1 rounded-full bg-teal-400"
                                ></span>
                            ))}
                        </div>

                        {/* bottom gradient shape */}
                        <div className="absolute bottom-0 left-0 w-40 h-24 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-tr-[100px] opacity-70"></div>

                        {/* icon */}
                        <div className="relative z-10 w-24 h-24 rounded-[28px] bg-teal-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300">
                            <ScienceIcon
                            sx={{ fontSize: 45, color: "#0d9488" }}
                            />
                        </div>

                        {/* title */}
                        <h2 className="relative z-10 text-xl font-extrabold text-slate-800 leading-tight mb-4">
                            {el.chapter_name.replaceAll("_", " ")}
                        </h2>

                        {/* small line */}
                        <div className="relative z-10 w-12 h-1 bg-teal-500 rounded-full mb-5"></div>

                        {/* subtitle */}
                        <p className="relative z-10 text-slate-500 text-sm leading-7 mb-8">
                            Practice important concepts and boost your preparation.
                        </p>

                        {/* button */}
                        <button onClick={()=>setView(el.chapter_name.split("_").join(" "))} className="cursor-pointer relative z-10 mt-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-md font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
                            Start Now →
                        </button>
                        </div>
                    ))}
                </div>
            }

            {(subject=='biology' && exam=='NEET' && !innerView.view) &&
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-[#f5f7f9] rounded-xl">
                    {biology.map((el, index) => (
                        <div
                        key={index}
                        className="relative overflow-hidden group bg-white rounded-[32px] p-8 min-h-[320px] border border-teal-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
                        >
                        {/* top dots */}
                        <div className="absolute top-4 right-4 grid grid-cols-4 gap-1 opacity-30">
                            {[...Array(16)].map((_, i) => (
                                <span
                                key={i}
                                className="w-1 h-1 rounded-full bg-teal-400"
                                ></span>
                            ))}
                        </div>

                        {/* bottom gradient shape */}
                        <div className="absolute bottom-0 left-0 w-40 h-24 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-tr-[100px] opacity-70"></div>

                        {/* icon */}
                        <div className="relative z-10 w-24 h-24 rounded-[28px] bg-teal-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300">
                            <ScienceIcon
                            sx={{ fontSize: 45, color: "#0d9488" }}
                            />
                        </div>

                        {/* title */}
                        <h2 className="relative z-10 text-xl font-extrabold text-slate-800 leading-tight mb-4">
                            {el.chapterName.split("_").join(" ")}
                        </h2>

                        {/* small line */}
                        <div className="relative z-10 w-12 h-1 bg-teal-500 rounded-full mb-5"></div>

                        {/* subtitle */}
                        <p className="relative z-10 text-slate-500 text-sm leading-7 mb-8">
                            Practice important concepts and boost your preparation.
                        </p>

                        {/* button */}
                        <button onClick={()=>setView(el.chapterName.split("_").join(" "))} className="cursor-pointer relative z-10 mt-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-md font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
                            Start Now →
                        </button>
                        </div>
                    ))}
                </div>
            }


            {(subject=='physics' && !innerView.view) &&
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-[#f5f7f9] rounded-xl">
                    
                    <div className="relative w-full col-span-1 sm:col-span-2 lg:col-span-3">
                        <input
                            type="text"
                            placeholder="Search chapter..."
                            onChange={(e)=>searchPhysicsChapters(e)}
                            className="
                                w-full
                                pl-12
                                pr-4
                                py-3
                                rounded-xl
                                border
                                border-gray-200
                                bg-white
                                text-gray-700
                                placeholder:text-gray-400
                                shadow-sm
                                outline-none
                                transition-all
                                duration-200
                                focus:border-teal-500
                                focus:ring-4
                                focus:ring-teal-100
                                focus:shadow-md
                            "
                        />

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.05 6.05a7.5 7.5 0 0 0 10.6 10.6Z"
                            />
                        </svg>
                    </div>

                    {filterPhysicsList?.map((el, index) => (
                        <div
                        key={index}
                        className="relative overflow-hidden group bg-white rounded-[32px] p-8 min-h-[320px] border border-teal-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
                        >
                        {/* top dots */}
                        <div className="absolute top-4 right-4 grid grid-cols-4 gap-1 opacity-30">
                            {[...Array(16)].map((_, i) => (
                                <span
                                key={i}
                                className="w-1 h-1 rounded-full bg-teal-400"
                                ></span>
                            ))}
                        </div>

                        {/* bottom gradient shape */}
                        <div className="absolute bottom-0 left-0 w-40 h-24 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-tr-[100px] opacity-70"></div>

                        {/* icon */}
                        <div className="relative z-10 w-24 h-24 rounded-[28px] bg-teal-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300">
                            <PsychologyIcon
                            sx={{ fontSize: 45, color: "#0d9488" }}
                            />
                        </div>

                        {/* title */}
                        <h2 className="relative z-10 text-xl font-extrabold text-slate-800 leading-tight mb-4">
                            {el.chapter_name.replaceAll("_", " ")}
                        </h2>

                        {/* small line */}
                        <div className="relative z-10 w-12 h-1 bg-teal-500 rounded-full mb-5"></div>

                        {/* subtitle */}
                        <p className="relative z-10 text-slate-500 text-sm leading-7 mb-8">
                            Practice important concepts and boost your preparation.
                        </p>

                        {/* button */}
                        <button onClick={()=>setView(el.chapter_name.replaceAll("_", " "))} className="cursor-pointer relative z-10 mt-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-md font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
                            Start Now →
                        </button>
                        </div>
                    ))}
                </div>
            }

            {(subject=='chemistry' && !innerView.view) &&
                <div className="flex flex-col gap-4 mb-10">
                    <div className=" p-2   flex gap-2">

                        <button
                            onClick={switchToPhysical}
                            className={`cursor-pointer px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                chemistryCatagory === "physical"
                                    ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg"
                                    : "text-slate-600 border border-teal-700 hover:bg-slate-100"
                            }`}
                        >
                            Physical Chemistry
                        </button>

                        <button
                            onClick={switchToInorganic}
                            className={`cursor-pointer px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                chemistryCatagory === "inorganic"
                                    ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg"
                                    : "text-slate-600 border border-teal-700 hover:bg-slate-100"
                            }`}
                        >
                            Inorganic Chemistry
                        </button>

                        <button
                            onClick={switchToOrganic}
                            className={`cursor-pointer px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                chemistryCatagory === "organic"
                                    ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg"
                                    : "text-slate-600 border border-teal-700 hover:bg-slate-100"
                            }`}
                        >
                            Organic Chemistry
                        </button>

                    </div>

                    {chemistryCatagory == 'organic' &&
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-[#f5f7f9] rounded-xl">

                        <div className="relative w-full col-span-1 sm:col-span-2 lg:col-span-3">
                            <input
                                type="text"
                                placeholder="Search chapter..."
                                onChange={(e)=>searchOrganicChapters(e)}
                                className="
                                    w-full
                                    pl-12
                                    pr-4
                                    py-3
                                    rounded-xl
                                    border
                                    border-gray-200
                                    bg-white
                                    text-gray-700
                                    placeholder:text-gray-400
                                    shadow-sm
                                    outline-none
                                    transition-all
                                    duration-200
                                    focus:border-teal-500
                                    focus:ring-4
                                    focus:ring-teal-100
                                    focus:shadow-md
                                "
                            />

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.05 6.05a7.5 7.5 0 0 0 10.6 10.6Z"
                                />
                            </svg>
                    </div>

                        {filterOrganicChapters.map((el, index) => (
                            <div
                            key={index}
                            className="relative overflow-hidden group bg-white rounded-[32px] p-8 min-h-[320px] border border-teal-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
                            >
                            {/* top dots */}
                            <div className="absolute top-4 right-4 grid grid-cols-4 gap-1 opacity-30">
                                {[...Array(16)].map((_, i) => (
                                    <span
                                    key={i}
                                    className="w-1 h-1 rounded-full bg-teal-400"
                                    ></span>
                                ))}
                            </div>

                        {/* bottom gradient shape */}
                            <div className="absolute bottom-0 left-0 w-40 h-24 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-tr-[100px] opacity-70"></div>

                            {/* icon */}
                            <div className="relative z-10 w-24 h-24 rounded-[28px] bg-teal-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300">
                                <ScienceIcon
                                sx={{ fontSize: 45, color: "#0d9488" }}
                                />
                            </div>

                            {/* title */}
                            <h2 className="relative z-10 text-xl font-extrabold text-slate-800 leading-tight mb-4">
                                {el.chapter_name.split("_").join(" ")}
                            </h2>

                            {/* small line */}
                            <div className="relative z-10 w-12 h-1 bg-teal-500 rounded-full mb-5"></div>

                            {/* subtitle */}
                            <p className="relative z-10 text-slate-500 text-sm leading-7 mb-8">
                                Practice important concepts and boost your preparation.
                            </p>

                            {/* button */}
                            <button onClick={()=>setView(el.chapter_name?.split("_")?.join(" "))} className="cursor-pointer relative z-10 mt-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-md font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
                                Start Now →
                            </button>
                            </div>
                        ))}
                    </div>

                    }

                    {chemistryCatagory == 'inorganic' &&
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-[#f5f7f9] rounded-xl">

                        <div className="relative w-full col-span-1 sm:col-span-2 lg:col-span-3">
                            <input
                                type="text"
                                placeholder="Search chapter..."
                                onChange={(e)=>searchInOrganicChapters(e)}
                                className="
                                    w-full
                                    pl-12
                                    pr-4
                                    py-3
                                    rounded-xl
                                    border
                                    border-gray-200
                                    bg-white
                                    text-gray-700
                                    placeholder:text-gray-400
                                    shadow-sm
                                    outline-none
                                    transition-all
                                    duration-200
                                    focus:border-teal-500
                                    focus:ring-4
                                    focus:ring-teal-100
                                    focus:shadow-md
                                "
                            />

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.05 6.05a7.5 7.5 0 0 0 10.6 10.6Z"
                                />
                            </svg>
                    </div>

                        {filterInorganicChapters.map((el, index) => (
                            <div
                            key={index}
                            className="relative overflow-hidden group bg-white rounded-[32px] p-8 min-h-[320px] border border-teal-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
                            >
                            {/* top dots */}
                            <div className="absolute top-4 right-4 grid grid-cols-4 gap-1 opacity-30">
                                {[...Array(16)].map((_, i) => (
                                    <span
                                    key={i}
                                    className="w-1 h-1 rounded-full bg-teal-400"
                                    ></span>
                                ))}
                            </div>

                        {/* bottom gradient shape */}
                            <div className="absolute bottom-0 left-0 w-40 h-24 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-tr-[100px] opacity-70"></div>

                            {/* icon */}
                            <div className="relative z-10 w-24 h-24 rounded-[28px] bg-teal-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300">
                                <ScienceIcon
                                sx={{ fontSize: 45, color: "#0d9488" }}
                                />
                            </div>

                            {/* title */}
                            <h2 className="relative z-10 text-xl font-extrabold text-slate-800 leading-tight mb-4">
                                {el.chapter_name.split("_").join(" ")}
                            </h2>

                            {/* small line */}
                            <div className="relative z-10 w-12 h-1 bg-teal-500 rounded-full mb-5"></div>

                            {/* subtitle */}
                            <p className="relative z-10 text-slate-500 text-sm leading-7 mb-8">
                                Practice important concepts and boost your preparation.
                            </p>

                            {/* button */}
                            <button onClick={()=>setView(el.chapter_name.split("_").join(" "))} className="cursor-pointer relative z-10 mt-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-md font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
                                Start Now →
                            </button>
                            </div>
                        ))}
                    </div>

                    }

                    {chemistryCatagory == 'physical' &&
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-[#f5f7f9] rounded-xl">

                        <div className="relative w-full col-span-1 sm:col-span-2 lg:col-span-3">
                            <input
                                type="text"
                                placeholder="Search chapter..."
                                onChange={(e)=>searchPhysicalChapters(e)}
                                className="
                                    w-full
                                    pl-12
                                    pr-4
                                    py-3
                                    rounded-xl
                                    border
                                    border-gray-200
                                    bg-white
                                    text-gray-700
                                    placeholder:text-gray-400
                                    shadow-sm
                                    outline-none
                                    transition-all
                                    duration-200
                                    focus:border-teal-500
                                    focus:ring-4
                                    focus:ring-teal-100
                                    focus:shadow-md
                                "
                            />

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.05 6.05a7.5 7.5 0 0 0 10.6 10.6Z"
                                />
                            </svg>
                    </div>


                        {filterPhysicalChapters.map((el, index) => (
                            <div
                            key={index}
                            className="relative overflow-hidden group bg-white rounded-[32px] p-8 min-h-[320px] border border-teal-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
                            >
                            {/* top dots */}
                            <div className="absolute top-4 right-4 grid grid-cols-4 gap-1 opacity-30">
                                {[...Array(16)].map((_, i) => (
                                    <span
                                    key={i}
                                    className="w-1 h-1 rounded-full bg-teal-400"
                                    ></span>
                                ))}
                            </div>

                        {/* bottom gradient shape */}
                            <div className="absolute bottom-0 left-0 w-40 h-24 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-tr-[100px] opacity-70"></div>

                            {/* icon */}
                            <div className="relative z-10 w-24 h-24 rounded-[28px] bg-teal-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300">
                                <ScienceIcon
                                sx={{ fontSize: 45, color: "#0d9488" }}
                                />
                            </div>

                            {/* title */}
                            <h2 className="relative z-10 text-xl font-extrabold text-slate-800 leading-tight mb-4">
                                {el.chapter_name.split("_").join(" ")}
                            </h2>

                            {/* small line */}
                            <div className="relative z-10 w-12 h-1 bg-teal-500 rounded-full mb-5"></div>

                            {/* subtitle */}
                            <p className="relative z-10 text-slate-500 text-sm leading-7 mb-8">
                                Practice important concepts and boost your preparation.
                            </p>

                            {/* button */}
                            <button onClick={()=>setView(el.chapter_name?.split("_")?.join(" "))} className="cursor-pointer relative z-10 mt-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-md font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
                                Start Now →
                            </button>
                            </div>
                        ))}
                    </div>

                    }

                </div>
                // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-[#f5f7f9] rounded-xl">
                //     {ChemistryExamDistribution.map((el, index) => (
                //         <div
                //         key={index}
                //         className="relative overflow-hidden group bg-white rounded-[32px] p-8 min-h-[320px] border border-teal-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
                //         >
                //         {/* top dots */}
                //         <div className="absolute top-4 right-4 grid grid-cols-4 gap-1 opacity-30">
                //             {[...Array(16)].map((_, i) => (
                //                 <span
                //                 key={i}
                //                 className="w-1 h-1 rounded-full bg-teal-400"
                //                 ></span>
                //             ))}
                //         </div>

                //         {/* bottom gradient shape */}
                //         <div className="absolute bottom-0 left-0 w-40 h-24 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-tr-[100px] opacity-70"></div>

                //         {/* icon */}
                //         <div className="relative z-10 w-24 h-24 rounded-[28px] bg-teal-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300">
                //             <ScienceIcon
                //             sx={{ fontSize: 45, color: "#0d9488" }}
                //             />
                //         </div>

                //         {/* title */}
                //         <h2 className="relative z-10 text-xl font-extrabold text-slate-800 leading-tight mb-4">
                //             {el.chapterName.split("_").join(" ")}
                //         </h2>

                //         {/* small line */}
                //         <div className="relative z-10 w-12 h-1 bg-teal-500 rounded-full mb-5"></div>

                //         {/* subtitle */}
                //         <p className="relative z-10 text-slate-500 text-sm leading-7 mb-8">
                //             Practice important concepts and boost your preparation.
                //         </p>

                //         {/* button */}
                //         <button onClick={()=>setView(el.chapterName.split("_").join(" "))} className="cursor-pointer relative z-10 mt-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-md font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
                //             Start Now →
                //         </button>
                //         </div>
                //     ))}
                // </div>
            }

            {innerView.view &&
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    <div className="mb-3 relative col-span-3 flex items-start justify-between gap-8 flex-wrap">
                        {/* LEFT SIDE */}
                        <div className="relative">

                            {/* glow */}
                            <div className="absolute -top-6 left-0 w-72 h-24 bg-teal-100 blur-3xl opacity-40 rounded-full"></div>

                            <div className="relative z-10">

                                {/* small badge */}
                                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-teal-50 border border-teal-100 mb-5 shadow-sm">
                                    <span className="w-3 h-3 rounded-full bg-teal-500 animate-pulse"></span>

                                    <p className="text-teal-700 font-semibold tracking-wide uppercase text-sm">
                                        {subject} Chapter
                                    </p>
                                </div>

                                {/* main heading */}
                                <h2 className="text-2xl font-black text-slate-800 leading-tight">
                                    {innerView.name}
                                </h2>

                                {/* gradient line */}
                                <div className="w-32 h-1.5 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 mt-5"></div>

                            </div>
                        </div>

                        {/* RIGHT SIDE BUTTON */}
                        <button className="group cursor-pointer relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white font-bold shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.28)] hover:scale-105 transition-all duration-300 flex items-center gap-4">

                            {/* glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                            {/* icon */}
                            <div className="relative z-10 w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-xl backdrop-blur-md">
                                🚀
                            </div>

                            {/* text */}
                            <div className="relative z-10 flex flex-col items-start">
                                <span className="text-lg font-extrabold">
                                    Buy More Tests
                                </span>

                                <span className="text-xs text-slate-300 font-medium">
                                    Unlock premium practice series
                                </span>
                            </div>

                            {/* arrow */}
                            <span className="relative z-10 text-2xl group-hover:translate-x-2 transition-all duration-300">
                                →
                            </span>

                        </button>

                    </div>
                    {subject=='physics' &&
                    <>
                        {physicsSheets?.map((el,index)=>(
                            <div
                            key={index}
                            className="group relative overflow-hidden rounded-[30px] bg-white border border-teal-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300 p-6 min-h-[300px]"
                            >

                            {/* top glow */}
                            <div className="absolute top-0 right-0 w-36 h-36 bg-teal-100 rounded-full blur-3xl opacity-40"></div>

                            {/* dots */}
                            <div className="absolute top-5 right-5 grid grid-cols-4 gap-1 opacity-40">
                                {[...Array(16)].map((_,i)=>(
                                    <span
                                    key={i}
                                    className="w-1 h-1 rounded-full bg-teal-400"
                                    ></span>
                                ))}
                            </div>

                            {/* bottom shape */}
                            <div className="absolute bottom-0 left-0 w-40 h-24 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-tr-[100px] opacity-70"></div>

                            {/* content */}
                            <div className="relative z-10 flex flex-col h-full">

                                {/* icon */}
                                <div className="w-20 h-20 rounded-[24px] bg-teal-100 flex items-center justify-center text-4xl mb-6 group-hover:scale-105 transition-all duration-300">
                                ⚡
                                </div>

                                {/* title */}
                                <h2 className="text-xl font-extrabold text-slate-800">
                                {el.chapter_name.replaceAll("_", " ")}
                                </h2>

                                {/* line */}
                                <div className="w-14 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-4"></div>

                                {/* desc */}
                                <p className="text-slate-500 text-sm leading-8 mt-5">
                                {exam} pattern practice test with conceptual questions.
                                </p>

                                {/* stats */}
                                <div className="grid grid-cols-2 gap-3 mt-6">

                                <div className="px-4 py-2 rounded-xl bg-teal-50 border border-teal-100">
                                    <p className="text-xs text-slate-500">Questions</p>
                                    <h3 className="text-lg font-bold text-teal-700">
                                    {el?.sheets[0]?.questions?.length}
                                    </h3>
                                </div>

                                <div className="px-4 py-2 rounded-xl bg-cyan-50 border border-cyan-100">
                                    <p className="text-xs text-slate-500">Duration</p>
                                    <h3 className="text-lg font-bold text-cyan-700">
                                    60 Min
                                    </h3>
                                </div>

                                <div className="px-4 col-span-2 py-2 rounded-xl bg-cyan-50 border border-cyan-100">
                                    <p className="text-xs text-slate-500">Difficulty level</p>
                                    <h3 className="text-sm font-bold text-cyan-700">
                                    4 Easy , 4 Medium, 4 Hard questions
                                    </h3>
                                </div>

                                </div>

                                {/* button */}
                                {/* <button className="cursor-pointer mt-1 w-full py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-bold shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 mt-8"
                                onClick={()=>ExtractedSheet(el._id)}
                                >
                                Start Test →
                                </button> */}
                                {el.attempted &&
                                    <button className="cursor-pointer mt-1 w-full py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-bold shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 mt-8"
                                    onClick={()=>viewSolutionFun(el._id)}
                                    >
                                    View solutions
                                    </button>
                                }
                                {!(el.attempted) &&
                                    <button className="cursor-pointer mt-1 w-full py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-bold shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 mt-8"
                                    onClick={()=>ExtractedSheet(el._id)}
                                    >
                                    Start test
                                    </button>
                                }

                            </div>
                            </div>

                        ))}
                    
                    </>
                    }

                    {subject=='chemistry' &&
                    <>
                        {chemistrySheets?.map((el,index)=>(
                            <div
                            key={index}
                            className="group relative overflow-hidden rounded-[30px] bg-white border border-teal-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300 p-6 min-h-[300px]"
                            >

                            {/* top glow */}
                            <div className="absolute top-0 right-0 w-36 h-36 bg-teal-100 rounded-full blur-3xl opacity-40"></div>

                            {/* dots */}
                            <div className="absolute top-5 right-5 grid grid-cols-4 gap-1 opacity-40">
                                {[...Array(16)].map((_,i)=>(
                                    <span
                                    key={i}
                                    className="w-1 h-1 rounded-full bg-teal-400"
                                    ></span>
                                ))}
                            </div>

                            {/* bottom shape */}
                            <div className="absolute bottom-0 left-0 w-40 h-24 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-tr-[100px] opacity-70"></div>

                            {/* content */}
                            <div className="relative z-10 flex flex-col h-full">

                                {/* icon */}
                                <div className="w-20 h-20 rounded-[24px] bg-teal-100 flex items-center justify-center text-4xl mb-6 group-hover:scale-105 transition-all duration-300">
                                ⚡
                                </div>

                                {/* title */}
                                <h2 className="text-xl font-extrabold text-slate-800">
                                {el.chapter_name.replaceAll("_", " ")}
                                </h2>

                                {/* line */}
                                <div className="w-14 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-4"></div>

                                {/* desc */}
                                <p className="text-slate-500 text-sm leading-8 mt-5">
                                {exam} pattern practice test with conceptual questions.
                                </p>

                                {/* stats */}
                                <div className="grid grid-cols-2 gap-3 mt-6">

                                <div className="px-4 py-2 rounded-xl bg-teal-50 border border-teal-100">
                                    <p className="text-xs text-slate-500">Questions</p>
                                    <h3 className="text-lg font-bold text-teal-700">
                                    {el?.sheets[0]?.questions?.length}
                                    </h3>
                                </div>

                                <div className="px-4 py-2 rounded-xl bg-cyan-50 border border-cyan-100">
                                    <p className="text-xs text-slate-500">Duration</p>
                                    <h3 className="text-lg font-bold text-cyan-700">
                                    60 Min
                                    </h3>
                                </div>

                                <div className="px-4 col-span-2 py-2 rounded-xl bg-cyan-50 border border-cyan-100">
                                    <p className="text-xs text-slate-500">Difficulty level</p>
                                    <h3 className="text-sm font-bold text-cyan-700">
                                    4 Easy , 4 Medium, 4 Hard questions
                                    </h3>
                                </div>

                                </div>

                                {/* button */}
                                <button className="cursor-pointer mt-1 w-full py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-bold shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 mt-8"
                                onClick={()=>ExtractedSheet(el._id)}
                                >
                                Start Test →
                                </button>

                            </div>
                            </div>

                        ))}
                    
                    </>
                    }

                    {subject=='maths' &&
                    <>
                        {mathsSheets?.map((el,index)=>(
                            <div
                            key={index}
                            className="group relative overflow-hidden rounded-[30px] bg-white border border-teal-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300 p-6 min-h-[300px]"
                            >

                            {/* top glow */}
                            <div className="absolute top-0 right-0 w-36 h-36 bg-teal-100 rounded-full blur-3xl opacity-40"></div>

                            {/* dots */}
                            <div className="absolute top-5 right-5 grid grid-cols-4 gap-1 opacity-40">
                                {[...Array(16)].map((_,i)=>(
                                    <span
                                    key={i}
                                    className="w-1 h-1 rounded-full bg-teal-400"
                                    ></span>
                                ))}
                            </div>

                            {/* bottom shape */}
                            <div className="absolute bottom-0 left-0 w-40 h-24 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-tr-[100px] opacity-70"></div>

                            {/* content */}
                            <div className="relative z-10 flex flex-col h-full">

                                {/* icon */}
                                <div className="w-20 h-20 rounded-[24px] bg-teal-100 flex items-center justify-center text-4xl mb-6 group-hover:scale-105 transition-all duration-300">
                                ⚡
                                </div>

                                {/* title */}
                                <h2 className="text-xl font-extrabold text-slate-800">
                                {el.chapter_name.replaceAll("_", " ")}
                                </h2>

                                {/* line */}
                                <div className="w-14 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-4"></div>

                                {/* desc */}
                                <p className="text-slate-500 text-sm leading-8 mt-5">
                                {exam} pattern practice test with conceptual questions.
                                </p>

                                {/* stats */}
                                <div className="grid grid-cols-2 gap-3 mt-6">

                                <div className="px-4 py-2 rounded-xl bg-teal-50 border border-teal-100">
                                    <p className="text-xs text-slate-500">Questions</p>
                                    <h3 className="text-lg font-bold text-teal-700">
                                    {el?.sheets[0]?.questions?.length}
                                    </h3>
                                </div>

                                <div className="px-4 py-2 rounded-xl bg-cyan-50 border border-cyan-100">
                                    <p className="text-xs text-slate-500">Duration</p>
                                    <h3 className="text-lg font-bold text-cyan-700">
                                    60 Min
                                    </h3>
                                </div>

                                <div className="px-4 col-span-2 py-2 rounded-xl bg-cyan-50 border border-cyan-100">
                                    <p className="text-xs text-slate-500">Difficulty level</p>
                                    <h3 className="text-sm font-bold text-cyan-700">
                                    4 Easy , 4 Medium, 4 Hard questions
                                    </h3>
                                </div>

                                </div>

                                {/* button */}
                                {el.attempted &&
                                    <button className="cursor-pointer mt-1 w-full py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-bold shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 mt-8"
                                    onClick={()=>viewSolutionFun(el._id)}
                                    >
                                    View solutions
                                    </button>
                                }
                                {!(el.attempted) &&
                                    <button className="cursor-pointer mt-1 w-full py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-bold shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 mt-8"
                                    onClick={()=>ExtractedSheet(el._id)}
                                    >
                                    Start test
                                    </button>
                                }

                            </div>
                            </div>

                        ))}
                    
                    </>
                    }
                    
                </div>
            }

        </div>
    )
}