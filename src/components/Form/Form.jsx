/* eslint-disable react/prop-types */
//import styles from "./AddForm.module.css";
import { OperationButton } from "../OperationButton/OperationButton";
import { TextField, Container, Grid } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";

export const Form = ({
  onSubmit = null,
  onEdit = null,
  defaultInputForm,
  textButton,
}) => {
  const [inputForm, setInputForm] = useState(defaultInputForm);
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
    if (validateForm(formProps)) {
      onSubmit(formProps);
    } else {
      alert(
        Object.keys(errors)
          .map((key) => errors[key])
          .join("\n")
      );
      setInputForm(defaultInputForm);
    }
  };
  const editItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    if (onEdit && validateForm(formProps)) {
      let id = defaultInputForm.id;
      onEdit(id, formProps);
    } else {
      alert(errors);
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
      <form onSubmit={editItem}>
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
              error={!!errors.title}
              helperText={errors.title}
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
              error={!!errors.description}
              helperText={errors.description}
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
              error={!!errors.price}
              helperText={errors.price}
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
              error={!!errors.discount}
              helperText={errors.discount}
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
              error={!!errors.rating}
              helperText={errors.rating}
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
              error={!!errors.stock}
              helperText={errors.stock}
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
              error={!!errors.brand}
              helperText={errors.brand}
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
              error={!!errors.category}
              helperText={errors.category}
            />
          </Grid>
        </Grid>
        <OperationButton type="submit" text={textButton} />
      </form>
    </Container>
  );
};

Form.PropTypes = {
  textButton: PropTypes.string,
  defaultInputForm: PropTypes.Object,
};
