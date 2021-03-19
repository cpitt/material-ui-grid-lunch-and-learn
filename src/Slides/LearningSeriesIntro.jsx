// import { Typography } from "@material-ui/core";
import { Slide, Heading, FlexBox, Notes } from "spectacle";
export default function SlidePrePres() {
  return (
    <Slide>
      <Heading>Welcome to the Learning Series</Heading>
      <FlexBox>
        <img src="https://memegenerator.net/img/instances/76040251.jpg" />
      </FlexBox>
      <Notes>
        <ul>
          <li>Introduce Learning Series</li>
          <li>
            Topic Link:
            https://iwanttss.atlassian.net/wiki/spaces/NG/pages/1721630784/Learning+Series+AKA+Lunch+Learns
          </li>
          <li>Next Weeks Topic: FluentSms Theme</li>
        </ul>
      </Notes>
    </Slide>
  );
}
