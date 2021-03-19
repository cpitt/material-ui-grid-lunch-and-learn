import LearningSeriesIntro from "./LearningSeriesIntro";
import TopicIntro from "./TopicIntro";
import WhatQuote from "./WhatQuote";
import WhatOverview from "./WhatOverview";
import WhatExample from "./WhatExample";
import WhenToUse from "./WhenToUse";
import HowToUse from "./HowToUse";
import QA from "./QA";
export default function Slides() {
  return (
    <>
      <LearningSeriesIntro />
      <TopicIntro />
      <WhatQuote />
      <WhatExample />
      <WhatOverview />
      <WhenToUse />
      <HowToUse />
      <QA />
    </>
  );
}
