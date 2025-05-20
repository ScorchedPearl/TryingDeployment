"use client"
import { redirect } from "next/navigation";
import Features from "./_Components/Features";
import Hero from "./_Components/Hero";
import { useCurrentUser } from "@/hooks/useUser";
import CodingBackground from "./_Components/ParticleBackground";
import Footer from "./_Components/Footer";
import Navbar from "./_Components/NavBar";
import Creator from "./_Components/creator";

export default function Home(){
  const {currentUser,isLoading}=  useCurrentUser();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if(currentUser){
    redirect('/dashboard');
  }
 return (
  <>
  <CodingBackground></CodingBackground>
  <Navbar />
  <Hero></Hero>
  <Features></Features>
  <Creator></Creator>
  <Footer />
  </>
 )
}
