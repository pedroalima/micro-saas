"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

type Props = {
    user: Session["user"]
}

export function UserInfo({ user } : Props) {
  return (
    <>
        <Avatar>
           <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <span>{user?.email}</span>
        <Button 
            variant="outline"
            onClick={() => signOut()}
        >Sign Out</Button>
    </>
  )
}
