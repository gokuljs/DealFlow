import type { Meta, StoryObj } from '@storybook/react';
import ToggleButton from '../app/(main)/_components/toggleButton';

const meta: Meta<typeof ToggleButton> = {
    component: ToggleButton,
    argTypes: {
        themeColor: { control: 'color' },
        initialValue: { control: 'boolean' }
    }
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const ToggleButtonComponent: Story = {
    render: (args) => <ToggleButton {...args} />,
    args: {
        themeColor: '#C655CE',
        initialValue: true,
        onChange: () => {}
    }
};
