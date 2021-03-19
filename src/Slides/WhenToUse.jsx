// import { Typography } from "@material-ui/core";
import { Slide, Heading, Quote, UnorderedList, ListItem } from "spectacle";
export default function SlideWhat() {
  return (
    <Slide>
      <Heading>Material-ui Grids: When</Heading>
      <UnorderedList>
        <ListItem>Pretty Much Every Layout</ListItem>
        <UnorderedList>
          <ListItem>Pages</ListItem>
          <ListItem>Form</ListItem>
          <ListItem>Cards</ListItem>
        </UnorderedList>
      </UnorderedList>
    </Slide>
  );
}
