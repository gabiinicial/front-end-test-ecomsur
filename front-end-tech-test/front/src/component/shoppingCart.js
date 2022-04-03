import '../pages/css/ModalshoppingCart.css';

const CardShopping = ({prod, setAdd, show , close }) => {
    if (!show) {
        return null;
        }

        let hash = {};
    prod = prod.filter(o => hash[o._id] ?  false : hash[o._id] = true);

    const removeProduct= (item) =>{
        prod.forEach(e =>{
                prod.splice(e, 1);
        })
        setAdd([...prod]);
        }
        
    return(
        <div className="ModalProduct">
             <button className="closeButton" onClick={close} name="close">Close</button>
        {
                prod.map(item => (
                    <><div key={item._id}>
                        <h2 className="modalTitle"> {item.name}</h2>
                        <p className="modalPrice">
                            {"Price:" + "$ " + item.price}
                        </p>
                        <img className="modalImg" src={"http://localhost:5000/" + item.image} />
                        <p className="modalStock">{"In Stock:" + item.countInStock}</p>
                        <p className="modalRef">{"Reference:" + item._id}</p>
                        <button className="removeButton" onClick={() =>  removeProduct(item._id)}>Remove</button>
                    </div>
                    </>
                ))
            }
    </div>
    )
}

export default CardShopping