// app/page.tsx
"use client"

import Sidebar from "./ui/side-bar/page"
import MainContent from "./ui/main-content/page"

export default function Page() {
  return (
    <div className="h-screen w-full bg-neutral-900 text-white overflow-hidden flex justify-between pr-30">
      {/* Sidebar */}
      <div>
        <Sidebar/>
      </div>

      {/* Header */}
      <div className="pt-10">
        <MainContent/>
      </div>
    </div>
  )
}
