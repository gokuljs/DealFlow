import type { Meta, StoryObj } from '@storybook/react';
import ColorPicker from '../app/(main)/_components/ColorPicker';

const meta: Meta<typeof ColorPicker> = {
    component: ColorPicker
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const ThemePicker: Story = {
    render: () => <ColorPicker />
};
