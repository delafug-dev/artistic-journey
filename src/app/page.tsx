import { Header } from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <Image src="/images/background-home.jpg" alt="hero" sizes="100vm" width={100} height={100} className="z-0 absolute w-full h-full object-cover"/>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      </div>

      
    </main>
  );
}