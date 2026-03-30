'use client'
import Image from "next/image";
// import LoginPage from "./components/login";
import QuizIcon from '@mui/icons-material/Quiz';
import TokenIcon from '@mui/icons-material/Token';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ErrorIcon from '@mui/icons-material/Error';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Tests from "./tests";
import MyTests from "./mytests";
import CBTInstructions from "../desclaimer/page";
import { useState } from "react";
import TestDetails from "../test-details/page";
import AskDoubtForm from "./doubts";
import ExamDashboard from "./events";
import ComplaintDashboard from "./complain";
import AnalyzeDashboard from "./analyze";
import SettingsForms from "./settings";
import FloatingActions from "../components/speedDial";

export default function Dashboard() {

    const [navigationOptions, setNavigationOption] = useState('All Tests')

    function editNavigationOption(el, option){
        setNavigationOption(navigationOptions=> option)
    }

  return (
    <div className="grid grid-cols-12 h-[100vh]">
        <FloatingActions/>
        <div className="navigation flex flex-col gap-4 col-span-2 p-4 h-full w-full bg-teal-700">
  
        {/* Logo Panel */}
        <div className="logopanel flex items-center gap-2">
            <Image 
            src="/logo1.png" 
            className="rounded" 
            width={30} 
            height={30} 
            alt="logo"
            />
            <h1 className="text-md font-semibold text-white whitespace-nowrap">
            Skylite Educations
            </h1>
        </div>

        {/* Links */}
        <div className="links flex flex-col gap-2 w-full mt-5">
            <button onClick={(el)=> editNavigationOption(el,"All Tests")} className={navigationOptions=="All Tests" ? `cursor-pointer flex items-center gap-4 px-3 py-2 text-white rounded-lg bg-teal-600 transition w-full`: `cursor-pointer flex items-center gap-4 px-3 py-2 text-white rounded-lg hover:bg-teal-600 transition w-full`}>
                <QuizIcon />
                <span className="text-sm font-medium" >All Tests</span>
            </button>
            <button onClick={(el)=> editNavigationOption(el,"My Tests")} className={navigationOptions=="My Tests" ? `cursor-pointer flex items-center gap-4 px-3 py-2 text-white rounded-lg bg-teal-600 transition w-full`: `cursor-pointer flex items-center gap-4 px-3 py-2 text-white rounded-lg hover:bg-teal-600 transition w-full`}>
                <TokenIcon />
                <span className="text-sm font-medium" >My Tests</span>
            </button>
            <button onClick={(el)=> editNavigationOption(el,"Ask Doubts")} className={navigationOptions=="Ask Doubts" ? `cursor-pointer flex items-center gap-4 px-3 py-2 text-white rounded-lg bg-teal-600 transition w-full`: `cursor-pointer flex items-center gap-4 px-3 py-2 text-white rounded-lg hover:bg-teal-600 transition w-full`}>
                <PsychologyIcon />
                <span className="text-sm font-medium" >Ask Doubts</span>
            </button>
            <button onClick={(el)=> editNavigationOption(el,"Analyze")} className={navigationOptions=="Analyze" ? `cursor-pointer flex items-center gap-4 px-3 py-2 text-white rounded-lg bg-teal-600 transition w-full`: `cursor-pointer flex items-center gap-4 px-3 py-2 text-white rounded-lg hover:bg-teal-600 transition w-full`}>
                <DonutSmallIcon />
                <span className="text-sm font-medium" >Analyze</span>
            </button>
            <button onClick={(el)=> editNavigationOption(el,"Events")} className={navigationOptions=="Events" ? `cursor-pointer flex items-center gap-4 px-3 py-2 text-white rounded-lg bg-teal-600 transition w-full`: `cursor-pointer flex items-center gap-4 px-3 py-2 text-white rounded-lg hover:bg-teal-600 transition w-full`}>
                <CalendarMonthIcon />
                <span className="text-sm font-medium" >Events</span>
            </button>
            <button onClick={(el)=> editNavigationOption(el,"My complains")} className={navigationOptions=="My complains" ? `cursor-pointer flex items-center gap-4 px-3 py-2 text-white rounded-lg bg-teal-600 transition w-full`: `cursor-pointer flex items-center gap-4 px-3 py-2 text-white rounded-lg hover:bg-teal-600 transition w-full`}>
                <ErrorIcon />
                <span className="text-sm font-medium" >My complains</span>
            </button>
            <button onClick={(el)=> editNavigationOption(el,"Settings")} className={navigationOptions=="Settings" ? `cursor-pointer flex items-center gap-4 px-3 py-2 text-white rounded-lg bg-teal-600 transition w-full`: `cursor-pointer flex items-center gap-4 px-3 py-2 text-white rounded-lg hover:bg-teal-600 transition w-full`}>
                <SettingsIcon />
                <span className="text-sm font-medium" >Settings</span>
            </button>
            <button onClick={(el)=> editNavigationOption(el,"Logout")} className={navigationOptions=="Logout" ? `cursor-pointer flex items-center gap-4 px-3 py-2 text-white rounded-lg bg-teal-600 transition w-full`: `cursor-pointer flex items-center gap-4 px-3 py-2 text-white rounded-lg hover:bg-teal-600 transition w-full`}>
                <ExitToAppIcon />
                <span className="text-sm font-medium" >Logout</span>
            </button>
        </div>

        </div>
        <div className="content col-span-10 h-full w-full bg-white">
            <div className="topBar h-[10vh] w-full bg-teal-500 px-6 flex items-center justify-between">
                <h2 className="text-white text-xl font-semibold tracking-wide">
                    Hi, <span className="font-bold text-yellow-200">Gursimran</span> 👋
                </h2>

                {/* Right side example (optional) */}
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-semibold">
                    G
                    </div>
                </div>
            </div>
            <div className="h-[90vh] w-full">
                {navigationOptions=='All Tests'&&
                    <Tests/> 
                }
                {navigationOptions=='My Tests'&&
                    <MyTests/>
                }
                {navigationOptions=='Ask Doubts'&&
                    <AskDoubtForm/>
                }
                {navigationOptions=='Events'&&
                    <ExamDashboard/>
                }
                {navigationOptions=='My complains'&&
                    <ComplaintDashboard/>
                }
                {navigationOptions=='Analyze'&&
                    <AnalyzeDashboard/>
                }
                {navigationOptions=='Settings'&&
                    <SettingsForms/>
                }
            </div>
        </div>
    </div>
  );
}
