import LandingHeader from "../../components/Landing/LandingHeader";
import BottomNav from "../../layouts/BottomNav";
import LandingHero from "../../components/Landing/LandingHero";
import Statistics from "../../components/Landing/Statistics";
import HowItWorks from "../../components/Landing/HowItWorks";
import CampaignList from "../../components/Landing/CampaignList";
import Footer from "../../layouts/Footer";




function Landing() {
  return (
    <div className="min-h-screen bg-[#f8f9fc]">

      <LandingHeader />

      <main className="mx-auto max-w-7xl px-4 pb-28 pt-6 sm:px-6 lg:px-10 lg:pb-12 lg:pt-12">

        <LandingHero />

        <Statistics />

        <HowItWorks />

        <CampaignList />

      </main>

      <BottomNav />
      <Footer />

    </div>
  );
}

export default Landing;
