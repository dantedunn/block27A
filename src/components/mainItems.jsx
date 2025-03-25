//productlist
//main list of items to render
//use a .map 
import React from "react";
import Store from "./store";
import ItemProducts from "./items";

const  MainItems = ({ItemProducts, addCart}) => {

    return(
        <div>
            {ItemProducts.map ((product) =>(
                <Store key={product.id} product={product} addCart={addCart} />
            ))}
        </div>
    )
};
 export default MainItems;
