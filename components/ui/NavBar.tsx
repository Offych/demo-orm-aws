//import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher"

export function NavBar() {
  return (
    <nav className="w-full bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 py-3 px-6 flex items-center justify-between mb-8">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold tracking-tight">🔑 Demo ORM AWS</span>
      </div>
      <div className="flex items-center gap-2">
       {/*  <Button variant="ghost" className="text-base font-medium">Home</Button>
        <Button variant="ghost" className="text-base font-medium">Docs</Button>
        <Button variant="ghost" className="text-base font-medium">About</Button> */}
        <ThemeSwitcher />
      </div>
    </nav>
  )
} 