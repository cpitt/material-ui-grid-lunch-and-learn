// import { Typography } from "@material-ui/core";
import { Grid, TextField } from "@material-ui/core";
import { useState } from "react";
import { Slide, Heading, FlexBox, Notes, CodePane } from "spectacle";
import GridExample from "./Components/GridExample";
export default function SlideWhatExample() {
  const [spacing, setSpacing] = useState(2);
  const [xs, setXs] = useState(1);
  const [itemCount, setItemCount] = useState(12);
  return (
    <Slide>
      <Heading>Material-ui Grids: What Example</Heading>
      <FlexBox backgroundColor="lightgrey" p="14px">
        <GridExample spacing={spacing} xs={xs} itemCount={itemCount} />
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
          <Grid item xs>
            <TextField
              fullWidth
              label="spacing"
              type="number"
              value={spacing}
              InputProps={{ inputProps: { min: 0, max: 10 } }}
              onChange={(e) => setSpacing(e.currentTarget.value)}
            />
          </Grid>
          <Grid item xs>
            <TextField
              fullWidth
              label="xs"
              type="number"
              value={xs}
              InputProps={{ inputProps: { min: 1, max: 12 } }}
              onChange={(e) => setXs(e.currentTarget.value)}
            />
          </Grid>
          <Grid item xs>
            <TextField
              fullWidth
              label="Items"
              type="number"
              value={itemCount}
              InputProps={{ inputProps: { min: 1, max: 12 } }}
              onChange={(e) => setItemCount(parseInt(e.currentTarget.value))}
            />
          </Grid>
        </Grid>
      </FlexBox>
    </Slide>
  );
}
