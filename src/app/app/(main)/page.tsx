import { DashboardAside, DashboardNav, DashboardPage, DashboardTooltip } from "@/components/dashboard"
import { Button } from "@/components/ui/button"
import { auth } from "@/services/auth"
import { UserInfo } from "../_components/user-info"
import { TodoDataTable } from "./_components/todo-data-table"
import { TodoUpsertSheet } from "./_components/todo-upsert-sheet"

export default async function Page() {
  const session = await auth()

  return (
      <DashboardPage>
        <header className="sticky top-0 z-30 h-14 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 sm:pl-14 pt-8">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-4 px-6">
              <h1 className="text-xl font-bold">Todo Dashboard</h1>
              <TodoUpsertSheet>
                <Button variant="outline">Add Todo</Button>
              </TodoUpsertSheet>
            </div>
            <div className="flex justify-between items-center gap-4">
              <UserInfo user={session?.user} />
            </div>
          </nav>
        </header>
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <DashboardAside>
            <DashboardNav>
              <DashboardTooltip />
            </DashboardNav>
          </DashboardAside>
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <TodoDataTable />
          </main>
        </div>
      </DashboardPage>
  )
}