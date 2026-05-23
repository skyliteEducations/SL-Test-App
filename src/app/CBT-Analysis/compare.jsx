import {
  Box,
  Paper,
  Typography,
  Tabs,
  Tab
} from "@mui/material";

import { useMemo, useState } from "react";

/*
DATA USED
physicsExamDistribution
ChemistryExamDistribution
mathsExamDistribution
*/

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
function TestToTestComparison() {

  const [subject, setSubject] =
    useState("Physics");

  const subjectMap = {
    Physics: physicsExamDistribution,
    Chemistry:
      ChemistryExamDistribution,
    Mathematics:
      mathsExamDistribution
  };

  const currentData =
    subjectMap[subject];

  // GENERATE TEST HISTORY
  const generateTestHistory = (
    chapter,
    difficulty,
    totalQuestions
  ) => {

    return {
      test1: {
        easy:
          difficulty === "Easy"
            ? `${Math.max(
                totalQuestions - 1,
                0
              )}/2`
            : "-",

        medium:
          difficulty === "Medium"
            ? `${totalQuestions}/2`
            : "-",

        hard:
          difficulty === "Hard"
            ? `${Math.max(
                totalQuestions - 1,
                0
              )}/2`
            : "-"
      },

      test2: {
        easy:
          difficulty === "Easy"
            ? `${totalQuestions}/2`
            : "-",

        medium:
          difficulty === "Medium"
            ? `${Math.max(
                totalQuestions - 1,
                0
              )}/2`
            : "-",

        hard:
          difficulty === "Hard"
            ? `${totalQuestions}/2`
            : "-"
      },

      test3: {
        easy:
          difficulty === "Easy"
            ? `${totalQuestions}/2`
            : "-",

        medium:
          difficulty === "Medium"
            ? `${totalQuestions}/2`
            : "-",

        hard:
          difficulty === "Hard"
            ? `${Math.max(
                totalQuestions - 1,
                0
              )}/2`
            : "-"
      }
    };
  };

  // SUMMARY
  const summary = useMemo(() => {

    const total =
      currentData.length;

    const strong =
      currentData.filter(
        (x) =>
          x.numberOfQuestions >= 1
      ).length;

    const weak =
      currentData.filter(
        (x) =>
          x.numberOfQuestions === 0
      ).length;

    const hardWeak =
      currentData.filter(
        (x) =>
          x.difficultyLevel ===
            "Hard" &&
          x.numberOfQuestions === 0
      ).length;

    return {
      total,
      strong,
      weak,
      hardWeak
    };

  }, [currentData]);

  return (
    <Box>

      {/* HEADER */}
      <Box mb={5}>

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
          Test To Test Comparison
        </Typography>

        <Typography
          sx={{
            mt: 1.5,
            color: "#64748b",
            fontSize: "1rem",
            lineHeight: 1.8,
            maxWidth: "760px"
          }}
        >
          Analyze chapter wise
          progression across multiple
          tests and track performance
          improvement difficulty wise.
        </Typography>

      </Box>

      {/* SUBJECT TABS */}
      <Paper
        elevation={0}
        sx={{
          mb: 4,
          p: 1,
          borderRadius: "22px",
          width: "fit-content",
          border:
            "1px solid rgba(15,23,42,0.06)",
          boxShadow:
            "0 8px 24px rgba(15,23,42,0.04)"
        }}
      >

        <Tabs
          value={subject}
          onChange={(e, val) =>
            setSubject(val)
          }
          TabIndicatorProps={{
            style: {
              display: "none"
            }
          }}
        >

          {[
            "Physics",
            "Chemistry",
            "Mathematics"
          ].map((sub) => (

            <Tab
              key={sub}
              value={sub}
              label={sub}
              sx={{
                textTransform: "none",
                fontWeight: 800,
                borderRadius: "16px",
                minHeight: "48px",
                px: 3,

                color:
                  subject === sub
                    ? "#ffffff"
                    : "#0f172a",

                background:
                  subject === sub
                    ? "linear-gradient(135deg,#14b8a6,#0891b2)"
                    : "transparent",

                "&.Mui-selected": {
                  color: "#ffffff"
                }
              }}
            />

          ))}

        </Tabs>

      </Paper>

      {/* ADVANCED TABLE */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: "34px",
          border:
            "1px solid rgba(15,23,42,0.06)",
          boxShadow:
            "0 15px 40px rgba(15,23,42,0.05)",
          overflow: "hidden"
        }}
      >

        {/* SCROLL AREA */}
        <Box
          sx={{
            overflowX: "auto",
            overflowY: "auto",
            maxHeight: "100vh",
            position: "relative",

            "&::-webkit-scrollbar": {
              width: "10px",
              height: "10px"
            },

            "&::-webkit-scrollbar-thumb":
              {
                background:
                  "linear-gradient(135deg,#14b8a6,#0891b2)",
                borderRadius: "999px"
              },

            "&::-webkit-scrollbar-track":
              {
                background: "#f1f5f9"
              }
          }}
        >

          <Box
            sx={{
              minWidth: "1800px"
            }}
          >

            {/* HEADER */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns:
                  "360px repeat(9,1fr)",
                position: "sticky",
                top: 0,
                zIndex: 50,
                background:
                  "linear-gradient(135deg,#14b8a6,#0891b2)",
                color: "white"
              }}
            >

              {/* FIXED COLUMN */}
              <Box
                sx={{
                  p: 3,
                  fontWeight: 900,
                  fontSize: "1rem",
                  position: "sticky",
                  left: 0,
                  zIndex: 60,
                  background:
                    "linear-gradient(135deg,#14b8a6,#0891b2)",
                  borderRight:
                    "1px solid rgba(255,255,255,0.12)"
                }}
              >
                Chapters
              </Box>

              {[
                "Test 1 Easy",
                "Test 1 Medium",
                "Test 1 Hard",

                "Test 2 Easy",
                "Test 2 Medium",
                "Test 2 Hard",

                "Test 3 Easy",
                "Test 3 Medium",
                "Test 3 Hard"
              ].map((head, i) => (

                <Box
                  key={i}
                  sx={{
                    p: 3,
                    textAlign: "center",
                    fontWeight: 800,
                    fontSize: "0.92rem",
                    whiteSpace: "nowrap",
                    borderRight:
                      i !== 8
                        ? "1px solid rgba(255,255,255,0.12)"
                        : "none"
                  }}
                >
                  {head}
                </Box>

              ))}

            </Box>

            {/* ROWS */}
            {currentData.map(
              (chapter, index) => {

                const tests =
                  generateTestHistory(
                    chapter.chapterName,
                    chapter.difficultyLevel,
                    chapter.numberOfQuestions
                  );

                const cells = [
                  tests.test1.easy,
                  tests.test1.medium,
                  tests.test1.hard,

                  tests.test2.easy,
                  tests.test2.medium,
                  tests.test2.hard,

                  tests.test3.easy,
                  tests.test3.medium,
                  tests.test3.hard
                ];

                return (
                  <Box
                    key={index}
                    sx={{
                      display: "grid",
                      gridTemplateColumns:
                        "360px repeat(9,1fr)",
                      borderTop:
                        "1px solid rgba(148,163,184,0.08)",

                      transition: "0.25s",

                      "&:hover": {
                        background:
                          "rgba(20,184,166,0.03)"
                      }
                    }}
                  >

                    {/* FIXED CHAPTER COLUMN */}
                    <Box
                      sx={{
                        p: 3,
                        position:
                          "sticky",
                        left: 0,
                        zIndex: 20,
                        background:
                          "#ffffff",
                        borderRight:
                          "1px solid rgba(148,163,184,0.08)",
                        display: "flex",
                        alignItems:
                          "center"
                      }}
                    >

                      <Box>

                        <Typography
                          sx={{
                            fontWeight: 800,
                            color:
                              "#0f172a",
                            lineHeight: 1.6,
                            fontSize:
                              "0.95rem"
                          }}
                        >
                          {chapter.chapterName.replaceAll(
                            "_",
                            " "
                          )}
                        </Typography>

                        <Typography
                          sx={{
                            mt: 1,
                            color:
                              "#64748b",
                            fontSize:
                              "0.82rem",
                            fontWeight: 600
                          }}
                        >
                          {
                            chapter.difficultyLevel
                          }{" "}
                          •{" "}
                          {
                            chapter.numberOfQuestions
                          }{" "}
                          Questions
                        </Typography>

                      </Box>

                    </Box>

                    {/* TEST CELLS */}
                    {cells.map(
                      (val, cellIndex) => {

                        const isGood =
                          val !==
                            "-" &&
                          parseInt(
                            val.split(
                              "/"
                            )[0]
                          ) >= 1;

                        return (
                          <Box
                            key={cellIndex}
                            sx={{
                              p: 2.5,
                              display:
                                "flex",
                              alignItems:
                                "center",
                              justifyContent:
                                "center",
                              borderRight:
                                "1px solid rgba(148,163,184,0.08)"
                            }}
                          >

                            <Box
                              sx={{
                                minWidth:
                                  "90px",
                                py: 1.1,
                                px: 1.5,
                                borderRadius:
                                  "16px",
                                textAlign:
                                  "center",
                                fontWeight: 800,
                                fontSize:
                                  "0.88rem",

                                background:
                                  val ===
                                  "-"
                                    ? "#f8fafc"
                                    : isGood
                                    ? "rgba(34,197,94,0.12)"
                                    : "rgba(239,68,68,0.12)",

                                color:
                                  val ===
                                  "-"
                                    ? "#94a3b8"
                                    : isGood
                                    ? "#15803d"
                                    : "#dc2626"
                              }}
                            >
                              {val}
                            </Box>

                          </Box>
                        );
                      }
                    )}

                  </Box>
                );
              }
            )}

          </Box>

        </Box>

      </Paper>

      {/* SUMMARY */}
      <Box
        sx={{
          mt: 5,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(4,1fr)"
          },
          gap: 3
        }}
      >

        {[
          {
            label:
              "Total Chapters",
            value: summary.total,
            color: "#0f172a"
          },

          {
            label:
              "Strong Chapters",
            value: summary.strong,
            color: "#16a34a"
          },

          {
            label:
              "Weak Chapters",
            value: summary.weak,
            color: "#dc2626"
          },

          {
            label:
              "Hard Topic Weakness",
            value: summary.hardWeak,
            color: "#ea580c"
          }
        ].map((item, i) => (

          <Paper
            key={i}
            elevation={0}
            sx={{
              p: 4,
              borderRadius: "28px",
              background: "#ffffff",
              border:
                "1px solid rgba(15,23,42,0.06)",
              boxShadow:
                "0 10px 30px rgba(15,23,42,0.05)"
            }}
          >

            <Typography
              sx={{
                color: "#64748b",
                fontSize: "0.9rem"
              }}
            >
              {item.label}
            </Typography>

            <Typography
              sx={{
                mt: 1,
                fontWeight: 900,
                fontSize: "2.4rem",
                color: item.color
              }}
            >
              {item.value}
            </Typography>

          </Paper>

        ))}

      </Box>

    </Box>
  );
}

export default TestToTestComparison;