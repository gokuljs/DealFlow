import type { Meta, StoryObj } from '@storybook/react';
import SideBarMenuBtn, {
    Options
} from '../..//app/(main)/_components/SideBarMenuBtn';

const meta: Meta<typeof SideBarMenuBtn> = {
    component: SideBarMenuBtn,
    argTypes: {
        isActive: { control: 'boolean' },
        image: { control: 'text' },
        name: { control: 'text' },
        // Assuming Options is an object, you might want to use an object control or disable it
        options: {
            control: { type: 'select', options: Object.values(Options) },
            defaultValue: Options.OPTIONS, // Provide a default option from the enum
            description: 'Select an option'
        },
        isAvatar: { control: 'boolean' }
    }
};

export default meta;
type Story = StoryObj<typeof SideBarMenuBtn>;

export const SideBarMenuButton: Story = {
    render: (args) => <SideBarMenuBtn {...args} />,
    args: {
        isActive: true,
        image: '/Avatar.svg',
        name: 'Dealflow',
        options: Options.OPTIONS,
        isAvatar: false
    }
};
