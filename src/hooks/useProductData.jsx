import { useState, useEffect } from "react";

const useProductData = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const { products } = await response.json();
      setData(products);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const addElement = (item) => {
    console.log(item);
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

  return { addElement, data, setData, editElement };
};

export default useProductData;
