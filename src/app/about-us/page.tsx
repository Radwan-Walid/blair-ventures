import Image from "next/image";
import Link from "next/link";
import { GiEagleHead, GiBuffaloHead, GiTurtleShell, GiFootprint, GiBearHead, GiWolfHead, GiBeaver } from "react-icons/gi";

const teachings = [
  {
    title: "Love",
    icon: <GiEagleHead size={72} color="#F45F58" />,
    description: "Demonstrating care and commitment to clients, partners, and communities.",
  },
  {
    title: "Wisdom",
    icon: <GiBeaver size={72} color="#F37F4E" className="relative top-1" />,
    description: "Applying deep industry knowledge to innovate and solve complex problems.",
  },
  {
    title: "Respect",
    icon: <GiBuffaloHead size={72} color="#5A9493" />,
    description: "Honoring diverse perspectives and fostering collaboration.",
  },
  {
    title: "Truth",
    icon: <GiTurtleShell size={72} color="#A2C0B7" />,
    description: "Staying aligned with our mission and core principles.",
  },
  {
    title: "Humility",
    icon: <GiWolfHead size={72} color="#858AEB" />,
    description: "Embracing continuous learning and recognizing contributions.",
  },
  {
    title: "Honesty",
    icon: <GiFootprint size={72} color="#F9D146" />,
    description: "Building trust through transparency and ethical decision-making.",
  },
  {
    title: "Courage",
    icon: <GiBearHead size={72} color="#EC7AB3" />,
    description: "Tackling challenges with confidence and determination.",
  },
]

const Page = () => {
  return (
    <div className="flex flex-col gap-20 pb-24 max-w-[80rem] mx-auto">
      <section className="flex items-center justify-between max-740:flex-col gap-16 max-740:gap-10 max-740:text-center px-12 max-988:px-4">
        <div className="flex-1">
          <h1 className="text-4xl max-988:text-3xl font-semibold text-[#3E3E3E]">Building with Purpose, Driven by Values</h1>
          <p>Discover who we are, our mission, values, and commitment to excellence in construction management and staffing solutions. We believe that success is more than just meeting deadlines and staying within budget. True success lies in building meaningful relationships, empowering communities, and creating lasting value for all stakeholders. This commitment to holistic success has made Blair Ventures a trusted partner in the resource, construction, and infrastructure industries.</p>
        </div>
        <div className="flex-1 flex h-96 w-auto max-740:h-auto max-740:max-w-72 max-740:w-72 justify-end">
          <Image className="h-96 w-auto max-740:h-auto max-740:max-w-72" priority height={300} width={300} src="/factory.svg" alt="Factory Image" />
        </div>
      </section>

      <section className="bg-white p-20 max-988:px-4 text-center">
        <h1 className="text-4xl max-988:text-3xl font-semibold text-[#3E3E3E]">Who We Are</h1>
        <p>Blair Ventures is redefining construction consulting and staffing by focusing on collaboration, innovation, and cultural values. We are committed to delivering exceptional project management and staffing solutions that ensure success for our clients and their communities.</p>
        <h1 className="text-4xl max-988:text-3xl font-fjalla text-[#3E3E3E] text-center mx-auto my-10 relative w-fit after:content-[''] after:absolute after:-bottom-3 after:left-6 after:right-6 after:h-2 after:bg-gray-400">Our Partners</h1>
        <Link href="https://microengineering.ca/" target="_blank" className="mx-auto text-center inline-block hover:drop-shadow-xl hover:scale-105 transition-all duration-200">
          <Image className="h-28 w-auto" height={300} width={300} src="/meti.svg" alt="Micro Engineering Tech Inc. (METI) Logo" />
        </Link>
      </section>

      <section className="overflow-hidden text-center px-20 max-988:px-4">
        <h1 className="text-4xl max-1064:text-3xl font-semibold text-[#3E3E3E] text-center mb-2">Guided by Principles</h1>
        <p>Our philosophy is rooted in the Seven Sacred Teachings, which guide us in every decision and action</p>

        <div className="flex flex-wrap justify-center items-stretch mt-10 gap-x-20 gap-y-12 max-576:gap-x-11 max-576:gap-y-10">
          {
            teachings.map((teaching) => (
              <div key={teaching.title} className="flex flex-col w-[14%] min-w-24 items-center gap-4">
                <div className="flex items-center justify-center rounded-lg bg-gray-300 w-24 h-24 aspect-square">{teaching.icon}</div>
                <p className="text-xl font-semibold -mb-3">{teaching.title}</p>
                <p>{teaching.description}</p>
              </div>
            ))
          }
        </div>
      </section>

      <section className="flex items-center justify-between max-740:flex-col gap-16 max-740:gap-10 max-740:text-center px-12 max-988:px-4">
        <div className="flex-1">
          <h1 className="text-4xl max-988:text-3xl font-semibold text-[#3E3E3E]">Our Construction Management Services</h1>
          <p>We provide hands-on project oversight, from initial planning to completion, ensuring transparency, cost efficiency, and timely execution. Our services include:</p>
          <ul className="list-disc pl-10 text-left">
            <li><span className="font-bold">Front-End Input and Planning</span> – Establishing objectives, identifying risks, and creating actionable plans.</li>
            <li><span className="font-bold">Constructability Reviews</span> – Anticipating challenges and recommending cost-effective solutions.</li>
            <li><span className="font-bold">Contractor Evaluations</span> – Selecting the best contractors based on expertise and project goals.</li>
            <li><span className="font-bold">TAR (Turnaround) Planning</span> – Minimizing downtime during maintenance and repair projects.</li>
            <li><span className="font-bold">Scope Definition</span> – Clarifying project roles, responsibilities, and deliverables.</li>
            <li><span className="font-bold">Lessons Learned</span> – Applying insights from past projects to improve outcomes.</li>
            <li><span className="font-bold">Safety Programs</span> – Implementing robust safety protocols to protect workers and assets.</li>
            <li><span className="font-bold">Capital Projects</span> – Managing small, medium, and large-scale projects with tailored approaches.</li>
          </ul>
        </div>
        <div className="flex-1 flex h-96 w-auto max-740:h-auto max-740:max-w-72 max-740:w-72 justify-end">
          <Image className="h-96 w-auto max-740:h-auto max-740:max-w-72" height={300} width={300} src="/construction.svg" alt="Factory Image" />
        </div>
      </section>

      <section className="flex flex-row-reverse items-center justify-between max-740:flex-col gap-16 max-740:gap-10 max-740:text-center px-12 max-988:px-4">
        <div className="flex-1">
          <h1 className="text-4xl max-988:text-3xl font-semibold text-[#3E3E3E]">Our Staffing Solutions</h1>
          <p>We specialize in providing highly skilled professionals for the construction industry:</p>
          <ul className="list-disc pl-10 text-left">
            <li><span className="font-bold">Fill Key Roles</span> – Sourcing managers, supervisors, tradespeople, and specialized contractors.</li>
            <li><span className="font-bold">Adapt to Changing Needs</span> – Offering flexible staffing for short-term, long-term, and project-based roles.</li>
            <li><span className="font-bold">Ensure Seamless Integration</span> – Providing staff who align with your team’s goals.</li>
            <li><span className="font-bold">Ensure Seamless Integration</span> – Supplying experts for niche roles to tackle unique project challenges.</li>
          </ul>
        </div>
        <div className="flex-1 flex h-96 w-auto max-740:h-auto max-740:max-w-72 max-740:w-72 justify-start">
          <Image className="h-96 w-auto max-740:h-auto max-740:max-w-72" height={300} width={300} src="/staffing-solutions.svg" alt="Factory Image" />
        </div>
      </section>

      <section className="flex items-center justify-between max-740:flex-col gap-16 max-740:gap-10 max-740:text-center px-12 max-988:px-4">
        <div className="flex-1">
          <h1 className="text-4xl max-988:text-3xl font-semibold text-[#3E3E3E]">Our Heritage & Community Commitment</h1>
          <p>
          Blair Ventures is a proud, Indigenous-owned construction consulting firm dedicated to delivering high-quality services while upholding respect, honesty, and integrity.
          <br />
          <br />
          We are deeply connected to our culture and community, bringing a unique perspective to every project. Our commitment extends beyond business success—we actively support local businesses, create opportunities for Indigenous professionals, and contribute to the well-being of the communities where we work.
          <br />
          <br />
          When you partner with Blair Ventures, you&apos;re working with a company that prioritizes excellence, collaboration, and community impact.
          </p>
        </div>
        <div className="flex-1 flex h-96 w-auto max-740:h-auto max-740:max-w-72 max-740:w-72 justify-end">
          <Image className="h-96 w-auto max-740:h-auto max-740:max-w-72" priority height={300} width={300} src="/heritage.svg" alt="Factory Image" />
        </div>
      </section>
    </div>
  )
}

export default Page