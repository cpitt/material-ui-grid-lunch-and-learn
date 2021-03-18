// import { Typography } from "@material-ui/core";
import { Slide, Heading, CodePane } from "spectacle";
export default function Slide02() {
  return (
    <Slide
      backgroundImage="https://material-ui.com/static/logo.png"
      backgroundSize="100%"
    >
      <Heading>Material-ui Grids</Heading>
      <CodePane
        language="javascript"
        theme="solarizedlight"
        highlightRanges={[1, 3]}
      >
        {`
      const App = () => (
        <Provider value={client}>
          <Todos />
        </Provider>
      );
      `}
      </CodePane>
    </Slide>
  );
}
