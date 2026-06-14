// 'use client'
// import Landing from './landing'
// import { useSearchParams } from "next/navigation";
// export default function ResultPage(){
//     const searchParams = useSearchParams();

//     const subject = searchParams.get("subject");
//     const sheetId = searchParams.get("sheet");
//     const chapterName = searchParams.get("chapterName");


//     return(
//         <Landing subject={subject} sheetId={sheetId} chapterName={chapterName} />
//     )
// }

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