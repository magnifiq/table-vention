import { useState } from "react";

const useFormLogic = (onSubmit, onEdit, defaultInputForm) => {
  const [inputForm, setInputForm] = useState(defaultInputForm);
  const id = defaultInputForm.id;

  const addFormElement = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    if (formValidate(formProps)) onSubmit(formProps);

    setInputForm(defaultInputForm);
  };
  const editItem = (id, e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    if (formValidate(formProps)) {
      onEdit(id, formProps);
      alert("The item was successfully changed");
    } else {
      setInputForm(defaultInputForm);
    }
  };

  function formValidate(formProps) {
    const errors = {};

    const {
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
    } = formProps;

    if (!title?.trim()) {
      errors.title = "Title is required";
    }
    if (!description) {
      errors.description = "Description is required";
    }
    if (isNaN(parseFloat(price))) {
      errors.price = "Enter a valid number for price";
    }
    if (isNaN(parseFloat(discountPercentage))) {
      errors.discount = "Enter a valid number for discount";
    }
    if (isNaN(parseFloat(rating))) {
      errors.rating = "Enter a valid number for rating";
    }
    if (isNaN(parseFloat(stock))) {
      errors.stock = "Enter a valid number for stock";
    }
    if (!brand) {
      errors.brand = "Brand is required";
    }
    if (!category) {
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
  return {
    inputForm,
    id,
    addFormElement,
    editItem,
    handleChange,
  };
};

export default useFormLogic