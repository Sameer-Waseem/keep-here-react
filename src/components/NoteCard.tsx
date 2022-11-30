import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, CircularProgress } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useCallback,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { noteEndpoint } from "./EndPoint/endPoint";

interface NoteInterface {
  _id: string;
  title: any;
  description:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}

const NoteCard = () => {
  const [notes, setNotes] = useState<any>([]);

  const getNotes = useCallback(async () => {
    const { data } = await axios.get(noteEndpoint);

    setNotes(data?.notes);
  }, []);

  useEffect(() => {
    getNotes();
  }, []);

  if (!notes || !notes?.length) {
    return (
      <CircularProgress
        sx={{ position: "absolute", top: "50%", left: "50%" }}
      />
    );
  }

  return notes.map((note: NoteInterface) => (
    <Box display={"inline-flex"}>
      <CardActionArea component={Link} to={"/new-note"}>
        <CustomizedCard>
          <CardHeader title="New Note" subheader="I'll keep it here!" />
          <Divider />
          <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            <AddBoxIcon sx={{ fontSize: "250px", color: "rgba(0,0,0,0.10)" }} />
          </CardContent>
        </CustomizedCard>
      </CardActionArea>

      <CardActionArea component={Link} to={`/note/${note._id}`}>
        <CustomizedCard>
          <CardHeader title={note.title} subheader="September 14, 2016" />
          <Divider />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {note.description}
            </Typography>
          </CardContent>
        </CustomizedCard>
      </CardActionArea>
    </Box>
  ));
};

const CustomizedCard = styled(Card)`
  margin: 12px;
  width: 375px;
  height: 375px;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 12%),
    0px 1px 3px rgb(0 0 0 / 20%);

  &:hover {
    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  }
`;

export default NoteCard;
