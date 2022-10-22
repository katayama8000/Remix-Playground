import { useState } from "react";
import { RichTextEditor } from "@mantine/rte";
import { Button } from "@mantine/core";

const initialValue =
  "<p>Your initial <b>html value</b> or an empty string to init editor without value</p>";

const CodeEditor = () => {
  const [value, setValue] = useState(initialValue);
  return (
    <div>
      <RichTextEditor
        value={value}
        onChange={setValue}
        id="rte"
        controls={[["codeBlock"]]}
        radius="md"
        sx={{ height: 400 }}
      />
      <Button
        onClick={() => {
          console.log(value);
        }}
      >
        button
      </Button>
    </div>
  );
};

export default CodeEditor;
