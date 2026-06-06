'use client'
import React, { useState , useContext, useEffect} from "react";
import { ChapterTestContext } from "@/contexts/chapterTestInterface.context";
export default function UtilChapterWise(props){
    
    const {fetchingCurrentSheet, currentSheet, Loading } = useContext(ChapterTestContext)
    
    useEffect(el=>{
        fetchingCurrentSheet(props.subject)
    }, [])

    return(
        <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <div className="sticky top-0 z-50 border-b bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <div>
                <h1 className="text-xl font-bold text-slate-800">
                Physics Chapter Test
                </h1>
                <p className="text-sm text-slate-500">
                Current Electricity
                </p>
            </div>

            <div className="rounded-xl bg-teal-50 px-5 py-2">
                <p className="text-xs text-slate-500">Time Left</p>
                <h2 className="text-lg font-bold text-teal-600">
                01:48:25
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
                    <span className="text-black" >12 / 30</span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full w-[40%] bg-teal-500"></div>
                </div>
                </div>

                <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: currentSheet.length }).map((_, i) => (
                    <button
                    key={i}
                    className="text-black h-10 w-10 rounded-lg border text-sm font-medium transition hover:bg-teal-50"
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
                    Question 7 of 30
                </span>

                <button className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
                    Mark For Review
                </button>
                </div>

                {/* Question */}
                <div className="mb-8">
                <p className="text-lg leading-8 text-slate-800">
                    A particle moves along a straight line such that its
                    displacement is given by x = t³ - 6t² + 9t. Find the
                    time at which velocity becomes zero.
                </p>
                </div>

                {/* Options */}
                <div className="space-y-4">
                {["1 sec", "2 sec", "3 sec", "4 sec"].map(
                    (option, index) => (
                    <label
                        key={index}
                        className="flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition hover:border-teal-400 hover:bg-teal-50"
                    >
                        <input
                        type="radio"
                        name="question"
                        className="h-5 w-5 accent-teal-600"
                        />

                        <span className="font-medium text-slate-700">
                        {option}
                        </span>
                    </label>
                    )
                )}
                </div>

                {/* Bottom Buttons */}
                <div className="mt-10 flex items-center justify-between">
                <button className="rounded-xl border px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100">
                    Previous
                </button>

                <div className="flex gap-3">
                    <button className="rounded-xl border border-teal-200 bg-teal-50 px-6 py-3 font-medium text-teal-700 transition hover:bg-teal-100">
                    Save
                    </button>

                    <button className="rounded-xl bg-teal-600 px-6 py-3 font-medium text-white transition hover:bg-teal-700">
                    Next Question
                    </button>
                </div>
                </div>
            </div>

            {/* Submit */}
            <div className="mt-6 flex justify-end">
                <button className="rounded-xl bg-red-500 px-8 py-3 font-semibold text-white transition hover:bg-red-600">
                Submit Test
                </button>
            </div>
            </div>
        </div>
        </div>
    )
}