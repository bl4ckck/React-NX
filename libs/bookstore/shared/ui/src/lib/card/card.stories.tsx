import { bookFixtureList } from '@react-nx/bookstore/shared/data-access';
import { Story, Meta } from '@storybook/react';
import { Card } from './card';

export default {
  component: Card,
  title: 'Card',
} as Meta;

const Template: Story = (args) => <Card book={bookFixtureList[0]} {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
