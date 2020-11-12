import React from "react";
import HovedsideButton from "./MineAvvikKomponent";

const Hero = ({ handleLogout }) => {
  return (
    
    <section className="Hero">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Log ut</button>
      </nav>
      <button onClick={(e) => window.location.assign("/mine-avvik")}>
        Mine Avvik
      </button>

      <button onClick={(e) => window.location.assign("/elevliste")}>
        Elevliste
      </button>

      <button onClick={(e) => window.location.assign("/avviksliste")}>
        Adm Avvik
      </button>
    </section>
  );
};

export default Hero;
