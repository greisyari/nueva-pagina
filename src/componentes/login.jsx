import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const provider = new GoogleAuthProvider

function LoginUsuario() {

    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("");
    const provider = new GoogleAuthProvider();

    const navigate = useNavigate();

    function iniciarSesion(){
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log("inicio de sesion exitoso");
            navigate("/");
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error al crear la cuenta");
            console.log(Error);
        });
    } 

    function iniciarGoogle() {
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const auth = getAuth();
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }

    return (
        <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h3>Iniciar Sesión 🚪</h3>
            <label htmlFor="email">Email:</label>
            <input 
            type="email" 
            placeholder="correo" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
            />

            <label htmlFor="password">Contraseña:</label>
            <input 
            type="pasword" 
            placeholder="contraseña" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
            />
            <button 
            onClick={iniciarSesion}
            style={{ width: '100%', padding: '10px', marginTop: '15px', backgroundColor: '#2849b4ff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
                 Iniciar Sesión 
            </button>

            <button 
            onClick={iniciarGoogle}
            style={{ width: '100%', padding: '10px', marginTop: '15px', color: 'black', border: '1px solid black', borderRadius: '4px', cursor: 'pointer' }}
            >
                Ingresa con san google
            </button>
        </div>
    );
}

export default LoginUsuario;