import React from "react";
import ReactDOM from "react-dom";
import useForm from "react-hook-form";
import './MeldAvvik.css';

function MeldAvvik() {
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <form className="MeldAvvik" onSubmit={onSubmit}>
      <h1>Nytt Avvik</h1>
      <label>Navn:</label>
      <input name="navn" />

      <label>Kategori</label>
      <select name="kategori">
        <option>Velg...</option>
        <option>Verktøy</option>
        <option>Stillas</option>        
        <option>Annet</option>
      </select>

      <label>Kommentar</label>
      <textarea name="kommentar" />

      <input type="submit" value='Meld Avvik' />
    </form>
  );
}

export default MeldAvvik;
