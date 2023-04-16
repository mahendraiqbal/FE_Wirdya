import { getAllProduct } from "src/commons/module/product";
import { ACTION_STRING } from "./actionString";

export const setCart = (product) => {
    return {
        type: "SET_CART_FULFILLED",
        payload: product,
    };
};
export const setsearch = (search) => {
    return {
        type: "SET_SEARCH_FULFILLED",
        payload: search,
    };
};

export const getAllProductAction = (body) => {
    return {
        type: ACTION_STRING.getallProduct,
        payload: getAllProduct(body),
    };
};

export const DelCart = () => {
    return {
        type: "DEL_CART_FULFILLED",
    };
};
export const deletWishList = () => {
    return {
        type: "DEL_WISHLIST_FULFILLED",
    };
};

export const setTotalPrice = (price) => {
    return {
        type: "SET_TOTAL_FULFILLED",
        payload: price,
    };
};

export const setWishList = (product) => {
    return {
        type: "SET_WISHLIST_FULFILLED",
        payload: product,
    };
};