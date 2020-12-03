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

  const deleteAvvik = () => {
    db.collection("Avvik")
      .document(avviks)
      .delete();
      // .then(() => {
      //   console.log("success");
        // update avviksliste-state her
      //  setAvviks( () => {avviks.pop(avvik)});
      //  avviks.pop(avvik);
        // ELler sånn, men bad react: Only in emergency: setUpdateCounter(updateCounter++);
      // });
  };

  const filterAvvik = (avvik) => {
    if (isAdmin) return true;
    return avvik.navn === username;
  };

  const DeleteButton = ({ avvik, deleteAvvik }) => {
    return (
      <button
        className="deleteButton"
        onClick={() => {
          deleteAvvik(avvik);
        }}
      >
        
        &#10006;
      </button>
    );
  };

  return (
    <section className="Hero">
      <table className="avvikTable">
        <thead>
          <th>Navn</th>
          <th>Kategori</th>
          <th>Kommentar</th>
          <th>Dato</th>
          <th>Slett</th>
        </thead>
        <tbody>
        {avviks.filter(filterAvvik).map((avvik, index, key) => (
          
          <tr key={index}>
            <td>{avvik.navn}</td>
            <td>{avvik.kategori}</td>
            <td>{avvik.kommentar.substring(0,40) + (avvik.kommentar.length > 40? '...': '')}</td>
            <td>{new Date(avvik.dato).toDateString()}</td>
            <td>
              <DeleteButton avvik={avvik} delete={deleteAvvik} />
            </td>
          </tr>
        ))}
        </tbody>
      </table>
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
