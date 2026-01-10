import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/footer/Footer";
import CopyRight from "../components/footer/CopyRight";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[80px] ">
        <Outlet />
      </main>
      <Footer />
      <CopyRight />
    </div>
  );
};
export default Layout;
