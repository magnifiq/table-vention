import { TextField} from "@mui/material";
import styles from "./NewFormInput.module.css"
import propTypes from "prop-types";
export default function NewFormInput({label, nameInput=label, extraValidation, register, type, style}) {
    let minReq=null
    extraValidation !== null ? minReq = extraValidation.minLength : null;
    return (
    <TextField
     style={style}
      {...register(nameInput, { required: `Put your ${label} please`, minLength: minReq })}
      fullWidth
      label={label}
      className={styles.formInput}
      type={type}
    />
  );
}


NewFormInput.propTypes={
    label: propTypes.string,
    nameInput:  propTypes.string,
    extraValidation: propTypes.object,
    register: propTypes.func,
    type: propTypes.string,
    style: propTypes.object
}

NewFormInput.defaultProps = {
  type: "text",
  extraValidation: null,
  style: { marginBottom: "10px" }
};
