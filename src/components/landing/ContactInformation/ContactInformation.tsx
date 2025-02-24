"use client"
import dayjs from "dayjs";
import dynamic from "next/dynamic";
// import GoogleMap from "@/components/GoogleMap/GoogleMap";

const LeafletMap = dynamic(() => import("@/components/LeafletMap/LeafletMap"), {
  ssr: false,
});

const ContactInformation = () => {
  return (
    <section className="flex items-center gap-20 py-20 max-636:flex-col">
        <div className="flex-[0.7]">
          <h1 className="text-4xl max-988:text-3xl font-semibold text-[#3E3E3E] mb-4 max-636:text-center">Contact Us</h1>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
                <h1 className="text-lg font-semibold">Location</h1>
                <p>17316 106 Avenue NW, Edmonton, Alberta T5S 1H9, Canada</p>
            </div>
            <div className="flex flex-col gap-1">
                <h1 className="text-lg font-semibold">Contact Information</h1>
                <p>Info@blairventures.ca</p>
                <p>780-203-5047</p>
            </div>
            <div className="flex flex-col gap-1">
                <h1 className="text-lg font-semibold">Working Hours <span className={`${ dayjs().format("ddd") === "Sun" || dayjs().format("ddd") === "Sat" ? "font-medium": "hidden" } text-sm`}>(Closed Today)</span></h1>
                <p className={`${ dayjs().format("ddd") === "Mon" ? "font-bold": "" }`}>Mon 09:00 a.m. – 05:00 p.m.</p>
                <p className={`${ dayjs().format("ddd") === "Tue" ? "font-bold": "" }`}>Tue 09:00 a.m. – 05:00 p.m.</p>
                <p className={`${ dayjs().format("ddd") === "Wed" ? "font-bold": "" }`}>Wed 09:00 a.m. – 05:00 p.m.</p>
                <p className={`${ dayjs().format("ddd") === "Thu" ? "font-bold": "" }`}>Thu 09:00 a.m. – 05:00 p.m.</p>
                <p className={`${ dayjs().format("ddd") === "Fri" ? "font-bold": "" }`}>Fri 09:00 a.m. – 05:00 p.m.</p>
                <p className={`${ dayjs().format("ddd") === "Sat" ? "font-bold": "" }`}>Sat Closed</p>
                <p className={`${ dayjs().format("ddd") === "Sun" ? "font-bold": "" }`}>Sun Closed</p>
            </div>
          </div>
        </div>
        <div className="flex-1 relative z-0 max-636:after:hidden after:absolute after:content-[''] after:w-28 after:h-full after:bg-background after:z-50 right-angled-triangle after:left-0 after:top-0">
          {/* <GoogleMap /> */}
          <LeafletMap />
        </div>
    </section>
  )
}

export default ContactInformation