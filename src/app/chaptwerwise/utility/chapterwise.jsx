'use client'
import React, { useState , useContext, useEffect} from "react";
import { ChapterTestContext } from "@/contexts/chapterTestInterface.context";
import LatexRenderer from "@/app/components/latex";
import Loader from "@/app/components/loader";
import ButtonLoader from "@/app/components/btnLoader";
import ButtonLoaderDark from "@/app/components/btnLoaderDark";
import { useRouter } from "next/navigation";
import SubmitLoader from "@/app/components/examSubmitLoader";
export default function UtilChapterWise(props){
    
    const {fetchingCurrentSheet, currentSheet, Loading, questionChangingByNumberPress, currentQuestion, renderQuestionNumber, currentQuestionOptions, currentQuestionDiagrams, nextQuestionMove, previousQuestionMove, currentSheetName, markForReview, markingOption, LoadingMarking, markReviewCounte, markAnsweredCount, markUnattemptedCount, questionCounter, submitTest, submitLoading} = useContext(ChapterTestContext)

    const router = useRouter()
    
    useEffect(el=>{
        fetchingCurrentSheet(props.subject)
        
    }, [])
    useEffect(el=>{
        questionCounter()
    }, [currentSheet])

    function questionSelectionBasedOnNumbericPress(qNum){
        questionChangingByNumberPress(qNum, currentSheet)
    }

    function nextQuestion(){
        nextQuestionMove(renderQuestionNumber,currentSheet)
    }

    function previousQuestion(){
        previousQuestionMove(renderQuestionNumber,currentSheet)
    }

    function markForReviewFunction(sheetId, questionId){
        markForReview(sheetId, questionId)
    }

    function markingOptionfun(sheetId, questionId, option){
        markingOption(sheetId, questionId, option)
    }

    const submitTestFun = async(sheetId)=>{
        try{
            const signal = await submitTest(sheetId)
            if(signal){
                router.push("/chapterwise-analytics")
            }
        }catch(error){

        }
    }

    return(
        <div className="min-h-screen bg-slate-50">
        {submitLoading &&
            <SubmitLoader/>
        }
        {/* Header */}
        <div className="sticky top-0 z-50 border-b bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <div>
                <h1 className="text-xl font-bold text-slate-800">
                Physics Chapter Test | Sheet
                </h1>
                <p className="text-sm text-slate-500">
                {currentSheetName}
                </p>
            </div>

            <div className="rounded-xl bg-teal-50 px-5 py-2">
                <p className="text-xs text-slate-500">SKYCBT</p>
                <h2 className="text-lg font-bold text-teal-600">
                AI powered platform 
                </h2>
            </div>
            </div>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 p-6">
            
            {/* Left Panel */}
            <div className="col-span-3">
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
                <h2 className="mb-4 text-lg font-semibold text-slate-800">
                Progress
                </h2>
 
                <div className="mb-4">
                <div className="mb-2 flex justify-between text-sm">
                    <span className="text-black" >Completed</span>
                    <span className="text-black" >{markAnsweredCount} / {currentSheet.length}</span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                    <div
                        className="h-full bg-teal-500"
                        style={{
                            width: `${(markAnsweredCount / currentSheet.length) * 100}%`
                        }}
                    ></div>
                </div>
                </div>
                <div className="mt-4 space-y-2 rounded-xl border bg-slate-50 p-3 mb-4">
                    <h3 className="text-sm font-semibold text-slate-700">
                        Question Status
                    </h3>

                    <div className="flex items-center gap-2 text-xs">
                        <div className="h-4 w-4 rounded bg-white border"></div>
                        <span className="text-slate-700">Not Visited</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                        <div className="h-4 w-4 rounded bg-red-500"></div>
                        <span className="text-slate-700">Visited, Not Answered</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                        <div className="h-4 w-4 rounded bg-pink-500"></div>
                        <span className="text-slate-700">Answered</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                        <div className="h-4 w-4 rounded bg-yellow-400"></div>
                        <span className="text-slate-700">Marked For Review</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                        <div className="h-4 w-4 rounded bg-orange-500"></div>
                        <span className="text-slate-700">Answered + Review</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                        <div className="h-4 w-4 rounded border-2 border-teal-700 ring-2 ring-teal-300"></div>
                        <span className="text-slate-700">Current Question</span>
                    </div>
                </div>

                <div className="mb-4 grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-lg bg-yellow-100 p-2">
                        <p className="text-lg font-bold text-yellow-700">
                        {markReviewCounte}
                        </p>
                        <p className="text-xs text-yellow-800">
                        Review
                        </p>
                    </div>

                    <div className="rounded-lg bg-pink-100 p-2">
                        <p className="text-lg font-bold text-pink-700">
                        {markAnsweredCount}
                        </p>
                        <p className="text-xs text-pink-800">
                        Answered
                        </p>
                    </div>

                    <div className="rounded-lg bg-slate-100 p-2">
                        <p className="text-lg font-bold text-slate-700">
                        {markUnattemptedCount}
                        </p>
                        <p className="text-xs text-slate-800">
                        Left
                        </p>
                    </div>
                    </div>

                    <div className="grid grid-cols-5 gap-2">
                    
                    {currentSheet.map((question, i) => {
                        const isActive = renderQuestionNumber === i + 1;

                        return (
                            <button
                            key={i}
                            onClick={() => questionSelectionBasedOnNumbericPress(i + 1)}
                            className={`
                                h-10 w-10 rounded-lg border text-sm font-medium cursor-pointer
                                transition-all duration-200

                                ${
                                question.MarkForReview === "true" && question.OptionMarked
                                    ? "bg-orange-500 text-white border-orange-600"
                                    : question.MarkForReview === "true"
                                    ? "bg-yellow-400 text-black border-yellow-500"
                                    : question.OptionMarked
                                    ? "bg-pink-500 text-white border-pink-600"
                                    : "bg-white text-black"
                                }

                                ${
                                isActive
                                    ? "ring-4 ring-teal-300 border-2 border-teal-700 scale-110 shadow-lg"
                                    : ""
                                }
                            `}
                            >
                            {i + 1}
                            </button>
                        );
                        })}
                    </div>
                </div>
            </div>

            {/* Question Area */}
            <div className="col-span-9">
                <div className="rounded-2xl border bg-white p-8 shadow-sm">
                
                <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full bg-teal-100 px-4 py-1 text-sm font-medium text-teal-700">
                    Question {renderQuestionNumber} of {currentSheet.length}
                </span>
                

                <button onClick={()=>markForReviewFunction(currentQuestion.sheetId, currentQuestion.questionId)} className={currentQuestion.
MarkForReview == 'true' ? " bg-teal-700 text-white rounded-lg border border-teal-300 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700": "cursor-pointer rounded-lg border border-teal-300 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700"}>
                    {Loading ? <ButtonLoaderDark/>:"Mark For Review"}
                </button>
                </div>

                {/* Question */}
                <div className="mb-8">
                <div className="text-lg leading-8 text-slate-800">
                    {<LatexRenderer text={currentQuestion.question}/>}
                </div>
                </div>
                {/* Diagram */}
                {currentQuestion &&
                    Array.isArray(currentQuestion.diagrams) &&
                    currentQuestion.diagrams.length > 0 && (
                        <div className="mb-8 flex justify-center">
                            <img
                                key={currentQuestion.diagrams[0]?.url}
                                src={currentQuestion.diagrams[0]?.url}
                                alt="Question Diagram"
                                className="h-[200px] rounded-xl border shadow-sm"
                            />
                        </div>
                    )}

                {/* Options */}
                <div className="space-y-4">
                {Object.entries(currentQuestionOptions?.options || {}).map(
                    ([key, value], index) => (
                        <button
                        key={index}
                        onClick={() =>
                            markingOptionfun(currentQuestion.sheetId, currentQuestion.questionId, key)
                        }
                        className="w-full cursor-pointer"
                        >
                        <div className="flex items-start gap-4 rounded-xl border p-4 text-left transition hover:border-teal-400 hover:bg-teal-50">
    
                        <div className="flex h-5 w-5 items-center justify-center">
                            {LoadingMarking ? (
                                <ButtonLoaderDark />
                            ) : (
                                <input
                                    type="radio"
                                    name="question"
                                    value={key}
                                    className="h-5 w-5 accent-teal-600"
                                    checked={currentQuestion.OptionMarked === key}
                                    readOnly
                                />
                            )}
                        </div>

                        <span className="font-semibold text-slate-800">
                            {key}.
                        </span>

                        <div className="flex-1 font-medium text-slate-700">
                            <LatexRenderer text={value} />
                        </div>
                    </div>
                        </button>
                    )
                )}
                </div>

                {/* Bottom Buttons */}
                <div className="mt-10 flex items-center justify-between">
                {renderQuestionNumber!=1 &&
                    <button onClick={previousQuestion} className="cursor-pointer rounded-xl border px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100">
                        Previous
                    </button>
                }

                <div className="flex gap-3">
                    {/* <button className="cursor-pointer rounded-xl border border-teal-200 bg-teal-50 px-6 py-3 font-medium text-teal-700 transition hover:bg-teal-100">
                    Save
                    </button> */}

                    {renderQuestionNumber!=currentSheet.length &&
                        <button className="cursor-pointer rounded-xl bg-teal-600 px-6 py-3 font-medium text-white transition hover:bg-teal-700"
                        onClick={nextQuestion}
                        >
                        Next Question
                        </button>
                    }
                    <button onClick={()=>submitTestFun(currentQuestion.sheetId)} className="cursor-pointer rounded-xl bg-red-500 px-8 py-3 font-semibold text-white transition hover:bg-red-600">
                        Submit Test
                    </button>
                </div>
                </div>
            </div>

            {/* Submit */}
            <div className="mt-6 flex justify-end">
                {/* <button className="rounded-xl bg-red-500 px-8 py-3 font-semibold text-white transition hover:bg-red-600">
                Submit Test
                </button> */}
            </div>
            </div>
        </div>
        </div>
    )
}