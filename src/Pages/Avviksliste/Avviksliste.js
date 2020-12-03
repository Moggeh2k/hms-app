import React, { useEffect, useState } from "react";
import { db } from "../../Components/Fire";
import { useAuth } from "../../context/AuthContext";
import "./Avviksliste.css";
const AlleAvvik = () => {
  const [avviks, setAvviks] = useState([]);
  const { username, isAdmin } = useAuth();
  // const [updateCounter, setUpdateCounter] = useState(0);

  useEffect(() => {
    db.collection("Avvik")
      .get()
      .then((snapshot) => {
        setAvviks(snapshot.docs.map((doc) => doc.data()));
      });
  });
  //   }, [updateCounter]);

  const deleteAvvik = (avvik) => {
    db.collection("Avvik")
      .document(avvik)
      .delete()
      .then(() => {
        console.log("success");
        // update avviksliste-state her
        // Kanskje noe sånt: setAvviks( () => {avviks.pop(avvik)});
        // Eller noe sånt: avviks.pop(avvik);
        // ELler sånn, men bad react: Only in emergency: setUpdateCounter(updateCounter++);
      });
  };

  const filterAvvik = (avvik) => {
    if (isAdmin) return true;
    return avvik.navn === username;
  };

  const DeleteButton = ({ avvik, deleteAvvik }) => {
    return (
      <button
        onClick={() => {
          deleteAvvik(avvik);
        }}
      >
        Slett
      </button>
      
    );
  };

  return (
    <section className="Hero">
      <div className="grid">
        <div className="nameHeader">nameHeader</div>
        <div className="kategoriHeader">kategoriHeader</div>
        <div className="DatoHeader">DatoHeader</div>
        <div className="deleteHeader">deleteHeader</div>
        {avviks.filter(filterAvvik).map((avvik, index) => (
          <div key={index} className="row">
            <div className="nameCol">{avvik.navn}</div>
            <div className="kategoriCol">{avvik.kategori}</div>
            <div className="DatoCol">
              {new Date(avvik.dato).toLocaleString()}
            </div>
            <div className="deleteCol">
              <DeleteButton avvik={avvik} delete={deleteAvvik} />
            </div>
            
          </div>
          
        ))}
        ;
      </div>
      <button
        onClick={() => {
          window.location.assign("/");
        }}
      >
        Tilbake
      </button>
    </section>
    
  );
};

export default AlleAvvik;
