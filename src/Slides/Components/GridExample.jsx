// import { Typography } from "@material-ui/core";
import { Grid, Paper, Container, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: "center",
    padding: theme.spacing(2),
  },
}));
export default function GridExample({ spacing = 3, xs = 1, itemCount = 12 }) {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={spacing}>
        {Array.from(new Array(itemCount)).map((_, index) => (
          <Grid item key={index} xs={xs}>
            <Paper className={classes.paper}>{`xs=${xs}`}</Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
