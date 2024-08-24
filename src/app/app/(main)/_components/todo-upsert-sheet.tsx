"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useRef } from "react"
import { useForm } from "react-hook-form"
import { Todo } from "../types"

type TodoUpsertSheetProps = {
    children: React.ReactNode,
    defaultValues?: Todo
}   

export function TodoUpsertSheet({ children }: TodoUpsertSheetProps) {
  const ref = useRef<HTMLDivElement>(null)

  const form = useForm<Todo>({
    defaultValues: {
        title: ""
    }
  })

  const onSubmit = form.handleSubmit((data) => {
    console.log(data)
  })
    
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div ref={ref}>
            {children}
        </div>
      </SheetTrigger>
      <SheetContent>
            <Form {...form}>
                <form onSubmit={onSubmit} className="space-y-8">
                    <SheetHeader>
                        <SheetTitle>Create todo</SheetTitle>
                        <SheetDescription>
                         Create a new todo here.
                        </SheetDescription>
                    </SheetHeader>
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Todo title" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your todo title.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button type="submit">Create</Button>
                        </SheetClose>
                    </SheetFooter>
                </form>
            </Form>
      </SheetContent>
    </Sheet>
  )
}