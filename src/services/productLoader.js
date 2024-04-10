import { defer } from "react-router-dom";
import getProducts from "../api/getProducts";

const productLoader = async () => {
    return defer({
        products: getProducts(),
    });
};

export default productLoader;