"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"

export function AuthForm() {
  const form = useForm()
  const [ submitted, setSubmitted ] = useState(false)
  const [ email, setEmail ] = useState("")

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn("nodemailer", { email: data.email, redirect: false })
      toast({
        title: "Magic Link Sent",
        description: "Check your email for the magic link to login."
      })
      setEmail(data.email)
      setSubmitted(true)
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again."
      })
    }
    
  })

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md space-y-6 text-center">
        <div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Sign in with a magic link
          </h1>
          <p className="mt-4 text-muted-foreground">Enter your email and we'll send you a magic link to sign in.</p>
        </div>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email" className="sr-only">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                {... form.register("email")}
              />
            </div>
            <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Sending..." : "Send magic link"}
            </Button>
          </form>
        ) : (
          <div className="space-y-4">
            <p className="text-muted-foreground">
              We've sent a magic link to <span className="font-medium">{email}</span>. Check your inbox to sign in.
            </p>
            <Link
              href="#"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Go to homepage
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}