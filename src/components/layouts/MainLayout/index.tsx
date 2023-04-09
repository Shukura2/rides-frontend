import Footer from "../../Footer";
import Navbar from "../../Navbar";

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
