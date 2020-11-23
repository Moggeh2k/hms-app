import React from "react";
import ReactDOM from "react-dom";
import useForm from "react-hook-form";
import "./MeldAvvik.css";
import { useState } from 'react'
import {db} from '../../Components/Fire'
 
const MeldAvvik = () => {
  const [navn, setNavn] = useState("");
  const [kategori, setKategori] = useState("");
  const [kommentar, setKommentar] = useState("");

  // const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoader(true)

    db.collection("Avvik")
      .add({
        navn: navn,
        kategori: kategori,
        kommentar: kommentar,
      })
      .then(() => {
        alert("Avvik registert");
        // setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        // setLoader(false);
      });
      setNavn('');
      setKategori('');
      setKommentar('');
  };

  return (
    <form className="MeldAvvik" onSubmit={handleSubmit}>
      <h1>Nytt Avvik</h1>
      <p>
        <label>Navn: </label>
        <input
          type="text"
          name="navn"
          id="navn"
          value={navn}
          onChange={(e) => setNavn(e.target.value)}
        />
      </p>

      <p>
        <label>Kategori</label>
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
      <p>
        <div>
          <input
            type="file"
            name="fil"
            id="fil"
            class="input-file"
            accept="image/x-png,image/jpeg,image/gif"
           // onChange={() => handleSubmit()}
          />
          <label for="fil"> Velg Fil</label>
        </div>
      </p>
      <button type='submit' onSubmit={handleSubmit} />
    </form>
  );
};

export default MeldAvvik;

// function MeldAvvik() {
//   const onSubmit = (data) => {
//     alert(JSON.stringify(data));
//   };

//   function upload() {
//     return new Promise(async (resolve, reject) => {
//       const filePicker = document.querySelector("input");
//       if (!filePicker || !filePicker.files || filePicker.files.length <= 0) {
//         reject("Ingen fil valgt.");
//         return;
//       }

//       const myFile = filePicker.files[0];

//       console.log(myFile);
//       resolve();
//     });
//   }
