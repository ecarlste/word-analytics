import { useState } from "react";
import StatsContainer from "./StatsContainer";
import Textarea from "./Textarea";

function Container() {
  const [text, setText] = useState("");

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <StatsContainer text={text} />
    </main>
  );
}

export default Container;
