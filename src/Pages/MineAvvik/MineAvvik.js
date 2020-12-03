import React, { useEffect, useState } from "react";
import { db, storage } from "../../Components/Fire";
import { useAuth } from "../../context/AuthContext";

const AvviksImage = ({ fileName }) => {
  const [imageSrc, setImageSrc] = useState("https://via.placeholder.com/150");

  const file = storage.ref(fileName);
  file
    .getDownloadURL()
    .then((url) => {
      setImageSrc(url);
    })
    .catch(() => {
      console.log("Could not fetch url for", fileName);
    });

  return (
    <img
      src={imageSrc}
      style={{ width: 80, height: 80, backgroundColor: "white" }}
      onClick={() => {
        window.location.assign(imageSrc);
      }}
    />
  );
};

const MineAvvik = () => {
  const [avviks, setAvviks] = useState([]);
  const { username, isAdmin } = useAuth();

  useEffect(() => {
    db.collection("Avvik")
      .get()
      .then((snapshot) => {
        setAvviks(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  const filterAvvik = (avvik) => {
    if (isAdmin) return true;
    return avvik.navn === username;
  };

  return (
    <section className="Hero">
      <button onClick={(e) => window.location.assign("/meld-avvik")}>
        Meld Avvik
      </button>
      <div style={{ bottom: 100, position: "flex", width: "100%" }}>
        <div
          style={{ color: "white", padding: "10px 40px", border: "1px solid" }}
        >
          Dine Avvik
        </div>
        {avviks.filter(filterAvvik).map((avvik, index) => (
          <div
            style={{
              color: "white",
              padding: "20px 40px",
              display: "grid",
              gridTemplateColumns: "auto auto auto",
            }}
            key={index}
          >
            <AvviksImage fileName={avvik.fil} />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto auto",
                width: 800,
              }}
            >
              <div style={{ gridRow: "1" }}>
                Elev: {avvik.navn} <br /> Kategori: {avvik.kategori} | Dato:{" "}
                {new Date(avvik.dato).toLocaleString()}
              </div>
              <div style={{ gridRow: "2" }}>{avvik.kommentar}</div>
            </div>
          </div>
        ))}
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

export default MineAvvik;
