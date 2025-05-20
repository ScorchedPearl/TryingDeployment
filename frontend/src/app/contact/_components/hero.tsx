import { SendIcon } from "lucide-react";
export default function Hero() {
 return (
  <div className="min-h-screen flex flex-col bg-black pb-8">
  <div className="text-left pt-10 md:pt-40 pl-4 md:pl-40 pb-6 md:pb-12">
    <h1 className="font-bold text-white text-3xl md:text-6xl">Get In Touch</h1>
    <p className="text-base md:text-lg text-gray-400 mb-6 md:mb-8">
      We would love to hear from you! Please fill out the form below.
    </p>
  </div>
  <div className="text-center bg-cyan-600 mx-4 md:mx-40 grid grid-cols-1 md:grid-cols-10 rounded-2xl overflow-hidden">
    <div className="col-span-1 md:col-span-7 flex items-center justify-center bg-black">
      <form className="w-full max-w-full mx-auto bg-[#181b1a] p-4 md:p-6 shadow-lg">
         <div>
        <h2 className="text-4xl text-left text-white font-bold">Send Us A Message</h2>
       </div>
        <div className="mb-2 grid grid-cols-2 gap-4 p-4">
         <div className="col-span-1">
      <label className="block text-white mb-2 text-left font-bold" htmlFor="name">
       Name <span className="text-red-500">*</span>
      </label>
      <input
       type="text"
       id="name"
       className="w-full p-2 bg-[#09090b] text-white rounded"
       placeholder="Your Name"
      />
      </div>
      <div className="col-span-1">
      <label className="block text-white font-bold mb-2 text-left" htmlFor="email">
       Email <span className="text-red-500">*</span>
      </label>
      <input
       type="email"
       id="email"
       className="w-full p-2 bg-[#09090b]  text-white rounded"
       placeholder="Your Email"
      />
      </div>
        </div>
        <div className="mb-2 grid grid-cols-2  gap-4 p-4">
         <div className="col-span-1">
      <label className="block text-white mb-2 text-left" htmlFor="page">
       Page Issue Arrised On
      </label>
      <input
       type="text"
       id="page"
       className="w-full p-2 bg-[#09090b] text-white rounded"
       placeholder="Page Name"
      />
      </div>
      <div className="col-span-1">
      <label className="block text-white mb-2 text-left font-bold" htmlFor="subject">
       Subject <span className="text-red-500">*</span>
      </label>
      <input
       type="text"
       id="subject"
       className="w-full p-2 bg-[#09090b] text-white rounded"
       placeholder="Subject"
      />
      </div>
        </div>
        <div className="mb-2 p-4">
      <label className="block text-white mb-2 text-left font-bold" htmlFor="message">
       Message <span className="text-red-500">*</span>
      </label>
      <textarea
       id="message"
       rows={1}
       className="w-full p-2 bg-[#09090b] text-white rounded"
       placeholder="Your Message"
      ></textarea>
        </div>
        <div className="flex justify-end m-4">

      <button
       type="submit"
       className="bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded gap-2 transition-colors flex"
      >
       <SendIcon></SendIcon> Send Message
      </button>
        </div>
      </form>
    </div>
    <div className="col-span-1 md:col-span-3 flex flex-col bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-none md:rounded-r-2xl p-4 md:p-6 text-white shadow-xl h-full justify-between">
      <h2 className="text-xl font-bold tracking-wide mb-4 text-left">Contact Information</h2>

  <div className="flex flex-col items-center justify-center flex-grow text-center">
    <span className="uppercase text-xs tracking-widest text-cyan-100">Email</span>
    <div className="text-lg md:text-xl font-medium mt-2 break-words select-all">
      marcelpearl@gmail.com
    </div>
  </div>

 <div className="flex justify-center gap-6 pt-10">
  <a
    href="https://instagram.com/marcelpearl"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-80 transition-opacity"
  >
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <rect width="24" height="24" rx="6" fill="#fff" />
      <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.8A3 3 0 1 1 12 9a3 3 0 0 1 0 6Zm4.95-8.1a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM19.2 7.8a5.4 5.4 0 0 0-1.47-3.83A5.4 5.4 0 0 0 13.8 2.4h-3.6a5.4 5.4 0 0 0-3.83 1.47A5.4 5.4 0 0 0 2.4 7.8v3.6a5.4 5.4 0 0 0 1.47 3.83A5.4 5.4 0 0 0 7.8 19.2h3.6a5.4 5.4 0 0 0 3.83-1.47A5.4 5.4 0 0 0 19.2 13.8v-3.6Z" fill="#06b6d4" />
    </svg>
  </a>

  <a
    href="https://linkedin.com/in/marcelpearl"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-80 transition-opacity"
  >
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <rect width="24" height="24" rx="6" fill="#fff" />
      <path d="M6.94 8.5a1.06 1.06 0 1 1 0-2.12 1.06 1.06 0 0 1 0 2.12ZM7.99 10.25H5.89V18h2.1v-7.75ZM12.5 10.25h-2.1V18h2.1v-4.25c0-1.13.87-2 2-2s2 .87 2 2V18h2.1v-4.5c0-2.21-1.79-4-4-4s-4 1.79-4 4V18h2.1v-7.75Z" fill="#06b6d4" />
    </svg>
  </a>

  <a
    href="https://github.com/marcelpearl"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-80 transition-opacity"
  >
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <rect width="24" height="24" rx="6" fill="#fff" />
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10Z" fill="#06b6d4" />
    </svg>
  </a>
</div>
    </div>
  </div>
</div>
 
 );
}