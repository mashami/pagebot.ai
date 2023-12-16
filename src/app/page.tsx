/* eslint-disable @next/next/no-img-element */
"use client"

import Background from "@/components/Background"
import { ButtonStart } from "@/components/ButtonStart"
import { StarSvg } from "@/components/Icons/Icons"
import { BotSvg } from "@/components/SVGs/SVGs"
import { YourBuddySection } from "@/components/YourBuddySection"

export default function Home() {
  return (
    <div
      className="relative w-full h-screen "
      // style={{
      //   background: "url(/Vector.png)"
      // }}
    >
      <div className=" absolute -top-12 -z-10 ">
        <Background />
      </div>
      <div className="md:container px-4 flex mx-auto justify-center md:pt-24 pt-0 z-30 overflow-hidden">
        <BotSvg />
      </div>
      <div className="absolute md:-top-24 -top-2 right-10 left-10 -z-20">
        <img
          src="/Vector.png"
          className="w-full h-full"
          style={{ objectFit: "cover" }}
          alt="background"
        />
      </div>

      <div className="text-center md:pt-10 md:w-[728px] w-full mx-auto space-y-4 md:px-0 px-8">
        <h1 className="break-words text-white font-bricolage_Grotesque font-semibold leading-tight">
          Your buddy on any page for insight
        </h1>
        <h3 className="text-[#8B78BA] break-words px-2">
          Elevate your research endeavors with the support of this intelligent
          ally, always at your service to enhance your understanding and fuel
          your intellectual curiosity.
        </h3>
        <ButtonStart />
      </div>
      <div className="flex items-center justify-center text-center mx-auto space-x-1 md:pt-[296px] pt-[190px]">
        <StarSvg />
        <h4 className="text-[12px] text-white font-medium">
          Design to meet your specific needs
        </h4>
      </div>
      <div className="space-y-[71px] pb-[71px] md:px-0 px-6">
        <h2 className="text-center text-white font-bricolage_Grotesque font-semibold">
          Your buddy on any page for insight
        </h2>
        <YourBuddySection />
      </div>
    </div>
  )
}
