import React, { useEffect, useState } from "react";
import { db } from '../../Components/Fire'

// import HovedsideButton from "..Hovedside/MineAvvikKomponent";

const MineAvvik = () => {
  const [avviks, setAvviks] = useState([]);

  useEffect(() => {
    db.collection("Avvik")
      .get()
      .then((snapshot) => {
        setAvviks(snapshot.docs.map(doc => doc.data()))
      })
  }, [])

  console.log(avviks)
  return (

    <section className="Hero">

      <button onClick={(e) => window.location.assign("/meld-avvik")}>
        Meld Avvik
      </button>
      <div style={{bottom: 100, position: 'flex', width: '100%'}}>
      <div style={{ color: 'white', padding: '10px 40px', border: '1px solid' }}>
        Dine Avvik
      </div>
      {avviks.map((avvik) => (
        <div style={{ color: 'white', padding: '20px 40px', display: 'grid', gridTemplateColumns: 'auto auto auto' }} key={Math.random()}>
          <img src="https://via.placeholder.com/150" style={{ width: 80, height: 80, backgroundColor: 'white' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', width: 800 }}>
            <div style={{ gridRow: '1' }}>
                Elev: {avvik.navn} | Kategori: {avvik.kategori} | Dato: Dato
            </div>
            <div style={{gridRow: '2' }}>
              {avvik.kommentar}
            </div>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
};

export default MineAvvik;