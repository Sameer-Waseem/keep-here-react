import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const NewCard = () => {
  const initialValues = {
    title: "",
    description: "",
  };

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    handleReset,
  } = useFormik({
    initialValues,
    validationSchema: cardSchema,
    onSubmit: (value, acttion) => {
      console.log(value);
      acttion.resetForm();
    },
  });

  return (
    <Box margin={"16px"}>
      <Button
        startIcon={<ArrowBackIcon />}
        component={Link}
        to={"/cards"}
        variant="outlined"
      >
        Back
      </Button>

      <Box margin={"24px 0"}>
        <InputLabel>Title</InputLabel>
        <TextField
          fullWidth
          id="title"
          margin="normal"
          name="title"
          placeholder="Title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors?.title && touched?.title && (
          <Typography variant="caption" color={"red"}>
            {errors.title}
          </Typography>
        )}

        <InputLabel>Description</InputLabel>
        <TextField
          fullWidth
          id="description"
          margin="normal"
          name="description"
          placeholder="Description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors?.description && touched?.description && (
          <Typography variant="caption" color={"red"}>
            {errors.description}
          </Typography>
        )}
      </Box>

      <Button
        variant="contained"
        sx={{ margin: "0 7px" }}
        onClick={() => handleSubmit()}
      >
        Save
      </Button>

      <Button variant="outlined" sx={{ margin: "0 7px" }} onClick={handleReset}>
        Reset
      </Button>
    </Box>
  );
};

const cardSchema = Yup.object({
  title: Yup.string().min(3).max(4).required("Please enter title."),
  description: Yup.string()
    .min(3)
    .max(1024)
    .required("Please enter description."),
});

export default NewCard;
