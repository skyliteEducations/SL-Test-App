'use client'

import { useEffect, useState } from 'react'
import Landing from './landing'

export default function ResultPage() {

    const [params, setParams] = useState({
        subject: '',
        sheetId: '',
        chapterName: ''
    })

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search)
         console.log(window.location.search);

    console.log({
        subject: searchParams.get("subject"),
        sheetId: searchParams.get("sheet"),
        chapterName: searchParams.get("chapterName")
    });
        setParams({
            subject: searchParams.get("subject"),
            sheetId: searchParams.get("sheet"),
            chapterName: searchParams.get("chapterName")
        })
    }, [])

    return (
        <Landing
            subject={params.subject}
            sheetId={params.sheetId}
            chapterName={params.chapterName}
        />
    )
}
