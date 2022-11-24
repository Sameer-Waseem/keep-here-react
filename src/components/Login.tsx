import { useFormik } from "formik";
import {
  Box,
  Button,
  Container,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import * as Yup from "yup";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues,
    validationSchema: logInSchema,
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    <Container>
      <Box display={"grid"} justifyContent={"center"}>
        <Box margin={"16px 0"} display={"grid"}>
          <InputLabel>Email</InputLabel>
          <TextField
            id="email"
            margin="normal"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            InputProps={{ style: { backgroundColor: "#FFFFFF" } }}
            sx={{ width: "400px" }}
          />
          {errors?.email && touched?.email && (
            <Typography variant="caption" color={"red"}>
              {errors.email}
            </Typography>
          )}

          <InputLabel>Password</InputLabel>
          <TextField
            id="password"
            margin="normal"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            InputProps={{ style: { backgroundColor: "#FFFFFF" } }}
          />
          {errors?.password && touched?.password && (
            <Typography variant="caption" color={"red"}>
              {errors.password}
            </Typography>
          )}
        </Box>

        <Button variant="contained" onClick={() => handleSubmit()}>
          Log In
        </Button>
      </Box>
    </Container>
  );
};

const logInSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default Login;
