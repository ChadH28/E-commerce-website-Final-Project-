import axios from "axios";
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM
} from "../components/constants/cartConstants";

const addToCart = (productId, qty) => async (dispatch) => {
    try {
        const {data} = await axios.get("/api/products/" + productId);
        dispatch({
            type: CART_ADD_ITEM, payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                numInStock: data.numInStock,
                qty
            }
        });
    } catch (error) {
        error.message
    }
}

const removeFromCart = (productId) => (dispatch) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: productId
    }); 
}

export {
    addToCart,
    removeFromCart
}