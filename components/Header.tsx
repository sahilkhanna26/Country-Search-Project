import { Box, Button, Typography } from "@mui/material";
import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useStore } from "../store";

const Header = () => {
  const isDarkMode = useStore((state) => state.isDarkMode)
  const toggleDarkMode = useStore((state) => state.toggleDarkMode)
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding:"1rem 2rem",
        backgroundColor: isDarkMode? "#2b3743" : "white",
        boxShadow: "0px 2px 2px 0px lightgrey",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "1.5rem", fontWeight: 700 }}>
        Where do you want to go?
      </Typography>
      <Button onClick={toggleDarkMode}>
        <DarkModeIcon />
        Dark Mode
      </Button>
    </Box>
  );
};

export default Header;
