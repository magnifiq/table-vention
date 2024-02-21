/* eslint-disable react/prop-types */
//import styles from "./AddForm.module.css";
import { OperationButton } from "../OperationButton/OperationButton";
import { TextField, Container, Grid } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";

export const Form = ({ onSubmit, defaultInputForm, textButton }) => {
    console.log(defaultInputForm)
  const [inputForm, setInputForm] = useState(defaultInputForm);
  const addFormElement = (e) => {
    e.preventDefault();
    console.log(e);
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
    if (formValidate(formProps)) {
      onSubmit(formProps);
    } else {
      alert("Insert all necessary info");
      setInputForm(defaultInputForm);
    }
  };
  function formValidate(formProps) {
    const price = parseFloat(formProps.price);
    const discount = parseFloat(formProps.discount);
    const rating = parseFloat(formProps.rating);
    const stock = parseFloat(formProps.stock);

    if (
      formProps.title?.trim() &&
      formProps.description &&
      !isNaN(price) &&
      !isNaN(discount) &&
      !isNaN(rating) &&
      !isNaN(stock) &&
      formProps.brand &&
      formProps.category
    ) {
      return true;
    }
    if (isNaN(price) || isNaN(discount) || isNaN(rating) || isNaN(stock)) {
      alert("Enter numbers for price, discount, rating, stock");
    }
    return false;
  }

  return (
    <Container maxWidth="sm" style={{ marginTop: "20px" }}>
      <form onSubmit={addFormElement}>
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
              value={inputForm.discount}
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

Form.PropTypes={
    textButton: PropTypes.string,
    defaultInputForm: PropTypes.Object
}