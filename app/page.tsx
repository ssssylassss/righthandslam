import Image from "next/image";
import Nav from "@/components/nav";
import Team from "@/components/team";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Social from "@/components/social";
import Companies from "@/components/companies";
import Newsletter from "@/components/newsletter";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center">
      <header>
        <Nav />
      </header>
      <Hero />
      <Social />
      <Companies />
      <Newsletter />
      <Pricing />
      <Footer />
    </main>
  );
}
