import HeroSection from "@/components/HeroSection";
import MainLayout from "@/components/layouts/MainLayout";

const Welcome = () => {
  return (
    <div>
      <HeroSection />
    </div>
  );
};

Welcome.getLayout = MainLayout;
export default Welcome;
