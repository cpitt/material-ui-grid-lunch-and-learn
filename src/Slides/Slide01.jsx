// import { Typography } from "@material-ui/core";
import { Slide, Heading, ListItem, UnorderedList } from "spectacle";
export default function Slide01() {
  return (
    <Slide
      backgroundImage="https://material-ui.com/static/logo.png"
      backgroundSize="100%"
    >
      <Heading>Material-ui Grids</Heading>
      <UnorderedList>
        <ListItem>What?</ListItem>
        <ListItem>When?</ListItem>
        <ListItem>How?</ListItem>
      </UnorderedList>
    </Slide>
  );
}
