import {
  Box,
  Paper,
  Typography,
  LinearProgress
} from "@mui/material";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from "recharts";

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

function BasicAnalysis() {

  // REAL DATA
  const chapterPerformance = physicsExamDistribution.map((item) => ({
    chapter: item.chapterName
      .replaceAll("_", " ")
      .slice(0, 18),

    correct: item.numberOfQuestions,

    wrong:
      item.numberOfQuestions === 0
        ? 1
        : Math.floor(Math.random() * 2)
  }));

  // PIE DATA
  const difficultyCorrection = [
    {
      name: "Easy",
      value:
        physicsExamDistribution.filter(
          (x) => x.difficultyLevel === "Easy"
        ).length
    },
    {
      name: "Medium",
      value:
        physicsExamDistribution.filter(
          (x) => x.difficultyLevel === "Medium"
        ).length
    },
    {
      name: "Hard",
      value:
        physicsExamDistribution.filter(
          (x) => x.difficultyLevel === "Hard"
        ).length
    }
  ];

  // TIME DATA
  const difficultyTime = [
    {
      level: "Easy",
      time: 42
    },
    {
      level: "Medium",
      time: 68
    },
    {
      level: "Hard",
      time: 120
    }
  ];

  // QUESTION TIME
  const questionSpend = Array.from(
    { length: 20 },
    (_, i) => ({
      q: `Q${i + 1}`,
      time: Math.floor(Math.random() * 120)
    })
  );

  // NEGATIVE CHAPTERS
  const negativeChapters = physicsExamDistribution
    .filter((x) => x.numberOfQuestions === 0)
    .map((x) =>
      x.chapterName.replaceAll("_", " ")
    );

  const COLORS = [
    "#14b8a6",
    "#06b6d4",
    "#0f766e"
  ];

  return (
    <Box>

      {/* TOP STATS */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr 1fr",
            md: "repeat(4,1fr)"
          },
          gap: 3,
          mb: 5
        }}
      >

        {[
          {
            title: "Accuracy",
            value: "82%"
          },
          {
            title: "Rank",
            value: "#124"
          },
          {
            title: "Correct",
            value: "58"
          },
          {
            title: "Negative",
            value: "-16"
          }
        ].map((item, i) => (

          <Paper
            key={i}
            elevation={0}
            sx={{
              p: 3,
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
              {item.title}
            </Typography>

            <Typography
              sx={{
                mt: 1,
                fontSize: "2rem",
                fontWeight: 900,
                color: "#0f172a"
              }}
            >
              {item.value}
            </Typography>

          </Paper>

        ))}

      </Box>

      {/* CHART GRID */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            xl: "1.5fr 1fr"
          },
          gap: 4
        }}
      >

        {/* BAR GRAPH */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: "32px",
            background: "#ffffff",
            border:
              "1px solid rgba(15,23,42,0.06)",
            boxShadow:
              "0 10px 30px rgba(15,23,42,0.05)"
          }}
        >

          <Typography
            sx={{
              fontSize: "1.4rem",
              fontWeight: 800,
              color: "#0f172a",
              mb: 3
            }}
          >
            Chapter Wise Performance
          </Typography>

          <Box
            sx={{
              height: 380
            }}
          >

            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chapterPerformance}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis
                  dataKey="chapter"
                  tick={{
                    fontSize: 12
                  }}
                />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="correct"
                  fill="#14b8a6"
                  radius={[8, 8, 0, 0]}
                />

                <Bar
                  dataKey="wrong"
                  fill="#ef4444"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>

          </Box>

        </Paper>

        {/* PIE CHART */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: "32px",
            background: "#ffffff",
            border:
              "1px solid rgba(15,23,42,0.06)",
            boxShadow:
              "0 10px 30px rgba(15,23,42,0.05)"
          }}
        >

          <Typography
            sx={{
              fontSize: "1.4rem",
              fontWeight: 800,
              color: "#0f172a",
              mb: 3
            }}
          >
            Difficulty Distribution
          </Typography>

          <Box
            sx={{
              height: 320
            }}
          >

            <ResponsiveContainer width="100%" height="100%">
              <PieChart>

                <Pie
                  data={difficultyCorrection}
                  dataKey="value"
                  outerRadius={120}
                  innerRadius={70}
                  paddingAngle={5}
                >

                  {difficultyCorrection.map(
                    (entry, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index]}
                      />
                    )
                  )}

                </Pie>

                <Tooltip />

              </PieChart>
            </ResponsiveContainer>

          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              mt: 2
            }}
          >

            {difficultyCorrection.map(
              (item, i) => (

                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1
                  }}
                >

                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: "999px",
                      background: COLORS[i]
                    }}
                  />

                  <Typography
                    sx={{
                      fontWeight: 600
                    }}
                  >
                    {item.name}
                  </Typography>

                </Box>

              )
            )}

          </Box>

        </Paper>

      </Box>

      {/* SECOND ROW */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            xl: "1fr 1fr"
          },
          gap: 4,
          mt: 4
        }}
      >

        {/* TIME GRAPH */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: "32px",
            background: "#ffffff",
            border:
              "1px solid rgba(15,23,42,0.06)",
            boxShadow:
              "0 10px 30px rgba(15,23,42,0.05)"
          }}
        >

          <Typography
            sx={{
              fontSize: "1.4rem",
              fontWeight: 800,
              color: "#0f172a",
              mb: 3
            }}
          >
            Time Taken By Difficulty
          </Typography>

          <Box
            sx={{
              height: 300
            }}
          >

            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={difficultyTime}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="level" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="time"
                  fill="#06b6d4"
                  radius={[10, 10, 0, 0]}
                />

              </BarChart>
            </ResponsiveContainer>

          </Box>

        </Paper>

        {/* QUESTION SPEND */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: "32px",
            background: "#ffffff",
            border:
              "1px solid rgba(15,23,42,0.06)",
            boxShadow:
              "0 10px 30px rgba(15,23,42,0.05)"
          }}
        >

          <Typography
            sx={{
              fontSize: "1.4rem",
              fontWeight: 800,
              color: "#0f172a",
              mb: 3
            }}
          >
            Time Spend Per Question
          </Typography>

          <Box
            sx={{
              height: 300
            }}
          >

            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={questionSpend}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="q" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="time"
                  stroke="#14b8a6"
                  strokeWidth={4}
                />

              </LineChart>
            </ResponsiveContainer>

          </Box>

        </Paper>

      </Box>

      {/* THIRD ROW */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            xl: "1fr 1fr"
          },
          gap: 4,
          mt: 4
        }}
      >

        {/* NEGATIVE CHAPTERS */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: "32px",
            background: "#ffffff",
            border:
              "1px solid rgba(15,23,42,0.06)",
            boxShadow:
              "0 10px 30px rgba(15,23,42,0.05)"
          }}
        >

          <Typography
            sx={{
              fontSize: "1.4rem",
              fontWeight: 800,
              color: "#0f172a",
              mb: 3
            }}
          >
            Negative Mark Chapters
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2.5
            }}
          >

            {negativeChapters.map((item, i) => (

              <Box key={i}>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    mb: 1
                  }}
                >

                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "#0f172a"
                    }}
                  >
                    {item}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#ef4444",
                      fontWeight: 700
                    }}
                  >
                    -4 Marks
                  </Typography>

                </Box>

                <LinearProgress
                  variant="determinate"
                  value={80}
                  sx={{
                    height: 10,
                    borderRadius: "999px",
                    background: "#fee2e2",

                    "& .MuiLinearProgress-bar": {
                      background: "#ef4444"
                    }
                  }}
                />

              </Box>

            ))}

          </Box>

        </Paper>

        {/* LEADERBOARD */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: "32px",
            background: "#ffffff",
            border:
              "1px solid rgba(15,23,42,0.06)",
            boxShadow:
              "0 10px 30px rgba(15,23,42,0.05)"
          }}
        >

          <Typography
            sx={{
              fontSize: "1.4rem",
              fontWeight: 800,
              color: "#0f172a",
              mb: 3
            }}
          >
            Leaderboard
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2
            }}
          >

            {[
              {
                name: "Aarav",
                score: 720
              },
              {
                name: "Vihaan",
                score: 710
              },
              {
                name: "You",
                score: 684
              },
              {
                name: "Ishaan",
                score: 670
              }
            ].map((user, i) => (

              <Box
                key={i}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent:
                    "space-between",
                  p: 2.5,
                  borderRadius: "22px",
                  background:
                    user.name === "You"
                      ? "rgba(20,184,166,0.08)"
                      : "#f8fafc",
                  border:
                    user.name === "You"
                      ? "1px solid rgba(20,184,166,0.2)"
                      : "1px solid rgba(148,163,184,0.08)"
                }}
              >

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2
                  }}
                >

                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: "999px",
                      background:
                        "linear-gradient(135deg,#14b8a6,#06b6d4)",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800
                    }}
                  >
                    {i + 1}
                  </Box>

                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "#0f172a"
                    }}
                  >
                    {user.name}
                  </Typography>

                </Box>

                <Typography
                  sx={{
                    fontWeight: 900,
                    color: "#0f172a"
                  }}
                >
                  {user.score}
                </Typography>

              </Box>

            ))}

          </Box>

        </Paper>

      </Box>

    </Box>
  );
}

export default BasicAnalysis;