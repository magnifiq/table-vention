import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
        try {
          const response = await fetch("https://dummyjson.com/products");
          const data = await response.json();
          setData(data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }, []);

  

  return <Table data={data} />;
}

export default App
