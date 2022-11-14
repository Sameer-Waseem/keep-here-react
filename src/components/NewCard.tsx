import { Box, Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const NewCard = () => {
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
      <Typography>Hey</Typography>
    </Box>
  );
};

export default NewCard;
