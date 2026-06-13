"use client";

import { createContext, useState, useRef } from "react";
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
            }else if(subject == 'chemistry'){
                sheet = JSON.parse(localStorage.getItem("Chemistry_chapterwise_active_sheet"))
                sheet_name = localStorage.getItem("Chemistry_chapterwise_active_sheet_name") 
            }else if(subject == 'maths'){
                sheet = JSON.parse(localStorage.getItem("Maths_chapterwise_active_sheet"))
                sheet_name = localStorage.getItem("Maths_chapterwise_active_sheet_name") 
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
            console.log(question.question_smiles)
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

    ////////////////////////////////////////// approach 2 for faster responses ////////////////////////////////////////////
    const [queueRef, setQueref] = useState(0)

    const mountingRefresh = async()=>{
        try{
            setQueref(queueRef=> 0);
            localStorage.setItem("chapterwiseCurrentQueue", 0)
            return true;
        }catch(error){
            console.error("Error fetching chapters:", error);
            return null;
        }
    }

    const backendUpdateUtility = async(subject, sheetId)=>{
        if(subject=='maths'){
            let questions = JSON.parse(localStorage.getItem("Maths_chapterwise_active_sheet"))
            questions = questions.filter(el=>{
                if(el.action){
                    return el
                }
            })
            console.log(questions)

            try{
                const res = await axios.post(
                    `${process.env.NEXT_PUBLIC_ENVIRONMENT=='Development' ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL : process.env.NEXT_PUBLIC_BASE_URL_PROD }/api/v1/tests/bulk-chapterwise-sheet-updation`,
                    {sheetId, deltaResponse : questions},
                    {
                        withCredentials: true,
                    }
                );

                setQueref(queueRef=> 0);
                localStorage.setItem("chapterwiseCurrentQueue", 0)      
                return res.data;
            }catch(error){
                console.error("Error fetching chapters:", error);
                return null;
            }

        }
    }
    const saveTimeoutRef = useRef(null);
    const localDbUpdateOnOptionSelect = async(questionId, sheetId, option, qn, subject)=>{
        try{
            setLoadingmarking(LoadingMarking=> true)
            let questions 
            if(subject=='maths'){
                questions = JSON.parse(localStorage.getItem("Maths_chapterwise_active_sheet"))
            }
            questions = questions.map((el) => {
                if (el.questionId === questionId) {
                    return {
                    ...el,
                    OptionMarked: option,
                    action : true

                    };
                }
                return el;
            });
            if(subject=='maths'){
                localStorage.setItem("Maths_chapterwise_active_sheet", JSON.stringify(questions))
            }
            setCurrentSheet(currentSheet=> questions);
            setCurrentQuestion(currentQuestion=> questions[qn-1])
            setLoadingmarking(LoadingMarking=> false)
            // setQueref(queueRef=> queueRef+1);
            // localStorage.setItem("chapterwiseCurrentQueue", String(queueRef+1))
            // const queueCheck = localStorage.getItem("chapterwiseCurrentQueue")
            // if(queueCheck==3){
            //     backendUpdateUtility(subject, sheetId)
            // }
            setQueref((prevQueue) => {
                const updatedQueue = prevQueue + 1;

                localStorage.setItem(
                    "chapterwiseCurrentQueue",
                    String(updatedQueue)
                );

                // Purana timer hata do
                clearTimeout(saveTimeoutRef.current);

                // Queue 3 hui to turant backend save
                if (updatedQueue >= 3) {
                    backendUpdateUtility(subject, sheetId);
                    return 0;
                }

                // Last action ke 15 sec baad save
                saveTimeoutRef.current = setTimeout(() => {
                    const currentQueue = Number(
                        localStorage.getItem("chapterwiseCurrentQueue")
                    );

                    if (currentQueue > 0) {
                        backendUpdateUtility(subject, sheetId);
                    }
                }, 15000);

                return updatedQueue;
            });
            return questions;
        }catch(error){
            console.error("Error fetching chapters:", error);
            setLoadingmarking(LoadingMarking=> false)
            return null;
        }
    }

    const localDbUpdateOnMarkAsReviewSelect = async(questionId, sheetId, qn, subject)=>{
        try{
            setLoadingmarking(LoadingMarking=> true)
            let questions 
            if(subject=='maths'){
                questions = JSON.parse(localStorage.getItem("Maths_chapterwise_active_sheet"))
            }
            questions = questions.map((el) => {
                if (el.questionId === questionId) {
                    return {
                    ...el,
                    MarkForReview: 'true',
                    action : true

                    };
                }
                return el;
            });
            if(subject=='maths'){
                localStorage.setItem("Maths_chapterwise_active_sheet", JSON.stringify(questions))
            }
            setCurrentSheet(currentSheet=> questions);
            setCurrentQuestion(currentQuestion=> questions[qn-1])
            setLoadingmarking(LoadingMarking=> false)
            setQueref((prevQueue) => {
                const updatedQueue = prevQueue + 1;

                localStorage.setItem(
                    "chapterwiseCurrentQueue",
                    String(updatedQueue)
                );

                // Purana timer hata do
                clearTimeout(saveTimeoutRef.current);

                // Queue 3 hui to turant backend save
                if (updatedQueue >= 3) {
                    backendUpdateUtility(subject, sheetId);
                    return 0;
                }

                // Last action ke 15 sec baad save
                saveTimeoutRef.current = setTimeout(() => {
                    const currentQueue = Number(
                        localStorage.getItem("chapterwiseCurrentQueue")
                    );

                    if (currentQueue > 0) {
                        backendUpdateUtility(subject, sheetId);
                    }
                }, 15000);

                return updatedQueue;
            });
            return questions;
        }catch(error){
            console.error("Error fetching chapters:", error);
            setLoadingmarking(LoadingMarking=> false)
            return null;
        }
    }

    const localDbUpdateOnOptionRemove = async(questionId, sheetId, qn, subject)=>{
        try{
            setLoadingmarking(LoadingMarking=> true)
            let questions 
            if(subject=='maths'){
                questions = JSON.parse(localStorage.getItem("Maths_chapterwise_active_sheet"))
            }
            questions = questions.map((el) => {
                if (el.questionId === questionId) {
                    return {
                    ...el,
                    OptionMarked: '',
                    action : true
                    };
                }
                return el;
            });
            if(subject=='maths'){
                localStorage.setItem("Maths_chapterwise_active_sheet", JSON.stringify(questions))
            }
            setCurrentSheet(currentSheet=> questions);
            setCurrentQuestion(currentQuestion=> questions[qn-1])
            setLoadingmarking(LoadingMarking=> false)
            setQueref((prevQueue) => {
                const updatedQueue = prevQueue + 1;

                localStorage.setItem(
                    "chapterwiseCurrentQueue",
                    String(updatedQueue)
                );

                // Purana timer hata do
                clearTimeout(saveTimeoutRef.current);

                // Queue 3 hui to turant backend save
                if (updatedQueue >= 3) {
                    backendUpdateUtility(subject, sheetId);
                    return 0;
                }

                // Last action ke 15 sec baad save
                saveTimeoutRef.current = setTimeout(() => {
                    const currentQueue = Number(
                        localStorage.getItem("chapterwiseCurrentQueue")
                    );

                    if (currentQueue > 0) {
                        backendUpdateUtility(subject, sheetId);
                    }
                }, 15000);

                return updatedQueue;
            });
            return questions;
        }catch(error){
            console.error("Error fetching chapters:", error);
            setLoadingmarking(LoadingMarking=> false)
            return null;
        }
    }


    return (
        <ChapterTestContext.Provider value={{ fetchingCurrentSheet, currentSheet, Loading, questionChangingByNumberPress, currentQuestion, renderQuestionNumber , currentQuestionOptions, currentQuestionDiagrams, nextQuestionMove, previousQuestionMove, currentSheetName, markForReview, markingOption, LoadingMarking, markReviewCounte, markAnsweredCount, markUnattemptedCount, questionCounter, submitTest, submitLoading, localDbUpdateOnOptionSelect, localDbUpdateOnMarkAsReviewSelect, localDbUpdateOnOptionRemove, mountingRefresh}}>
            {children}
        </ChapterTestContext.Provider>
    );
}
