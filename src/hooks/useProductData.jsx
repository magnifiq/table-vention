import { defer } from "react-router-dom";
import { useState } from "react";

const fetchData = async () => {
  const response = await fetch("https://dummyjson.com/products");
  return response.json();
};

const productLoader = async () => {
  return defer({
    products: fetchData(),
  });
};

const useProductData = ({ products }) => {
  const [data, setData] = useState(products);
  console.log(products);
  const addElement = (item) => {
    const {
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
    } = item;
    setData((prevData) => [
      ...prevData,
      {
        id:
          prevData.length > 0 ? Math.max(...prevData.map((i) => i.id)) + 1 : 1,
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
      },
    ]);
  };
  const editElement = (id, item) => {
    const newArr = [...data];
    newArr[id - 1] = { ...newArr[id - 1], ...item };
    setData(newArr);
  };

  return { addElement, setData, editElement };
};

export { useProductData, productLoader };
