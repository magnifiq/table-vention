/* eslint-disable react/prop-types */
import { OperationButton } from "../OperationButton/OperationButton";
import { TextField, Container, Grid } from "@mui/material";
import { useState } from "react";
import propTypes from "prop-types";
import formFields from "./formFields.json";

export const Form = ({
  flagEdit = false,
  onSubmit,
  onEdit,
  defaultInputForm,
  textButton,
}) => {
  const [inputForm, setInputForm] = useState(defaultInputForm);
  const [id, setId] = useState(defaultInputForm.id);

  const addFormElement = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
    if (formValidate(formProps)) {
      onSubmit(formProps);
      setInputForm(defaultInputForm);
    } else {
      setInputForm(defaultInputForm);
    }
  };
  const editItem = (id, e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
    if (formValidate(formProps)) {
      onEdit(id, formProps);
      alert("The item was successfully changed");
    } else {
      setInputForm(defaultInputForm);
    }
  };

  function formValidate(formProps) {
    const errors = {};
    const price = parseFloat(formProps.price);
    const discount = parseFloat(formProps.discountPercentage);
    const rating = parseFloat(formProps.rating);
    const stock = parseFloat(formProps.stock);

    if (!formProps.title?.trim()) {
      errors.title = "Title is required";
    }
    if (!formProps.description) {
      errors.description = "Description is required";
    }
    if (isNaN(price)) {
      errors.price = "Enter a valid number for price";
    }
    if (isNaN(discount)) {
      errors.discount = "Enter a valid number for discount";
    }
    if (isNaN(rating)) {
      errors.rating = "Enter a valid number for rating";
    }
    if (isNaN(stock)) {
      errors.stock = "Enter a valid number for stock";
    }
    if (!formProps.brand) {
      errors.brand = "Brand is required";
    }
    if (!formProps.category) {
      errors.category = "Category is required";
    }

    if (Object.keys(errors).length > 0) {
      alert(Object.values(errors).join("\n"));
      return false;
    }

    return true;
  }

  const handleChange = (e, name) => {
    setInputForm({ ...inputForm, [name]: e.target.value });
  };
 return (
   <Container maxWidth="sm" style={{ marginTop: "20px" }}>
     <form
       onSubmit={flagEdit ? (e) => editItem(id, e) : (e) => addFormElement(e)}
     >
       <Grid container spacing={2}>
         {formFields.map((field, index) => (
           <Grid item xs={12} sm={6} key={field.name}>
             <TextField
               fullWidth
               label={field.label}
               name={field.name}
               value={inputForm[field.name]}
               onChange={(e) => handleChange(e, field.name)}
             />
           </Grid>
         ))}
       </Grid>
       <OperationButton type="submit" text={textButton} />
     </form>
   </Container>
 );
};

Form.propTypes = {
  textButton: propTypes.string,
  defaultInputForm: propTypes.object,
};
