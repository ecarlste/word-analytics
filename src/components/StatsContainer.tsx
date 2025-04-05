import {
  maxInstagramCharacterCount,
  maxFacebookCharacterCount,
} from "../lib/constants";
import StatDisplay from "./StatDisplay";

type StatsContainerProps = {
  text: string;
};

function StatsContainer({ text }: StatsContainerProps) {
  const wordCount = text ? text.trim().split(/\s+/).length : 0;
  const characterCount = text.length;

  return (
    <section className="stats">
      <StatDisplay statNumber={wordCount} statLabel="Words" />
      <StatDisplay statNumber={characterCount} statLabel="Characters" />
      <StatDisplay
        statNumber={maxInstagramCharacterCount - characterCount}
        statLabel="Instagram"
      />
      <StatDisplay
        statNumber={maxFacebookCharacterCount - characterCount}
        statLabel="Facebook"
      />
    </section>
  );
}

export default StatsContainer;
