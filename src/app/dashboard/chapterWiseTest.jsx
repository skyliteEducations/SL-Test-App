import React, { useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  Button
} from "@mui/material";
import ScienceIcon from '@mui/icons-material/Science';

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

const physicsExamDistribution = [
  { chapterName: 'Alternating_Current', difficultyLevel: 'Medium', numberOfQuestions: 1 },
  { chapterName: 'Electromagnetic_Induction', difficultyLevel: 'Hard', numberOfQuestions: 1 },
  { chapterName: 'Current_Electricity', difficultyLevel: 'Medium', numberOfQuestions: 2 },
  { chapterName: 'Wave_Optics', difficultyLevel: 'Hard', numberOfQuestions: 1 },
  { chapterName: 'Electrostatics', difficultyLevel: 'Easy', numberOfQuestions: 2 },
  { chapterName: 'Properties_of_Solids___Fluids', difficultyLevel: 'Easy', numberOfQuestions: 1 },
  { chapterName: 'Gravitation', difficultyLevel: 'Medium', numberOfQuestions: 1 },
  { chapterName: 'Kinematics', difficultyLevel: 'Easy', numberOfQuestions: 2 },
  { chapterName: 'Kinetic_Theory_of_Gases', difficultyLevel: 'Medium', numberOfQuestions: 1 },
  { chapterName: 'Laws_of_Motion', difficultyLevel: 'Easy', numberOfQuestions: 1 },
  { chapterName: 'Magnetic_Effects_of_Current___Magnetism', difficultyLevel: 'Hard', numberOfQuestions: 1 },
  { chapterName: 'Dual_Nature_of_Radiation___Matter__Atoms___Nuclei', difficultyLevel: 'Hard', numberOfQuestions: 1 },
  { chapterName: 'Communication_Systems__Semiconductor_Electronics', difficultyLevel: 'Easy', numberOfQuestions: 1 },
  { chapterName: 'Oscillations__Simple_Harmonic_Motion', difficultyLevel: 'Medium', numberOfQuestions: 1 },
  { chapterName: 'Thermal_Properties_of_Matter__Thermodynamics', difficultyLevel: 'Hard', numberOfQuestions: 2 },
  { chapterName: 'Work_Energy_and_Power', difficultyLevel: 'Medium', numberOfQuestions: 1 },
];

const ChemistryExamDistribution = [
  { chapterName: 'Some Basic Concepts and Mole Concept', difficultyLevel: 'Easy',   numberOfQuestions: 1 },
  { chapterName: 'Redox Reactions',                      difficultyLevel: 'Medium', numberOfQuestions: 1 },
  { chapterName: 'Stoichiometry',                        difficultyLevel: 'Medium', numberOfQuestions: 1 },
  { chapterName: 'Atomic Structure',                     difficultyLevel: 'Easy',   numberOfQuestions: 1 },
  { chapterName: 'States of Matter',                     difficultyLevel: 'Hard',   numberOfQuestions: 1 },
  { chapterName: 'Thermodynamics',                       difficultyLevel: 'Hard',   numberOfQuestions: 1 },
  { chapterName: 'Chemical Equilibrium',                 difficultyLevel: 'Medium', numberOfQuestions: 1 },
  { chapterName: 'Ionic Equilibrium',                    difficultyLevel: 'Hard',   numberOfQuestions: 0 },
  { chapterName: 'Solid State',                          difficultyLevel: 'Easy',   numberOfQuestions: 0 },
  { chapterName: 'Solutions',                            difficultyLevel: 'Medium', numberOfQuestions: 0 },
  { chapterName: 'Classification of Elements and Periodicity in Properties', difficultyLevel: 'Medium', numberOfQuestions: 1 },
  { chapterName: 'Redox Reactions', difficultyLevel: 'Medium', numberOfQuestions: 1 },
  { chapterName: 'Hydrogen', difficultyLevel: 'Easy', numberOfQuestions: 1 },
  { chapterName: 'The s-block Elements', difficultyLevel: 'Hard', numberOfQuestions: 1 },
  { chapterName: 'The p-block Elements-11', difficultyLevel: 'Medium', numberOfQuestions: 1 },
  { chapterName: 'Coordination Compounds', difficultyLevel: 'Hard', numberOfQuestions: 1 },
  { chapterName: 'The d- and f-block Elements', difficultyLevel: 'Hard', numberOfQuestions: 1 },
  { chapterName: 'The p-block Elements-12', difficultyLevel: 'Medium', numberOfQuestions: 0 },
  { chapterName: 'Families of Carbon Compounds Functional Groups and Intermole', difficultyLevel: 'Easy',   numberOfQuestions: 1 },
  { chapterName: 'The Basics Bonding and Molecular Structure',                   difficultyLevel: 'Medium', numberOfQuestions: 1 },
  { chapterName: 'An Introduction to Organic Reactions and Their Mechanisms Ac', difficultyLevel: 'Hard',   numberOfQuestions: 1 },
  { chapterName: 'Stereochemistry Chiral Molecules',                             difficultyLevel: 'Easy',   numberOfQuestions: 1 },
  { chapterName: 'Nomenclature and Conformations of Alkanes and Cycloalkanes',   difficultyLevel: 'Medium', numberOfQuestions: 1 },
  { chapterName: 'Ionic Reactions Nucleophilic Substitution and Elimination Reactions of Alkyl Halides', difficultyLevel: 'Hard', numberOfQuestions: 1 },
  { chapterName: 'Alkenes and Alkynes I Properties and Synthesis Elimination Reactions of Alkyl Halides', difficultyLevel: 'Easy', numberOfQuestions: 0 },
  { chapterName: 'Alkenes and Alkynes II Addition Reactions',                    difficultyLevel: 'Medium', numberOfQuestions: 0 },
  { chapterName: 'Radical Reactions',                                            difficultyLevel: 'Hard',   numberOfQuestions: 0 },
  { chapterName: 'Alcohols and Ethers Synthesis and Reactions',                  difficultyLevel: 'Easy',   numberOfQuestions: 0 },
  { chapterName: 'Alcohols from Carbonyl Compounds OxidationReduction and Orga', difficultyLevel: 'Medium', numberOfQuestions: 0 },
  { chapterName: 'Conjugated Unsaturated Systems',                               difficultyLevel: 'Hard',   numberOfQuestions: 0 },
  { chapterName: 'Aromatic Compounds',                                           difficultyLevel: 'Easy',   numberOfQuestions: 0 },
  { chapterName: 'Reactions of Aromatic Compounds',                              difficultyLevel: 'Medium', numberOfQuestions: 0 },
  { chapterName: 'Aldehydes and Ketones I Nucleophilic Addition to the Carbony', difficultyLevel: 'Hard',   numberOfQuestions: 0 },
  { chapterName: 'Aldehydes and Ketones II Aldol Reactions',                     difficultyLevel: 'Easy',   numberOfQuestions: 0 },
  { chapterName: 'Carboxylic Acids and Their Derivatives',                       difficultyLevel: 'Medium', numberOfQuestions: 0 },
  { chapterName: 'Amines',                                                       difficultyLevel: 'Hard',   numberOfQuestions: 0 },
  { chapterName: 'Phenols and Aryl Halides',                                     difficultyLevel: 'Easy',   numberOfQuestions: 0 },
  { chapterName: 'Carbohydrates',                                                difficultyLevel: 'Medium', numberOfQuestions: 0 },
  { chapterName: 'Amino Acids and Proteins',                                     difficultyLevel: 'Hard',   numberOfQuestions: 0 },
  { chapterName: 'Carbene and Carbenoids',                                       difficultyLevel: 'Easy',   numberOfQuestions: 0 },
  { chapterName: 'Reactions of Nitrene and Electron Deficient Oxygen',           difficultyLevel: 'Medium', numberOfQuestions: 0 },
  { chapterName: 'Polymers',                                                     difficultyLevel: 'Hard',   numberOfQuestions: 0 },

]


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

    const [subject, setSubject] = useState('physics')
    const [exam, setExam] = useState('IITJEE')
    const [innerView, setInnerView] = useState({
        view : false,
        name : ""
    })

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
    }

    return(
        <div className="h-full w-full bg-white p-4 overflow-scroll overflow-x-hidden">
            <div className="flex items-center gap-4">
                <button onClick={switchToPhysics} className={subject == 'physics' ? "relative z-10 mt-auto px-8 py-2 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-md font-bold shadow-lg hover:shadow-2xl transition-all duration-300" : "relative z-10 mt-auto px-8 py-2 rounded-2xl border-2 border-teal-500 text-teal-600 text-lg font-bold bg-white hover:bg-teal-500 hover:text-white shadow-md hover:shadow-2xl  transition-all duration-300"}>
                    Physics
                </button>

                <button onClick={switchToChemistry} className={subject == 'chemistry' ? "relative z-10 mt-auto px-8 py-2 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-md font-bold shadow-lg  hover:shadow-2xl transition-all duration-300" : "relative z-10 mt-auto px-8 py-2 rounded-2xl border-2 border-teal-500 text-teal-600 text-lg font-bold bg-white hover:bg-teal-500 hover:text-white shadow-md hover:shadow-2xl transition-all duration-300"}>
                    Chemistry
                </button>

                {exam == 'IITJEE' &&
                    <button onClick={switchToMaths} className={subject == 'maths' ? "relative z-10 mt-auto px-8 py-2 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-md font-bold shadow-lg  hover:shadow-2xl transition-all duration-300" : "relative z-10 mt-auto px-8 py-2 rounded-2xl border-2 border-teal-500 text-teal-600 text-lg font-bold bg-white hover:bg-teal-500 hover:text-white shadow-md hover:shadow-2xl transition-all duration-300"}>
                        Mathematics
                    </button>
                }
                {exam == 'NEET' &&
                    <button onClick={switchToBiology} className={subject == 'biology' ? "relative z-10 mt-auto px-8 py-2 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-md font-bold shadow-lg  hover:shadow-2xl transition-all duration-300" : "relative z-10 mt-auto px-8 py-2 rounded-2xl border-2 border-teal-500 text-teal-600 text-lg font-bold bg-white hover:bg-teal-500 hover:text-white shadow-md hover:shadow-2xl transition-all duration-300"}>
                        Biology
                    </button>
                }
            </div>
            <hr className="my-6 border-0 h-[2px] bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full shadow-md" />

            {(subject=='maths' && exam=='IITJEE' && !innerView.view) &&
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-[#f5f7f9] rounded-xl">
                    {mathsExamDistribution.map((el, index) => (
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
                    {physicsExamDistribution.map((el, index) => (
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

            {(subject=='chemistry' && !innerView.view) &&
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-[#f5f7f9] rounded-xl">
                    {ChemistryExamDistribution.map((el, index) => (
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
                    {[1,2,3].map((el,index)=>(
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
                            {innerView.name} - {el}
                            </h2>

                            {/* line */}
                            <div className="w-14 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-4"></div>

                            {/* desc */}
                            <p className="text-slate-500 text-sm leading-8 mt-5">
                            {exam} pattern practice test with conceptual questions.
                            </p>

                            {/* stats */}
                            <div className="flex gap-3 mt-6">

                            <div className="px-4 py-2 rounded-xl bg-teal-50 border border-teal-100">
                                <p className="text-xs text-slate-500">Questions</p>
                                <h3 className="text-lg font-bold text-teal-700">
                                45
                                </h3>
                            </div>

                            <div className="px-4 py-2 rounded-xl bg-cyan-50 border border-cyan-100">
                                <p className="text-xs text-slate-500">Duration</p>
                                <h3 className="text-lg font-bold text-cyan-700">
                                60 Min
                                </h3>
                            </div>

                            </div>

                            {/* button */}
                            <button className="cursor-pointer mt-1 w-full py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-bold shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 mt-8">
                            Start Test →
                            </button>

                        </div>
                        </div>

                    ))}


                    
                </div>
            }

        </div>
    )
}