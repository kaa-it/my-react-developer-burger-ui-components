import { Meta, StoryObj } from '@storybook/react-vite';
import { ConstructorElement } from '../../lib';
declare const meta: Meta<typeof ConstructorElement>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Top: Story;
export declare const Normal: Story;
export declare const Bottom: Story;
