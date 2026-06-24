import Hero from "./Hero";
import "../../styles/pages/home/Home.css";
import {FloatingActions} from "../../components/homeComponents/FloatingActions";
import QuickAccess from "./QuickAccess";
import {AboutUsHome} from "./AboutUsHome";





function Home() {
  return (
    <>
      
      <main className="home-page">
        <FloatingActions/>
        <Hero />
        <QuickAccess/>
        <AboutUsHome/>
      </main>
      
    </>
  );
}

export default Home;