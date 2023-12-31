import { NavBar } from "@/components/NavBar"
import { cn } from "@/lib/utils"
import "@/styles/globals.scss"
import type { Metadata } from "next"
import { Bricolage_Grotesque, Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const bricolage_Grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-Grotesque",
  weight: ["200", "300", "400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, bricolage_Grotesque.variable)}
        style={{
          backgroundColor: "#131217"
        }}
      >
        <NavBar />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
