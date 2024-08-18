import { cn } from "@/lib/utils"
import { ReactNode } from "react"

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
