
import Landing from './landing'
import { useSearchParams } from "next/navigation";
export default function ResultPage(){
    const searchParams = useSearchParams();

    const subject = searchParams.get("subject");
    const sheetId = searchParams.get("sheet");
    const chapterName = searchParams.get("chapterName");


    return(
        <Landing subject={subject} sheetId={sheetId} chapterName={chapterName} />
    )
}