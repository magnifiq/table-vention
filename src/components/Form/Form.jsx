/* eslint-disable react/prop-types */
import { OperationButton } from "../OperationButton/OperationButton";
import { TextField, Container, Grid } from "@mui/material";
import propTypes from "prop-types";
import FORM_FIELDS from "./formFields.js";
import useFormLogic from "../../hooks/useFormLogic";

export const Form = ({
  flagEdit = false,
  onSubmit,
  onEdit,
  defaultInputForm,
  textButton,
  style
}) => {
  const { inputForm, id, addFormElement, editItem, handleChange } =
    useFormLogic(onSubmit, onEdit, defaultInputForm);

  const handleSubmit = (e) => {
    flagEdit ? editItem(id, e) : addFormElement(e);
  };
  return (
    <Container maxWidth="sm" style={style}>
      <form onSubmit={handleSubmit}>
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
  textButton: propTypes.string,
  defaultInputForm: propTypes.object,
};

Form.defaultProps = {
  style: { marginTop: "20px" },
};
