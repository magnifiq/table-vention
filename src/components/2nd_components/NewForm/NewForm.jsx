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
            {...register("name")}
            fullWidth
            label="name"
            className={styles.formInput}
          />
          <TextField
            {...register("email")}
            sx={{ marginBottom: "10px" }}
            fullWidth
            label="email"
            className={styles.formInput}
          />
          <TextField
            {...register("password")}
            sx={{ marginBottom: "10px" }}
            fullWidth
            label="password"
            type="password"
          />
        </Grid>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </Container>
  );
}
