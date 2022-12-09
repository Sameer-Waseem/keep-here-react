import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const Home = ({ user }: any) => {
  return (
    <Box display={"grid"} justifyContent={"center"}>
      <Typography
        variant="h2"
        margin={"34px"}
        textTransform={"capitalize"}
        letterSpacing={"0em"}
        fontWeight={700}
      >
        Keep your notes here
      </Typography>

      {user ? (
        <Box display={"grid"} justifyContent={"center"} margin={"24px"}>
          <Button
            component={Link}
            to={"/cards"}
            variant="contained"
            size="large"
            sx={{ width: "200px", display: "flex", margin: "auto" }}
          >
            Your cards
          </Button>

          <Button
            component={Link}
            to={"/logout"}
            variant="outlined"
            sx={{ margin: "36px" }}
          >
            Logout
          </Button>
        </Box>
      ) : (
        <Box display={"inline-flex"} justifyContent={"center"} margin={"24px"}>
          <Button
            component={Link}
            to={"/login"}
            variant="outlined"
            sx={{ margin: "8px" }}
          >
            Sign in
          </Button>

          <Button
            component={Link}
            to={"/sign-up"}
            variant="outlined"
            sx={{ margin: "8px" }}
          >
            Sign Up
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Home;
