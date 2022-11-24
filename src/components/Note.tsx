import {
  Box,
  Button,
  Container,
  InputLabel,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect } from "react";

const Note = () => {
  const initialValues = {
    title: "",
    description: "",
  };

  const { values, errors, touched, handleSubmit, handleChange, handleReset } =
    useFormik({
      initialValues,
      validationSchema: cardSchema,
      onSubmit: (value, action) => {
        console.log(value);
        action.resetForm();
      },
    });

  return (
    <Container>
      <Box margin={"16px"}>
        <Button
          startIcon={<ArrowBackIcon />}
          component={Link}
          to={"/cards"}
          variant="outlined"
        >
          Back
        </Button>

        <NoteBox>
          <InputLabel>Title</InputLabel>
          <TextField
            fullWidth
            id="title"
            margin="normal"
            name="title"
            placeholder="Title"
            value={values.title}
            onChange={handleChange}
            InputProps={{ style: { backgroundColor: "#FFFFFF" } }}
          />
          {errors?.title && touched?.title && (
            <Typography variant="caption" color={"red"}>
              {errors.title}
            </Typography>
          )}

          <InputLabel>Description</InputLabel>
          <TextField
            fullWidth
            multiline
            id="description"
            margin="normal"
            name="description"
            placeholder="Description"
            value={values.description}
            onChange={handleChange}
            InputProps={{ style: { backgroundColor: "#FFFFFF" } }}
          />
          {errors?.description && touched?.description && (
            <Typography variant="caption" color={"red"}>
              {errors.description}
            </Typography>
          )}
        </NoteBox>

        <Button
          variant="contained"
          sx={{ margin: "0 7px" }}
          onClick={() => handleSubmit()}
        >
          Save
        </Button>

        <Button
          variant="outlined"
          sx={{ margin: "0 7px" }}
          onClick={handleReset}
        >
          Reset
        </Button>
      </Box>
    </Container>
  );
};

const cardSchema = Yup.object({
  title: Yup.string().min(3).max(25).required("Please enter title."),
  description: Yup.string().min(3).required("Please enter description."),
});

const NoteBox = styled(Box)`
  background-color: #f1f5fb;
  margin: 36px 0;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%),
    0 2px 4px -1px rgb(0 0 0 / 20%);
`;

export default Note;
