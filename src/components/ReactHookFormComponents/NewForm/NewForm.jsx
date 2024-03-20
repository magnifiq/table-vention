import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import {
  TextField,
  Container,
  Grid,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import NewFormInput from "./NewFormInput/NewFormInput.jsx";
import useLocalStorage from "../hooks/useLocalStorage";
import styles from "./NewForm.module.css";

export default function NewForm() {
  const [checked, setChecked] = useState(false);
  const [submittedData, setSubmittedData] = useLocalStorage("submittedData", []);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const onFormSubmit = (data) => {
    setSubmittedData([...submittedData, data]);
    console.log(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      additionalInfo: [{ skills: "", hobbies: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "additionalInfo",
    control,
  });
  return (
    <Container maxWidth="sm" style={{ marginTop: "20px" }}>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Grid container spacing={2}>
          <NewFormInput label="name" register={register} />
          <p className={styles.error__input}>{errors.name?.message}</p>
          <NewFormInput label="email" register={register} />
          <p className={styles.error__input}>{errors.email?.message}</p>
          <NewFormInput
            type="password"
            label="password"
            register={register}
            extraValidation={{
              minLength: {
                value: 10,
                message: "The min length is 10",
              },
            }}
          />
          <p className={styles.error__input}>{errors.password?.message}</p>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Do you want to fill in additional info?"
            className={styles.header_upper}
          />
          {checked && (
            <>
              <h3 className={styles.header_upper}>
                Additional fields (optional)
              </h3>
              <Button
                variant="contained"
                onClick={() => append()}
                sx={{ marginBottom: "10px" }}
              >
                Append
              </Button>

              {fields.map((field, index) => (
                <Grid
                  container
                  spacing={2}
                  alignItems="flex-end"
                  key={field.id}
                >
                  <Grid item xs={12}>
                    <TextField
                      {...register(`additionalInfo.${index}.skills`)}
                      fullWidth
                      label="Skills"
                      style={{ ...styles.formInput }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      {...register(`additionalInfo.${index}.hobbies`)}
                      fullWidth
                      label="Hobbies"
                      style={{ ...styles.formInput }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{ marginBottom: "10px", textAlign: "right" }}
                  >
                    <Button variant="contained" onClick={() => remove(index)}>
                      Remove
                    </Button>
                  </Grid>
                </Grid>
              ))}
            </>
          )}
        </Grid>
        <Grid container justifyContent="center">
          <Button type="submit" variant="contained" color="success">
            Submit
          </Button>
        </Grid>
      </form>
    </Container>
  );
}
