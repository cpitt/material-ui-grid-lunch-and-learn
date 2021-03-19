import { Deck, FlexBox, Box, Progress, FullScreen } from "spectacle";
import Slides from "./Slides";

export default function Presentation() {
  return (
    <Deck
      template={() => (
        <FlexBox
          justifyContent="space-between"
          position="absolute"
          bottom={0}
          width={1}
        >
          <Box padding="0 1em">
            <FullScreen />
          </Box>
          <Box padding="1em">
            <Progress />
          </Box>
        </FlexBox>
      )}
    >
      <Slides />
    </Deck>
  );
}
