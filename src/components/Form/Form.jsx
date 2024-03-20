import propTypes from "prop-types";

import { OperationButton } from "../OperationButton/OperationButton";
import { TextField, Container, Grid } from "@mui/material";
import useFormLogic from "./hooks/useFormLogic.jsx";

import FORM_FIELDS from "./constants/formFields.js";
import styles from "./Form.module.css";

export const Form = ({
  flagEdit,
  onSubmit,
  onEdit,
  defaultInputForm,
  textButton,
  style,
}) => {
  const { inputForm, id, addFormElement, editItem, handleChange } =
    useFormLogic(onSubmit, onEdit, defaultInputForm);

  const handleSubmit = (e) => {
    flagEdit ? editItem(id, e) : addFormElement(e);
  };
  return (
    <Container maxWidth="sm" style={style}>
      <form onSubmit={handleSubmit} className={styles.centeredForm}>
        <Grid container spacing={2}>
          {FORM_FIELDS.map((field) => (
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
  textButton: propTypes.string.isRequired,
  defaultInputForm: propTypes.object.isRequired,
  onSubmit: propTypes.func,
  onEdit: propTypes.func,
  style: propTypes.object,
  flagEdit: propTypes.bool,
};

Form.defaultProps = {
  style: { marginTop: "20px" },
  flagEdit: false,
  onSubmit: () => {},
  onEdit: () => {},
};
