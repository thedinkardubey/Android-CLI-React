"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import "@theme-toggles/react/css/Simple.css"
import { Simple } from "@theme-toggles/react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Simple
      duration={750}
      toggled={theme === 'dark'}
      toggle={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}    />
  )
}

