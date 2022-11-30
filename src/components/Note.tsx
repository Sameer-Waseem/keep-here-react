import {
  Box,
  Button,
  Container,
  InputLabel,
  styled,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { noteEndpoint } from "./EndPoint/endPoint";

const Note = ({ user }: any) => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [note, setNote] = useState<any>();
  const [initialValues, setInitialValues] = useState<any>({});

  const { values, errors, touched, handleSubmit, handleChange, handleReset } =
    useFormik({
      initialValues,
      validationSchema: cardSchema,
      enableReinitialize: true,
      onSubmit: async (value, action) => {
        const response = await axios.post(noteEndpoint, {
          title: value?.title,
          description: value?.description,
          user_id: user?.id,
        });

        action.resetForm();
      },
    });

  const getNote = useCallback(async () => {
    const { data } = await axios.get(`${noteEndpoint}/${id}`);

    setNote(data?.note);
    setInitialValues(data?.note);
  }, []);

  useEffect(() => {
    getNote();
  }, []);

  console.log("errors:", errors);

  if (!note && !pathname.includes("new-note")) {
    return (
      <CircularProgress
        sx={{ position: "absolute", top: "50%", left: "50%" }}
      />
    );
  }

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
              {/* {errors.title} */}
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
              {/* {errors.description} */}
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
