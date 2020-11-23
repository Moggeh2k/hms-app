import React from "react";
import ReactDOM from "react-dom";
import useForm from "react-hook-form";
import "./MeldAvvik.css";
import { useState } from 'react'
import {db} from '../../Components/Fire'
 
const MeldAvvik = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [comment, setComment] = useState("");

  // const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoader(true)

    db.collection("Report")
      .add({
        name: name,
        category: category,
        comment: comment,
      })
      .then(() => {
        alert("Report registered");
        // setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        // setLoader(false);
      });
      setName('');
      setCategory('');
      setComment('');
  };

  return (
    <form className="MeldAvvik" onSubmit={handleSubmit}>
      <h1>New Avvik</h1>
      <p>
        <label>Name: </label>
        <input
          type="text"
          name="navn"
          id="navn"
          value={name}
          onChange={(e) => setNavn(e.target.value)}
        />
      </p>

      <p>
        <label>Category</label>
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Choose...</option>
          <option>Tools</option>
          <option>Rack</option>
          <option>Other</option>
        </select>
      </p>

      <p>
        <label>Comment</label>
        <textarea
          type="text"
          name="comment"
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </p>
      <p>
        <div>
          <input
            type="file"
            name="file"
            id="file"
            class="input-file"
            accept="image/x-png,image/jpeg,image/gif"
           // onChange={() => handleSubmit()}
          />
          <label for="fil"> Choose file </label>
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
