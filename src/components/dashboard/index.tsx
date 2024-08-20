import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ReactNode } from "react"
import { CiBoxList, CiCalendar, CiSettings } from "react-icons/ci"

type DashboardPageProps = {
    children: ReactNode,
    className?: string
}

export function DashboardPage({ children, className }: DashboardPageProps)  {
  return (
    <section className={cn(["flex min-h-screen w-full flex-col bg-muted/40", className])}>
        {children}
    </section>
  )
}

export function DashboardAside({ children, className }: DashboardPageProps)  {
  return (
    <aside className={cn(["fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex", className])}>
        {children}
    </aside>
  )
}

export function DashboardNav({ children, className }: DashboardPageProps)  {
  return (
    <nav className={cn(["flex flex-col items-center gap-4 px-2 sm:py-5", className])}>
        {children}
    </nav>
  )
}

export function DashboardTooltip() {
  return (
    <TooltipProvider>
      <Link
        href="#"
        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        prefetch={false}
      >
        <CiBoxList className="h-4 w-4 transition-all group-hover:scale-110" />
        <span className="sr-only">Todos</span>
      </Link>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            prefetch={false}
          >
            <CiCalendar className="h-5 w-5" />
            <span className="sr-only">Calendar</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Calendar</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            prefetch={false}
          >
            <CiSettings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Settings</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}