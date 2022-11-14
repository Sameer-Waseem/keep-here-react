import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box display={"grid"} justifyContent={"center"}>
      <Typography variant="h2" margin={"34px"} textTransform={"capitalize"}>
        Keep your notes here
      </Typography>

      <Button
        component={Link}
        to={"/cards"}
        variant="contained"
        sx={{ width: "200px", display: "flex", margin: "auto" }}
      >
        Your cards
      </Button>
    </Box>
  );
};

export default Home;
