"use client";

import { createContext, useState } from "react";
import axios from "axios";
import AlertPeep from "@/app/utility/alert";
export const ChapterTestContext = createContext();

export const ChapterTestProvider = ({ children }) => {

    const [Loading, setLoading] = useState(false)
    const [LoadingMarking, setLoadingmarking] = useState(false)
    const [submitLoading, setSubmitLoading] = useState(false)
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
                    `${process.env.NEXT_PUBLIC_ENVIRONMENT=='Development' ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL : process.env.NEXT_PUBLIC_BASE_URL_PROD }/api/v1/tests/chapterwise-mark-for-review`,
                    {sheetId, questionId},
                    {
                        withCredentials: true,
                    }
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

    const markingOption = async(sheetId, questionId, option)=>{
        try {
            setLoadingmarking(LoadingMarking=> true)
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_ENVIRONMENT=='Development' ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL : process.env.NEXT_PUBLIC_BASE_URL_PROD }/api/v1/tests/marking-option`,
                {sheetId, questionId, option},
                {
                    withCredentials: true,
                }
            );
            // console.log("full mark : ", res.data)
            console.log(res.data.sheet)
            localStorage.setItem("Physics_chapterwise_active_sheet", JSON.stringify(res.data.sheet)) 
            setCurrentSheet(currentSheet=> res.data.sheet);
            setCurrentQuestion(currentQuestion=> res.data.sheet[renderQuestionNumber-1])
            setLoadingmarking(LoadingMarking=> false)

            
            return res.data;
        } catch (error) {
            console.error("Error fetching chapters:", error);
            setLoadingmarking(LoadingMarking=> false)
            return null;
        }
    }

    const [markReviewCounte, setMarkReviewCounter] = useState('')
    const [markAnsweredCount, setMarkAnsweredCount] = useState('')
    const [markUnattemptedCount, setMarkUnattemptedCountr] = useState('')


    const questionCounter = async()=>{
        const markForReviewCount = currentSheet.filter(
        q => q.MarkForReview === "true"
        ).length;

        const answeredCount = currentSheet.filter(
        q => q.OptionMarked
        ).length;

        const unattemptedCount = currentSheet.filter(
        q => !q.OptionMarked
        ).length;

        setMarkReviewCounter(markForReviewCount)
        setMarkAnsweredCount(answeredCount)
        setMarkUnattemptedCountr(unattemptedCount)
    }

    const submitTest = async(sheetId)=>{
        try {
            setSubmitLoading(submitLoading=> true)
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_ENVIRONMENT=='Development' ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL : process.env.NEXT_PUBLIC_BASE_URL_PROD }/api/v1/tests/submit-test`,
                {sheetId},
                {
                    withCredentials: true,
                }
            );
            // console.log("full mark : ", res.data)
            setSubmitLoading(submitLoading=> false)
            
            return res.data.signal;
        } catch (error) {
            console.error("Error fetching chapters:", error);
            setSubmitLoading(submitLoading=> false)
            return null;
        }
    }


    return (
        <ChapterTestContext.Provider value={{ fetchingCurrentSheet, currentSheet, Loading, questionChangingByNumberPress, currentQuestion, renderQuestionNumber , currentQuestionOptions, currentQuestionDiagrams, nextQuestionMove, previousQuestionMove, currentSheetName, markForReview, markingOption, LoadingMarking, markReviewCounte, markAnsweredCount, markUnattemptedCount, questionCounter, submitTest, submitLoading}}>
            {children}
        </ChapterTestContext.Provider>
    );
}
