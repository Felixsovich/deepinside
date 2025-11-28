'use client'

import { useEffect, useState } from 'react'
import Preloader from '@/components/ui/Preloader'
import CustomCursor from '@/components/ui/CustomCursor'
import SidePanel from '@/components/ui/SidePanel'
import HorizontalScroll from '@/components/sections/HorizontalScroll'
import DebugInfo from '@/components/DebugInfo'

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0)

  return (
    <main className="relative">
      <Preloader />
      <CustomCursor />
      <SidePanel currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <HorizontalScroll currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <DebugInfo />
    </main>
  )
}