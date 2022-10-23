import React from "react";
import dynamic from "next/dynamic";
import {
  Button,
  Container,
  Grid,
  Select,
  Space,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useState } from "react";
const CodeEditor = dynamic(() => import("./codeEditor"), { ssr: false });
const Index = () => {
  const [uilibrary, setUilibrary] = useState("");

  return (
    <Container size="lg">
      <Space h="xl" />
      <Grid>
        <Grid.Col span={9}>
          <CodeEditor />
        </Grid.Col>
        <Grid.Col span={3}>
          <div>
            <TextInput
              placeholder="Title"
              label="Title"
              sx={{ marginBottom: 8 }}
            />
            <Select
              label="UI library whitch you use"
              placeholder="Pick one"
              searchable
              onSearchChange={setUilibrary}
              searchValue={uilibrary}
              nothingFound="No options"
              data={["Chakra UI", "Mantine", "Material UI", "Nothing"]}
              sx={{ marginBottom: 8 }}
            />
            <Textarea
              label="Autosize with 4 rows max"
              placeholder="Autosize with 4 rows max"
              autosize
              minRows={2}
              maxRows={4}
              sx={{ marginBottom: 8 }}
            />
            <Button
              fullWidth
              sx={{
                backgroundColor: "#f5a623",
                color: "red",
                "&:hover": {
                  backgroundColor: "yellow",
                  color: "blue",
                },
              }}
            >
              送信
            </Button>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Index;
