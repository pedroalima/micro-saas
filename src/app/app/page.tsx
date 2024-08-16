import { auth } from "@/services/auth"
import { UserInfo } from "./_components/user-info"

export default async function Page() {
  const session = await auth()

  return (
    <main className="h-screen flex flex-col justify-center items-center space-y-4">
      <UserInfo user={session?.user} />
    </main>
  )
}