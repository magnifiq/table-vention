import { useState, useEffect } from "react";
import "./App.css";
import { AddForm } from "./components/AddForm/AddForm";
import { Form } from "./components/Form/Form";
import { Table } from "./components/Table/Table";

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
    console.log(item)
    console.log(id);
    const newArr=[...data]
    console.log(newArr)
    newArr[id - 1] = { ...newArr[id - 1], ...item };
    setData(newArr);
  };
  return (
    <>
      <AddForm onSubmit={addElement} />
      <Form
        onSubmit={addElement}
        onEdit={editElement}
        defaultInputForm=""
        textButton=""
      />
      <Table data={data} setData={setData} onEdit={editElement}/>
    </>
  );
}

export default App;
