import Image from "next/image";
import Link from "next/link";
import OurServices from "@/components/landing/OurServices/OurServices";
import ContactInformation from "@/components/landing/ContactInformation/ContactInformation";

export default function Home() {
  return (
    <div className="px-12 max-988:px-4 max-w-[80rem] mx-auto">
      <section className="flex items-center justify-between gap-32 max-988:flex-col max-988:justify-center max-988:gap-10 mb-28">
        <div className="flex-1 flex flex-col gap-2 max-988:text-center">
          <h1 className="text-4xl max-988:text-3xl font-fjalla text-[#3E3E3E]">Your Trusted Partner in Contract Staffing Solutions and Construction Management.</h1>
          <p>Blair Ventures provides expert contract staffing and project management for the construction industry. We connect you with skilled professionals to ensure efficiency, transparency, and success. Proudly Indigenous-owned, we are committed to excellence and community growth.</p>
          <div className="flex items-center gap-3 mt-2 max-988:justify-center">
            <Link href="/contact-us" className="bg-[#282828] text-white px-6 py-2 border-[#282828] border-1.5 rounded-md hover:shadow-md hover:bg-transparent hover:text-black transition-all duration-200">Get Consultation</Link>
            <Link href="/about-us" aria-label="Learn about us" className="relative mx-6 z-0 after:absolute after:left-0 after:bottom-[-2px] after:h-0.5 after:w-0 hover:after:w-full after:bg-foreground after:transition-all after:duration-200">Learn About Us</Link>
          </div>
        </div>

        <div className="flex-1 relative h-full w-96 min-w-96 max-988:min-w-[auto] max-988:w-full max-988:max-w-[32rem]">
          <Image height={600} width={600} priority className="h-full rounded-bl-3xl max-988:rounded-b-3xl w-full min-w-96 max-988:min-w-[auto] max-988:w-full max-988:max-w-[32rem] object-center" src="/factory.png" alt="Industry Image" />
          <div className="h-10 w-32 border-y-1.5 border-[#BBBBBB] absolute bottom-0 -left-16 -z-10" />
          <div className="h-32 border-l-1.5 border-[#BBBBBB] absolute -bottom-16 -left-0 -z-10" />
          <div className="h-32 border-l-1.5 border-[#BBBBBB] absolute -bottom-12 left-10 -z-10" />
          <div className="h-32 border-l-1.5 border-[#BBBBBB] absolute -bottom-8 left-20 -z-10" />
        </div>
      </section>

      <section className="flex flex-row-reverse items-center gap-24 mx-10 max-806:mx-0 max-806:flex-col max-806:gap-12 mt-32 mb-28">
        <div className="max-806:text-center">
          <h1 className="text-4xl max-988:text-3xl font-fjalla text-[#3E3E3E] mb-2">Our Mission</h1>
          <p>
            At Blair Ventures, our mission is to provide expert construction consulting and staffing solutions that drive project success while upholding the highest standards of integrity, respect, and excellence. We are committed to connecting our clients with skilled professionals who bring expertise, leadership, and reliability to every project.
            By fostering strong partnerships and prioritizing quality, we ensure that every project is completed efficiently, safely, and with lasting impact. Our dedication to innovation and community growth allows us to create meaningful opportunities and deliver results that benefit not only our clients but also the industry and the communities we serve.
          </p>
        </div>

        <Image className="h-64 w-auto" height={300} width={300} src="/our-mission.svg" alt="Canadian Council for Indigenous Business" />
      </section>

      <OurServices />

      <section className="flex items-center gap-24 mx-10 max-806:mx-0 mt-12 max-806:flex-col max-806:gap-12 mb-12">
        <div className="max-806:text-center">
          <h1 className="text-4xl max-988:text-3xl font-fjalla text-[#3E3E3E] mb-2">Rooted in Tradition and Excellence</h1>
          <p>
            Blair Ventures is a proudly Indigenous-owned construction consulting firm committed to excellence, integrity, and respect. Our deep connection to our culture and community shapes our approach, bringing a unique perspective to every project.
            We strive to create opportunities for Indigenous peoples in the construction industry, support local businesses, and foster long-term partnerships. At Blair Ventures, success isn’t just about projects—it’s about uplifting our communities and building a lasting impact.
          </p>
        </div>

        <Image className="h-48 w-auto max-988:w-[calc(100%-20%)] max-988:h-auto" height={300} width={300} src="/canadian-council.webp" alt="Canadian Council for Indigenous Business" />
      </section>

      <section className="flex flex-col items-center gap-4 pt-6">
        <h1 className="text-4xl max-988:text-3xl font-fjalla text-[#3E3E3E] text-center mb-2">In Partnership with</h1>
        <Link href="https://microengineering.ca/" target="_blank" className="hover:drop-shadow-xl hover:scale-105 transition-all duration-200">
          <Image className="h-28 w-auto" height={300} width={300} src="/meti.svg" alt="Micro Engineering Tech Inc. (METI) Logo" />
        </Link>
      </section>

      <ContactInformation />
    </div>

  );
}
