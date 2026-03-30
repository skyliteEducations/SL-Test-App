'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function TestDetails() {
    const router = useRouter();
    function NavigateTODashboard(){
        router.push("/dashboard")

    }
    function NavigateTODisclaimer(){
        router.push("/desclaimer")

    }
    const [showInstructions, setShowInstructions] = useState(true);

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-gray-100 p-6">

            {/* HEADER */}
            <div className="max-w-6xl mx-auto flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Test Details</h1>
                <button onClick={NavigateTODashboard} className=" cursor-pointer text-sm bg-teal-600 text-white px-4 py-2 rounded-lg shadow hover:bg-teal-700">
                    Back
                </button>
            </div>

            {/* MAIN CARD */}
            <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6">

                {/* LEFT SIDE */}
                <div className="col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden">

                    {/* Banner */}
                    <div className="relative h-[250px]">
                        <img
                            src="/banner.png"
                            alt="banner"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
                            <h2 className="text-3xl text-white font-bold">
                                IIT JEE Mains 1
                            </h2>
                            <p className="text-gray-200">
                                Full syllabus test curated by IIT experts
                            </p>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-6 space-y-6">

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="bg-teal-50 p-4 rounded-xl">
                                <p className="text-xl font-bold text-teal-600">90</p>
                                <p className="text-sm text-gray-600">Questions</p>
                            </div>
                            <div className="bg-teal-50 p-4 rounded-xl">
                                <p className="text-xl font-bold text-teal-600">3h</p>
                                <p className="text-sm text-gray-600">Duration</p>
                            </div>
                            <div className="bg-teal-50 p-4 rounded-xl">
                                <p className="text-xl font-bold text-teal-600">PCM</p>
                                <p className="text-sm text-gray-600">Subjects</p>
                            </div>
                        </div>

                        {/* Exam Info */}
                        <div className="bg-gray-50 p-4 rounded-xl space-y-2">
                            <p className="text-black" >📅 <b>Date:</b> 10 March 2026</p>
                            <p className="text-black" >⏰ <b>Time:</b> 10:00 AM</p>
                            <p className="text-black" >🏁 <b>Mode:</b> Online CBT</p>
                        </div>

                        {/* Toggle Tabs */}
                        <div className="flex gap-4 border-b">
                            <button
                                onClick={() => setShowInstructions(true)}
                                className={`pb-2 ${showInstructions ? "cursor-pointer border-b-2 border-teal-600 text-teal-600" : "cursor-pointer"}`}
                            >
                                Instructions
                            </button>
                            <button
                                onClick={() => setShowInstructions(false)}
                                className={`pb-2 ${!showInstructions ? "cursor-pointer border-b-2 border-teal-600 text-teal-600" : "cursor-pointer"}`}
                            >
                                Syllabus
                            </button>
                        </div>

                        {/* Dynamic Section */}
                        {showInstructions ? (
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li>+4 marks for correct answer</li>
                                <li>-1 negative marking</li>
                                <li>Do not refresh browser</li>
                                <li>Auto submit after time ends</li>
                                <li>All questions are compulsory</li>
                            </ul>
                        ) : (
                            <div className="grid grid-cols-3 gap-4 text-sm text-gray-700">
                                <div>Physics: Mechanics, Optics</div>
                                <div>Chemistry: Organic, Inorganic</div>
                                <div>Maths: Algebra, Calculus</div>
                            </div>
                        )}

                    </div>
                </div>

                {/* RIGHT SIDEBAR */}
                <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6">

                    {/* Status */}
                    <div className="text-center">
                        <p className="text-gray-500">Status</p>
                        <h2 className="text-2xl font-bold text-green-600">Purchased</h2>
                    </div>

                    {/* Attempts */}
                    <div className="bg-gray-50 p-4 rounded-xl">
                        <h3 className="font-semibold mb-2 text-black">Previous Attempts</h3>
                        <p className="text-sm text-gray-600">Attempts: 2</p>
                        <p className="text-sm text-gray-600">Best Score: 210</p>
                        <p className="text-sm text-gray-600">Avg Score: 185</p>
                    </div>

                    {/* Progress */}
                    <div>
                        <h3 className="font-semibold mb-2 text-black">Progress</h3>
                        <div className="w-full bg-gray-200 h-2 rounded-full">
                            <div className="bg-teal-500 h-2 rounded-full w-[60%]"></div>
                        </div>
                        <p className="text-sm mt-1 text-gray-600">60% completed</p>
                    </div>

                    {/* CTA */}
                    <button onClick={NavigateTODisclaimer} className="cursor-pointer w-full bg-teal-600 text-white py-3 rounded-xl hover:bg-teal-700 shadow-md">
                        Buy Now 🚀
                    </button>

                    <button  onClick={NavigateTODisclaimer} className="cursor-pointer w-full border border-teal-500 text-teal-600 py-2 rounded-xl hover:bg-teal-50">
                        View Instructions
                    </button>

                </div>

            </div>
        </div>
    );
}