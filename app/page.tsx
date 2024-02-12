import Image from "next/image";
import Nav from "@/components/nav";
import Team from "@/components/team";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Social from "@/components/social";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center">
      <header>
        <Nav />
      </header>
      <Hero />
      {/* <div className="z-10 justify-center items-center font-mono text-sm lg:flex">
        <Team />
      </div> */}
      <Social />
      <Footer />
    </main>
  );
}
