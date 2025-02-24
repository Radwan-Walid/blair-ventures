"use client"
const LeafletMap = dynamic(() => import("@/components/LeafletMap/LeafletMap"), {
  ssr: false,
});
import Input from "@/components/shared/Input/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiPhone, FiMail } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import { IoIosAttach } from "react-icons/io";
import { useState } from "react";
import dynamic from "next/dynamic";

type JobApplicationForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
}

const Page = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<JobApplicationForm>();

  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles([...files, ...Array.from(event.target.files)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const onSubmit: SubmitHandler<JobApplicationForm> = async (data) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log("Form submitted:", data);
        resolve();
      }, 2000);
    });
  };

  return (
    <div className="px-12 max-988:px-4 max-w-[80rem] mx-auto pb-20">
      <div className="flex flex-col items-center gap-2 text-center mb-6">
        <h1 className="text-4xl max-988:text-3xl font-fjalla text-[#3E3E3E]">Job Seekers</h1>
        <p>Join Our Team</p>
      </div>
      <div className="flex items-start gap-8 max-848:flex-col max-848:w-full">
        <form className="flex-1 flex flex-col gap-5 max-848:w-full" onSubmit={handleSubmit(onSubmit)}>
          <Input label="First Name" placeholder="First Name" type="text" name="firstName" register={register} required="First Name is required" error={errors.firstName?.message} />
          <Input label="Last Name" placeholder="Last Name" type="text" name="lastName" register={register} required="Last Name is required" error={errors.lastName?.message} />
          <Input label="Email" placeholder="Email" type="email" name="email" register={register} required="Email is required" error={errors.email?.message} />
          <Input label="Phone Number" placeholder="Phone Number" type="number" name="phone" register={register} required="Phone Number is required" error={errors.phone?.message} />
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center gap-2">
                <IoIosAttach size={20} className="rotate-45" />
                <input type="file" placeholder="Resume" className="hidden" id="file-upload" onChange={handleFileChange} multiple />
                <label htmlFor="file-upload" className="cursor-pointer text-gray-600">Resume</label>
              </div>
              <p className="text-sm">Attachments ({files.length})</p>
            </div>
            {files.length > 0 && (
              <div className="flex flex-col gap-2 mt-2 border border-gray-300 p-2 rounded-md">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-gray-200 px-3 py-1 rounded"
                  >
                    <span className="text-sm truncate">{file.name}</span>
                    <button
                      className="text-red-600 text-sm font-bold"
                      onClick={() => removeFile(index)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Input label="Message" placeholder="Message" type="textarea" name="message" register={register} />
          <button type="submit" disabled={isSubmitting} className="bg-[#282828] w-full text-white px-6 py-2 border-[#282828] border-1.5 rounded-md hover:shadow-md hover:bg-transparent disabled:bg-gray-500 disabled:hover:text-white hover:text-black transition-all duration-200">{ isSubmitting ? "Sending...": "Send" }</button>
        </form>

        <div className="flex-1 mt-1 max-848:w-full">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center justify-start gap-3">
              <FiMail size={20} />
              <p>Info@blairventures.ca</p>
            </div>
            <div className="flex items-center justify-start gap-3">
              <FiPhone size={20} />
              <p>780-203-5047</p>
            </div>
            <div className="flex items-center justify-start gap-3">
              <TfiLocationPin size={20} />
              <p>17316 106 Avenue NW, Edmonton, Alberta T5S 1H9, Canada</p>
            </div>
          </div>

          <div className="my-6 w-full h-0.5 bg-[#EBEBEB]" />

          <div className="flex-1 flex items-start justify-center aspect-video relative z-0 overflow-hidden rounded-2xl">
            {/* <GoogleMap /> */}
            <LeafletMap className="h-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;