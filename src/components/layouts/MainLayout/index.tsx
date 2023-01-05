import Navbar from "@/components/Navbar";

const MainLayout = (page: any) => {
  return (
    <div>
      <Navbar />
      {page}
      <h4>Footer</h4>
    </div>
  );
};

export default MainLayout;
