import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from './firebase'
import NavbarUsuario from './navbarUsuario';
import NavbarVisitante from './navbarVisitante';

function Header() {
    const [ usuario, setUsuario ] = useState(null);
    const auth = getAuth();

    useEffect(()=> {
        //Detectar usuario
        const detectarUsuario = onAuthStateChanged(auth, (user)=> {
            if (user) {
                setUsuario(user);
            } else{
                setUsuario(null);
            }
        })

        return () => detectarUsuario();

    });
    return (
        <>
             <NavbarVisitante/>
             <NavbarUsuario/>
        </>
    )
}

export default Header;