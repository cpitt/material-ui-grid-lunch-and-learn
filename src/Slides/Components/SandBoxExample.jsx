// import { Typography } from "@material-ui/core";
import { Paper, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: "center",
    padding: theme.spacing(2),
  },
  frame: {
    width: "100%",
    height: "100%",
    border: 0,
  },
}));

const Item = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} {...props}>
      {children || "Item"}
    </Paper>
  );
};
export default function GridExample() {
  return (
    <>
      <Item>
        <img src="https://media.giphy.com/media/H6JdkRnhXQaImiCYp2/giphy.gif" />
      </Item>
    </>
  );
}
