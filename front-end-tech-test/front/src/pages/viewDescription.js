import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Header from '../component/header.js';
import './css/view.css';

const ProductDescription = () =>{
    const {productId} = useParams();
    const [description, setdescription] = useState([]);
    const [stateShow] = useState(true);
    console.log(description);

    useEffect(() => {
        const getApiResponseDetail = () => {
            fetch('http://localhost:5000/api/products/' + productId)
                .then((res) => res.json())
                .then((res) => setdescription(res))
    }
        getApiResponseDetail()
    }, []);

    return(
        <>
         <div>
             <Header state={stateShow}/>
                    <><div className="displayProduct" key={description.id}>
                    <div className="prodImg">
                        <img src={"http://localhost:5000/" + description.image} />
                        </div>
                        <div className="displayDescription">
                        <h2 className="prodName"> {description.name}</h2>
                        <p className="prodPrice">
                            {"Price:" + "$ " + description.price}
                        </p>
                        <p className="prodDescription">{description.description}</p>
                        <h3 className="prodBrand"> {"Marca:" + description.brand}</h3>
                        <p className="prodCat">{"Category: " + description.category}</p>
                        <button className="buttonProd">Add to Cart</button>
                        </div>
                    </div>
                    </>
    </div>
    </>
    );
}

export default ProductDescription