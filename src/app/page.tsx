import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ThreeWays from "@/components/ThreeWays";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import Privacy from "@/components/Privacy";
import PosterCTA from "@/components/PosterCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ThreeWays />
        <Problem />
        <HowItWorks />
        <UseCases />
        <Privacy />
        <PosterCTA />
      </main>
      <Footer />
    </>
  );
}
