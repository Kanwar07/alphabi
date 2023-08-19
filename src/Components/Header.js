import * as React from "react";
import { AppBar, Box, Typography, Button, Stack, Toolbar } from "@mui/material";
import "./Header.css";
import accenture from "../Components/logo/Accenture.png";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Header() {
  return (
    <>
      <Box>
        <AppBar className="app" position="static">
          <Toolbar>
            <Stack direction="row" sx={{ flexGrow: 1 }} className="parent">
              <Typography className="name">
                <a href="https://www.accenture.com/us-en">
                  <img className="image" src={accenture} alt="Accenture" />
                </a>
              </Typography>
              <Button className="button">
                Insights
                <KeyboardArrowDownIcon />
              </Button>
              <Button className="button1">
                Services
                <KeyboardArrowDownIcon />
              </Button>
              <Button className="button1">
                Industries
                <KeyboardArrowDownIcon />
              </Button>
              <Button className="button1">
                Careers
                <KeyboardArrowDownIcon />
              </Button>
              <Button className="button1">
                About
                <KeyboardArrowDownIcon />
              </Button>
            </Stack>
            <Stack direction="row" className="parent1">
              <Button className="button1">
                <SearchIcon />
              </Button>
              <Button className="button1">
                <LanguageIcon />
                USA
                <KeyboardArrowDownIcon />
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
