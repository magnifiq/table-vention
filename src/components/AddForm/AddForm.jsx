import styles from "./AddForm.module.css";
import { OperationButton } from "../OperationButton/OperationButton";
export function AddForm() {
  const addFormElement = (e) => {
    e.preventDefault();
    const formData=new FormData(e.target)
    const formProps=Object.fromEntries(formData)
    console.log(formProps)
  };
  return (
    <>
      <form className={styles["form__content"]} onSubmit={addFormElement}>
        <div className={styles["form__content__inputs"]}>
          <input
            className={styles["form__content__inputs__input"]}
            type="text"
            name="title"
            placeholder="Enter please title"
          />
          <input
            className={styles["form__content__inputs__input"]}
            type="text"
            name="description"
            placeholder="Enter please description"
          />
          <input
            className={styles["form__content__inputs__input"]}
            type="number"
            name="price"
            placeholder="Enter please price"
          />
          <input
            className={styles["form__content__inputs__input"]}
            type="number"
            name="discount"
            placeholder="Enter please discount"
          />
          <input
            className={styles["form__content__inputs__input"]}
            type="number"
            name="rating"
            placeholder="Enter please rating"
          />
          <input
            className={styles["form__content__inputs__input"]}
            type="number"
            name="stock"
            placeholder="Enter please stock"
          />
          <input
            className={styles["form__content__inputs__input"]}
            type="text"
            name="brand"
            placeholder="Enter please brand"
          />
          <input
            className={styles["form__content__inputs__input"]}
            type="text"
            name="category"
            placeholder="Enter please category"
          />
        </div>

        <OperationButton
          onAction={()=>{}}
          text="Add element"
        />
      </form>
    </>
  );
}
