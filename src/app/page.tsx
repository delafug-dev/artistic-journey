import { EffectGradient } from "@/components/EffectGradient";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function Home() {



  return (
    <main>
      <Header />
      <Image src="/images/background-home.jpg" alt="hero" sizes="100vm" width={100} height={100} className="z-0 absolute w-full h-full object-cover"/>
      <EffectGradient />
      
    </main>
  );
}