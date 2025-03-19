import type React from "react"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "John Moore",
  description: "Your personal website with blog and meals",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="container mx-auto py-6">{children}</main>
      </body>
    </html>
  )
}

