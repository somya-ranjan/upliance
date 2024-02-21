import React, { memo, useContext } from "react";
import { Box, Button, Typography } from "@mui/material";

// // static import
import CustomModal from "../custom/Modal/CustomModal";
import { AppContext } from "../../context";

function LogoutModal({ open, close }) {
  // // context state
  const { setIsAuth } = useContext(AppContext);

  const handelLogout = () => {
    localStorage.clear();
    setIsAuth(false);
    window.location.reload();
    close();
  };

  return (
    <CustomModal open={open} onClose={close} label="Logout">
      <Typography component="p" py={1} textAlign="center">
        The action you are going to perform is irreversible. Please confirm! Are
        you sure that you want to logout?
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          columnGap: 3,
          mt: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            display: "block",
            px: 10,
          }}
          onClick={close}
        >
          No
        </Button>
        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            backgroundColor: "red",
            color: "#fff",
            display: "block",
            "&:hover": {
              backgroundColor: "#fff",
              color: "red",
            },
            px: 10,
          }}
          onClick={handelLogout}
        >
          Yes
        </Button>
      </Box>
    </CustomModal>
  );
}

export default memo(LogoutModal);
