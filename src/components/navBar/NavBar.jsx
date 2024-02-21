import React, { useState } from "react";
import { Container, Grid, IconButton, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import LogoutModal from "../profile/LogoutModal";

function NavBar() {
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  return (
    <Container
      maxWidth="xl"
      sx={{
        boxShadow: 1,
        position: "sticky",
        top: "0",
        left: "0",
        zIndex: 2,
        backgroundColor: "#fff",
      }}
    >
      <Grid container justifyContent="space-between" py={1}>
        <Grid item>
          <Typography variant="h6">Navbar</Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={() => setOpenLogoutModal(true)}>
            <LogoutIcon />
          </IconButton>
        </Grid>
      </Grid>
      <LogoutModal
        open={openLogoutModal}
        close={() => setOpenLogoutModal(false)}
      />
    </Container>
  );
}

export default NavBar;
