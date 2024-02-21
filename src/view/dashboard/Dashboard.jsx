import { memo } from "react";
import { Container, Grid } from "@mui/material";

// // static import
import Counter from "../../components/counter/Counter";
import UserForm from "../../components/userData/UserForm";
import TextEditor from "../../components/textEditor/TextEditor";

function Dashboard() {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        justifyContent="space-between"
        mb={{ xs: 5, md: 0 }}
        mt={3}
        rowGap={2}
      >
        <Grid item xs={12} md={6}>
          <Counter />
        </Grid>
        <Grid item xs={12} md={5.5}>
          <UserForm />
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between" my={3}>
        <Grid item xs={12}>
          <TextEditor />
        </Grid>
      </Grid>
    </Container>
  );
}

export default memo(Dashboard);
