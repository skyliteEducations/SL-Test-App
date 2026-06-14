"use client";

import { createContext, useState, useRef } from "react";
import axios from "axios";
import AlertPeep from "@/app/utility/alert";
export const ChapterSubmitContext = createContext();

export const ChapterSubmitProvider = ({ children }) => {
    const [Loading, setLoading] = useState(false)
    const [headerCreds, setHeaderCreds] = useState({
        chapter_name : "",
        subject : ""
    })
    const [questions, setQuestions] = useState([])
    const [calculations, setCalculations] = useState({
        score : "",
        correct : "",
        wrong : "",
        skipped : "",
        accuracy : ""
    })

    const calculationFun = async (subject) => {
        try {
            let questions = [];

            if (subject === "maths") {
            questions =
                JSON.parse(
                localStorage.getItem(
                    "Maths_chapterwise_active_submitted_sheet"
                )
                ) || [];
            }

            let correct = 0;
            let wrong = 0;
            let skipped = 0;

            questions.forEach((question) => {
            const marked = question?.OptionMarked;
            const correctOption = question?.correctOption;

            if(marked==''){
                skipped++;
            }else if(marked === correctOption){
                correct++;
            }else if(marked != correctOption){
                wrong++;
            }

            });

            const score = correct * 4 - wrong * 1;

            const attempted = correct + wrong;

            const accuracy =
            attempted > 0
                ? ((correct / attempted) * 100).toFixed(2)
                : 0;

            setCalculations({
            score,
            correct,
            wrong,
            skipped,
            accuracy,
            });
        } catch (error) {
            console.log(error);
        }
        };

    const ExtarctionSheetOnMounting = async (sheetId, chapter_name, subject) => {
        setLoading(Loading=> true)
        if(subject == 'physics'){

            try {
                const res = await axios.post(
                    `${process.env.NEXT_PUBLIC_ENVIRONMENT=='Development' ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL : process.env.NEXT_PUBLIC_BASE_URL_PROD }/api/v1/tests/physics-chapterwise-sheet-sending`,
                    {sheetId,submit:true},
                    {
                        withCredentials : true
                    }
                );
                console.log("full sheet : ", res.data)
                localStorage.setItem("Physics_chapterwise_active_submitted_sheet", JSON.stringify(res.data.sheet))
                localStorage.setItem("Physics_chapterwise_active_submitted_sheet_name", chapter_name)
                setHeaderCreds(headerCreds => ({
                    chapter_name: chapter_name,
                    subject: subject
                }));
                setQuestions(questions=> JSON.parse(localStorage.getItem("Physics_chapterwise_active_submitted_sheet")))
                setLoading(Loading=> false)
                // setPhysicsSheets(physicsSheets=> res.data.sheets)
                return res.data;
            } catch (error) {
                console.error("Error fetching chapters:", error);
                setLoading(Loading=> false)
    
                return null;
            }
        }else if(subject == 'chemistry'){
            try {
                const res = await axios.post(
                    `${process.env.NEXT_PUBLIC_ENVIRONMENT=='Development' ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL : process.env.NEXT_PUBLIC_BASE_URL_PROD }/api/v1/tests/chemistry-chapterwise-sheet-sending`,
                    {sheetId, submit:true},
                    {
                        withCredentials : true
                    }
                );
                console.log("full sheet : ", res.data)
                localStorage.setItem("Chemistry_chapterwise_active_submitted_sheet", JSON.stringify(res.data.sheet))
                localStorage.setItem("Chemistry_chapterwise_active_submitted_sheet_name", chapter_name)
                setHeaderCreds(headerCreds => ({
                    chapter_name: chapter_name,
                    subject: subject
                }));
                setQuestions(questions=> JSON.parse(localStorage.getItem("Physics_chapterwise_active_submitted_sheet")))

                setLoading(Loading=> false)
    
                // setPhysicsSheets(physicsSheets=> res.data.sheets)
                return res.data;
            } catch (error) {
                console.error("Error fetching chapters:", error);
                setLoading(Loading=> false)
    
                return null;
            }
        }else if(subject=='maths'){
            try {
                const res = await axios.post(
                    `${process.env.NEXT_PUBLIC_ENVIRONMENT=='Development' ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL : process.env.NEXT_PUBLIC_BASE_URL_PROD }/api/v1/tests/maths-chapterwise-sheet-sending`,
                    {sheetId, submit:true},
                    {
                        withCredentials : true
                    }
                );
                console.log("full sheet : ", res.data)
                localStorage.setItem("Maths_chapterwise_active_submitted_sheet", JSON.stringify(res.data.sheet))
                localStorage.setItem("Maths_chapterwise_active_submitted_sheet_name", chapter_name)
                setHeaderCreds(headerCreds => ({
                    chapter_name: chapter_name,
                    subject: subject
                }));
                setQuestions(questions=> JSON.parse(localStorage.getItem("Maths_chapterwise_active_submitted_sheet")))

                setLoading(Loading=> false)
    
                // setPhysicsSheets(physicsSheets=> res.data.sheets)
                return res.data;
            } catch (error) {
                console.error("Error fetching chapters:", error);
                setLoading(Loading=> false)
    
                return null;
            }
        }
    };

    return (
        <ChapterSubmitContext.Provider value={{ ExtarctionSheetOnMounting , Loading, headerCreds, questions, calculationFun, calculations}}>
            {children}
        </ChapterSubmitContext.Provider>
    );
}
