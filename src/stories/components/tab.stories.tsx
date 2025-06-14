import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tab } from "../../lib";
import {useState} from "react";

const meta: Meta<typeof Tab> = {
    title: "Components/Tab",
    component: Tab,
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicUsage: Story = {
    render: () => {
        const [current, setCurrent] = useState('one')
        return (
            <div style={{ display: 'flex' }}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    One
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Two
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Three
                </Tab>
            </div>
        )
    }
};