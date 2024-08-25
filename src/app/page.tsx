import { Card } from "@/components/ui/card";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { LuMails } from "react-icons/lu";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <IoMdCheckmarkCircleOutline className="h-6 w-6" />
          <span className="sr-only">Todo App</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-6 lg:space-y-10">
            <div className="grid gap-4 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
                  Stay on top of your tasks with our powerful todo app
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Manage your tasks, collaborate with your team, and stay organized with our intuitive todo app.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Download App
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 space-y-6 lg:space-y-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Powerful features to boost your productivity
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our todo app offers a range of features to help you stay organized and on top of your tasks.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-background p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <IoCalendarOutline className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Calendar View</h3>
                <p className="text-center text-muted-foreground">
                  Visualize your tasks on a calendar to stay on top of deadlines and due dates.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-background p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <IoMdCheckmarkCircleOutline className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Task Management</h3>
                <p className="text-center text-muted-foreground">
                  Create, assign, and track tasks with ease. Never forget a to-do again.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-background p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <FiUsers className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Collaboration</h3>
                <p className="text-center text-muted-foreground">
                  Invite your team to collaborate on tasks and projects, ensuring everyone is on the same page.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-background p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <LuMails className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Notifications</h3>
                <p className="text-center text-muted-foreground">
                  Stay on top of your tasks with customizable notifications and reminders.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-6 lg:space-y-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What our users say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our happy customers about how our todo app has transformed their productivity.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 md:grid-cols-3">
              <Card className="flex flex-col justify-between space-y-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-muted p-1 text-2xl">🙂</div>
                    <div>
                      <h4 className="text-lg font-bold">Jane Doe</h4>
                      <p className="text-sm text-muted-foreground">Product Manager</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "This todo app has been a game-changer for my team. The\n calendar view and collaboration features
                    have made it so\n much easier to stay on top of our tasks."
                  </p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CiStar className="h-4 w-4" />
                  <CiStar className="h-4 w-4" />
                  <CiStar className="h-4 w-4" />
                  <CiStar className="h-4 w-4" />
                  <CiStar className="h-4 w-4" />
                </div>
              </Card>
              <Card className="flex flex-col justify-between space-y-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-muted p-1 text-2xl">😄</div>
                    <div>
                      <h4 className="text-lg font-bold">John Smith</h4>
                      <p className="text-sm text-muted-foreground">Software Engineer</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "I've tried a lot of todo apps, but this one is by far the\n best. The task management features are
                    so intuitive and\n helpful."
                  </p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CiStar className="h-4 w-4" />
                  <CiStar className="h-4 w-4" />
                  <CiStar className="h-4 w-4" />
                  <CiStar className="h-4 w-4" />
                  <CiStar className="h-4 w-4" />
                </div>
              </Card>
              <Card className="flex flex-col justify-between space-y-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-muted p-1 text-2xl">😊</div>
                    <div>
                      <h4 className="text-lg font-bold">Sarah Lee</h4>
                      <p className="text-sm text-muted-foreground">Project Manager</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "This todo app has been a lifesaver for my team. The\n collaboration features make it easy to keep
                    everyone on\n the same page."
                  </p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CiStar className="h-4 w-4" />
                  <CiStar className="h-4 w-4" />
                  <CiStar className="h-4 w-4" />
                  <CiStar className="h-4 w-4" />
                  <CiStar className="h-4 w-4" />
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Todo App. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
