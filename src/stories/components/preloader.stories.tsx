import type { Meta, StoryObj } from "@storybook/react-vite";
import {Preloader} from "../../lib";

const meta: Meta<typeof Preloader> = {
    title: "Components/Preloader",
    component: Preloader,
} satisfies Meta<typeof Preloader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicUsage: Story = {};