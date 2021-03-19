// import { Typography } from "@material-ui/core";
import {
  Slide,
  Heading,
  ListItem,
  UnorderedList,
  Link,
  FlexBox,
  Text,
  Notes,
} from "spectacle";
export default function SlideIntro() {
  return (
    <Slide
      backgroundSize="100%"
      backgroundImage="url('https://material-ui.com/static/logo.png')"
      backgroundOpacity={0.05}
    >
      <Heading>Material-ui Grids</Heading>
      <UnorderedList>
        <ListItem>What?</ListItem>
        <ListItem>When?</ListItem>
        <ListItem>How?</ListItem>
      </UnorderedList>
      <FlexBox alignSelf="flex-end">
        <UnorderedList fontSize="0">
          <ListItem fontSize="24px">Links:</ListItem>
          <ListItem>
            <Link
              href="https://material-ui.com/components/grid/#grid"
              fontSize="24px"
            >
              Material-ui Grid Docs
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://github.com/cpitt/material-ui-grid-lunch-and-learn"
              fontSize="24px"
            >
              This Presentation
            </Link>
          </ListItem>
        </UnorderedList>
      </FlexBox>
      <Notes>
        <ul>
          <li>Links</li>
          <ul>
            <li>https://material-ui.com/components/grid/#grid</li>
            <li>https://github.com/cpitt/material-ui-grid-lunch-and-learn</li>
            <li>
              https://codesandbox.io/s/github/cpitt/material-ui-grid-lunch-and-learn
            </li>
          </ul>
          <li>Overview</li>
          <ul>
            <li>What Is the Grid Component</li>
            <li>When Should I use it</li>
            <li>How Does it work</li>
          </ul>
        </ul>
      </Notes>
    </Slide>
  );
}
