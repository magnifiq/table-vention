import { Form } from "./components/Form/Form";
import { Table } from "./components/Table/Table";
import DEFAULT_INPUT_VALUES from "./constants/defaultInputValues.js";
import useProductData from "./hooks/useProductData";
function App() {
  const { addElement, data, setData, editElement } = useProductData();
  return (
    <>
      <Form
        onSubmit={addElement}
        defaultInputForm={DEFAULT_INPUT_VALUES}
        textButton="Add"
      />
      <Table data={data} setData={setData} onEdit={editElement} />
    </>
  );
}

export default App;
