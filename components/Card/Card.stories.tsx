import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import {CardIIT} from "../Card/Card";
const MyCardMeta: ComponentMeta<typeof CardIIT> = {
  title: "CardIIT",
  component: CardIIT,
   argTypes:{
   colorButton: {control:{type:"color"}}
},
  args: {
    a:'5',
    b:'hello',
    colorButton:'red'
  },

};

export default MyCardMeta;

type MyCardStory = ComponentStory<typeof CardIIT>;

export const Basic: MyCardStory = (args) => <CardIIT {...args} />;
