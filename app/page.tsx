'use client'
import HeaderBanners from "@/components/ui/HeaderBanners";
// import { HeaderBannerFull } from "@/components/ui/HeaderBanners.stories";
import MartekoForm from "@/components/ui/MartekoForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      {/* <h1 className="lg:text-4xl md:text-4xl sm:text-4xl text-4xl font-semibold text-dark leading-[48px]">This is Homepage</h1> */}
      <HeaderBanners
      imageUrl= "https://www.cvent.com/sites/default/files/styles/max_1600w/public/image/2024-01/Higher%20Education%20Value%20Prop%201.webp?itok=LZPeUzJf"
      backgroundColor= "bg-gradient-to-r from-[#0D68E0] to-[#8257D9]"
      heading_title= "An easy powerful webinar platform"
      />
      <HeaderBanners
      imageUrl= "https://www.cvent.com/sites/default/files/styles/max_1170w/public/image/2024-08/Hp2024.webp?itok=eNPdq5_M"
      backgroundColor= "bg-gradient-to-r from-[#003673] to-[#0050ab]"
      heading_title= "Connect, captivate, and build lifelong relationships"
      />
      <HeaderBanners
      imageUrl= ""
      backgroundColor= "bg-gradient-to-r from-[#049F7C] to-[#8457D9]"
      heading_title= "An easy powerful webinar platform"
      />
      <MartekoForm
      title="Sign Up for Updates"
      description="Get exclusive access to new features and promotions."
      buttonLabel="Request demo"
      />
      <MartekoForm
      title="Sign Up for Updates"
      description="Get exclusive access to new features and promotions."
      buttonLabel="Request demo"
      /><MartekoForm
      title="Sign Up for Updates"
      description="Get exclusive access to new features and promotions."
      buttonLabel="Request demo"
      />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
