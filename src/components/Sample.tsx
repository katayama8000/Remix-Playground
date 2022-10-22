import React from "react";
import { Button } from "@mantine/core";
type Props = {
  child: string;
};
export const Sample: React.FC<Props> = ({ child }) => {
  return (
    <div>
      <div className="text-green-500">{child}</div>
      <Button className="m-3">Hello Button</Button>
      <Button className="m-3">Hello Button</Button>
    </div>
  );
};
