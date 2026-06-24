import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export function MainLayout() {
  return (
    <div className="main-layout">
      <Header />
      
      <Outlet />

      <Footer />
    </div>
  );
}