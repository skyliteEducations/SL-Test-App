"use client";

import { createContext, useState } from "react";
import axios from "axios";
import AlertPeep from "@/app/utility/alert";
export const ChapterTestContext = createContext();

export const ChapterTestProvider = ({ children }) => {

    const [Loading, setLoading] = useState(false)
    const [currentSheet, setCurrentSheet] = useState([])
    const [currentSheetName, setCurrentSheetName] = useState('')

    const [currentQuestion, setCurrentQuestion] = useState({})
    
    const [currentQuestionOptions, setCurrentQuestionOptions] = useState({})
    const [currentQuestionDiagrams, setCurrentQuestionDiagrams] = useState([])

    const [renderQuestionNumber, setRenderQuestionNumber] = useState(1)

    const fetchingCurrentSheet= async(subject)=>{
        try{
            let sheet = []
            let sheet_name = ''
            if(subject == 'physics'){
                sheet = JSON.parse(localStorage.getItem("Physics_chapterwise_active_sheet"))
                sheet_name = localStorage.getItem("Physics_chapterwise_active_sheet_name")
            }
            setCurrentSheet(currentSheet=> sheet)
            setCurrentQuestion(currentQuestion=> sheet[0])
            setCurrentQuestionOptions(currentQuestionOptions=> sheet[0])
            setCurrentQuestionDiagrams(currentQuestionDiagrams=> sheet[0])
            setCurrentSheetName(currentSheetName=> sheet_name)
        }catch(error){
            console.error("Error fetching chapters:", error);

        }
    }

    const questionChangingByNumberPress = async(question_number, sheet)=>{
        try{

            const question = sheet[question_number-1]
            setCurrentQuestion(currentQuestion=> question)
            setCurrentQuestionOptions(currentQuestionOptions=> question)
            setCurrentQuestionDiagrams(currentQuestionDiagrams=> question)
            setRenderQuestionNumber(renderQuestionNumber=> question_number)
        }catch(error){

        }
    }

    const nextQuestionMove = async(question_number,sheet)=>{
        try{
            const question = sheet[question_number]
            setCurrentQuestion(currentQuestion=> question)
            setCurrentQuestionOptions(currentQuestionOptions=> question)
            setCurrentQuestionDiagrams(currentQuestionDiagrams=> question)
            setRenderQuestionNumber(renderQuestionNumber=> question_number+1)
        }catch(error){

        }
    }

    const previousQuestionMove = async(question_number,sheet)=>{
        try{
            const question = sheet[question_number-2]
            setCurrentQuestion(currentQuestion=> question)
            setCurrentQuestionOptions(currentQuestionOptions=> question)
            setCurrentQuestionDiagrams(currentQuestionDiagrams=> question)
            setRenderQuestionNumber(renderQuestionNumber=> question_number-1)
        }catch(error){

        }
    }

    const markForReview = async(sheetId, questionId)=>{
        try {

            // precheck
            const sheet = JSON.parse(localStorage.getItem("Physics_chapterwise_active_sheet"))
            let matched = false
            sheet.forEach(question=>{
                if(question.questionId == questionId && question.MarkForReview == 'true') {
                    matched = true
                }
            })
            if(matched) return
            if(!matched){
                setLoading(Loading=> true)
                const res = await axios.post(
                    "http://localhost:5001/api/v1/tests/chapterwise-mark-for-review",
                    {sheetId, questionId}
                );
                // console.log("full mark : ", res.data)
                console.log(res.data.sheet)
                localStorage.setItem("Physics_chapterwise_active_sheet", JSON.stringify(res.data.sheet)) 
                setCurrentSheet(currentSheet=> res.data.sheet);
                setCurrentQuestion(currentQuestion=> res.data.sheet[renderQuestionNumber-1])
                setLoading(Loading=> false)
                
                return res.data;
            }
        } catch (error) {
            console.error("Error fetching chapters:", error);

            return null;
        }
    }



    return (
        <ChapterTestContext.Provider value={{ fetchingCurrentSheet, currentSheet, Loading, questionChangingByNumberPress, currentQuestion, renderQuestionNumber , currentQuestionOptions, currentQuestionDiagrams, nextQuestionMove, previousQuestionMove, currentSheetName, markForReview}}>
            {children}
        </ChapterTestContext.Provider>
    );
}
