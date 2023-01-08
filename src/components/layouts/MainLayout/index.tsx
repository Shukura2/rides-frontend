import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const MainLayout = (page: any) => {
  return (
    <div>
      <Navbar />
      {page}
      <Footer />
    </div>
  );
};

export default MainLayout;
