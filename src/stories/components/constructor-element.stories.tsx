import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from 'storybook/test';
import {ConstructorElement} from "../../lib";
import bun from "../../assets/images/img.png";

const meta: Meta<typeof ConstructorElement> = {
    title: "Components/ConstructorElement",
    component: ConstructorElement,
    args: { handleClose: fn() },
} satisfies Meta<typeof ConstructorElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
    args: {
        type: 'top',
        isLocked: true,
        text: 'Краторная булка N-200i (верх)',
        price: 200,
        thumbnail: bun
    }
};

export const Normal: Story = {
    args: {
        text: 'Краторная булка N-200i',
        price: 50,
        thumbnail: bun
    }
};

export const Bottom: Story = {
    args: {
        type: 'bottom',
        isLocked: true,
        text: 'Краторная булка N-200i (низ)',
        price: 200,
        thumbnail: bun
    }
};