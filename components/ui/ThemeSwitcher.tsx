"use client"
import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sun, Moon, Laptop } from "lucide-react"

export function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const icon =
    resolvedTheme === "dark" ? (
      <Moon className="w-5 h-5" />
    ) : resolvedTheme === "light" ? (
      <Sun className="w-5 h-5" />
    ) : (
      <Laptop className="w-5 h-5" />
    )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Toggle theme">
          {icon}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}> <Sun className="mr-2 w-4 h-4" /> Light </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}> <Moon className="mr-2 w-4 h-4" /> Dark </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}> <Laptop className="mr-2 w-4 h-4" /> System </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 