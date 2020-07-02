import React from "react";
import SharedButton from "shared_components/Button";

export default {
  title: 'Button',
  component: SharedButton,
};

export const ButtonStory = () => <SharedButton />;

ButtonStory.story = {
  name: 'Just a button',
};
