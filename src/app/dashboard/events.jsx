'use client'
import { useState } from "react";

const examData = {
  "IIT JEE": {
    badge: "Engineering",
    date: "April 2026",
    seats: "2.5L+ seats",
    mode: "CBT Mode",
    desc: "Engineering entrance for IITs and NITs. One of the most competitive exams in India.",
    subjects: ["Physics", "Chemistry", "Mathematics"],
  },
  "NEET": {
    badge: "Medical",
    date: "May 2026",
    seats: "1.8L+ seats",
    mode: "Offline",
    desc: "Medical entrance for MBBS and BDS admissions across India.",
    subjects: ["Biology", "Physics", "Chemistry"],
  },
  "UPSC": {
    badge: "Civil Services",
    date: "June 2026",
    seats: "1000 seats",
    mode: "Offline",
    desc: "Civil Services exam for IAS, IPS, and allied services.",
    subjects: ["GS Paper I", "GS Paper II", "Essay"],
  },
  "SSC CGL": {
    badge: "Government",
    date: "July 2026",
    seats: "10,000+ posts",
    mode: "CBT Mode",
    desc: "Staff Selection Commission exam for Group B & C government posts.",
    subjects: ["Quantitative", "English", "Reasoning"],
  },
  "GATE": {
    badge: "Post Graduate",
    date: "February 2027",
    seats: "PSU + M.Tech",
    mode: "CBT Mode",
    desc: "Graduate Aptitude Test for PSU jobs and M.Tech admissions.",
    subjects: ["Core Subject", "Engineering Maths", "General Aptitude"],
  },
};

export default function ExamDashboard() {
  const [selected, setSelected] = useState("IIT JEE");
  const exam = examData[selected];

  return (
    <div className="p-4 md:p-6 h-full">
      <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden border border-gray-200 bg-white min-h-[480px] h-full">

        {/* SIDEBAR */}
        <div className="flex flex-row md:flex-col gap-2 bg-teal-700 p-3 md:p-5 md:w-[220px] md:min-w-[220px] flex-wrap">
          <p className="hidden md:block text-teal-300 text-xs font-medium tracking-widest uppercase mb-2 px-2">
            Exams
          </p>
          {Object.keys(examData).map((name) => (
            <button
              key={name}
              onClick={() => setSelected(name)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all text-left
                ${selected === name
                  ? "bg-white/20 text-white"
                  : "text-teal-100 hover:bg-white/10"
                }`}
            >
              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${selected === name ? "bg-white" : "bg-teal-400"}`} />
              <span className="hidden md:inline">{name}</span>
              <span className="md:hidden text-xs">{name}</span>
            </button>
          ))}
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 p-5 md:p-8 flex flex-col gap-5">

          {/* Header */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-teal-50 text-teal-700 mb-2">
              {exam.badge}
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">{selected}</h2>
          </div>

          <hr className="border-gray-100" />

          {/* Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Exam date", value: exam.date },
              { label: "Available seats", value: exam.seats },
              { label: "Mode", value: exam.mode },
              { label: "Status", value: "Registrations open", green: true },
            ].map(({ label, value, green }) => (
              <div key={label} className="bg-gray-50 rounded-xl p-4 border border-teal-700">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{label}</p>
                <p className={`text-sm font-medium ${green ? "text-teal-600" : "text-gray-800"}`}>{value}</p>
              </div>
            ))}
          </div>

          {/* About */}
          <div className="bg-gray-50 rounded-xl p-4 border border-teal-700">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">About</p>
            <p className="text-sm text-gray-600 leading-relaxed">{exam.desc}</p>
          </div>

          {/* Subjects */}
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Subjects covered</p>
            <div className="flex flex-wrap gap-2">
              {exam.subjects.map((s) => (
                <span key={s} className="px-3 py-1 border border-teal-700 rounded-lg text-sm bg-gray-100 text-gray-600 border border-gray-200">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-auto pt-2">
            <button className="px-5 py-2.5 rounded-xl bg-teal-700 text-white text-sm font-medium hover:bg-teal-800 transition">
              View syllabus
            </button>
            <button className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition">
              Set reminder
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}