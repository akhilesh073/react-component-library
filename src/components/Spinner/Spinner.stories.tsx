import React from "react";
import { Story, Meta } from "@storybook/react";
import Spinner, { SpinnerProps } from "./Spinner";

export default {
  title: "Components/Spinner",
  component: Spinner,
} as Meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 100,
  color: "blue",
};
