import React from "react";
import Link from "next/link";
import Image from "next/image";
import MartekoForm from "./MartekoForm";  // Import MartekoForm component
import { MdKeyboardArrowRight } from "react-icons/md";


interface HeaderBannerProps {
  imageUrl?: string;  // Make imageUrl optional
  backgroundColor: string;  // Background color for the banner
  heading_title: React.ReactNode; 
  // description:React.ReactNode; // Content of the banner
}

const HeaderBanners = ({ imageUrl, backgroundColor, heading_title }: HeaderBannerProps) => {
  return (
    <div className={`grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 py-8 px-8 gap-7 ${backgroundColor}`}>
      <div className="flex flex-col justify-left lg:text-left md:text-left sm:text-center text-center lg:p-8 md:p-7 sm:p-6 py-5">
        <p className="lg:text-4xl md:text-4xl sm:text-4xl text-4xl font-semibold text-white leading-[48px]">
          {heading_title}
        </p>
        {/* <p className="font-medium text-base text-white text-left py-2">{description}</p> */}
        <p className="font-medium text-base text-white text-left py-2">A collaborative venue diagramming tool that allows you to create, update, and scale custom layouts and objects. View and showcase your events in Photo-Realistic 3D, and make sure your team is on the same page by sharing.</p>

        <div className="mt-5 flex lg:flex-row md:flex-row sm:flex-col flex-col items-center gap-x-5">
          <button className="bg-white text-[#0D68E0] text-xl font-semibold rounded-md px-4 py-2">
            Explore the platform
          </button>
          <div className="flex flex-row justify-center items-center">
            <Link
              href={"/"}
              className="flex justify-center hover:pe-1 duration-300 transition-all font-normal text-lg text-white items-center"
            >
              Request demo
            </Link>
            <MdKeyboardArrowRight size={28} color="white" />
          </div>
        </div>
        <div className="flex lg:justify-start md:justify-start sm:justify-center justify-center">
          <Link
            href={"/"}
            className="lg:mt-5 md:mt-5 sm:mt-2 mt-2 rounded-md border-white text-[18px] text-white font-semibold border px-6 w-fit py-2 hover:text-[#ebebeb]"
          >
            Try Cvent Webinar for free
          </Link>
        </div>
      </div>
      {/* Conditional rendering of image or form */}
      <div className="flex justify-center items-center p-8">
        {imageUrl ? (
          <Image
            src={imageUrl}
            width={520}
            height={600}
            alt="homepageimage"
          />
        ) : (
          <MartekoForm
            title="Sign Up for Updates"
            description="Get exclusive access to new features and promotions."
            buttonLabel="Request demo"
          />
        )}
      </div>
    </div>
  );
};

export default HeaderBanners;
