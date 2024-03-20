import PropTypes from "prop-types";

import DEFAULT_INPUT_VALUES from "../../constants/defaultInputValues.js";

import { Form } from "../../components/Form/Form.jsx";
import { Table } from "../../components/Table/Table.jsx";

import { useProductData } from "../../hooks/useProductData.jsx";

const FirstTaskPageContent = ({ products }) => {
  const { addElement, setData, editElement } = useProductData(products);

  return (
    <>
      <Form
        onSubmit={addElement}
        defaultInputForm={DEFAULT_INPUT_VALUES}
        textButton="Add"
      />
      <Table data={products} setData={setData} onEdit={editElement} />
    </>
  );
};

FirstTaskPageContent.propTypes = {
  products: PropTypes.array.isRequired,
};

export default FirstTaskPageContent;
