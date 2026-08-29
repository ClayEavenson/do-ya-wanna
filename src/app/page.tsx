import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ThreeWays from "@/components/ThreeWays";   // SimpleQuestions
import Problem from "@/components/Problem";         // WhyThis
import HowItWorks from "@/components/HowItWorks"; // BetaProcess
import UseCases from "@/components/UseCases";       // ComingSoonMarquee
import Privacy from "@/components/Privacy";         // Trust
import PosterCTA from "@/components/PosterCTA";
import Footer from "@/components/Footer";

// Teaser site — sections ordered per DESIGN-SPEC §Page structure:
// Header → Hero → SimpleQuestions → WhyThis → BetaProcess → ComingSoonMarquee → Trust → PosterCTA → Footer
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
