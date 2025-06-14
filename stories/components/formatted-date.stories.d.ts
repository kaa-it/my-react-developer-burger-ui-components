import { Meta, StoryObj } from '@storybook/react-vite';
import { FormattedDate } from '../../lib';
declare const meta: Meta<typeof FormattedDate>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DateFromString: Story;
export declare const Today: Story;
export declare const Yesterday: Story;
export declare const FiveDaysAgo: Story;
