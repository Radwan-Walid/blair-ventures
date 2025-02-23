import { FaDiagramProject, FaClipboardList, FaHandshakeSimple } from "react-icons/fa6";
import { GiBranchArrow } from "react-icons/gi";
import { IoConstruct } from "react-icons/io5";
import { MdAnalytics } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";

const OurServices = () => {
  return (
    <section className="h-[36rem] max-1064:h-[40rem] max-636:h-[50rem] overflow-hidden">
        <h1 className="text-4xl max-1064:text-3xl font-semibold text-[#3E3E3E] text-center mb-12">Providing Best Services</h1>
        <div className="w-fit mx-auto overflow-hidden max-636:w-[24.5rem]">
        <div className="relative grid grid-cols-3 gap-x-32 max-1064:grid-cols-2 max-636:grid-cols-1 max-636:gap-y-2">
            <div className="hex flex flex-col gap-1 w-60 max-636:w-48 bg-black text-center px-6 pt-6">
            <h1 className="text-white text-lg">Project-Based Staffing</h1>
            <div className="flex items-center gap-4">
                <GiBranchArrow size={24} className="scale-x-125 -rotate-45" />
                <FaDiagramProject  className="text-white" size={24} />
                <GiBranchArrow size={24} className="scale-x-125 rotate-[135deg]" />
            </div>
            <button className="text-foreground">Read More</button>
            </div>
            <div className="hex flex flex-col gap-1 w-60 max-636:w-48 bg-black text-center px-6 pt-6">
            <h1 className="text-white text-lg">Contract Managers & Supervisors</h1>
            <div className="flex items-center gap-4">
                <GiBranchArrow size={24} className="scale-x-125 -rotate-45" />
                <FaClipboardList className="text-white" size={24} />
                <GiBranchArrow size={24} className="scale-x-125 rotate-[135deg]" />
            </div>
            <button className="text-foreground">Read More</button>
            </div>
            <div className="hex flex flex-col gap-1 w-60 max-636:w-48 max-636:left-auto max-636:right-12 max-636:top-auto max-636:bottom-[5.5rem] bg-black text-center px-6 pt-6 max-1064:absolute max-1064:top-[6.75rem] max-1064:left-[11.5rem]">
            <h1 className="text-white text-lg">Specialized Staffing Solutions</h1>
            <div className="flex items-center gap-4">
                <GiBranchArrow size={24} className="scale-x-125 -rotate-45" />
                <IoConstruct className="text-white" size={24} />
                <GiBranchArrow size={24} className="scale-x-125 rotate-[135deg]" />
            </div>
            <button className="text-foreground">Read More</button>
            </div>
        </div>

        <div className="grid grid-cols-3 relative gap-x-32 left-[11.5rem] bottom-[6rem] max-1064:grid-cols-2 max-1064:left-0 max-1064:-bottom-2 max-636:grid-cols-1 max-636:bottom-20 max-636:left-[9.5rem] max-636:gap-y-2">
            <div className="hex flex flex-col gap-1 w-60 max-636:w-48 bg-black text-center px-6 pt-6">
            <h1 className="text-white text-lg">Flexible Staffing Options</h1>
            <div className="flex items-center gap-4">
                <GiBranchArrow size={24} className="scale-x-125 -rotate-45" />
                <RiRefreshFill className="text-white" size={24} />
                <GiBranchArrow size={24} className="scale-x-125 rotate-[135deg]" />
            </div>
            <button className="text-foreground">Read More</button>
            </div>
            <div className="hex flex flex-col gap-1 w-60 max-636:w-48 bg-black text-center px-6 pt-6">
            <h1 className="text-white text-lg">Comprehensive Project Oversight</h1>
            <div className="flex items-center gap-4">
                <GiBranchArrow size={24} className="scale-x-125 -rotate-45" />
                <MdAnalytics className="text-white" size={24} />
                <GiBranchArrow size={24} className="scale-x-125 rotate-[135deg]" />
            </div>
            <button className="text-foreground">Read More</button>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-x-32 relative left-[23rem] max-636:left-[21rem] bottom-[12rem] max-1064:left-[11.5rem] max-1064:bottom-[5.5rem]">
            <div className="hex flex flex-col gap-1 w-60 max-636:w-48 bg-black text-center px-6 pt-6 max-636:absolute max-636:-left-[21rem] max-636:bottom-20">
            <h1 className="text-white text-lg">Client-Focused Management</h1>
            <div className="flex items-center gap-4">
                <GiBranchArrow size={24} className="scale-x-125 -rotate-45" />
                <FaHandshakeSimple className="text-white" size={24} />
                <GiBranchArrow size={24} className="scale-x-125 rotate-[135deg]" />
            </div>
            <button className="text-foreground">Read More</button>
            </div>
        </div>
        </div>
    </section>
  )
}

export default OurServices