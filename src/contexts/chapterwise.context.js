"use client";

import { createContext, useState } from "react";
import axios from "axios";
import AlertPeep from "@/app/utility/alert";
export const ChapterContext = createContext();

export const ChapterProvider = ({ children }) => {

    const [physicsList, setPhysicsList] = useState([])
    const [mathsList, setMathsList] = useState([])
    const [filterMathsList, setFilterMathsList] = useState([])
    const [filterPhysicsList, setFilterPhysicsList] = useState([])

    const [organicChapters, setOrganicChapters] = useState([])
    const [filterOrganicChapters, setFilterOrganicChapters] = useState([])

    const [physicalChapters, setPhysicalChapters] = useState([])
    const [filterPhysicalChapters, setFilterPhysicalChapters] = useState([])

    const [inorganicChapters, setInorganicChapters] = useState([])
    const [filterInorganicChapters, setFilterInorganicChapters] = useState([])

    const [physicsSheets, setPhysicsSheets] = useState([])
    const [mathsSheets, setMathsSheets] = useState([])
    const [chemistrySheets, setChemistrySheets] = useState([])

    const [activePhysicsSheetSolving, setActivePhysicsSheetSolving] = useState([])
    const [Loading, setLoading] = useState(true)

    const fetchPhysicsChapters = async () => {
        setLoading(Loading=> true)
        try {
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_ENVIRONMENT=='Development' ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL : process.env.NEXT_PUBLIC_BASE_URL_PROD }/api/v1/tests/physics-chapters-list`
            );
            setPhysicsList(physicsList=> res.data.chapters)
            setFilterPhysicsList(filterPhysicsList=> res.data.chapters)

            setLoading(Loading=> false)

            return res.data;
        } catch (error) {
            console.error("Error fetching chapters:", error);
            setLoading(Loading=> false)

            return null;
        }
    };

    const fetchChemistryChapters = async () => {
        setLoading(Loading=> true)
        try {
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_ENVIRONMENT=='Development' ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL : process.env.NEXT_PUBLIC_BASE_URL_PROD }/api/v1/tests/chemistry-chapters-list`
            );
            console.log("chemistry stuff", res.data)
            setOrganicChapters(organicChapters=> res.data.organic)
            setInorganicChapters(inorganicChapters=> res.data.inorganic)
            setPhysicalChapters(physicalChapters=> res.data.physical)
            setFilterOrganicChapters(filterOrganicChapters=> res.data.organic)
            setFilterInorganicChapters(filterInorganicChapters=> res.data.inorganic)
            setFilterPhysicalChapters(filterPhysicalChapters=> res.data.physical)
            setLoading(Loading=> false)

            return res.data;
        } catch (error) {
            console.error("Error fetching chapters:", error);
            setLoading(Loading=> false)

            return null;
        }
    };

    const fetchMathsChapters = async () => {
        setLoading(Loading=> true)
        try {
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_ENVIRONMENT=='Development' ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL : process.env.NEXT_PUBLIC_BASE_URL_PROD }/api/v1/tests/maths-chapters-list-sending`
            );
            setMathsList(mathsList=> res.data.chapters)
            setFilterMathsList(filterMathsList=> res.data.chapters)

            console.log("maths",res.data)
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
                {chapter},
                {
                    withCredentials : true
                }
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

    const fetchChemistryChapterSheets = async (chapter) => {
        setLoading(Loading=> true)

        try {
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_ENVIRONMENT=='Development' ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL : process.env.NEXT_PUBLIC_BASE_URL_PROD }/api/v1/tests/chemistry-chapters-specific`,
                {chapter}
            );
            console.log(res.data)
            // setPhysicsSheets(physicsSheets=> res.data.sheets)
            setChemistrySheets(chemistrySheets=> res.data.sheets)
            setLoading(Loading=> false)

            return res.data;
        } catch (error) {
            console.error("Error fetching chapters:", error);
            setLoading(Loading=> false)

            return null;
        }
    };


    const fetchMathsChapterSheets = async (chapter) => {
        setLoading(Loading=> true)

        try {
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_ENVIRONMENT=='Development' ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL : process.env.NEXT_PUBLIC_BASE_URL_PROD }/api/v1/tests/maths-chapters-specific`,
                {chapter},
                {
                    withCredentials : true
                }
            );
            console.log(res.data.sheets)
            setMathsSheets(mathsSheets=> res.data.sheets)
            setLoading(Loading=> false)

            return res.data;
        } catch (error) {
            console.error("Error fetching chapters:", error);
            setLoading(Loading=> false)

            return null;
        }
    };

    const fetchPhysicsChapterSheetExtracted = async (sheetId, chapter_name, subject) => {
        setLoading(Loading=> true)
        if(subject == 'physics'){

            try {
                const res = await axios.post(
                    `${process.env.NEXT_PUBLIC_ENVIRONMENT=='Development' ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL : process.env.NEXT_PUBLIC_BASE_URL_PROD }/api/v1/tests/physics-chapterwise-sheet-sending`,
                    {sheetId, chapterName : chapter_name},
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
        }else if(subject == 'chemistry'){
            try {
                const res = await axios.post(
                    `${process.env.NEXT_PUBLIC_ENVIRONMENT=='Development' ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL : process.env.NEXT_PUBLIC_BASE_URL_PROD }/api/v1/tests/chemistry-chapterwise-sheet-sending`,
                    {sheetId, chapterName : chapter_name},
                    {
                        withCredentials : true
                    }
                );
                console.log("full sheet : ", res.data)
                localStorage.setItem("Chemistry_chapterwise_active_sheet", JSON.stringify(res.data.sheet))
                localStorage.setItem("Chemistry_chapterwise_active_sheet_name", chapter_name)
    
                setLoading(Loading=> false)
    
                // setPhysicsSheets(physicsSheets=> res.data.sheets)
                return res.data;
            } catch (error) {
                console.error("Error fetching chapters:", error);
                setLoading(Loading=> false)
    
                return null;
            }
        }else if(subject=='maths'){
            try {
                const res = await axios.post(
                    `${process.env.NEXT_PUBLIC_ENVIRONMENT=='Development' ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL : process.env.NEXT_PUBLIC_BASE_URL_PROD }/api/v1/tests/maths-chapterwise-sheet-sending`,
                    {sheetId,chapterName : chapter_name},
                    {
                        withCredentials : true
                    }
                );
                console.log("full sheet : ", res.data)
                localStorage.setItem("Maths_chapterwise_active_sheet", JSON.stringify(res.data.sheet))
                localStorage.setItem("Maths_chapterwise_active_sheet_name", chapter_name)
    
                setLoading(Loading=> false)
    
                // setPhysicsSheets(physicsSheets=> res.data.sheets)
                return res.data;
            } catch (error) {
                console.error("Error fetching chapters:", error);
                setLoading(Loading=> false)
    
                return null;
            }
        }
    };

    function mathsSearch(text, listsav){
        let listnew = listsav
        console.log(listnew)
        listnew = listnew.filter(el=>{
            if(el.chapter_name.toLowerCase().includes(text.toLowerCase())){
                return el
            }
        })
        setFilterMathsList(filterMathsList=> listnew)
    }

    function physicsSearch(text, listsav){
        let listnew = listsav
        console.log(listnew)
        listnew = listnew.filter(el=>{
            if(el.chapter_name.toLowerCase().includes(text.toLowerCase())){
                return el
            }
        })
        setFilterPhysicsList(filterPhysicsList=> listnew)
    }

    function organicSearch(text, listsav){
        let listnew = listsav
        console.log(listnew)
        listnew = listnew.filter(el=>{
            if(el.chapter_name.toLowerCase().includes(text.toLowerCase())){
                return el
            }
        })
        setFilterOrganicChapters(filterOrganicChapters=> listnew)
    }

    function inorganicSearch(text, listsav){
        let listnew = listsav
        console.log(listnew)
        listnew = listnew.filter(el=>{
            if(el.chapter_name.toLowerCase().includes(text.toLowerCase())){
                return el
            }
        })
        setFilterInorganicChapters(filterInorganicChapters=> listnew)
    }

    function physicalSearch(text, listsav){
        let listnew = listsav
        console.log(listnew)
        listnew = listnew.filter(el=>{
            if(el.chapter_name.toLowerCase().includes(text.toLowerCase())){
                return el
            }
        })
        setFilterPhysicalChapters(filterPhysicalChapters=> listnew)
    }


    
    return (
        <ChapterContext.Provider value={{ fetchPhysicsChapters, physicsList, fetchPhysicsChapterSheets, physicsSheets, fetchPhysicsChapterSheetExtracted, Loading, fetchChemistryChapters, organicChapters, inorganicChapters, physicalChapters , fetchChemistryChapterSheets, chemistrySheets, fetchMathsChapters, mathsList, fetchMathsChapterSheets, mathsSheets,mathsSearch, filterMathsList, filterPhysicsList, physicsSearch, filterOrganicChapters, organicSearch, inorganicSearch, filterInorganicChapters, filterPhysicalChapters, physicalSearch}}>
          {children}
        </ChapterContext.Provider>
    );
}
