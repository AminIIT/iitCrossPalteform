import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react'
import {  } from 'react-native'
import AppNextButton from './AppNextButton';
const AppNextButtonMeta: ComponentMeta<typeof AppNextButton> = {
    title: "AppNextButton",
    component: AppNextButton,

  args: {
    backgroundColor:'red',
    textColor:'#ffffff',
    borderRadius:'10',
    type:'button',
    text:'hello',
  },

  };

export default AppNextButtonMeta;

type AppNextButtonBackground   = ComponentStory<typeof AppNextButton>;

export const ButtonWithBackground: AppNextButtonBackground  = (args) => (<AppNextButton{...args} />);
export const ButtonLink: AppNextButtonBackground  = (args) => <AppNextButton{...args} />;
ButtonLink.args = {...ButtonWithBackground.args, type: "link",textColor:"#00000"}

ButtonWithBackground.args={...ButtonWithBackground.args,borderRadius:"10",textColor:"#000000",type:"button"}
