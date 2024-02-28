import Button from "@mui/material/Button";
import { TextField, Container, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import styles from "./NewForm.module.css"
export default function NewForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
        </Grid>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </Container>
  );
}
