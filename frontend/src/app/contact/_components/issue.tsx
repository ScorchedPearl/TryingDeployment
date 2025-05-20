"use client"
import { MailQuestionIcon } from "lucide-react";
export default function Issue() {
 return (
  <div className="fixed bottom-8 left-8 z-50 flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 rounded-xl shadow-2xl animate-fade-in h-10 w-28 select-none" onClick={() => window.location.href = "/contact"}>
   <span className="flex items-center justify-center bg-white/20 rounded-full  shadow-md">
    <MailQuestionIcon className="text-white w-3 h-2 animate-bounce" />
   </span>
   <div>
    <h2 className="text-white text-sm font-extrabold tracking-wide drop-shadow-lg">
     Issue?
    </h2>
   </div>
  </div>
 );
}