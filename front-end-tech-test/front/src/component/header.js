import logo from '../../src/carrito-de-compras.png'
import exit from '../../src/logout.png'
import { Link } from 'react-router-dom';
import '../pages/css/headerPage.css';

 const Header = (props) =>{
    return(
        props.state?
        <><section className="pageHead">
            <h1 className="homeTitle">Prueba tecnica front Ecomsur 2022</h1> 
        <Link to={"/"}>
            <div className="headImg">
                <img src={exit} />
            </div>
            </Link>
            
        </section></>
        :  <>
         
        <section className="homeHead">
                <div className="homeCont">
                    <h1 className="homeTitle">Prueba tecnica front Ecomsur 2022</h1>
                    <img onClick={props.open} src={logo} />
                </div>
                    <p> {"(" + props.add.length + ")"}</p>
            </section>
            </>

    )
 }
 export default Header