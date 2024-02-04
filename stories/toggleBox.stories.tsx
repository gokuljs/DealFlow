import type { Meta, StoryObj } from '@storybook/react';
import ToggleBox from '../app/(main)/_components/ToggleBox';

const meta: Meta<typeof ToggleBox> = {
    component: ToggleBox,
    argTypes: {
        themeColor: { control: 'color' },
        name: { control: 'text' },
        value: { control: 'boolean' }
    }
};

export default meta;
type Story = StoryObj<typeof ToggleBox>;

export const ToggleButtonComponent: Story = {
    render: (args) => <ToggleBox {...args} />,
    args: {
        themeColor: '#C655CE',
        onChange: () => {},
        name: 'Display company name',
        value: true
    }
};
