import type { Meta, StoryObj } from "@storybook/react-vite";
import {Logo} from "../../lib";

const meta: Meta<typeof Logo> = {
    title: "Components/Logo",
    component: Logo,
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicUsage: Story = {};