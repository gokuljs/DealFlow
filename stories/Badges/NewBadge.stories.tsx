import type { Meta, StoryObj } from '@storybook/react';
import NewBadge from '../../app/(main)/_components/NewBadge';

const meta: Meta<typeof NewBadge> = {
    component: NewBadge,
    argTypes: {
        textColor: { control: 'color' },
        backgroundColor: { control: 'color' }
    }
};

export default meta;
type Story = StoryObj<typeof NewBadge>;

export const NewBadgeComponent: Story = {
    render: (args) => {
        return <NewBadge {...args} />;
    },
    args: {
        textColor: '#C655CE',
        backgroundColor: '#f6defa6a'
    }
};
