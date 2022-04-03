import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import App from '../App.js';
import Header from '../component/header.js';
import CardShopping from '../component/shoppingCart.js';
import './css/home.css';

const Home = () =>{
const [response, setResponse] = useState([]);
const [stateShow] = useState(false);
let  [add, setAdd] = useState([]);
const [showModal, setShowModal] = useState(false);

const handleToggleModalCart= () =>{
    setShowModal(!showModal);
}

    useEffect(() => {
        const getApiResponse = () => {
            fetch('http://localhost:5000/api/products')
                .then((res) => res.json())
                .then((res) => setResponse(res))
    }
        getApiResponse()

    }, []);

    const addProduct = (item) =>{
        add.push(item);
        let repetidos = [];
        add.forEach(function(numero){
            repetidos[numero._id] = (repetidos[numero._id] || 0) + 1;
            numero.countInStock = repetidos[numero._id];
})
    setAdd([...add]);
    }

return (
    <div>
        <Header state={stateShow} add={add} open={handleToggleModalCart}/>
        <div className="productShow">
            {
                response.map(item => (
                    <><div className="product" key={item._id}>
                 <Link className="productLink" to= {"/description/" + item._id}>
                        <img src={"http://localhost:5000/" + item.image} />
                        <h3 className="title"> {item.name}</h3>
                        </Link>
                        <button onClick={() => addProduct(item)} >Add item</button>
                    </div>
                    </>
                ))
            }
            <div>
                <CardShopping prod={add} setAdd={setAdd} show={showModal}  close={handleToggleModalCart} />
    </div>
        </div>
    </div>
)
}
export default Home