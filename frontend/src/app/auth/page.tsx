"use client";
import { UserProvider } from "@/providers/userContext";
import AuthPage from "./_components/authPage";
export default function AuthForm(){
  return( 
    <UserProvider>
      <AuthPage></AuthPage>
    </UserProvider>
  )
}
