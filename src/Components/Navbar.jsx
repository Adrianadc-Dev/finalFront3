import "../styles/index.css"
import { Link } from 'react-router-dom'
import { useContextGlobal } from "./utils/global.context";


const Navbar = () => {

  const {dispatch}= useContextGlobal();
  const {state}=useContextGlobal();
  
  const changeTheme = ()=>{
    const actual = state.theme ==='light' ? 'dark': 'light'
    
    console.log(actual)
    
   dispatch({
      type:"changeTheme", 
      payload: actual}
  )
  
}

  return (
    <nav className={state.theme ==='light'? 'nav' : 'nav-dark'}>
      <Link to="/">
      <h4>Home</h4>
      </Link>
      <Link to="/contact">
      <h4>Contacto</h4>
      </Link>
      <Link to="/favs">
      <h4>Favoritos</h4>
      </Link>
      
     
      <button className="botonCambioTema" onClick={changeTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar