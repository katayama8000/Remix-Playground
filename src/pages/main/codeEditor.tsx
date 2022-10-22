import { useState } from "react";
import { RichTextEditor } from "@mantine/rte";

const initialValue =
  "<p>Your initial <b>html value</b> or an empty string to init editor without value</p>";

const CodeEditor = () => {
  const [value, onChange] = useState(initialValue);
  return (
    <RichTextEditor
      value={value}
      onChange={onChange}
      id="rte"
      controls={[["codeBlock"]]}
    />
  );
};

export default CodeEditor;
