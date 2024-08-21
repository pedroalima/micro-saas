import { DashboardAside, DashboardNav, DashboardPage, DashboardTooltip } from "@/components/dashboard"
import { auth } from "@/services/auth"
import { UserInfo } from "../_components/user-info"
import { TodoDataTable } from "./_components/todo-data-table"

export default async function Page() {
  const session = await auth()

  return (
      <DashboardPage>
        <header className="sticky top-0 z-30 flex justify-between h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 sm:pl-14 pt-8">
          <h1 className="text-xl font-bold px-6">Todo Dashboard</h1>
          <div className="flex justify-around items-center gap-4">
            <UserInfo user={session?.user} />
          </div>
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