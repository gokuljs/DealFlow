import type { Meta, StoryObj } from '@storybook/react';
import Navbar from '../../app/(main)/_components/Navbar';

const meta: Meta<typeof Navbar> = {
    component: Navbar,
    argTypes: {
        heading: { control: 'text' }
    }
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const NavBarComponent: Story = {
    render: (args) => <Navbar {...args} />,
    args: {
        heading: 'Company Profile' // Default value for heading
    }
};
