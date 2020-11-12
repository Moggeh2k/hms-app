import React from "react";
// import HovedsideButton from "..Hovedside/MineAvvikKomponent";

const MineAvvik = () => {
  return (
    
    <section className="Hero">
    
      <button onClick={(e) => window.location.assign("/meld-avvik")}>
        Meld Avvik
      </button>
    </section>
  );
};

export default MineAvvik;
