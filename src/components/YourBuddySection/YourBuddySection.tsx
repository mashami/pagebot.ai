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
    <div className="md:container px-0">
      <div className="md:space-y-[19px] space-y-6">
        <div className="bg-[#1C1727] rounded-[32px] grid md:grid-cols-2 grid-cols-1  md:pt-[77px] pt-[70px] md:pr-[104px] pr-[24px] md:pl-[75px] pl-[24px] pb-[63px] md:gap-0 gap-[56px]">
          <div className="md:gap-[65px] gap-[56px] flex md:flex-col flex-col-reverse ">
            <div className="flex items-center md:justify-start justify-center w-full mx-auto ">
              <BotChatSvg />
            </div>

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
          <div className="grid md:grid-cols-2 grid-cols-1 gap-[12px]">
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

        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <div className="bg-[#1C1727] rounded-[32px] md:pt-[45px] pt-[54px] md:pl-[44px] pl-[20px] pr-[24px] pb-[35px]">
            <div className="flex items-center space-x-1 md:pl-0 pl-4">
              <StarSvg />
              <h4 className="text-[12px] text-[#966BFF] font-medium tex-[12px]">
                See your sources
              </h4>
            </div>

            <span className="gap-2 max-w-[324px] flex flex-col pt-4 md:pl-0 pl-4">
              <h3 className="text-[#C7C7C7] font-bricolage_Grotesque font-medium break-words">
                Pack with a lot of features, Tailored for your specific needs.
              </h3>
              <p className="text-[#73688B] font-medium break-words md:pr-6 pr-0">
                Clearer thought, faster execution. Explore everything that makes
                Pagebot stand out.
              </p>
            </span>

            <div className="flex items-end justify-end md:pt-[105px] pt-[27px]">
              <div className="relative bg-[#2A203F] pt-[14px] md:px-[17px] px-[13px] rounded-[18px] border-[0.5px] w-[390px] border-[#291F38] flex md:items-start items-end">
                <div className="space-y-2 md:pb-0 pb-4">
                  <p className="font-medium md:leading-[18px] leading-[15px] text-white md:text-[16px] text-[13px]">
                    Context Sources
                  </p>
                  <p
                    className="md:text-[13px] text-[10px] md:leading-[18px] leading-[15px] font-medium"
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
                  className="absolute -top-4 md:left-36 left-28 translate-x-1.2 -rotate-12 flex items-center justify-center space-x-px md:w-[80px] w-[67px] md:h-[30px] h-[25px] rounded-full"
                  style={{
                    background: "var(--white-blue-400, #33B4FC)",
                    boxShadow: "0px 4px 4px 0px rgba(255, 255, 255, 0.25) inset"
                  }}
                >
                  <FolderSvg />
                  <p className="md:text-[14px] text-[11px] font-medium text-white">
                    Folder
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-end bg-[#1C1727] rounded-r-[32px] md:px-7 px-6 md:pt-0 pt-[67px]">
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
