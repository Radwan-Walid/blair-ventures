import { FaDiagramProject, FaClipboardList, FaHandshakeSimple } from "react-icons/fa6";
import { GiBranchArrow } from "react-icons/gi";
import { IoConstruct } from "react-icons/io5";
import { MdAnalytics } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";

const OurServices = () => {
  return (
    <section className="h-[36rem] max-1064:h-[40rem] max-658:h-[50rem] overflow-hidden">
        <h1 className="text-4xl max-1064:text-3xl font-fjalla text-[#3E3E3E] text-center mb-12">Providing Best Services</h1>
        <div className="w-fit mx-auto overflow-hidden max-658:w-[24.5rem]">
            <div className="relative grid grid-cols-3 gap-x-32 max-1064:grid-cols-2 max-658:grid-cols-1 max-658:gap-y-2">
                <div className="relative group hex flex flex-col gap-1 w-60 max-658:w-48 bg-black text-center px-6 py-6 cursor-pointer">
                    {/* <input type="checkbox" id="toggleDetails-Project-Based-Staffing" className="hidden peer" /> */}
                    <h1 className="text-white text-lg">Project-Based Staffing</h1>
                    <div className="flex items-center gap-4">
                        <GiBranchArrow size={24} className="scale-x-125 -rotate-45" />
                        <FaDiagramProject  className="text-white" size={24} />
                        <GiBranchArrow size={24} className="scale-x-125 rotate-[135deg]" />
                    </div>
                    {/* <label htmlFor="toggleDetails-Project-Based-Staffing" className="text-foreground">Read More</label> */}
                    <div className="max-658:p-8 max-658:text-sm p-10 absolute left-0 top-full flex items-center justify-center text-white -bottom-full right-0 bg-gray-500 group-hover:top-0 group-hover:bottom-0 transition-all duration-200">Skilled professionals for short and long-term construction projects.</div>
                </div>
                <div className="relative group hex flex flex-col gap-1 w-60 max-658:w-48 bg-black text-center px-6 py-6 cursor-pointer">
                    {/* <input type="checkbox" id="toggleDetails-Contract-Managers-Supervisors" className="hidden peer" /> */}
                    <h1 className="text-white text-lg">Contract Managers & Supervisors</h1>
                    <div className="flex items-center gap-4">
                        <GiBranchArrow size={24} className="scale-x-125 -rotate-45" />
                        <FaClipboardList className="text-white" size={24} />
                        <GiBranchArrow size={24} className="scale-x-125 rotate-[135deg]" />
                    </div>
                    {/* <label htmlFor="toggleDetails-Contract-Managers-Supervisors" className="text-foreground">Read More</label> */}
                    <div className="max-658:p-8 max-658:text-sm p-10 absolute left-0 top-full flex items-center justify-center text-white -bottom-full right-0 bg-gray-500 group-hover:top-0 group-hover:bottom-0 transition-all duration-200">Experienced leaders to oversee and manage construction projects from start to finish.</div>
                </div>
                <div className="relative group hex flex flex-col gap-1 w-60 max-658:w-48 max-658:left-auto max-658:right-12 max-658:top-auto max-658:bottom-[5.5rem] bg-black text-center px-6 pt-6 max-1064:absolute max-1064:top-[6.75rem] max-1064:left-[11.5rem]">
                    {/* <input type="checkbox" id="toggleDetails-Specialized-Staffing-Solutions" className="hidden peer" /> */}
                    <h1 className="text-white text-lg">Specialized Staffing Solutions</h1>
                    <div className="flex items-center gap-4">
                        <GiBranchArrow size={24} className="scale-x-125 -rotate-45" />
                        <IoConstruct className="text-white" size={24} />
                        <GiBranchArrow size={24} className="scale-x-125 rotate-[135deg]" />
                    </div>
                    {/* <label htmlFor="toggleDetails-Specialized-Staffing-Solutions" className="text-foreground">Read More</label> */}
                    <div className="max-658:p-8 max-658:text-sm p-10 absolute left-0 top-full flex items-center justify-center text-white -bottom-full right-0 bg-gray-500 group-hover:top-0 group-hover:bottom-0 transition-all duration-200">Experts for niche roles to ensure the right talent for every project need.</div>
                </div>
            </div>

            <div className="grid grid-cols-3 relative gap-x-32 left-[11.5rem] bottom-[6rem] max-1064:grid-cols-2 max-1064:left-0 max-1064:-bottom-2 max-658:grid-cols-1 max-658:bottom-20 max-658:left-[9.5rem] max-658:gap-y-2">
                <div className="relative group hex flex flex-col gap-1 w-60 max-658:w-48 bg-black text-center px-6 py-6 cursor-pointer">
                    {/* <input type="checkbox" id="toggleDetails-Flexible-Staffing-Options" className="hidden peer" /> */}
                    <h1 className="text-white text-lg">Flexible Staffing Options</h1>
                    <div className="flex items-center gap-4">
                        <GiBranchArrow size={24} className="scale-x-125 -rotate-45" />
                        <RiRefreshFill className="text-white" size={24} />
                        <GiBranchArrow size={24} className="scale-x-125 rotate-[135deg]" />
                    </div>
                    {/* <label htmlFor="toggleDetails-Flexible-Staffing-Options" className="text-foreground">Read More</label> */}
                    <div className="max-658:p-8 max-658:text-sm p-10 absolute left-0 top-full flex items-center justify-center text-white -bottom-full right-0 bg-gray-500 group-hover:top-0 group-hover:bottom-0 transition-all duration-200">Customized staffing arrangements to adapt to changing project demands.</div>
                </div>
                <div className="relative group hex flex flex-col gap-1 w-60 max-658:w-48 bg-black text-center px-6 py-6 cursor-pointer">
                    {/* <input type="checkbox" id="toggleDetails-Comprehensive-Project-Oversight" className="hidden peer" /> */}
                    <h1 className="text-white text-lg">Comprehensive Project Oversight</h1>
                    <div className="flex items-center gap-4">
                        <GiBranchArrow size={24} className="scale-x-125 -rotate-45" />
                        <MdAnalytics className="text-white" size={24} />
                        <GiBranchArrow size={24} className="scale-x-125 rotate-[135deg]" />
                    </div>
                    {/* <label htmlFor="toggleDetails-Comprehensive-Project-Oversight" className="text-foreground">Read More</label> */}
                    <div className="max-658:p-8 max-658:text-sm p-10 absolute left-0 top-full flex items-center justify-center text-white -bottom-full right-0 bg-gray-500 group-hover:top-0 group-hover:bottom-0 transition-all duration-200">Hands-on management from planning to completion, ensuring cost efficiency and timely execution.</div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-x-32 relative left-[23rem] max-658:left-[21rem] bottom-[12rem] max-1064:left-[11.5rem] max-1064:bottom-[5.5rem]">
                <div className="relative group hex flex flex-col gap-1 w-60 max-658:w-48 bg-black text-center px-6 pt-6 max-658:absolute max-658:-left-[21rem] max-658:bottom-20">
                    {/* <input type="checkbox" id="toggleDetails-Client-Focused-Management" className="hidden peer" /> */}
                    <h1 className="text-white text-lg">Client-Focused Management</h1>
                    <div className="flex items-center gap-4">
                        <GiBranchArrow size={24} className="scale-x-125 -rotate-45" />
                        <FaHandshakeSimple className="text-white" size={24} />
                        <GiBranchArrow size={24} className="scale-x-125 rotate-[135deg]" />
                    </div>
                    {/* <label htmlFor="toggleDetails-Client-Focused-Management" className="text-foreground">Read More</label> */}
                    <div className="max-658:p-8 max-658:text-sm p-10 absolute left-0 top-full flex items-center justify-center text-white -bottom-full right-0 bg-gray-500 group-hover:top-0 group-hover:bottom-0 transition-all duration-200">Tailored solutions to manage contracts, budgets, and timelines with top industry standards.</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurServices