'use client'
import React, { useState , useContext, useEffect} from "react";
import { ChapterTestContext } from "@/contexts/chapterTestInterface.context";
import LatexRenderer from "@/app/components/latex";
import Loader from "@/app/components/loader";
import ButtonLoader from "@/app/components/btnLoader";
import ButtonLoaderDark from "@/app/components/btnLoaderDark";
export default function UtilChapterWise(props){
    
    const {fetchingCurrentSheet, currentSheet, Loading, questionChangingByNumberPress, currentQuestion, renderQuestionNumber, currentQuestionOptions, currentQuestionDiagrams, nextQuestionMove, previousQuestionMove, currentSheetName, markForReview} = useContext(ChapterTestContext)
    
    useEffect(el=>{
        fetchingCurrentSheet(props.subject)
    }, [])

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

    return(
        <div className="min-h-screen bg-slate-50">
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
                    <span className="text-black" >12 / {currentSheet.length}</span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full w-[40%] bg-teal-500"></div>
                </div>
                </div>

                <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: currentSheet.length }).map((_, i) => (
                    <button
                    key={i}
                    onClick={()=>questionSelectionBasedOnNumbericPress(i+1)}
                    className={renderQuestionNumber == i+1 ? "cursor-pointer text-white bg-teal-700 h-10 w-10 rounded-lg border text-sm font-medium transition" :"cursor-pointer text-black h-10 w-10 rounded-lg border text-sm font-medium transition"}
                    >
                    {i + 1}
                    </button>
                ))}
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
MarkForReview == 'true' ? "cursor-not-allowed bg-teal-700 text-white rounded-lg border border-teal-300 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700": "cursor-pointer rounded-lg border border-teal-300 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700"}>
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
                        <label
                        key={index}
                        className="flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition hover:border-teal-400 hover:bg-teal-50"
                        >
                        <input
                            type="radio"
                            name="question"
                            value={key}
                            className="h-5 w-5 accent-teal-600"
                        />

                        <span className="font-semibold text-slate-800">
                            {key}.
                        </span>

                        <div className="font-medium text-slate-700">
                            <LatexRenderer text={value} />
                        </div>
                        </label>
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
                    <button className="cursor-pointer rounded-xl border border-teal-200 bg-teal-50 px-6 py-3 font-medium text-teal-700 transition hover:bg-teal-100">
                    Save
                    </button>

                    {renderQuestionNumber!=currentSheet.length &&
                        <button className="cursor-pointer rounded-xl bg-teal-600 px-6 py-3 font-medium text-white transition hover:bg-teal-700"
                        onClick={nextQuestion}
                        >
                        Next Question
                        </button>
                    }
                    <button className="cursor-pointer rounded-xl bg-red-500 px-8 py-3 font-semibold text-white transition hover:bg-red-600">
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