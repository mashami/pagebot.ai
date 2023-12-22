"use client"

import { ButtonStart } from "@/components/ButtonStart"
import { CheckBox } from "@/components/CheckBox"
import { CheckedCircle } from "@/components/Icons/Icons"
import { PriceSectionBackground } from "@/components/SVGs/SVGs"
import { useEffect, useState } from "react"

const PriceSection = () => {
  const [price, setPrice] = useState<number>(0)
  const [isSelected, setIsSected] = useState<"monthly" | "yearly">("monthly")

  const handleSelection = (title: "monthly" | "yearly") => {
    setIsSected(title)
  }

  useEffect(() => {
    if (isSelected === "monthly") {
      setPrice(15)
    } else {
      setPrice(30)
    }
  }, [isSelected])

  return (
    <section className="relative bg-[#131217] ">
      <PriceSectionBackground className="absolute top-0 right-0 left-0 z-10" />

      <div className="md:container px-8 md:pt-[211px] md:pb-[150px] py-[118px] grid md:grid-cols-2 grid-cols-1 gap-[72px] z-20 relative">
        <div className="space-y-6 select-none">
          <h2 className="text-white text-[48px] font-bricolage_Grotesque font-semibold leading-[48px]">
            Smart features at the right Price.
          </h2>
          <p className="text-[20px] text-white font-normal leading-9">
            A fully capable AI at a fraction of the price, quality conversations
            at your finger tips.
          </p>
          <ButtonStart onClick={() => console.log("")} />
        </div>

        <div
          className="w-full p-9 bg-[#211833] rounded-[16px] border-[0.5px] border-[#634B9D] space-y-[64px]"
          style={{
            boxShadow: "0px -4px 20px 0px #140F1F inset"
          }}
        >
          <div className="space-y-[56px]">
            <div className="mx-auto flex items-center justify-center space-x-6">
              <CheckBox
                text="Yearly billing"
                onClick={() => handleSelection("yearly")}
                isSelected={isSelected === "yearly" ? true : false}
              />
              <CheckBox
                text="Monthly billing"
                onClick={() => handleSelection("monthly")}
                isSelected={isSelected === "monthly" ? true : false}
              />
            </div>
            <span className="flex space-x-2 items-start justify-center">
              <h1 className="text-white font-medium text-[64px]">${price}</h1>
              <p className="text-[#8B78BA] text-[32px] font-medium pt-3">
                {isSelected === "monthly" ? "/mo" : "/yr"}
              </p>
            </span>
          </div>

          <div className="w-full border-t-[1px] border-dashed border-[#745EA9]"></div>

          <div className="space-y-6">
            <h3 className="text-[#8B78BA] font-medium leading-5 text-center">
              Includes:
            </h3>
            <ul className="space-y-5">
              <li className="flex space-x-[19px] items-center">
                <CheckedCircle />
                <p className="md:text-[18px] text-[14px] text-white font-medium leading-5">
                  Upload your document for context
                </p>
              </li>
              <li className="flex space-x-[19px] items-center flex-shrink-0">
                <CheckedCircle />
                <p className="md:text-[18px] text-[14px] text-white font-medium leading-5 break-words">
                  Fetch insight from multiple tabs your browser
                </p>
              </li>
              <li className="flex space-x-[19px] items-center">
                <CheckedCircle />
                <p className="md:text-[18px] text-[14px] text-white font-medium leading-5">
                  Set the tone for your response.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PriceSection
