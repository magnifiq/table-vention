import "./App.css";
import { Form } from "./components/Form/Form";
import { Table } from "./components/Table/Table";
import DEFAULT_INPUT_VALUES from "./components/Form/defaultInputValues.js";
import useProductData from "./hooks/useProductData";
function App() {
 
  return (
    <>
      <Form
        onSubmit={addElement}
        defaultInputForm={DEFAULT_INPUT_VALUES}
        textButton="Add element"
      />
      <Table data={data} setData={setData} onEdit={editElement} />
    </>
  );
}

export default App;
