import { EffectGradient } from "@/components/EffectGradient";
import { Header } from "@/components/Header";
import Image from "next/image";


export default async function Home() {

  return (
    <main>
      <Header />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <Image src="/images/background-home.jpg" alt="hero" sizes="100vm" width={100} height={100} className="z-0 absolute w-full h-full object-cover"/>
        <EffectGradient />
        <div className="z-10">
          <h1 className="font-bold font-heading text-6xl text-balance text-center text-white">Welcome to the <span className="text-blue-500">Artistic Journey</span> APP</h1>
          <p className="text-balance text-center text-md text-white">This is an alpha app designed to revolutionize how you engage with art, offering exclusive features and immersive experiences</p>
        </div>
      </div>
    </main>
  );
}


