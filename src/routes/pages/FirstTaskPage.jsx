import Button from "@mui/material/Button";
import DEFAULT_INPUT_VALUES from "../../constants/defaultInputValues.js";
import { Form } from "../../components/Form/Form.jsx";
import { Table } from "../../components/Table/Table.jsx";
import useProductData from "../../hooks/useProductData.jsx";
const FirstTaskPage = () => {
  const { addElement, data, setData, editElement } = useProductData();
  return (
    <>
      <Button href="/second_task">Go to the second task</Button>
      <Form
        onSubmit={addElement}
        defaultInputForm={DEFAULT_INPUT_VALUES}
        textButton="Add"
      />
      <Table data={data} setData={setData} onEdit={editElement} />
    </>
  );
};

export default FirstTaskPage;
