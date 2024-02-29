import Button from "@mui/material/Button";
import { TextField, Container, Grid } from "@mui/material";
import { useFieldArray, useForm } from "react-hook-form";
import styles from "./NewForm.module.css";
export default function NewForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm({
      defaultValues:{
        additionalInfo: [{skills: '', hobbies: ''}]
      }
  });

  const { fields, append, remove } = useFieldArray(
    {
      name: "additionalInfo",
      control,
    }
  );
  return (
    <Container maxWidth="sm" style={{ marginTop: "20px" }}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Grid container spacing={2}>
          <TextField
            sx={{ marginBottom: "10px" }}
            {...register("name", { required: "Put your name please" })}
            fullWidth
            label="name"
            className={styles.formInput}
          />
          <p className={styles.error__input}>{errors.name?.message}</p>
          <TextField
            {...register("email", { required: "Put your email please" })}
            sx={{ marginBottom: "10px" }}
            fullWidth
            label="email"
            className={styles.formInput}
          />
          <p className={styles.error__input}>{errors.email?.message}</p>
          <TextField
            {...register("password", {
              required: "Put your password please",
              minLength: {
                value: 10,
                message: "The min length is 10",
              },
            })}
            sx={{ marginBottom: "10px" }}
            fullWidth
            label="password"
            type="password"
          />
          <p className={styles.error__input}>{errors.password?.message}</p>
          <h3>Additional fields (optional)</h3>
          {fields.map((field, index) => {
            return (
              <Grid container spacing={2} alignItems="flex-end" key={field.id} >
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
                <Grid item xs={12} className={styles.btn__remove__grid}>
                  <Button variant="contained" onClick={() => remove(index)} >
                    Remove
                  </Button>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
         <Button variant="contained" onClick={() => append()} className={styles.btn__append__grid}>
          Append
        </Button>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </Container>
  );
}
