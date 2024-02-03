import type { Meta, StoryObj } from '@storybook/react';
import Navbar from '../app/(main)/_components/Navbar';

const meta: Meta<typeof Navbar> = {
    component: Navbar
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const NavBarComponent: Story = {
    render: () => <Navbar heading='Company profile' />
};
