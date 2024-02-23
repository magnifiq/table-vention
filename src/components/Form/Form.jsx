/* eslint-disable react/prop-types */
//import styles from "./AddForm.module.css";
import { OperationButton } from "../OperationButton/OperationButton";
import { TextField, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import propTypes from "prop-types";

export const Form = ({
  flagEdit=false,
  onSubmit,
  onEdit,
  defaultInputForm,
  textButton,
}) => {
  const [inputForm, setInputForm] = useState(defaultInputForm);

  const [id, setId]=useState(defaultInputForm.id)
  const [errors, setErrors] = useState({});
  const validateForm = (formProps) => {
    const newErrors = {};

    if (!formProps.title?.trim()) {
      newErrors.title = "Title is required";
    }
    if (!formProps.description) {
      newErrors.description = "Description is required";
    }
    if (isNaN(parseFloat(formProps.price))) {
      newErrors.price = "Enter a valid number for price";
    }
    if (isNaN(parseFloat(formProps.discount))) {
      newErrors.discount = "Enter a valid number for discount";
    }
    if (isNaN(parseFloat(formProps.rating))) {
      newErrors.rating = "Enter a valid number for rating";
    }
    if (isNaN(parseFloat(formProps.stock))) {
      newErrors.stock = "Enter a valid number for stock";
    }
    if (!formProps.brand) {
      newErrors.brand = "Brand is required";
    }
    if (!formProps.category) {
      newErrors.category = "Category is required";
    }

    setErrors(newErrors, () => {
      console.log(errors);
    });
    return Object.keys(newErrors).length === 0;
  };
  const addFormElement = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
    if (formValidate(formProps)) {
      onSubmit(formProps);
    } else {
      setInputForm(defaultInputForm);
    }
  };
  const editItem = (id,e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
     console.log(formProps);
    if (formValidate(formProps)) {
      console.log(`inside edit is ${id}`);
      console.log(formProps)
      onEdit(id, formProps);
    } else {
      setInputForm(defaultInputForm);
    }
  };

  function formValidate(formProps) {
    const errors = {};
    const price = parseFloat(formProps.price);
    const discount = parseFloat(formProps.discount);
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

  return (
    <Container maxWidth="sm" style={{ marginTop: "20px" }}>
      <form onSubmit={flagEdit ? (e) => editItem(id, e) : addFormElement}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={inputForm.title}
              onChange={(e) =>
                setInputForm({ ...inputForm, title: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={inputForm.description}
              onChange={(e) =>
                setInputForm({ ...inputForm, description: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={inputForm.price}
              onChange={(e) =>
                setInputForm({ ...inputForm, price: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Discount"
              name="discount"
              value={inputForm.discountPercentage}
              onChange={(e) =>
                setInputForm({ ...inputForm, discount: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Rating"
              name="rating"
              value={inputForm.rating}
              onChange={(e) =>
                setInputForm({ ...inputForm, rating: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Stock"
              name="stock"
              value={inputForm.stock}
              onChange={(e) =>
                setInputForm({ ...inputForm, stock: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={inputForm.brand}
              onChange={(e) =>
                setInputForm({ ...inputForm, brand: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Category"
              name="category"
              value={inputForm.category}
              onChange={(e) =>
                setInputForm({ ...inputForm, category: e.target.value })
              }
            />
          </Grid>
        </Grid>
        <OperationButton type="submit" text={textButton} />
      </form>
    </Container>
  );
};

Form.propTypes = {
  textButton: propTypes.string,
  defaultInputForm: propTypes.Object,
};
