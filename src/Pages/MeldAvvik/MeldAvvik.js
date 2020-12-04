import React from "react";
import "./MeldAvvik.css";
import { useState } from 'react'
import {db, storage} from '../../Components/Fire'
import { useAuth } from "../../context/AuthContext";
 
const MeldAvvik = () => {
  const [kategori, setKategori] = useState("");
  const [kommentar, setKommentar] = useState("");
  const [fil, setFil] = useState(null);
  const {username} = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("Avvik")
      .add({
        navn: username,
        kategori: kategori,
        kommentar: kommentar,
        fil: fil.name,
        dato: new Date().toISOString()
      })
      .then(() => {
        alert("Avvik registert");
        window.location.assign("/mine-avvik");
      })
      .catch((error) => {
        alert(error.message);
        
      });

      //Save image to firebase storage:
    storage.ref(fil.name).put(fil);

    setKategori('');
    setKommentar('');
  };

  return (
    <form className="MeldAvvik" onSubmit={handleSubmit}>
      <h1>Nytt Avvik</h1>
      <p>
        <label>Navn: {username}</label>
      </p>

      <p>
        <label> Kategori </label>
        <select
          name="kategori"
          id="kategori"
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
        >
          <option>Velg...</option>
          <option>Verktøy</option>
          <option>Stillas</option>
          <option>Annet</option>
        </select>
      </p>

      <p>
        <label>Kommentar</label>
        <textarea
          type="text"
          name="kommentar"
          id="kommentar"
          value={kommentar}
          onChange={(e) => setKommentar(e.target.value)}
        />
      </p>
        <div>
      <p>
          <input
            type="file"
            name="fil"
            id="fil"
            className="input-file"
            accept="image/x-png,image/jpeg,image/gif"
            onChange={(e) => {
              setFil(e.target.files[0])
            }}
          />
      </p>
        </div>
      <button type='submit' onSubmit={handleSubmit} >Send inn</button>
      <button onClick={() => { window.location.assign("/mine-avvik") }}>Tilbake</button>
    </form>
  );
};

export default MeldAvvik;
