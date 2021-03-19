// import { Typography } from "@material-ui/core";
import { Slide, Heading, FlexBox, Notes } from "spectacle";
import SandBoxExample from "./Components/SandBoxExample";
export default function SlideWhat() {
  return (
    <Slide>
      <Heading>Material-ui Grids: How</Heading>
      <FlexBox backgroundColor="lightgrey" height="100%" p="16px">
        <SandBoxExample />
      </FlexBox>
      <Notes>
        <ul>
          <li>Containers</li>
          <ul>
            <li>Handle Spacing</li>
            <li>Every Grid needs atleast one container</li>
          </ul>
          <li>Items</li>
          <ul>
            <li>Items can also be containers</li>
            <li>breakpoint props </li>
            <ul>
              <li>
                defines the number of columns the item occupies on each
                breakpoint, Overridden in priority
              </li>
              <li>
                define the number of columns the item occupies on each
                breakpoint, and wider screens if not over ridden
              </li>
              <li>if true will fill space left over from other items</li>
            </ul>
            <li>Other Breakpoint methods</li>
            <ul>
              <li>theme.breakpoint in makeStyles</li>
              <li>useTheme and useMediaQuery</li>
            </ul>
          </ul>
        </ul>
      </Notes>
    </Slide>
  );
}
