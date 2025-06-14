import { Meta, StoryObj } from '@storybook/react-vite';
import { EmailInput } from '../../lib';
declare const meta: Meta<typeof EmailInput>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const WithIcon: Story;
export declare const WithoutIcon: Story;
