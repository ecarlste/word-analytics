import { Dispatch, SetStateAction, useState } from "react";
import Warning from "./Warning";

type TextareaProps = {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
};

function Textarea({ text, setText }: TextareaProps) {
  const [warningText, setWarningText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;

    if (newText.includes("<script>")) {
      setWarningText(
        "Warning: <script> tags are not allowed in the input text."
      );
      setText(newText.replace(/<script>/g, ""));
    } else if (newText.includes("@")) {
      setWarningText(
        "Warning: The '@' character is not allowed in the input text."
      );
      setText(newText.replace(/@/g, ""));
    } else {
      setWarningText("");
      setText(newText);
    }
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter the text you want analyzed..."
        spellCheck="false"
      />
      <Warning warningText={warningText} />
    </div>
  );
}

export default Textarea;
