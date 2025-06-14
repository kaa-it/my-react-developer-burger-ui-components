import type { Meta, StoryObj } from "@storybook/react-vite";
import {Counter} from "../../lib";

const meta: Meta<typeof Counter> = {
    title: "Components/Counter",
    component: Counter,
    decorators: [(Story) => (
        <div style={{ margin: "30px" }}>
            <Story />
        </div>
    )]
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        count: 1,
        size: "default",
    },
};

export const Small: Story = {
    args: {
        count: 233,
        size: "small",
    }
}