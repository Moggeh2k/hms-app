import React from 'react';
import {useAuth} from '../../context/AuthContext';
import './Avviksliste.css';


function Avviksliste() {
    const NavnListe = ['Navn1', 'Navn2', 'Navn3']
    const KategoriListe = ['Kategori1', 'Kategori2', 'Kategori3']
    const KommentarListe = ['Kommentar1', 'Kommentar2', 'Kommentar3']
    const DatoListe = ['Dato1', 'Dato2', 'Dato3']
    return ( 

    <div className="container">
        <div className="Felt">Navn</div>
        <div className="Felt">Kategori</div>
        <div className="Felt">Kommentar</div>
        <div className="Felt">Dato</div>

        <div className="Felt">
            {NavnListe.map(navn =>(
                <div className="Loop">{navn}</div>))}
        </div>

        <div className="Felt">
            {KategoriListe.map(kategori =>(
                <div className="Loop">{kategori}</div>))}
        </div>

        <div className="Felt">
            {KommentarListe.map(kommentar =>(
                <div className="Loop">{kommentar}</div>))}
        </div>

        <div className="Felt">
            {DatoListe.map(dato =>(
                <div className="Loop">{dato}</div>))}
        </div>
    </div>
);
}

export default Avviksliste;