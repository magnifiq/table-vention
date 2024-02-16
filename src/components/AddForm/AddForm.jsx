/* eslint-disable react/prop-types */
import styles from "./AddForm.module.css";
import { OperationButton } from "../OperationButton/OperationButton";
import { useState } from "react";

export function AddForm({ onSubmit }) {
  const defaultInputForm = {
    title: "",
    description: "",
    price: "",
    discount: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
  };
  const [inputForm, setInputForm] = useState(defaultInputForm);
  const addFormElement = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    formValidate(formProps)
      ? onSubmit(formProps)
      : alert("Insert all necessary info");
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
    if(isNaN(price) ||
      isNaN(discount) ||
      isNaN(rating) ||
      isNaN(stock)){
        alert("Enter numbers for price, discount, rating, stock")
      }
    return false;
  }

  return (
    <>
      <form className={styles["form__content"]} onSubmit={addFormElement}>
        <div className={styles["form__content__inputs"]}>
          <input
            className={styles["form__content__inputs__input"]}
            type="text"
            name="title"
            placeholder="Enter please title"
            value={inputForm.title}
            onChange={(e) =>
              setInputForm({ ...inputForm, title: e.target.value })
            }
          />
          <input
            className={styles["form__content__inputs__input"]}
            type="text"
            name="description"
            placeholder="Enter please description"
            value={inputForm.description}
            onChange={(e) =>
              setInputForm({ ...inputForm, description: e.target.value })
            }
          />
          <input
            className={styles["form__content__inputs__input"]}
            type="text"
            name="price"
            placeholder="Enter please price"
            value={inputForm.price}
            onChange={(e) =>
              setInputForm({ ...inputForm, price: e.target.value })
            }
          />
          <input
            className={styles["form__content__inputs__input"]}
            type="text"
            name="discount"
            placeholder="Enter please discount"
            value={inputForm.discount}
            onChange={(e) =>
              setInputForm({ ...inputForm, discount: e.target.value })
            }
          />
          <input
            className={styles["form__content__inputs__input"]}
            type="text"
            name="rating"
            placeholder="Enter please rating"
            value={inputForm.rating}
            onChange={(e) =>
              setInputForm({ ...inputForm, rating: e.target.value })
            }
          />
          <input
            className={styles["form__content__inputs__input"]}
            type="text"
            name="stock"
            placeholder="Enter please stock"
            value={inputForm.stock}
            onChange={(e) =>
              setInputForm({ ...inputForm, stock: e.target.value })
            }
          />
          <input
            className={styles["form__content__inputs__input"]}
            type="text"
            name="brand"
            placeholder="Enter please brand"
            value={inputForm.brand}
            onChange={(e) =>
              setInputForm({ ...inputForm, brand: e.target.value })
            }
          />
          <input
            className={styles["form__content__inputs__input"]}
            type="text"
            name="category"
            placeholder="Enter please category"
            value={inputForm.category}
            onChange={(e) =>
              setInputForm({ ...inputForm, category: e.target.value })
            }
          />
        </div>

        <OperationButton
          onAction={() => {
            setInputForm(defaultInputForm);
          }}
          text="Add element"
        />
      </form>
    </>
  );
}
