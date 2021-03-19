// import { Typography } from "@material-ui/core";
import { Grid, TextField } from "@material-ui/core";
import { useState } from "react";
import { Slide, Heading, FlexBox, Notes, CodePane } from "spectacle";
import GridExample from "./Components/GridExample";
export default function SlideWhatExample() {
  const [spacing, setSpacing] = useState(2);
  const [xs, setXs] = useState(2);
  return (
    <Slide>
      <Heading>Material-ui Grids: What Example</Heading>
      <FlexBox backgroundColor="lightgrey" p="14px">
        <GridExample spacing={spacing} xs={xs} />
      </FlexBox>
      <FlexBox mt="1em">
        <CodePane
          language="javascript"
          theme="twilight"
          highlightRanges={[1, [2, 4]]}
        >{`
            <Grid container spacing={${spacing}}>
                <Grid item xs={${xs}}>
                  <Paper className={classes.paper}>xs=${xs}</Paper>
                </Grid>
                {/** Repeated 12 times */}
            </Grid>

            `}</CodePane>
      </FlexBox>

      <FlexBox backgroundColor="lightblue" mt="14px" p="12px">
        <Grid container spacing="2" alignment>
          <Grid item>
            <TextField
              label="spacing"
              type="number"
              value={spacing}
              onChange={(e) => setSpacing(e.currentTarget.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="xs"
              type="number"
              value={xs}
              min="1"
              onChange={(e) => setXs(e.currentTarget.value)}
            />
          </Grid>
        </Grid>
      </FlexBox>
    </Slide>
  );
}
