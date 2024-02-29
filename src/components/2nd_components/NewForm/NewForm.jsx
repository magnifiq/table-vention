import Button from "@mui/material/Button";
import { TextField, Container, Grid, Checkbox } from "@mui/material";
import { useFieldArray, useForm } from "react-hook-form";
import styles from "./NewForm.module.css";
import NewFormInput from "./NewFormInput.jsx";
import {useState} from "react"
export default function NewForm() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
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
      <form onSubmit={handleSubmit((data) => console.log(data))}>
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
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <h3 className={styles.header_upper}>Additional fields (optional)</h3>
          {fields.map((field, index) => {
            return (
              <Grid container spacing={2} alignItems="flex-end" key={field.id}>
                <Grid item xs={12}>
                  <TextField
                    sx={{ marginBottom: "10px" }}
                    {...register(`additionalInfo.${index}.skills`)}
                    fullWidth
                    label="Skills"
                    className={styles.formInput}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ marginBottom: "10px" }}
                    {...register(`additionalInfo.${index}.hobbies`)}
                    fullWidth
                    label="Hobbies"
                    className={styles.formInput}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  className={styles.btn__remove__grid}
                  sx={{ marginBottom: "10px" }}
                >
                  <Button variant="contained" onClick={() => remove(index)}>
                    Remove
                  </Button>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
        <Button
          variant="contained"
          onClick={() => append()}
          className={styles.btn__append__grid}
          sx={{ marginRight: "10px" }}
        >
          Append
        </Button>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </Container>
  );
}
