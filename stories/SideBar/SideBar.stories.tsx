import type { Meta, StoryObj } from '@storybook/react';
import Sidebar from '../../app/(main)/_components/SideBar';

const meta: Meta<typeof Sidebar> = {
    component: Sidebar
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const SideBarComponent: Story = {
    render: () => <Sidebar />
};
