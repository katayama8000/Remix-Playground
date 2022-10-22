import React from "react";
import dynamic from "next/dynamic";
import { Container } from "@mantine/core";
const CodeEditor = dynamic(() => import("./codeEditor"), { ssr: false });
const index = () => {
  return (
    <Container size="md">
      <h1>Hooks Factory</h1>
      <CodeEditor />
    </Container>
  );
};

export default index;
