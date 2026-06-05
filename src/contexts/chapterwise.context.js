"use client";

import { createContext, useState } from "react";
import axios from "axios";
import AlertPeep from "@/app/utility/alert";
export const ChapterContext = createContext();

export const ChapterProvider = ({ children }) => {

    const [physicsList, setPhysicsList] = useState([])
    const [physicsSheets, setPhysicsSheets] = useState([])

    const fetchPhysicsChapters = async () => {
        try {
            const res = await axios.get(
                "http://localhost:5001/api/v1/tests/physics-chapters-list"
            );
            setPhysicsList(physicsList=> res.data.chapters)
            return res.data;
        } catch (error) {
            console.error("Error fetching chapters:", error);
            return null;
        }
    };

    const fetchPhysicsChapterSheets = async (chapter) => {
        try {
            const res = await axios.post(
                "http://localhost:5001/api/v1/tests/physics-chapters-specific",
                {chapter}
            );
            console.log(res.data.sheets)
            setPhysicsSheets(physicsSheets=> res.data.sheets)
            return res.data;
        } catch (error) {
            console.error("Error fetching chapters:", error);
            return null;
        }
    };
    
    return (
        <ChapterContext.Provider value={{ fetchPhysicsChapters, physicsList, fetchPhysicsChapterSheets, physicsSheets }}>
          {children}
        </ChapterContext.Provider>
    );
}
