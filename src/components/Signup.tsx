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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { registerEndpoint } from "./EndPoint/endPoint";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  password: "",
};

const Signup = () => {
  const navigate = useNavigate();

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: signupSchema,
    onSubmit: async (value) => {
      try {
        const { data } = await axios.post(registerEndpoint, value);

        if (data) {
          localStorage.setItem("token", data.token);
          navigate("/");
          window.location.reload();
        }
      } catch (error) {}
    },
  });

  return (
    <Container>
      <Box display={"grid"} justifyContent={"center"}>
        <Box margin={"16px 0"} display={"grid"}>
          <InputLabel>First Name</InputLabel>
          <TextField
            id="first_name"
            margin="normal"
            name="first_name"
            placeholder="First Name"
            value={values.first_name}
            onChange={handleChange}
            InputProps={{ style: { backgroundColor: "#FFFFFF" } }}
            sx={{ width: "400px" }}
          />
          {errors?.first_name && touched?.first_name && (
            <Typography variant="caption" color={"red"}>
              {errors.first_name}
            </Typography>
          )}

          <InputLabel>Last Name</InputLabel>
          <TextField
            id="last_name"
            margin="normal"
            name="last_name"
            placeholder="Last Name"
            value={values.last_name}
            onChange={handleChange}
            InputProps={{ style: { backgroundColor: "#FFFFFF" } }}
          />
          {errors?.last_name && touched?.last_name && (
            <Typography variant="caption" color={"red"}>
              {errors.last_name}
            </Typography>
          )}

          <InputLabel>Email</InputLabel>
          <TextField
            id="email"
            margin="normal"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            InputProps={{ style: { backgroundColor: "#FFFFFF" } }}
          />
          {errors?.email && touched?.email && (
            <Typography variant="caption" color={"red"}>
              {errors.email}
            </Typography>
          )}

          <InputLabel>Phone</InputLabel>
          <TextField
            id="phone"
            margin="normal"
            name="phone"
            placeholder="Phone"
            value={values.phone}
            onChange={handleChange}
            InputProps={{ style: { backgroundColor: "#FFFFFF" } }}
          />
          {errors?.phone && touched?.phone && (
            <Typography variant="caption" color={"red"}>
              {errors.phone}
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
          Create Account
        </Button>
      </Box>
    </Container>
  );
};

const signupSchema = Yup.object({
  first_name: Yup.string().min(3).max(50).required(),
  last_name: Yup.string().min(3).max(50).required(),
  email: Yup.string().email().lowercase().required(),
  phone: Yup.number().required(),
  password: Yup.string().min(3).max(50).required(),
});

export default Signup;
