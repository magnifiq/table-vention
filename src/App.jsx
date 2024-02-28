import { useState, useEffect } from "react";
import "./App.css";
import { Form } from "./components/Form/Form";
import { Table } from "./components/Table/Table";
import defaultInputValues from "./components/Form/defaultInputValues.json"
import Button from "@mui/material/Button";
function App() {
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
    setData((prevData) => [
      ...prevData,
      {
        id:
          prevData.length > 0 ? Math.max(...prevData.map((i) => i.id)) + 1 : 1,
        title: item.title,
        description: item.description,
        price: item.price,
        discount: item.discountPercentage,
        rating: item.rating,
        stock: item.stock,
        brand: item.brand,
        category: item.category,
      },
    ]);
  };
  const editElement = (id, item) => {
    console.log(item);
    console.log(id);
    const newArr = [...data];
    console.log(newArr);
    newArr[id - 1] = { ...newArr[id - 1], ...item };
    setData(newArr);
  };
  return (
    <>
      <Button href='/second_task'>Go to the second task</Button>
      <Form
        onSubmit={addElement}
        defaultInputForm={defaultInputValues}
        textButton="Add element"
      />
      <Table data={data} setData={setData} onEdit={editElement} />
    </>
  );
}

export default App;
