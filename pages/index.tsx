import EarnExtraMoney from "@/components/EarnExtraMoney";
import GetRide from "@/components/GetRide";
import HeroSection from "@/components/HeroSection";
import MainLayout from "@/components/layouts/MainLayout";

const Welcome = () => {
  return (
    <div>
      <HeroSection />
      <EarnExtraMoney />
      <GetRide />
    </div>
  );
};

Welcome.getLayout = MainLayout;
export default Welcome;
