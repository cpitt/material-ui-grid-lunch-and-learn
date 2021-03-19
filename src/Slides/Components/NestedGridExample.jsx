// import { Typography } from "@material-ui/core";
import { Grid, Paper, Container, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: "center",
    padding: theme.spacing(2),
  },
}));
export default function GridExample() {
  const classes = useStyles();
  const itemCount = 12;
  const spacing = 3;
  const xs = 1;
  return (
    <Grid container spacing={spacing}>
      <Grid item container xs={12} spacing={spacing}>
        {Array.from(new Array(itemCount)).map((_, index) => (
          <Grid item key={index} xs={xs}>
            <Paper className={classes.paper}>{`xs=${xs}`}</Paper>
          </Grid>
        ))}
      </Grid>

      <Grid item container xs={12} spacing={spacing}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>{`xs=${6}`}</Paper>
        </Grid>
        <Grid container item xs={true} spacing={spacing}>
          <Grid item xs={5}>
            <Paper className={classes.paper}>{`xs=${4}`}</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>{`xs=${4}`}</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>{`xs=${4}`}</Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
