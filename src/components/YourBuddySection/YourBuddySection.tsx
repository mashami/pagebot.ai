/* eslint-disable react/no-unescaped-entities */
"use client "

import { ButtonStart } from "../ButtonStart"
import {
  ChatSvg,
  DocSvg,
  FolderSvg,
  InsightSvg,
  Logo,
  PluginSvg,
  StarSvg,
  ToneSvg,
  WebSvg
} from "../Icons/Icons"
import { BotChatSvg, BotMessagesSvg, OyeleyeSvg } from "../SVGs/SVGs"
import Card from "./Card"

const YourBuddySection = () => {
  return (
    <div className="container">
      <div className="space-y-[19px]">
        <div className="bg-[#1C1727] rounded-[32px] grid grid-cols-2  pt-[77px] pr-[104px] pl-[75px] pb-[63px]">
          <div className="space-y-[65px]">
            <BotChatSvg />
            <div className="space-y-8">
              <span className="gap-2 max-w-[324px] flex flex-col">
                <h3 className="text-[#C7C7C7] font-bricolage_Grotesque font-medium break-words">
                  Pack with a lot of features, Tailored for your specific needs.
                </h3>
                <p className="text-[#73688B] font-medium break-words">
                  Clearer thought, faster execution. Explore everything that
                  makes Pagebot stand out.
                </p>
              </span>
              <ButtonStart />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[12px]">
            <Card
              title="Chat"
              icon={<ChatSvg />}
              description="General (default): Applies most rules and conventions with medium strictness."
            />
            <Card
              title="Insight"
              icon={<InsightSvg />}
              description="General (default): Applies most rules and conventions with medium strictness."
            />
            <Card
              title="Plugin"
              icon={<PluginSvg />}
              description="General (default): Applies most rules and conventions with medium strictness."
            />
            <Card
              title="Web"
              icon={<WebSvg />}
              description="General (default): Applies most rules and conventions with medium strictness."
            />
            <Card
              title="Document upload"
              icon={<DocSvg />}
              description="General (default): Applies most rules and conventions with medium strictness."
            />
            <Card
              title="Set Tone"
              icon={<ToneSvg />}
              description="General (default): Applies most rules and conventions with medium strictness."
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#1C1727] rounded-[32px] pt-[45px] pl-[44px] pr-[24px] pb-[35px]">
            <div className="flex items-center space-x-1">
              <StarSvg />
              <h4 className="text-[12px] text-[#966BFF] font-medium tex-[12px]">
                See your sources
              </h4>
            </div>

            <span className="gap-2 max-w-[324px] flex flex-col pt-4">
              <h3 className="text-[#C7C7C7] font-bricolage_Grotesque font-medium break-words">
                Pack with a lot of features, Tailored for your specific needs.
              </h3>
              <p className="text-[#73688B] font-medium break-words pr-6">
                Clearer thought, faster execution. Explore everything that makes
                Pagebot stand out.
              </p>
            </span>
            <div className="flex items-end justify-end pt-[105px] ">
              <div className="relative bg-[#2A203F] pt-[14px] px-[17px] rounded-[18px] border-[0.5px] w-[390px] border-[#291F38]  flex items-start">
                <div className="space-y-2">
                  <p className="font-medium leading-[18px] text-white">
                    Context Sources
                  </p>
                  <p
                    className="text-[13px] leading-[18px] font-medium"
                    style={{
                      color: "rgba(187, 187, 187, 0.73)"
                    }}
                  >
                    See the sources that provide context to the conversation.
                  </p>
                </div>
                <div>
                  <BotMessagesSvg />
                </div>
                <div
                  className="absolute -top-4 left-36 translate-x-1.2 -rotate-12 flex items-center justify-center space-x-px w-[80px] h-[30px] rounded-full"
                  style={{
                    background: "var(--white-blue-400, #33B4FC)",
                    boxShadow: "0px 4px 4px 0px rgba(255, 255, 255, 0.25) inset"
                  }}
                >
                  <FolderSvg />
                  <p className="text-[14px] font-medium text-white">Folder</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-end bg-[#1C1727] rounded-r-[32px] px-7">
            <div className="space-y-2">
              <div className="px-5 py-[10px] bg-[#211833] space-y-1">
                <span className="flex items-center space-x-4">
                  <OyeleyeSvg />
                  <p className="text-[#8D9AAE] text-[13px] font-medium uppercase">
                    OYELEYe
                  </p>
                </span>
                <div className="pl-[40px]">
                  <div className="p-[12px] bg-[#1C1727] rounded-md">
                    <h4 className="text-[#BBB] break-words font-medium leading-[21px]">
                      {" "}
                      In life's brief dance, we find our way, A journey bright,
                      a brand-new day. With every sunrise, hope takes flight,
                      Embrace the gift of life's pure light.
                    </h4>
                  </div>
                </div>
              </div>
              <div className="px-5 py-[10px] bg-[#211833] space-y-1">
                <span className="flex items-center space-x-[22px]">
                  <Logo />
                  <p className="text-[#8D9AAE] text-[13px] font-medium uppercase">
                    Pagebot
                  </p>
                </span>
                <div className="pl-[40px]">
                  <div className="py-[12px] px-[16px] bg-[#1C1727] rounded-md">
                    <h4 className="text-[#BBB] break-words font-medium leading-[21px]">
                      In life's brief dance, we find our way, A journey bright,
                      a brand-new day. With every sunrise, hope takes flight,
                      Embrace the gift of life's pure light. <br /> <br /> With
                      each step taken, and each breath drawn, A chance to savor
                      the early dawn. In every heart, a dream unfurls, A
                      tapestry of life, with countless swirls.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YourBuddySection
