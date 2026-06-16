import { useState, useContext, useEffect } from 'react'
import { ChapterSubmitContext } from '@/contexts/chapterwiseSubmission.context'
import FullScreenLoader from '../components/fullLoader'
import LatexRenderer from '../components/latex'
export default function Landing(props) {

    const {ExtarctionSheetOnMounting, Loading, headerCreds, questions, calculationFun, calculations} = useContext(ChapterSubmitContext)

    useEffect(() => {
        const complete = async () => {
            await ExtarctionSheetOnMounting(
                props.sheetId,
                props.chapterName,
                props.subject
            );

            await calculationFun(props.subject);
        };

        complete();
    }, []);


    const [activeTab, setActiveTab] = useState('questions')

    const stats = {
        score: 72,
        totalMarks: 100,
        accuracy: 78,
        correct: 18,
        wrong: 5,
        skipped: 2,
        rank: 68,
        timeTaken: '18m 24s'
    }

    const tabs = [
        { key: 'analytics', icon: 'ti-chart-bar', label: 'Analytics' },
        { key: 'questions', icon: 'ti-list-check', label: 'Questions' },
        { key: 'resources', icon: 'ti-books', label: 'Resources' },
    ]

    const scoreCards = [
        { label: 'Score', value: stats.score, suffix: '/100', color: 'text-teal-600' },
        { label: 'Correct', value: stats.correct, color: 'text-green-600' },
        { label: 'Wrong', value: stats.wrong, color: 'text-red-500' },
        { label: 'Skipped', value: stats.skipped, color: 'text-amber-500' },
        { label: 'Time taken', value: stats.timeTaken, color: 'text-blue-600', small: true },
    ]

    const difficultyBars = [
        { label: 'Easy', pct: 92, color: 'bg-green-500', text: 'text-green-600' },
        { label: 'Medium', pct: 71, color: 'bg-amber-500', text: 'text-amber-600' },
        { label: 'Hard', pct: 45, color: 'bg-red-500', text: 'text-red-500' },
    ]

    const topicBars = [
        { label: 'RMS Values', pct: 95, color: 'bg-teal-500', text: 'text-teal-600' },
        { label: 'AC Circuits', pct: 88, color: 'bg-teal-500', text: 'text-teal-600' },
        { label: 'Resonance', pct: 40, color: 'bg-red-500', text: 'text-red-500' },
        { label: 'Phasor Diagrams', pct: 35, color: 'bg-red-500', text: 'text-red-500' },
    ]

    // const questions = [
    //     { num: 1, status: 'correct', your: 'A', correct: 'A' },
    //     { num: 2, status: 'wrong', your: 'B', correct: 'D' },
    //     { num: 3, status: 'skipped', your: null, correct: 'C' },
    // ]

    const qConfig = {
        correct: {
            border: 'border-l-green-500',
            iconBg: 'bg-green-50',
            iconColor: 'text-green-600',
            tagBg: 'bg-green-50',
            tagColor: 'text-green-700',
            icon: 'ti-check',
            label: 'Correct',
        },
        wrong: {
            border: 'border-l-red-500',
            iconBg: 'bg-red-50',
            iconColor: 'text-red-600',
            tagBg: 'bg-red-50',
            tagColor: 'text-red-700',
            icon: 'ti-x',
            label: 'Wrong',
        },
        skipped: {
            border: 'border-l-amber-500',
            iconBg: 'bg-amber-50',
            iconColor: 'text-amber-600',
            tagBg: 'bg-amber-50',
            tagColor: 'text-amber-700',
            icon: 'ti-minus',
            label: 'Skipped',
        },
    }

    const resources = [
        { icon: 'ti-player-play', head: 'Recommended Videos', sub: 'AC Circuit Crash Course — 28 min overview covering all weak areas', link: 'Watch now', linkIcon: 'ti-external-link' },
        { icon: 'ti-file-text', head: 'Revision Notes', sub: 'Alternating Current condensed notes with formulas and phasor diagrams', link: 'Download PDF', linkIcon: 'ti-download' },
        { icon: 'ti-rocket', head: 'Next Test', sub: 'Advanced Alternating Current — 25 questions, 30 min, harder difficulty', link: 'Start test', linkIcon: 'ti-arrow-right' },
    ]

    const getStatus = (qp) => {
        if (!qp?.OptionMarked) return "skipped";
        if (qp.OptionMarked === qp.correctOption) return "correct";
        return "wrong";
    };

    return (
        <>
            {Loading &&
                <FullScreenLoader/>
            }
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Instrument+Serif:ital@0;1&display=swap" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" />

            <div className="min-h-screen bg-slate-50 font-[DM_Sans]">

                {/* ── Hero ── */}
                <div className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-500 to-cyan-500 px-12 pt-14 pb-20">
                    <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/10" />
                    <div className="absolute -bottom-10 left-8 w-36 h-36 rounded-full bg-white/10" />

                    <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between gap-8">
                        <div>
                            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/60">
                                Test Completed
                            </p>
                            <h1 className="mt-2 text-6xl text-white leading-tight ">
                                {headerCreds?.chapter_name.toUpperCase()}
                            </h1>
                            <p className="mt-1 text-sm text-white/60">
                                {headerCreds?.subject.toUpperCase()} · Chapter Test Analysis
                            </p>
                            {/* <div className="mt-4 inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/90">
                                <span className="w-2 h-2 rounded-full bg-teal-300 inline-block" />
                                Rank #{stats.rank} out of all attempts
                            </div> */}
                        </div>

                        {/* Accuracy ring */}
                        <div className="shrink-0 w-44 h-44 rounded-full border-[12px] border-white/20 bg-white/10 flex flex-col items-center justify-center">
                            <span className="text-5xl font-semibold text-white leading-none">{Math.round(calculations.accuracy)}%</span>
                            <span className="text-xs text-white/60 mt-1">Accuracy</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-slate-800">
                        Performance Summary
                        </h2>
                        <div className='flex gap-4'>
                            <div className="text-right">
                                <p className="text-xs text-slate-500">
                                    Overall Score
                                </p>
                                {/* <p className="text-3xl font-bold text-blue-600">
                                    {calculations.score}/{questions.length*4}
                                </p> */}
                                <p
                                    className={
                                        calculations.score >= Math.round(questions.length * 4 * 0.33)
                                        ? "text-3xl font-bold text-blue-600"
                                        : "text-3xl font-bold text-red-600"
                                    }
                                    >
                                    {calculations.score}/{questions.length * 4}
                                </p>
                            </div>
                            <div className="w-px self-stretch bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
                            <div className="text-right">
                                <p className="text-xs text-slate-500">
                                    Cut-off Score
                                </p>
                                <p className="text-3xl font-bold text-blue-600">
                                    {Math.round(questions.length*4*0.33)}/{questions.length*4}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

                        {/* Correct */}
                        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                        <p className="text-sm text-green-700 font-medium">
                            Correct
                        </p>

                        <p className="text-2xl font-bold text-green-600 mt-1">
                            {calculations.correct}
                        </p>

                        <p className="text-xs text-green-600 mt-1">
                            +4 Marks
                        </p>
                        </div>

                        {/* Wrong */}
                        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                        <p className="text-sm text-red-700 font-medium">
                            Wrong
                        </p>

                        <p className="text-2xl font-bold text-red-600 mt-1">
                            {calculations.wrong}
                        </p>

                        <p className="text-xs text-red-600 mt-1">
                            -1 Mark
                        </p>
                        </div>

                        {/* Skipped */}
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                        <p className="text-sm text-slate-700 font-medium">
                            Skipped
                        </p>

                        <p className="text-2xl font-bold text-slate-600 mt-1">
                            {calculations.skipped}
                        </p>

                        <p className="text-xs text-slate-500 mt-1">
                            +0 Marks
                        </p>
                        </div>

                        {/* Accuracy */}
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <p className="text-sm text-blue-700 font-medium">
                            Accuracy
                        </p>

                        <p className="text-2xl font-bold text-blue-600 mt-1">
                            {Math.round(calculations.accuracy)}%
                        </p>

                        <p className="text-xs text-blue-600 mt-1">
                            Attempted Questions
                        </p>
                        </div>

                    </div>
                    </div>

                {/* ── Body ── */}
                <div className="max-w-7xl mx-auto px-12 pt-10 pb-16">

                    <div className="mb-8 overflow-x-auto scrollbar-hide">
                        <div className="flex w-max min-w-full gap-2 bg-white border border-black/[0.06] rounded-2xl p-2 shadow-sm">
                            {tabs.map(({ key, icon, label }) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`
                                        flex items-center gap-2 px-4 md:px-7 py-3
                                        rounded-xl text-sm md:text-[15px]
                                        font-medium transition-all duration-150
                                        cursor-pointer whitespace-nowrap shrink-0
                                        border-none
                                        ${
                                            activeTab === key
                                                ? "bg-teal-600 text-white shadow-sm"
                                                : "text-slate-500 hover:bg-teal-50 hover:text-teal-600"
                                        }
                                    `}
                                >
                                    <i className={`ti ${icon}`} aria-hidden="true" />
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* ── Analytics Tab ── */}
                    {activeTab === 'analytics' && (
                        <div className="grid grid-cols-2 gap-5">

                            {/* Left panel */}
                            <div className="bg-white rounded-2xl border border-black/[0.06] shadow-sm p-8">
                                {/* <p className="text-lg font-semibold text-slate-800 mb-6">Difficulty Analysis</p> */}
                                {/* {difficultyBars.map(({ label, pct, color, text }) => (
                                    <div key={label} className="mb-5">
                                        <div className="flex justify-between text-sm text-slate-500 mb-2">
                                            <span>{label}</span>
                                            <span className={`font-semibold ${text}`}>{pct}%</span>
                                        </div>
                                        <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                            <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
                                        </div>
                                    </div>
                                ))} */}

                                {/* <div className="mt-7 pt-6 border-t border-slate-100">
                                    <p className="text-lg font-semibold text-slate-800 mb-5">Questionwise topic split</p>
                                    {questions?.map(( el,index) => (
                                        <div key={index} className="mb-4">
                                            <div className="flex justify-between text-sm text-slate-500 mb-2">
                                                <span>Q{index+1}) &mdash; {el.subtopic ? el.subtopic : el.topic}</span>
                                                
                                            </div>
                                            <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${
                                                        getStatus(el) === "correct"
                                                            ? "bg-green-500"
                                                            : getStatus(el) === "wrong"
                                                            ? "bg-red-500"
                                                            : "bg-gray-400"
                                                    }`}
                                                    style={{ width: "100%" }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>*/}
                                <div className="mt-8 pt-6 border-t border-slate-100">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl font-bold text-slate-800">
                                            Questionwise Performance
                                        </h3>

                                        <div className="flex gap-3 text-xs">
                                            <div className="flex items-center gap-2 text-black">
                                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                                Correct
                                            </div>

                                            <div className="flex items-center gap-2 text-black">
                                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                                Wrong
                                            </div>

                                            <div className="flex items-center gap-2 text-black">
                                                <div className="w-3 h-3 rounded-full bg-slate-400"></div>
                                                Skipped
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
                                        {questions?.map((el, index) => {
                                            const status = getStatus(el);

                                            return (
                                                <div
                                                    key={index}
                                                    className={`
                                                        group relative overflow-hidden rounded-2xl border
                                                        transition-all duration-300 hover:scale-[1.02]
                                                        hover:shadow-xl cursor-pointer
                                                        ${
                                                            status === "correct"
                                                                ? "border-green-200 bg-gradient-to-br from-green-50 to-white"
                                                                : status === "wrong"
                                                                ? "border-red-200 bg-gradient-to-br from-red-50 to-white"
                                                                : "border-slate-200 bg-gradient-to-br from-slate-50 to-white"
                                                        }
                                                    `}
                                                >
                                                    {/* Glow */}
                                                    <div
                                                        className={`
                                                            absolute top-0 left-0 h-full w-1
                                                            ${
                                                                status === "correct"
                                                                    ? "bg-green-500"
                                                                    : status === "wrong"
                                                                    ? "bg-red-500"
                                                                    : "bg-slate-400"
                                                            }
                                                        `}
                                                    />

                                                    <div className="p-5">
                                                        <div className="flex items-start justify-between">
                                                            <div>
                                                                <p className="text-xs uppercase tracking-wider text-slate-400">
                                                                    Question {index + 1}
                                                                </p>

                                                                <h4 className="mt-1 font-semibold text-slate-800">
                                                                    {el.subtopic || el.topic}
                                                                </h4>
                                                            </div>

                                                            <div
                                                                className={`
                                                                    w-12 h-12 rounded-2xl flex items-center justify-center text-xl
                                                                    ${
                                                                        status === "correct"
                                                                            ? "bg-green-100 text-green-600"
                                                                            : status === "wrong"
                                                                            ? "bg-red-100 text-red-600"
                                                                            : "bg-slate-100 text-slate-500"
                                                                    }
                                                                `}
                                                            >
                                                                {status === "correct"
                                                                    ? "✓"
                                                                    : status === "wrong"
                                                                    ? "✕"
                                                                    : "—"}
                                                            </div>
                                                        </div>

                                                        <div className="mt-5 flex items-center justify-between">
                                                            <span
                                                                className={`
                                                                    px-3 py-1 rounded-full text-xs font-semibold
                                                                    ${
                                                                        status === "correct"
                                                                            ? "bg-green-100 text-green-700"
                                                                            : status === "wrong"
                                                                            ? "bg-red-100 text-red-700"
                                                                            : "bg-slate-100 text-slate-600"
                                                                    }
                                                                `}
                                                            >
                                                                {status === "correct"
                                                                    ? "+4 Marks"
                                                                    : status === "wrong"
                                                                    ? "-1 Mark"
                                                                    : "Not Attempted"}
                                                            </span>

                                                            <span className="text-xs text-slate-400">
                                                                Q{index + 1}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div> 
                            

                            {/* AI Panel */}
                            <div className="bg-slate-900 rounded-2xl shadow-sm p-8">
                                <div className="flex items-center gap-2 mb-8">
                                    <i className="ti ti-rocket text-cyan-400 text-xl" />
                                    <span className="text-lg font-semibold text-white">
                                        Boost Your Rank
                                    </span>

                                    <span className="text-[11px] font-medium bg-cyan-500 text-white px-3 py-1 rounded-full tracking-wide">
                                        SKYCBT
                                    </span>
                                </div>

                                {/* Super 30 */}
                                <div className="group bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-5 mb-4 hover:border-cyan-400/40 transition-all cursor-pointer">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <i className="ti ti-crown text-cyan-400 text-lg" />
                                                <h3 className="text-white font-semibold">
                                                    Join Super 30 Program
                                                </h3>
                                            </div>

                                            <p className="text-white/60 text-sm mt-2">
                                                Intensive 30-day revision roadmap designed to maximize
                                                your score before the final exam.
                                            </p>
                                        </div>

                                        <i className="ti ti-arrow-right text-cyan-400 text-xl opacity-0 group-hover:opacity-100 transition-all" />
                                    </div>
                                </div>

                                {/* Mock Tests */}
                                <div className="group bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-2xl p-5 mb-4 hover:border-emerald-400/40 transition-all cursor-pointer">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <i className="ti ti-target-arrow text-emerald-400 text-lg" />
                                                <h3 className="text-white font-semibold">
                                                    Join Full-Length Mock Tests
                                                </h3>
                                            </div>

                                            <p className="text-white/60 text-sm mt-2">
                                                Experience real exam pressure with advanced analytics,
                                                ranking and detailed performance reports.
                                            </p>
                                        </div>

                                        <i className="ti ti-arrow-right text-emerald-400 text-xl opacity-0 group-hover:opacity-100 transition-all" />
                                    </div>
                                </div>

                                {/* Formula Sheets */}
                                <div className="group bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-5 mb-4 hover:border-amber-400/40 transition-all cursor-pointer">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <i className="ti ti-book-2 text-amber-400 text-lg" />
                                                <h3 className="text-white font-semibold">
                                                    Download Formula Sheets
                                                </h3>
                                            </div>

                                            <p className="text-white/60 text-sm mt-2">
                                                Chapterwise formula sheets covering all important
                                                concepts, shortcuts and key results.
                                            </p>
                                        </div>

                                        <i className="ti ti-download text-amber-400 text-xl opacity-0 group-hover:opacity-100 transition-all" />
                                    </div>
                                </div>

                                {/* Revision Notes */}
                                <div className="group bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-2xl p-5 hover:border-pink-400/40 transition-all cursor-pointer">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <i className="ti ti-notebook text-pink-400 text-lg" />
                                                <h3 className="text-white font-semibold">
                                                    Download Revision Notes
                                                </h3>
                                            </div>

                                            <p className="text-white/60 text-sm mt-2">
                                                Quick revision notes crafted for last-minute preparation
                                                and rapid concept recall.
                                            </p>
                                        </div>

                                        <i className="ti ti-download text-pink-400 text-xl opacity-0 group-hover:opacity-100 transition-all" />
                                    </div>
                                </div>

                                {/* Bottom CTA */}
                                <div className="mt-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-5">
                                    <p className="text-xs uppercase tracking-widest text-white/70">
                                        SKYCBT Premium
                                    </p>

                                    <h3 className="text-2xl font-bold text-white mt-1">
                                        Crack More Questions. Rank Higher.
                                    </h3>

                                    <button className="mt-4 px-5 py-2.5 bg-white text-slate-900 rounded-xl font-semibold hover:scale-105 transition-all cursor-pointer">
                                        Explore All Resources
                                    </button>
                                </div>

                            </div>
                        </div>
                    )}

                    {/* ── Questions Tab ── */}
                    {activeTab === 'questions' && (
                       <div className="space-y-20">
                            {questions?.map((qp, index) => {
                                const isAttempted = !!qp?.OptionMarked;
                                const isCorrectlyAnswered =
                                qp?.OptionMarked &&
                                qp?.OptionMarked === qp?.correctOption;
                                const isMarkedForReview = qp?.MarkForReview


                                let statusText = "";
                                let statusClass = "";

                                if (!isAttempted) {
                                    if(isMarkedForReview){
                                        statusText = "○ Not Attempted +0 & Marked for review";
                                        statusClass =
                                            "bg-gray-100 text-gray-700 border-gray-200";
                                    }else{
                                        statusText = "○ Not Attempted +0";
                                        statusClass =
                                            "bg-slate-100 text-slate-700 border-slate-200";
                                    }
                                } else if (isCorrectlyAnswered) {
                                    if(isMarkedForReview){
                                        statusText =
                                            `✓ Correct Selected +4 & Marked for review`;
                                        statusClass =
                                            "bg-orange-100 text-orange-700 border-orange-200";
                                    }else{
                                        statusText =
                                            `✓ Correct Selected +4`;
                                        statusClass =
                                            "bg-green-100 text-green-700 border-green-200";
                                    }
                                } else {
                                    if(isMarkedForReview){
                                        statusText =
                                            "✕ Wrong Selected -1 & Marked for review";
                                        statusClass =
                                            "bg-yellow-100 text-yellow-700 border-yellow-200";
                                    }else{
                                        statusText =
                                            "✕ Wrong Selected -1";
                                        statusClass =
                                            "bg-red-100 text-red-700 border-red-200";

                                    }
                                }

                                return (
                                <div
                                    key={index}
                                    className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                                >
                                    {/* Header */}
                                    <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 bg-gradient-to-br from-teal-700 via-teal-500 to-cyan-500">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 ">
                                        <h3 className="text-lg font-semibold text-white">
                                        Question {index + 1}
                                        </h3>

                                        <span
                                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border w-fit ${statusClass}`}
                                        >
                                        {statusText}
                                        </span>
                                    </div>
                                    </div>

                                    {/* Question */}
                                    <div className="p-6">
                                    <div className="text-slate-800 text-[15px] leading-7 mb-6">
                                        <LatexRenderer text={qp?.question} />
                                    </div>
                                    {(qp?.diagram && qp?.diagrams[0]) &&
                                        <img
                                            src={qp?.diagrams[0]?.url}
                                            alt="Diagram"
                                            className="w-[50vh] h-[40vh] mb-10 max-w-xl rounded-xl border border-gray-200 object-contain"
                                        />
                                    }

                                    {/* Options */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        {Object.entries(qp?.options || {}).map(
                                        ([label, value]) => {
                                            const isCorrect =
                                            label === qp?.correctOption;

                                            const isMarked =
                                            label === qp?.OptionMarked;

                                            let cardClass =
                                            "border-slate-200 bg-white";

                                            let circleClass =
                                            "border-slate-300 text-slate-700";

                                            let badge = null;

                                            // Correct Option
                                            if (isCorrect) {
                                            cardClass =
                                                "border-green-500 bg-green-50";

                                            circleClass =
                                                "border-green-500 text-green-700";

                                            badge = (
                                                <span className="px-2 py-1 text-[11px] font-semibold rounded-full bg-green-100 text-green-700">
                                                Correct
                                                </span>
                                            );
                                            }

                                            // Wrong Selected Option
                                            if (
                                            isMarked &&
                                            qp?.OptionMarked !== qp?.correctOption
                                            ) {
                                            cardClass =
                                                "border-red-500 bg-red-50";

                                            circleClass =
                                                "border-red-500 text-red-700";

                                            badge = (
                                                <span className="px-2 py-1 text-[11px] font-semibold rounded-full bg-red-100 text-red-700">
                                                Selected
                                                </span>
                                            );
                                            }

                                            return (
                                            <div
                                                key={label}
                                                className={`border rounded-xl p-4 transition-all ${cardClass}`}
                                            >
                                                <div className="flex justify-between gap-4">
                                                <div className="flex gap-3 flex-1">
                                                    <div
                                                    className={`w-9 h-9 rounded-full border flex items-center justify-center font-semibold shrink-0 ${circleClass}`}
                                                    >
                                                    {label}
                                                    </div>

                                                    <div className="text-slate-700 leading-6 break-words overflow-hidden">
                                                    <LatexRenderer text={value} />
                                                    </div>
                                                </div>

                                                {badge}
                                                </div>
                                            </div>
                                            );
                                        }
                                        )}
                                    </div>

                                    {/* Footer */}
                                    {/* <div className="mt-6 pt-5 border-t border-slate-200 flex justify-end">
                                        <button className="cursor-pointer px-5 py-2.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition">
                                        View Solution
                                        </button>
                                    </div> */}
                                    <h3 className='mt-10 text-lg text-black' >Solution : </h3>
                                    <div className="text-slate-800 text-[15px] leading-7 mb-6">
                                        <LatexRenderer text={qp?.solution} />
                                    </div>
                                    </div>
                                </div>
                                );
                            })}
                            </div>
                    )}

                    {/* ── Resources Tab ── */}
                    {activeTab === 'resources' && (
                        <div className="space-y-5">
                            {/* Hero Banner */}
                            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 p-8 lg:p-10">

                                <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-white/10 blur-2xl"></div>
                                <div className="absolute bottom-0 right-20 w-40 h-40 rounded-full bg-cyan-300/10 blur-xl"></div>

                                <div className="relative z-10 flex items-center justify-between gap-10">

                                    <div className="max-w-2xl">
                                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-medium text-white backdrop-blur">
                                            <i className="ti ti-crown"></i>
                                            PREMIUM PROGRAM
                                        </span>

                                        <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-white leading-tight">
                                            Join Super 30 Revision Program
                                        </h2>

                                        <p className="mt-4 text-white/80 text-lg leading-relaxed">
                                            A focused 30-day revision system with daily targets,
                                            formula revision, mock tests and AI-powered performance
                                            tracking designed for the final month before exams.
                                        </p>

                                        <div className="flex gap-4 mt-8">
                                            <button className="px-6 py-3 rounded-2xl bg-white text-slate-900 font-semibold hover:scale-105 transition-all cursor-pointer">
                                                Join Now
                                            </button>

                                            <button className="px-6 py-3 rounded-2xl border border-white/20 bg-white/10 backdrop-blur text-white font-semibold hover:bg-white/20 transition-all cursor-pointer">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>

                                    <div className="hidden lg:flex flex-col items-center justify-center">
                                        <div className="w-36 h-36 rounded-full border-8 border-white/20 flex items-center justify-center bg-white/10 backdrop-blur">
                                            <div className="text-center">
                                                <p className="text-5xl font-bold text-white">30</p>
                                                <p className="text-white/70 text-sm">
                                                    Days
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Bento Cards */}
                            <div className="grid grid-cols-12 gap-5">

                                {/* Mock Tests */}
                                <div className="col-span-12 lg:col-span-6 rounded-3xl bg-slate-900 p-8 text-white relative overflow-hidden group hover:-translate-y-1 transition-all">

                                    <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>

                                    <div className="relative z-10">
                                        <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-5">
                                            <i className="ti ti-target-arrow text-cyan-400 text-3xl"></i>
                                        </div>

                                        <h3 className="text-2xl font-bold">
                                            Mock Test Series
                                        </h3>

                                        <p className="mt-3 text-white/60 leading-relaxed">
                                            Attempt full syllabus tests, chapter tests and previous
                                            year pattern papers with advanced analytics.
                                        </p>

                                        <button className="mt-6 inline-flex items-center gap-2 text-cyan-400 font-semibold">
                                            Start Testing
                                            <i className="ti ti-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>

                                {/* Formula Sheets */}
                                <div className="col-span-12 lg:col-span-3 rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 p-8 text-white group hover:-translate-y-1 transition-all">

                                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
                                        <i className="ti ti-book-2 text-3xl"></i>
                                    </div>

                                    <h3 className="text-xl font-bold">
                                        Formula Sheets
                                    </h3>

                                    <p className="mt-3 text-white/80 text-sm">
                                        Quick-access formula collection for last-minute revision.
                                    </p>

                                    <button className="mt-6 text-sm font-semibold">
                                        Download →
                                    </button>
                                </div>

                                {/* Revision Notes */}
                                <div className="col-span-12 lg:col-span-3 rounded-3xl bg-gradient-to-br from-emerald-500 to-green-600 p-8 text-white group hover:-translate-y-1 transition-all">

                                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
                                        <i className="ti ti-notebook text-3xl"></i>
                                    </div>

                                    <h3 className="text-xl font-bold">
                                        Revision Notes
                                    </h3>

                                    <p className="mt-3 text-white/80 text-sm">
                                        Condensed chapter notes for rapid revision and retention.
                                    </p>

                                    <button className="mt-6 text-sm font-semibold">
                                        Download →
                                    </button>
                                </div>

                            </div>

                        </div>
                    )}
                </div>
            </div>
        </>
    )
}