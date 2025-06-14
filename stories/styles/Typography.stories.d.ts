import { Meta, StoryObj } from '@storybook/react-vite';
import { ReactNode } from '../../../node_modules/react';
declare const Typography: ({ children, className, }: {
    children: ReactNode;
    className: string;
}) => import("react/jsx-runtime").JSX.Element;
declare const meta: Meta<typeof Typography>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Large: Story;
export declare const Medium: Story;
export declare const Small: Story;
export declare const InactiveColor: Story;
export declare const DigitsDefault: Story;
export declare const DigitsMedium: Story;
export declare const DigitsLarge: Story;
