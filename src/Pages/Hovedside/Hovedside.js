import React from "react";
import { useAuth } from "../../context/AuthContext";
import './Hovedside.css';

const Hovedside = () => {
  const { logout, username, isAdmin } = useAuth();

  return (

    <section className="Hovedside">
      <nav>
        <h2>Welcome,  {username} </h2>
        <button onClick={logout}>Log ut</button>
      </nav>

      <button onClick={(e) => window.location.assign("/mine-avvik")}>
        Mine Avvik
      </button>
      {
        isAdmin && <>
          <button onClick={(e) => window.location.assign("/elevliste")}>
            Elevliste
        </button>

          <button onClick={(e) => window.location.assign("/avviksliste")}>
            Adm Avvik
        </button>
        </>
      }
    </section>
  );
};

export default Hovedside;
