import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Title, TitleProps } from './';

export default {
  title: 'Example/Title',
  component: Title,
  argTypes: {
    text: { control: 'text' },
  },
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Hello!',
};