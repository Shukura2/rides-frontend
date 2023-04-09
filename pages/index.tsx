import EarnExtraMoney from "../src/components/EarnExtraMoney";
import GetRide from "../src/components/GetRide";
import HeroSection from "../src/components/HeroSection";
import MainLayout from "../src/components/layouts/MainLayout";

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
