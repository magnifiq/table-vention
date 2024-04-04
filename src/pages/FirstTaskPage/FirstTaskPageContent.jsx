import PropTypes from "prop-types";

import DEFAULT_INPUT_VALUES from "../../constants/defaultInputValues.js";

import { Paper } from "@mui/material";

import { Form } from "../../components/Form/Form.jsx";
import { Table } from "../../components/Table/Table.jsx";

import { useProductData } from "../../hooks/useProductData.jsx";

const FirstTaskPageContent = ({ products }) => {
  const { addElement, setData, editElement } = useProductData(products); // it isn't decompose yet
  const data=products.products;
  
  return (
    <Paper style={{height: "100%"}}>
      <Form
        onSubmit={addElement}
        defaultInputForm={DEFAULT_INPUT_VALUES}
        textButton="Add"
      />
      <Table data={data} setData={setData} onEdit={editElement} />
    </Paper>
  );
};

FirstTaskPageContent.propTypes = {
  products: PropTypes.object,
};

FirstTaskPageContent.defaultProps = {
  products: {},
};

export default FirstTaskPageContent;
