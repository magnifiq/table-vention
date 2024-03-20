import propTypes from "prop-types";
import { TextField } from "@mui/material";
import styles from "./NewFormInput.module.css";

const NewFormInput = ({
  label,
  nameInput = label,
  extraValidation,
  register,
  type,
  style,
}) => (
  <TextField
    style={style}
    {...register(nameInput, {
      required: `Put your ${label} please`,
      minLength: extraValidation?.minLength,
    })}
    fullWidth
    label={label}
    className={styles.formInput}
    type={type}
  />
);

NewFormInput.propTypes = {
  label: propTypes.string.isRequired,
  nameInput: propTypes.string,
  extraValidation: propTypes.object,
  register: propTypes.func.isRequired,
  type: propTypes.string,
  style: propTypes.object,
};

NewFormInput.defaultProps = {
  type: "text",
  extraValidation: null,
  style: { marginBottom: "10px" },
};

export default NewFormInput;
