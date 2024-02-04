import type { Meta, StoryObj } from '@storybook/react';
import AddProfile from '../app/(main)/_components/AddProfile';

const meta: Meta<typeof AddProfile> = {
    component: AddProfile
};

export default meta;
type Story = StoryObj<typeof AddProfile>;

export const AddProfileComponent: Story = {
    render: () => <AddProfile />
};
