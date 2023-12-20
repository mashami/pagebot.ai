/* eslint-disable react/no-unescaped-entities */
"use client"

import HeadAbout from "./HeadAbout"

const AboutSection = () => {
  return (
    <div>
      <div className="text-center w-[780.7px] mx-auto space-y-8">
        <h3 className="text-[48px] text-white font-semibold font-bricolage_Grotesque leading-[50px]">
          Suitable for professionals, perfect for everyone.
        </h3>
        <p className="text-[20px] text-[#8B78BA] leading-[30px]">
          Picture a dedicated command center tailored for research questions and
          insights. This hub is a streamlined haven, armed with diverse tools
          and databases, facilitating efficient exploration and discovery.
        </p>
        <div className="grid grid-cols-3">
          <div className="p-6 space-y-6">
            <div className="w-fit">
              <HeadAbout
                text="GENERAL"
                boxShadow="4px 4px 5px 0px #F36E84 inset"
                bgColor="var(--Purple-400, #EA3351)"
              />
            </div>

            <p className="text-[12px] text-[#C7C7C7] font-medium text-left">
              "your AI assistant for research, questions and insights"
            </p>
            <p className="text-[12px] text-[#C7C7C7] font-medium text-left">
              General (default): Applies most rules and conventions with medium
              strictness.
            </p>
          </div>
          <div className="p-6 space-y-6">
            <div className="w-fit">
              <HeadAbout
                text="KNOWLEDGABLE"
                boxShadow="4px 4px 5px 0px #65DB62 inset"
                bgColor="var(--Green-500, #49AC46)"
              />
            </div>

            <p className="text-[12px] text-[#C7C7C7] font-medium text-left">
              "your AI assistant for research, questions and insights"
            </p>
            <p className="text-[12px] text-[#C7C7C7] font-medium text-left">
              General (default): Applies most rules and conventions with medium
              strictness.
            </p>
          </div>
          <div className="p-6 space-y-6">
            <div className="w-fit">
              <HeadAbout
                text="EXPERT"
                boxShadow="4px 4px 5px 0px #A3C9DF inset"
                bgColor="var(--White-Blue-400, #33B4FC)"
              />
            </div>

            <p className="text-[12px] text-[#C7C7C7] font-medium text-left">
              "your AI assistant for research, questions and insights"
            </p>
            <p className="text-[12px] text-[#C7C7C7] font-medium text-left">
              General (default): Applies most rules and conventions with medium
              strictness.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
