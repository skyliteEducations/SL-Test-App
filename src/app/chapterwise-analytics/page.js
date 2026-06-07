'use client'

import { useState } from 'react'

export default function ResultPage() {
    const [activeTab, setActiveTab] = useState('analytics')

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

    const questions = [
        { num: 1, status: 'correct', your: 'A', correct: 'A' },
        { num: 2, status: 'wrong', your: 'B', correct: 'D' },
        { num: 3, status: 'skipped', your: null, correct: 'C' },
    ]

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

    return (
        <>
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
                            <h1 className="mt-2 text-6xl text-white leading-tight font-[Instrument_Serif]">
                                Alternating Current
                            </h1>
                            <p className="mt-1 text-sm text-white/60">
                                Physics · Chapter Test Analysis
                            </p>
                            <div className="mt-4 inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/90">
                                <span className="w-2 h-2 rounded-full bg-teal-300 inline-block" />
                                Rank #{stats.rank} out of all attempts
                            </div>
                        </div>

                        {/* Accuracy ring */}
                        <div className="shrink-0 w-44 h-44 rounded-full border-[12px] border-white/20 bg-white/10 flex flex-col items-center justify-center">
                            <span className="text-5xl font-semibold text-white leading-none">{stats.accuracy}%</span>
                            <span className="text-xs text-white/60 mt-1">Accuracy</span>
                        </div>
                    </div>
                </div>

                {/* ── Score Cards ── */}
                <div className="max-w-7xl mx-auto px-12 -mt-8 relative z-10 grid grid-cols-5 gap-4">
                    {scoreCards.map(({ label, value, suffix, color, small }) => (
                        <div key={label} className="bg-white rounded-2xl border border-black/[0.06] shadow-sm px-6 py-5">
                            <p className="text-sm text-slate-500 mb-1">{label}</p>
                            <p className={`font-semibold ${color} ${small ? 'text-2xl' : 'text-4xl'}`}>
                                {value}
                                {suffix && <span className="text-base font-normal text-slate-400">{suffix}</span>}
                            </p>
                        </div>
                    ))}
                </div>

                {/* ── Body ── */}
                <div className="max-w-7xl mx-auto px-12 pt-10 pb-16">

                    {/* Tabs */}
                    <div className="flex gap-2 bg-white border border-black/[0.06] rounded-2xl p-2 shadow-sm mb-8">
                        {tabs.map(({ key, icon, label }) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`flex items-center gap-2 px-7 py-3 rounded-xl text-[15px] font-medium transition-all duration-150 cursor-pointer border-none
                                    ${activeTab === key
                                        ? 'bg-teal-600 text-white shadow-sm'
                                        : 'text-slate-500 hover:bg-teal-50 hover:text-teal-600'
                                    }`}
                            >
                                <i className={`ti ${icon}`} aria-hidden="true" />
                                {label}
                            </button>
                        ))}
                    </div>

                    {/* ── Analytics Tab ── */}
                    {activeTab === 'analytics' && (
                        <div className="grid grid-cols-2 gap-5">

                            {/* Left panel */}
                            <div className="bg-white rounded-2xl border border-black/[0.06] shadow-sm p-8">
                                <p className="text-lg font-semibold text-slate-800 mb-6">Difficulty Analysis</p>
                                {difficultyBars.map(({ label, pct, color, text }) => (
                                    <div key={label} className="mb-5">
                                        <div className="flex justify-between text-sm text-slate-500 mb-2">
                                            <span>{label}</span>
                                            <span className={`font-semibold ${text}`}>{pct}%</span>
                                        </div>
                                        <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                            <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
                                        </div>
                                    </div>
                                ))}

                                <div className="mt-7 pt-6 border-t border-slate-100">
                                    <p className="text-lg font-semibold text-slate-800 mb-5">Topic Accuracy</p>
                                    {topicBars.map(({ label, pct, color, text }) => (
                                        <div key={label} className="mb-4">
                                            <div className="flex justify-between text-sm text-slate-500 mb-2">
                                                <span>{label}</span>
                                                <span className={`font-semibold ${text}`}>{pct}%</span>
                                            </div>
                                            <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                                <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* AI Panel */}
                            <div className="bg-slate-900 rounded-2xl shadow-sm p-8">
                                <div className="flex items-center gap-2 mb-6">
                                    <i className="ti ti-sparkles text-teal-400 text-xl" aria-hidden="true" />
                                    <span className="text-lg font-semibold text-white">AI Analysis</span>
                                    <span className="text-[11px] font-medium bg-teal-600 text-white px-3 py-0.5 rounded-full tracking-wide">Smart</span>
                                </div>

                                <p className="text-[11px] uppercase tracking-[0.14em] text-white/30 mb-3">Strengths</p>
                                {['Strong in RMS Values', 'Strong in AC Current'].map(s => (
                                    <div key={s} className="flex items-center gap-2 bg-white/[0.06] rounded-xl px-4 py-2.5 mb-2 text-sm text-white/85">
                                        <i className="ti ti-circle-check text-teal-400 text-base" aria-hidden="true" />
                                        {s}
                                    </div>
                                ))}

                                <p className="text-[11px] uppercase tracking-[0.14em] text-white/30 mt-5 mb-3">Needs Work</p>
                                {['Resonance concepts', 'Phasor diagram interpretation'].map(s => (
                                    <div key={s} className="flex items-center gap-2 bg-amber-400/10 rounded-xl px-4 py-2.5 mb-2 text-sm text-white/85">
                                        <i className="ti ti-alert-triangle text-amber-400 text-base" aria-hidden="true" />
                                        {s}
                                    </div>
                                ))}

                                <p className="text-[11px] uppercase tracking-[0.14em] text-white/30 mt-5 mb-3">Recommendation</p>
                                <div className="flex items-start gap-2 bg-white/[0.06] rounded-xl px-4 py-2.5 mb-2 text-[13px] text-white/50">
                                    <i className="ti ti-bulb text-teal-400 text-base shrink-0 mt-0.5" aria-hidden="true" />
                                    Revise LC circuit resonance derivations and practice phasor drawing under time constraints.
                                </div>

                                <div className="mt-5 bg-teal-500/20 border border-teal-500/30 rounded-xl px-5 py-4 flex items-center justify-between">
                                    <div>
                                        <p className="text-xs text-white/40 mb-1">Predicted next score</p>
                                        <p className="text-3xl font-semibold text-teal-400">86%</p>
                                    </div>
                                    <i className="ti ti-trending-up text-teal-400 text-4xl" aria-hidden="true" />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ── Questions Tab ── */}
                    {activeTab === 'questions' && (
                        <div className="space-y-3">
                            {questions.map(({ num, status, your, correct }) => {
                                const cfg = qConfig[status]
                                return (
                                    <div key={num} className={`bg-white rounded-2xl border border-black/[0.06] shadow-sm px-7 py-5 flex items-start gap-5 border-l-[5px] ${cfg.border}`}>
                                        <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 text-xl ${cfg.iconBg} ${cfg.iconColor}`}>
                                            <i className={`ti ${cfg.icon}`} aria-hidden="true" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="text-base font-semibold text-slate-800">Question {num}</p>
                                                <span className={`text-xs font-medium px-3 py-1 rounded-full ${cfg.tagBg} ${cfg.tagColor}`}>
                                                    {cfg.label}
                                                </span>
                                            </div>
                                            <div className="flex gap-6 text-sm text-slate-500">
                                                {status === 'skipped'
                                                    ? <span>Not attempted</span>
                                                    : <>
                                                        <span>Your answer: <strong className={status === 'wrong' ? 'text-red-500' : 'text-green-600'}>{your}</strong></span>
                                                        <span>Correct answer: <strong className="text-slate-800">{correct}</strong></span>
                                                    </>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )}

                    {/* ── Resources Tab ── */}
                    {activeTab === 'resources' && (
                        <div className="grid grid-cols-3 gap-5">
                            {resources.map(({ icon, head, sub, link, linkIcon }) => (
                                <div key={head} className="bg-white rounded-2xl border border-black/[0.06] shadow-sm p-7">
                                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 text-2xl mb-5">
                                        <i className={`ti ${icon}`} aria-hidden="true" />
                                    </div>
                                    <p className="text-base font-semibold text-slate-800 mb-1.5">{head}</p>
                                    <p className="text-sm text-slate-500 leading-relaxed">{sub}</p>
                                    <a href="#" className="inline-flex items-center gap-1.5 text-sm text-teal-600 font-medium mt-4 hover:underline">
                                        <i className={`ti ${linkIcon}`} aria-hidden="true" />
                                        {link}
                                    </a>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}