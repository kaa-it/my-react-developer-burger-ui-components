import { Meta, StoryObj } from '@storybook/react-vite';
import { Counter } from '../../lib';
declare const meta: Meta<typeof Counter>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Small: Story;
