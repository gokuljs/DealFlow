import type { Meta, StoryObj } from '@storybook/react';
import NewBadge from '../../app/(main)/_components/NewBadge';

const meta: Meta<typeof NewBadge> = {
    component: NewBadge
};

export default meta;
type Story = StoryObj<typeof NewBadge>;

export const NewBadgeComponent: Story = {
    render: () => <NewBadge />
};
