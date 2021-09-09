import React, { useContext } from 'react'
import UserContext from '../contexts/userContext'

const Navbar = () => {
  console.log('navbar')
  const { user, login, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container">
          <span className="navbar-brand">
            <h2>{user ? `Hola ${user.name}` : 'Bienvenid@'}</h2>
          </span>
          {
            user
              ? <button onClick={logout} className="btn btn-primary">
                  Cerrar Sesión
                </button>
              : <button onClick={login} className="btn btn-primary">
                  Iniciar Sesión
                </button>
          }          
        </div>
    </nav>
  )
}

export default Navbar
  