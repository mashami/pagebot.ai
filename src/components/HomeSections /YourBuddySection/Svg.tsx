"use client"

interface SvgProps {
  svg: React.ReactNode
}

const Svg = ({ svg }: SvgProps) => {
  return (
    <div
      className="w-10 h-10 rounded-[8px] flex items-center justify-center"
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 32.81%, rgba(0, 0, 0, 0.10) 100%), conic-gradient(from 180deg at 50% 16.25%, #AB68FF 0deg, #7637DD 360deg)",

        boxShadow: "0px 0px 0px 1px #7B47CA, 0px 2px 5px -1px #40248D"
      }}
    >
      {svg}
    </div>
  )
}

export default Svg
