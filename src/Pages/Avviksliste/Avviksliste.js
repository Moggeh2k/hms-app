import React, { useEffect, useState } from "react";
import { db } from "../../Components/Fire";
import { useAuth } from "../../context/AuthContext";
import "./Avviksliste.css";

const AlleAvvik = () => {
  const [avviks, setAvviks] = useState([]);
  const [updateCounter, setUpdateCounter] = useState(0);
  const { username, isAdmin } = useAuth();

  useEffect(() => {
    db.collection("Avvik")
      .get()
      .then((snapshot) => {
        setAvviks(
          snapshot.docs.map((doc) => {
            console.log(doc);
            const document = doc.data();
            document.id = doc.id;
            return document;
          })
        );
      });
  }, [updateCounter]);

  const deleteAvvik = (avvik) => {
    db.collection("Avvik")
      .doc(avvik.id)
      .delete()
      .then(() => {
        setUpdateCounter(updateCounter + 1);
      })
      .catch(() => {
        console.log("Could not delete");
      });
  };

  const filterAvvik = (avvik) => {
    if (isAdmin) return true;
    return avvik.navn === username;
  };

  const sortFunc = (a, b) => {
    return new Date(a.dato) - new Date(b.date);
  };

  return (
    <section className="Hero">
      <table className="avvikTable">
        <thead>
          <tr>
            <th>Navn</th>
            <th>Kategori</th>
            <th>Kommentar</th>
            <th>Dato</th>
            <th>Slett</th>
          </tr>
        </thead>
        <tbody>
          {avviks
            .filter(filterAvvik)
            .sort(sortFunc)
            .map((avvik, index) => (
              <tr key={index}>
                <td>{avvik.navn}</td>
                <td>{avvik.kategori}</td>
                <td>
                  {avvik.kommentar.substring(0, 40) +
                    (avvik.kommentar.length > 40 ? "..." : "")}
                </td>
                <td>{new Date(avvik.dato).toDateString()}</td>
                <td>
                  <DeleteButton avvik={avvik} deletefunction={deleteAvvik} />
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

const DeleteButton = ({ avvik, deletefunction }) => {
  return (
    <button
      className="deleteButton"
      onClick={() => {
        deletefunction(avvik);
      }}
    >
      &#10006;
    </button>
  );
};
