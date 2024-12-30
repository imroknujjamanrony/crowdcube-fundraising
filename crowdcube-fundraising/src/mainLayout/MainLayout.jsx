import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      {/*navbar */}
      <header>
        <Navbar></Navbar>
      </header>
      {/* main  */}
      <main className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>

      {/* footer */}
      <div className="py-8">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
