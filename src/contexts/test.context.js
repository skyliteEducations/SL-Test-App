"use client";

import { createContext, useState } from "react";
import axios from "axios";

export const TestContext = createContext();

export const TestProvider = ({ children }) => {
    const [MathsTest, setMathsTest] = useState('')
    const [PhysicsTest, setPhysicsTest] = useState('')
    const [ChemistryTest, setChemistryTest] = useState('')
    const [fullTest, setFullTest] = useState([])
    const [Loading, setLoading] = useState(false)

    const loadQuestionPaper = async()=>{
        try {
            setLoading(true);

            const res = await axios.get(
            "http://localhost:5000/api/v1/paperBuild/maths-paper-to-frontend",
            {
                withCredentials: true, // ✅ MUST
            }
            );

            setLoading(false);

            if (res.data.status === "success") {
                console.log("Data",res.data)
                setMathsTest(MathsTest=> res.data)
                setPhysicsTest(PhysicsTest=> res.data)
                setChemistryTest(ChemistryTest=> res.data)
                setFullTest([[res.data, res.data, res.data]])
                return res.data.status; // ✅ correct
            } else {
                return null;
            }
        } catch (err) {
            setLoading(false);
            console.log(err);
            return null;
        }
    }


    return (
        <TestContext.Provider value={{loadQuestionPaper, MathsTest, PhysicsTest, ChemistryTest, fullTest }}>
          {children}
        </TestContext.Provider>
      );
}
