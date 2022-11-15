import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const NoteCard = () => {
  return (
    <Box display={"inline-flex"}>
      <CardActionArea component={Link} to={"/new-card"}>
        <CustomizedCard>
          <CardHeader title="New Note" subheader="I'll keep it here!" />
          <Divider />
          <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            <AddBoxIcon sx={{ fontSize: "250px", color: "rgba(0,0,0,0.10)" }} />
          </CardContent>
        </CustomizedCard>
      </CardActionArea>

      <CardActionArea>
        <CustomizedCard>
          <CardHeader
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <Divider />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
        </CustomizedCard>
      </CardActionArea>
    </Box>
  );
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
