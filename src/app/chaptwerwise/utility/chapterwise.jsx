// 'use client'
// import React, { useState , useContext, useEffect} from "react";
// import { ChapterTestContext } from "@/contexts/chapterTestInterface.context";
// import LatexRenderer from "@/app/components/latex";
// import Loader from "@/app/components/loader";
// import ButtonLoader from "@/app/components/btnLoader";
// import ButtonLoaderDark from "@/app/components/btnLoaderDark";
// import { useRouter } from "next/navigation";
// import SubmitLoader from "@/app/components/examSubmitLoader";
// export default function UtilChapterWise(props){
    
//     const {fetchingCurrentSheet, currentSheet, Loading, questionChangingByNumberPress, currentQuestion, renderQuestionNumber, currentQuestionOptions, currentQuestionDiagrams, nextQuestionMove, previousQuestionMove, currentSheetName, markForReview, markingOption, LoadingMarking, markReviewCounte, markAnsweredCount, markUnattemptedCount, questionCounter, submitTest, submitLoading} = useContext(ChapterTestContext)

//     const router = useRouter()
    
//     useEffect(el=>{
//         fetchingCurrentSheet(props.subject)
        
//     }, [])
//     useEffect(el=>{
//         questionCounter()
//     }, [currentSheet])

//     function questionSelectionBasedOnNumbericPress(qNum){
//         questionChangingByNumberPress(qNum, currentSheet)
//     }

//     function nextQuestion(){
//         nextQuestionMove(renderQuestionNumber,currentSheet)
//     }

//     function previousQuestion(){
//         previousQuestionMove(renderQuestionNumber,currentSheet)
//     }

//     function markForReviewFunction(sheetId, questionId){
//         markForReview(sheetId, questionId)
//     }

//     function markingOptionfun(sheetId, questionId, option){
//         markingOption(sheetId, questionId, option)
//     }

//     const submitTestFun = async(sheetId)=>{
//         try{
//             const signal = await submitTest(sheetId)
//             if(signal){
//                 router.push("/chapterwise-analytics")
//             }
//         }catch(error){

//         }
//     }

//     return(
//         <div className="min-h-screen bg-slate-50">
//         {submitLoading &&
//             <SubmitLoader/>
//         }
//         {/* Header */}
//         <div className="sticky top-0 z-50 border-b bg-white">
//             <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
//             <div>
//                 <h1 className="text-xl font-bold text-slate-800">
//                 {props.subject.toUpperCase()} Chapter Test | Sheet
//                 </h1>
//                 <p className="text-sm text-slate-500">
//                 {currentSheetName}
//                 </p>
//             </div>

//             <div className="rounded-xl bg-teal-50 px-5 py-2">
//                 <p className="text-xs text-slate-500">SKYCBT</p>
//                 <h2 className="text-lg font-bold text-teal-600">
//                 AI powered platform 
//                 </h2>
//             </div>
//             </div>
//         </div>

//         <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 p-6">
            
//             {/* Left Panel */}
//             <div className="col-span-3">
//             <div className="rounded-2xl border bg-white p-5 shadow-sm">
//                 <h2 className="mb-4 text-lg font-semibold text-slate-800">
//                 Progress
//                 </h2>
 
//                 <div className="mb-4">
//                 <div className="mb-2 flex justify-between text-sm">
//                     <span className="text-black" >Completed</span>
//                     <span className="text-black" >{markAnsweredCount} / {currentSheet.length}</span>
//                 </div>

//                 <div className="h-3 overflow-hidden rounded-full bg-slate-200">
//                     <div
//                         className="h-full bg-teal-500"
//                         style={{
//                             width: `${(markAnsweredCount / currentSheet.length) * 100}%`
//                         }}
//                     ></div>
//                 </div>
//                 </div>
//                 <div className="mt-4 space-y-2 rounded-xl border bg-slate-50 p-3 mb-4">
//                     <h3 className="text-sm font-semibold text-slate-700">
//                         Question Status
//                     </h3>

//                     <div className="flex items-center gap-2 text-xs">
//                         <div className="h-4 w-4 rounded bg-white border"></div>
//                         <span className="text-slate-700">Not Visited</span>
//                     </div>

//                     <div className="flex items-center gap-2 text-xs">
//                         <div className="h-4 w-4 rounded bg-red-500"></div>
//                         <span className="text-slate-700">Visited, Not Answered</span>
//                     </div>

//                     <div className="flex items-center gap-2 text-xs">
//                         <div className="h-4 w-4 rounded bg-pink-500"></div>
//                         <span className="text-slate-700">Answered</span>
//                     </div>

//                     <div className="flex items-center gap-2 text-xs">
//                         <div className="h-4 w-4 rounded bg-yellow-400"></div>
//                         <span className="text-slate-700">Marked For Review</span>
//                     </div>

//                     <div className="flex items-center gap-2 text-xs">
//                         <div className="h-4 w-4 rounded bg-orange-500"></div>
//                         <span className="text-slate-700">Answered + Review</span>
//                     </div>

//                     <div className="flex items-center gap-2 text-xs">
//                         <div className="h-4 w-4 rounded border-2 border-teal-700 ring-2 ring-teal-300"></div>
//                         <span className="text-slate-700">Current Question</span>
//                     </div>
//                 </div>

//                 <div className="mb-4 grid grid-cols-3 gap-2 text-center">
//                     <div className="rounded-lg bg-yellow-100 p-2">
//                         <p className="text-lg font-bold text-yellow-700">
//                         {markReviewCounte}
//                         </p>
//                         <p className="text-xs text-yellow-800">
//                         Review
//                         </p>
//                     </div>

//                     <div className="rounded-lg bg-pink-100 p-2">
//                         <p className="text-lg font-bold text-pink-700">
//                         {markAnsweredCount}
//                         </p>
//                         <p className="text-xs text-pink-800">
//                         Answered
//                         </p>
//                     </div>

//                     <div className="rounded-lg bg-slate-100 p-2">
//                         <p className="text-lg font-bold text-slate-700">
//                         {markUnattemptedCount}
//                         </p>
//                         <p className="text-xs text-slate-800">
//                         Left
//                         </p>
//                     </div>
//                     </div>

//                     <div className="grid grid-cols-5 gap-2">
                    
//                     {currentSheet.map((question, i) => {
//                         const isActive = renderQuestionNumber === i + 1;

//                         return (
//                             <button
//                             key={i}
//                             onClick={() => questionSelectionBasedOnNumbericPress(i + 1)}
//                             className={`
//                                 h-10 w-10 rounded-lg border text-sm font-medium cursor-pointer
//                                 transition-all duration-200

//                                 ${
//                                 question.MarkForReview === "true" && question.OptionMarked
//                                     ? "bg-orange-500 text-white border-orange-600"
//                                     : question.MarkForReview === "true"
//                                     ? "bg-yellow-400 text-black border-yellow-500"
//                                     : question.OptionMarked
//                                     ? "bg-pink-500 text-white border-pink-600"
//                                     : "bg-white text-black"
//                                 }

//                                 ${
//                                 isActive
//                                     ? "ring-4 ring-teal-300 border-2 border-teal-700 scale-110 shadow-lg"
//                                     : ""
//                                 }
//                             `}
//                             >
//                             {i + 1}
//                             </button>
//                         );
//                         })}
//                     </div>
//                 </div>
//             </div>

//             {/* Question Area */}
//             <div className="col-span-9">
//                 <div className="rounded-2xl border bg-white p-8 shadow-sm">
                
//                 <div className="mb-6 flex items-center justify-between">
//                 <span className="rounded-full bg-teal-100 px-4 py-1 text-sm font-medium text-teal-700">
//                     Question {renderQuestionNumber} of {currentSheet.length}
//                 </span>
                

//                 <button onClick={()=>markForReviewFunction(currentQuestion.sheetId, currentQuestion.questionId)} className={currentQuestion.
// MarkForReview == 'true' ? " bg-teal-700 text-white rounded-lg border border-teal-300 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700": "cursor-pointer rounded-lg border border-teal-300 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700"}>
//                     {Loading ? <ButtonLoaderDark/>:"Mark For Review"}
//                 </button>
//                 </div>

//                 {/* Question */}
//                 <div className="mb-8">
//                 <div className="text-lg leading-8 text-slate-800">
//                     {<LatexRenderer text={currentQuestion.question}/>}
//                 </div>
//                 </div>
//                 {/* Diagram */}
//                 {currentQuestion &&
//                     Array.isArray(currentQuestion.diagrams) &&
//                     currentQuestion.diagrams.length > 0 && (
//                         <div className="mb-8 flex justify-center">
//                             <img
//                                 key={currentQuestion.diagrams[0]?.url}
//                                 src={currentQuestion.diagrams[0]?.url}
//                                 alt="Question Diagram"
//                                 className="h-[200px] rounded-xl border shadow-sm"
//                             />
//                         </div>
//                     )}

//                 {/* Options */}
//                 <div className="space-y-4">
//                 {Object.entries(currentQuestionOptions?.options || {}).map(
//                     ([key, value], index) => (
//                         <button
//                         key={index}
//                         onClick={() =>
//                             markingOptionfun(currentQuestion.sheetId, currentQuestion.questionId, key)
//                         }
//                         className="w-full cursor-pointer"
//                         >
//                         <div className="flex items-start gap-4 rounded-xl border p-4 text-left transition hover:border-teal-400 hover:bg-teal-50">
    
//                         <div className="flex h-5 w-5 items-center justify-center">
//                             {LoadingMarking ? (
//                                 <ButtonLoaderDark />
//                             ) : (
//                                 <input
//                                     type="radio"
//                                     name="question"
//                                     value={key}
//                                     className="h-5 w-5 accent-teal-600"
//                                     checked={currentQuestion.OptionMarked === key}
//                                     readOnly
//                                 />
//                             )}
//                         </div>

//                         <span className="font-semibold text-slate-800">
//                             {key}.
//                         </span>

//                         <div className="flex-1 font-medium text-slate-700">
//                             <LatexRenderer text={value} />
//                         </div>
//                     </div>
//                         </button>
//                     )
//                 )}
//                 </div>

//                 {/* Bottom Buttons */}
//                 <div className="mt-10 flex items-center justify-between">
//                 {renderQuestionNumber!=1 &&
//                     <button onClick={previousQuestion} className="cursor-pointer rounded-xl border px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100">
//                         Previous
//                     </button>
//                 }

//                 <div className="flex gap-3">
//                     {/* <button className="cursor-pointer rounded-xl border border-teal-200 bg-teal-50 px-6 py-3 font-medium text-teal-700 transition hover:bg-teal-100">
//                     Save
//                     </button> */}

//                     {renderQuestionNumber!=currentSheet.length &&
//                         <button className="cursor-pointer rounded-xl bg-teal-600 px-6 py-3 font-medium text-white transition hover:bg-teal-700"
//                         onClick={nextQuestion}
//                         >
//                         Next Question
//                         </button>
//                     }
//                     <button onClick={()=>submitTestFun(currentQuestion.sheetId)} className="cursor-pointer rounded-xl bg-red-500 px-8 py-3 font-semibold text-white transition hover:bg-red-600">
//                         Submit Test
//                     </button>
//                 </div>
//                 </div>
//             </div>

//             {/* Submit */}
//             <div className="mt-6 flex justify-end">
//                 {/* <button className="rounded-xl bg-red-500 px-8 py-3 font-semibold text-white transition hover:bg-red-600">
//                 Submit Test
//                 </button> */}
//             </div>
//             </div>
//         </div>
//         </div>
//     )
// }
'use client'
import React, { useState, useContext, useEffect } from "react";
import { ChapterTestContext } from "@/contexts/chapterTestInterface.context";
import LatexRenderer from "@/app/components/latex";
import Loader from "@/app/components/loader";
import ButtonLoader from "@/app/components/btnLoader";
import ButtonLoaderDark from "@/app/components/btnLoaderDark";
import { useRouter } from "next/navigation";
import SubmitLoader from "@/app/components/examSubmitLoader";
import SmilesRenderer from "./smiles";

export default function UtilChapterWise(props) {

    const {
        fetchingCurrentSheet, currentSheet, Loading,
        questionChangingByNumberPress, currentQuestion,
        renderQuestionNumber, currentQuestionOptions,
        currentQuestionDiagrams, nextQuestionMove,
        previousQuestionMove, currentSheetName,
        markForReview, markingOption, LoadingMarking,
        markReviewCounte, markAnsweredCount,
        markUnattemptedCount, questionCounter,
        submitTest, submitLoading, localDbUpdateOnOptionSelect, localDbUpdateOnMarkAsReviewSelect, localDbUpdateOnOptionRemove, mountingRefresh, ChapterWiseTestSubmission
    } = useContext(ChapterTestContext)

    const router = useRouter()

    // Drawer open/close state — only used on mobile
    const [drawerOpen, setDrawerOpen] = useState(false)

    useEffect(el => {
        fetchingCurrentSheet(props.subject)
    }, [])

    useEffect(el => {
        questionCounter()
    }, [currentSheet])

    useEffect(el=>{
        mountingRefresh()
    }, [])

    function questionSelectionBasedOnNumbericPress(qNum) {
        questionChangingByNumberPress(qNum, currentSheet)
        setDrawerOpen(false) // close drawer after picking a question
    }

    function nextQuestion() {
        nextQuestionMove(renderQuestionNumber, currentSheet)
    }

    function previousQuestion() {
        previousQuestionMove(renderQuestionNumber, currentSheet)
    }

    function markForReviewFunction(sheetId, questionId) {
        // markForReview(sheetId, questionId)
        localDbUpdateOnMarkAsReviewSelect(questionId, sheetId, renderQuestionNumber, props.subject)
    }

    function markingOptionfun(sheetId, questionId, option) {
        // markingOption(sheetId, questionId, option)
        localDbUpdateOnOptionSelect(questionId, sheetId, option, renderQuestionNumber, props.subject)
    }

    function removeOptionFun(sheetId, questionId){
        localDbUpdateOnOptionRemove(questionId, sheetId, renderQuestionNumber,props.subject)
    }

    const submitTestFun = async (sheetId) => {
        try {
            let sheetResponse;
            if(props.subject == 'maths'){
                sheetResponse = JSON.parse(localStorage.getItem("Maths_chapterwise_active_sheet"))
            }else if(props.subject == 'physics'){
                sheetResponse = JSON.parse(localStorage.getItem("Physics_chapterwise_active_sheet"))
            }else if(props.subject == 'chemistry'){
                sheetResponse = JSON.parse(localStorage.getItem("Chemistry_chapterwise_active_sheet"))
            }
            const signal = await ChapterWiseTestSubmission(sheetResponse, sheetId, props.subject)
            if (signal) {
                router.push(`/chapterwise-analytics?subject=${props.subject}&sheet=${sheetId}&chapterName=${localStorage.getItem("Maths_chapterwise_active_sheet_name")}`)
            }
        } catch (error) { 
            console.log(error.message)
            return null
        }
    }

    // ─── Shared Progress Panel Content ────────────────────────────────────────
    const ProgressPanelContent = () => (
        <div className="p-4 md:p-5">
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Progress</h2>

            {/* Progress Bar */}
            <div className="mb-4">
                <div className="mb-2 flex justify-between text-sm">
                    <span className="text-black">Completed</span>
                    <span className="text-black">{markAnsweredCount} / {currentSheet.length}</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                    <div
                        className="h-full bg-teal-500 transition-all duration-300"
                        style={{ width: `${(markAnsweredCount / currentSheet.length) * 100}%` }}
                    ></div>
                </div>
            </div>

            {/* Legend */}
            <div className="mt-4 space-y-2 rounded-xl border bg-slate-50 p-3 mb-4">
                <h3 className="text-sm font-semibold text-slate-700">Question Status</h3>
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

            {/* Stats */}
            <div className="mb-4 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg bg-yellow-100 p-2">
                    <p className="text-lg font-bold text-yellow-700">{markReviewCounte}</p>
                    <p className="text-xs text-yellow-800">Review</p>
                </div>
                <div className="rounded-lg bg-pink-100 p-2">
                    <p className="text-lg font-bold text-pink-700">{markAnsweredCount}</p>
                    <p className="text-xs text-pink-800">Answered</p>
                </div>
                <div className="rounded-lg bg-slate-100 p-2">
                    <p className="text-lg font-bold text-slate-700">{markUnattemptedCount}</p>
                    <p className="text-xs text-slate-800">Left</p>
                </div>
            </div>

            {/* Question Number Grid */}
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
                                ${question.MarkForReview === "true" && question.OptionMarked
                                    ? "bg-orange-500 text-white border-orange-600"
                                    : question.MarkForReview === "true"
                                    ? "bg-yellow-400 text-black border-yellow-500"
                                    : question.OptionMarked
                                    ? "bg-pink-500 text-white border-pink-600"
                                    : "bg-white text-black"
                                }
                                ${isActive ? "ring-4 ring-teal-300 border-2 border-teal-700 scale-110 shadow-lg" : ""}
                            `}
                        >
                            {i + 1}
                        </button>
                    );
                })}
            </div>
        </div>
    )

    return (
        <div className="min-h-screen bg-slate-50">
            {submitLoading && <SubmitLoader />}

            {/* ── Mobile Drawer Overlay ─────────────────────────────────────── */}
            {/* Backdrop */}
            <div
                className={`
                    fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden
                    ${drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                `}
                onClick={() => setDrawerOpen(false)}
            />

            {/* Drawer Panel — slides in from the right */}
            <div
                className={`
                    fixed top-0 right-0 z-50 h-full w-[85vw] max-w-sm
                    bg-white shadow-2xl overflow-y-auto
                    transform transition-transform duration-300 ease-in-out
                    md:hidden
                    ${drawerOpen ? "translate-x-0" : "translate-x-full"}
                `}
            >
                {/* Drawer Header */}
                <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white px-4 py-3">
                    <h2 className="font-semibold text-slate-800">Progress</h2>
                    <button
                        onClick={() => setDrawerOpen(false)}
                        className="rounded-lg p-1 text-slate-500 hover:bg-slate-100"
                        aria-label="Close panel"
                    >
                        {/* X icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>
                <ProgressPanelContent />
            </div>

            {/* ── Header ───────────────────────────────────────────────────── */}
            <div className="sticky top-0 z-30 border-b bg-white">
                <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-3 md:px-6 md:py-4">
                    <div>
                        <h1 className="text-base font-bold text-slate-800 md:text-xl">
                            {props.subject.toUpperCase()} Chapter Test | Sheet
                        </h1>
                        <p className="text-xs text-slate-500 md:text-sm">{currentSheetName}</p>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Mobile: open drawer button */}
                        <button
                            className="flex items-center gap-2 rounded-lg border border-teal-300 bg-teal-50 px-3 py-2 text-xs font-medium text-teal-700 md:hidden"
                            onClick={() => setDrawerOpen(true)}
                        >
                            {/* Grid icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                                <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
                            </svg>
                            Progress
                        </button>

                        <div className="rounded-xl bg-teal-50 px-4 py-2">
                            <p className="text-xs text-slate-500">SKYCBT</p>
                            <h2 className="text-sm font-bold text-teal-600 md:text-lg">AI powered platform</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Main Layout ──────────────────────────────────────────────── */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-4 md:grid-cols-12 md:p-6">

                {/* Left Panel — desktop only, hidden on mobile */}
                <div className="hidden md:block md:col-span-3">
                    <div className="rounded-2xl border bg-white shadow-sm">
                        <ProgressPanelContent />
                    </div>
                </div>

                {/* Question Area */}
                <div className="col-span-1 md:col-span-9">
                    <div className="rounded-2xl border bg-white p-4 shadow-sm md:p-8">

                        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                            <span className="rounded-full bg-teal-100 px-4 py-1 text-sm font-medium text-teal-700">
                                Question {renderQuestionNumber} of {currentSheet.length}
                            </span>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => markForReviewFunction(currentQuestion.sheetId, currentQuestion.questionId)}
                                    className={
                                        currentQuestion.MarkForReview == 'true'
                                            ? "bg-teal-700 text-white rounded-lg border border-teal-300 px-4 py-2 text-sm font-medium"
                                            : "cursor-pointer rounded-lg border border-teal-300 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700"
                                    }
                                >
                                    {Loading ? <ButtonLoaderDark /> : "Mark For Review"}
                                </button>
                                {currentQuestion.OptionMarked != '' &&
                                    <button
                                    onClick={() => removeOptionFun(currentQuestion.sheetId, currentQuestion.questionId)}
                                    className={
                                        currentQuestion.OptionMarked == ''
                                        ? "cursor-not-allowed opacity-50 bg-red-50 text-red-700 rounded-lg border border-red-300 px-4 py-2 text-sm font-medium"
                                        : "cursor-pointer rounded-lg border border-red-300 bg-red-500 px-4 py-2 text-sm font-medium text-white"
                                    }
                                    >
                                        {Loading ? <ButtonLoaderDark /> : "Remove selection"}
                                    </button>
                                }
                            </div>
                        </div>

                        {/* Question */}
                        <div className="mb-6 md:mb-8">
                            <div className="text-base leading-8 text-slate-800 md:text-lg">
                                {<LatexRenderer text={currentQuestion.question} />}
                                {currentQuestion?.question_smiles!="" &&
                                <>
                                    {/* <SmilesRenderer smiles={currentQuestion?.question_smiles}/> */}
                                </>
                                }
                            </div>
                        </div>

                        {/* Diagram */}
                        {currentQuestion &&
                            Array.isArray(currentQuestion.diagrams) &&
                            currentQuestion.diagrams.length > 0 && (
                                <div className="mb-6 flex justify-center md:mb-8">
                                    <img
                                        key={currentQuestion.diagrams[0]?.url}
                                        src={currentQuestion.diagrams[0]?.url}
                                        alt="Question Diagram"
                                        className="max-h-[200px] w-full max-w-sm rounded-xl border object-contain shadow-sm"
                                    />
                                </div>
                            )}

                        {/* Options */}
                        <div className="space-y-3 md:space-y-4">
                            {Object.entries(currentQuestionOptions?.options || {}).map(
                                ([key, value], index) => (
                                    <button
                                        key={index}
                                        onClick={() => markingOptionfun(currentQuestion.sheetId, currentQuestion.questionId, key)}
                                        className="w-full cursor-pointer"
                                    >
                                        <div className="flex items-start gap-3 rounded-xl border p-3 text-left transition hover:border-teal-400 hover:bg-teal-50 md:gap-4 md:p-4">
                                            <div className="flex h-5 w-5 shrink-0 items-center justify-center">
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
                                            <span className="shrink-0 font-semibold text-slate-800">{key}.</span>
                                            <div className="flex-1 font-medium text-slate-700">
                                                <LatexRenderer text={value.text ? value.text : value} />
                                                <SmilesRenderer smiles={value.smiles}/>

                                            </div>
                                        </div>
                                    </button>
                                )
                            )}
                        </div>

                        {/* Bottom Buttons */}
                        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 md:mt-10">
                            {renderQuestionNumber != 1 &&
                                <button
                                    onClick={previousQuestion}
                                    className="cursor-pointer rounded-xl border px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
                                >
                                    Previous
                                </button>
                            }
                            <div className="flex flex-wrap gap-3 ml-auto">
                                {renderQuestionNumber != currentSheet.length &&
                                    <button
                                        className="cursor-pointer rounded-xl bg-teal-600 px-5 py-3 font-medium text-white transition hover:bg-teal-700"
                                        onClick={nextQuestion}
                                    >
                                        Next Question
                                    </button>
                                }
                                <button
                                    onClick={() => submitTestFun(currentQuestion.sheetId)}
                                    className="cursor-pointer rounded-xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
                                >
                                    Submit Test
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end"></div>
                </div>
            </div>
        </div>
    )
}