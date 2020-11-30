import React, { useState } from "react";
import Fire from "./Fire";

const MakeUserAdmin = () => {
    const [adminEmail, setAdminEmail] = useState("");
    const [response, setResponse] = useState("");

    const submitToFB = (e) => {
        e.preventDefault();

        const addAdminRole = Fire.functions().httpsCallable('addAdminRole');

        addAdminRole({ email: adminEmail }).then(result => {
            setResponse(result.data.error ? result.data.error : result.data.message);
        }).catch(() => {
            setResponse("Feilet");
        });
    }

    return (
        <>
            <p>Gjør til admin</p>
            <input type="text"
                placeholder={"Epostadresse"}
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
            />
            <button onClick={submitToFB}>Gjør til admin</button>
            <p>{response}</p>
            <button onClick={() => { window.location.assign("/") }}>Tilbake</button>
        </>
    )
}

export default MakeUserAdmin;