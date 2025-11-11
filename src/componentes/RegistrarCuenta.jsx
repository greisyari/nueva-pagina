import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
function RegistrarCuenta() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  //Funcionar para crear un usuario
    const registrar = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("Usuario registrado")
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error al crear tu cuenta")
            // ..
  });
    }

    // El componente de React debe usar 'return' para renderizar el JSX
    return (
        <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h3>Registro de Nueva Cuenta 🔑</h3>
            <form>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Ingresa tu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        // Estos estilos son opcionales y solo para darle un aspecto básico
                        style={{ width: '100%', padding: '8px', margin: '5px 0' }} 
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Mínimo 6 caracteres"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength="6"
                        // Estos estilos son opcionales y solo para darle un aspecto básico
                        style={{ width: '100%', padding: '8px', margin: '5px 0' }}
                    />
                </div>
                
                <button 
                type='button'
                onClick={registrar}
                    // Estos estilos son opcionales y solo para darle un aspecto básico
                    style={{ width: '100%', padding: '10px', marginTop: '15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                    Registrar Cuenta
                </button>
            </form>
        </div>
    );
}

export default RegistrarCuenta;