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
      className="relative w-full h-screen z-50"
      style={{
        background: "url(/Vector.png)"
      }}
    >
      <div className=" absolute -top-12 -z-10">
        <Background />
      </div>

      <div className="container flex mx-auto justify-center pt-24 z-30">
        <BotSvg />
      </div>

      {/* <div className="z-0">
        <img
          src="/Vector.png"
          className="w-full h-full"
          style={{ objectFit: "cover" }}
          alt="background"
        />
      </div> */}
      <div className="text-center pt-10 w-[728px] mx-auto space-y-4">
        <h1 className="break-words text-white font-bricolage_Grotesque font-semibold leading-tight">
          Your buddy on any page for insight
        </h1>
        <h3 className="text-[#8B78BA]">
          Elevate your research endeavors with the support of this intelligent
          ally, always at your service to enhance your understanding and fuel
          your intellectual curiosity.
        </h3>
        <ButtonStart />
      </div>

      <div className="flex items-center justify-center text-center mx-auto space-x-1 pt-[303px]">
        <StarSvg />
        <h4 className="text-[12px] text-white font-medium">
          Design to meet your specific needs
        </h4>
      </div>
      <div className="space-y-[71px] pb-[71px]">
        <h2 className="text-center text-white font-bricolage_Grotesque font-semibold">
          Your buddy on any page for insight
        </h2>
        <YourBuddySection />
      </div>
    </div>
  )
}
