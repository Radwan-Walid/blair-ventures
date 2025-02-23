"use client"
import dynamic from "next/dynamic";
// import GoogleMap from "@/components/GoogleMap/GoogleMap";

const LeafletMap = dynamic(() => import("@/components/LeafletMap/LeafletMap"), {
  ssr: false, // Disable SSR to avoid window-related errors
});

const ContactInformation = () => {
  return (
    <section className="flex items-center gap-20 py-20">
        <div className="flex-[0.7] relative z-50 after:absolute after:content-[''] after:w-28 after:h-[calc(100%+13.5rem)] after:bg-background after:z-50 right-angled-triangle after:left-[calc(100%+5rem)] after:-top-[6.75rem]">
        <div>
            <h1>Our Location</h1>
            <p>17316 106 Avenue NW, Edmonton, Alberta T5S 1H9, Canada</p>
        </div>
        <div>
            <h1>Contact Information</h1>
            <p>Info@blairventures.ca</p>
            <p>780-203-5047</p>
        </div>
        <div>
            <h1>Working Hourse</h1>
            <p>Mon 09:00 a.m. – 05:00 p.m.</p>
        </div>
        </div>
        {/* <GoogleMap /> */}
        <LeafletMap />
    </section>
  )
}

export default ContactInformation