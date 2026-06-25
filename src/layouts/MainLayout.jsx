import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../components/ScrollToTop";

export function MainLayout() {
  return (
    <div className="main-layout">
      <ScrollToTop />
      <Header />
      
      <Outlet />

      <Footer />
    </div>
  );
}