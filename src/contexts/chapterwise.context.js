"use client";

import { createContext, useState } from "react";
import axios from "axios";
import AlertPeep from "@/app/utility/alert";
export const ChapterContext = createContext();

export const ChapterProvider = ({ children }) => {

    const [physicsList, setPhysicsList] = useState([])
    const [physicsSheets, setPhysicsSheets] = useState([])
    const [activePhysicsSheetSolving, setActivePhysicsSheetSolving] = useState([])
    const [Loading, setLoading] = useState(true)

    const fetchPhysicsChapters = async () => {
        setLoading(Loading=> true)
        try {
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_ENVIRONMENT=='Development' ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL : process.env.NEXT_PUBLIC_BASE_URL_PROD }/api/v1/tests/physics-chapters-list`
            );
            setPhysicsList(physicsList=> res.data.chapters)
            setLoading(Loading=> false)

            return res.data;
        } catch (error) {
            console.error("Error fetching chapters:", error);
            setLoading(Loading=> false)

            return null;
        }
    };

    const fetchPhysicsChapterSheets = async (chapter) => {
        setLoading(Loading=> true)

        try {
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_ENVIRONMENT=='Development' ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL : process.env.NEXT_PUBLIC_BASE_URL_PROD }/api/v1/tests/physics-chapters-specific`,
                {chapter}
            );
            console.log(res.data.sheets)
            setPhysicsSheets(physicsSheets=> res.data.sheets)
            setLoading(Loading=> false)

            return res.data;
        } catch (error) {
            console.error("Error fetching chapters:", error);
            setLoading(Loading=> false)

            return null;
        }
    };

    const fetchPhysicsChapterSheetExtracted = async (sheetId, chapter_name) => {
        setLoading(Loading=> true)

        try {
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_ENVIRONMENT=='Development' ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL : process.env.NEXT_PUBLIC_BASE_URL_PROD }/api/v1/tests/physics-chapterwise-sheet-sending`,
                {sheetId},
                {
                    withCredentials : true
                }
            );
            console.log("full sheet : ", res.data)
            localStorage.setItem("Physics_chapterwise_active_sheet", JSON.stringify(res.data.sheet))
            localStorage.setItem("Physics_chapterwise_active_sheet_name", chapter_name)

            setLoading(Loading=> false)

            // setPhysicsSheets(physicsSheets=> res.data.sheets)
            return res.data;
        } catch (error) {
            console.error("Error fetching chapters:", error);
            setLoading(Loading=> false)

            return null;
        }
    };
    
    return (
        <ChapterContext.Provider value={{ fetchPhysicsChapters, physicsList, fetchPhysicsChapterSheets, physicsSheets, fetchPhysicsChapterSheetExtracted, Loading }}>
          {children}
        </ChapterContext.Provider>
    );
}
