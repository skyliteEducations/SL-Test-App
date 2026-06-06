"use client";

import { createContext, useState } from "react";
import axios from "axios";
import AlertPeep from "@/app/utility/alert";
export const ChapterTestContext = createContext();

export const ChapterTestProvider = ({ children }) => {

    const [Loading, isLoading] = useState(false)
    const [currentSheet, setCurrentSheet] = useState([])

    const fetchingCurrentSheet= async(subject)=>{
        try{
            let sheet = []
            if(subject == 'physics'){
                sheet = JSON.parse(localStorage.getItem("Physics_chapterwise_active_sheet"))
            }
            setCurrentSheet(currentSheet=> sheet)
        }catch(error){
            console.error("Error fetching chapters:", error);

        }
    }

    return (
        <ChapterTestContext.Provider value={{ fetchingCurrentSheet, currentSheet, Loading }}>
            {children}
        </ChapterTestContext.Provider>
    );
}
