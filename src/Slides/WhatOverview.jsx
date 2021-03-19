// import { Typography } from "@material-ui/core";
import {
  Slide,
  Heading,
  Quote,
  UnorderedList,
  ListItem,
  Notes,
} from "spectacle";
export default function SlideWhat() {
  return (
    <Slide>
      <Heading>Material-ui Grids: What</Heading>
      <UnorderedList>
        <ListItem>
          It uses CSS’s Flexible Box module for high flexibility.
        </ListItem>
        <ListItem>
          There are two types of layout: containers and items.
        </ListItem>
        <ListItem>
          Item widths are set in percentages, so they’re always fluid and sized
          relative to their parent element.
        </ListItem>
        <ListItem>
          Items have padding to create the spacing between individual items.
        </ListItem>
        <ListItem>
          There are five grid breakpoints: xs, sm, md, lg, and xl.
        </ListItem>
      </UnorderedList>
      <Notes>
        <ul>
          <li>It's a component - Basically a div with some styling</li>
        </ul>
      </Notes>
    </Slide>
  );
}
