import MainForm from "../../components/homeComponents/MainForm";
import "../../styles/components/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__text">
          <h1>
            El seguro que <br />
            <span>MEJOR</span> se adapta <br />
            a <span>VOS</span>
          </h1>
        </div>

        <MainForm />

        
      </div>
    </section>
  );
}

export default Hero