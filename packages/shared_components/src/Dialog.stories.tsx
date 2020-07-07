import React from "react";
import SharedDialog from "shared_components/Dialog";

export default {
  title: 'Dialog',
  component: SharedDialog,
};

export const DialogStory = () => <SharedDialog />;

DialogStory.story = {
  name: 'Just a dialog',
};
