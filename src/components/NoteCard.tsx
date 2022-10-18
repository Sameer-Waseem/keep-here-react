import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Header from "./Header";
import { useState } from "react";
import { Divider, Grid } from "@mui/material";

const ITEM_HEIGHT = 48;
const options = ["Edit", "Delete"];

const NoteCard = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container>
      <Header />

      <Grid item xs={12} sm={6} md={4} margin={"15px"}>
        <Card
          sx={{
            height: 375,
            boxShadow:
              "0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 12%), 0px 1px 3px rgb(0 0 0 / 20%)",
          }}
        >
          <CardActionArea>
            <CardHeader title="New Note" subheader="I'll keep it here!" />
            <Divider />
            <CardContent sx={{ display: "flex", justifyContent: "center" }}>
              <AddBoxIcon
                sx={{ fontSize: "250px", color: "rgba(0,0,0,0.10)" }}
              />
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} margin={"15px"}>
        <CardActionArea>
          <Card
            sx={{
              height: 375,
              boxShadow:
                "0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 12%), 0px 1px 3px rgb(0 0 0 / 20%)",
            }}
          >
            <CardHeader
              action={
                <>
                  <IconButton
                    aria-label="settings"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem
                        key={option}
                        selected={option === "Pyxis"}
                        onClick={handleClose}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              }
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
          </Card>
        </CardActionArea>
      </Grid>
    </Grid>
  );
};

export default NoteCard;
