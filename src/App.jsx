import { useState, useEffect } from "react";
import "./App.css";
import { AddForm } from "./components/AddForm/AddForm";
import { Table } from "./components/Table/Table";

function App() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  return (
    <>
      <AddForm />
      <Table data={data} />;
    </>
  );
}

export default App;
