import { DashboardPage } from "@/components/dashboard"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { auth } from "@/services/auth"
import Link from "next/link"
import { CiBoxList, CiCalendar, CiCirclePlus, CiFilter, CiSettings, CiViewList } from "react-icons/ci"
import { UserInfo } from "./_components/user-info"

export default async function Page() {
  const session = await auth()

  return (
      <DashboardPage>
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <h1 className="text-xl font-bold">Todo Dashboard</h1>
        </header>
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
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
              <UserInfo user={session?.user} />
            </nav>
          </aside>
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Todos</CardTitle>
                <CardDescription>Manage your tasks and stay organized.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Input type="text" placeholder="Search todos..." className="max-w-xs" />
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="h-8 gap-1">
                          <CiFilter className="h-3.5 w-3.5" />
                          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Filter</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem checked>Incomplete</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Completed</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Overdue</DropdownMenuCheckboxItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="h-8 gap-1">
                          <CiViewList className="h-3.5 w-3.5" />
                          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Sort</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value="dueDate">
                          <DropdownMenuRadioItem value="dueDate">Due Date</DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="title">Title</DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="status">Status</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <Button>
                    <CiCirclePlus className="h-4 w-4 mr-2" />
                    Add Todo
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Task</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>
                        <span className="sr-only">Actions</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Finish project proposal</TableCell>
                      <TableCell>2023-06-15</TableCell>
                      <TableCell>
                        <Badge variant="outline">Incomplete</Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                              {/* <MoveVerticalIcon className="h-4 w-4" /> */}
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Mark as complete</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Grocery shopping</TableCell>
                      <TableCell>2023-06-12</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Completed</Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                              {/* <MoveVerticalIcon className="h-4 w-4" /> */}
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Mark as incomplete</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Prepare for presentation</TableCell>
                      <TableCell>2023-06-20</TableCell>
                      <TableCell>
                        <Badge variant="outline">Incomplete</Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                              {/* <MoveVerticalIcon className="h-4 w-4" /> */}
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Mark as complete</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Clean the house</TableCell>
                      <TableCell>2023-06-10</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Completed</Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                              {/* <MoveVerticalIcon className="h-4 w-4" /> */}
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Mark as incomplete</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Review monthly reports</TableCell>
                      <TableCell>2023-06-25</TableCell>
                      <TableCell>
                        <Badge variant="outline">Incomplete</Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                              {/* <MoveVerticalIcon className="h-4 w-4" /> */}
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Mark as complete</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <div className="text-xs text-muted-foreground">
                  Showing <strong>1-10</strong> of <strong>32</strong> todos
                </div>
              </CardFooter>
            </Card>
          </main>
        </div>
      </DashboardPage>
  )
}