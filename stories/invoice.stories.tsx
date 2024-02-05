import type { Meta, StoryObj } from '@storybook/react';
import Invoice from '../app/(main)/_components/Invoice';

const meta: Meta<typeof Invoice> = {
    component: Invoice
};

export default meta;
type Story = StoryObj<typeof Invoice>;

export const InvoiceComponent: Story = {
    render: () => <Invoice />
};
