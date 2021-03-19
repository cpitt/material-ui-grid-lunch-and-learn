// import { Typography } from "@material-ui/core";
import { Grid, Paper, Container, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: "center",
    padding: theme.spacing(2),
  },
}));
const Item = () => {
  const classes = useStyles();
  return <Paper className={classes.paper}>Item</Paper>;
};
export default function GridExample() {
  return (
    <img src="https://media.giphy.com/media/H6JdkRnhXQaImiCYp2/giphy.gif" />
  );
}
