import type {Meta, StoryObj} from "@storybook/react-vite";
import {PasswordInput} from "../../lib";
import {fn} from "storybook/test";
import {type ChangeEvent, useState} from "react";


const meta: Meta<typeof PasswordInput> = {
    title: "Components/PasswordInput",
    component: PasswordInput,
    args: { onChange: fn() },
    argTypes: {
        icon: {

            options: ["HideIcon", "ShowIcon", "EditIcon"],
            control: { type: "select" },
        }
    }
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: ({value, icon}) => {
        const [data, setData] = useState(value)
        const onChange = (e: ChangeEvent<HTMLInputElement>) => {
            setData(e.target.value)
        }

        return (
            <PasswordInput
                onChange={onChange}
                value={data}
                name={'password'}
                icon={icon}
            />
        );
    },
    args: {
        value: 'password',
        icon: "ShowIcon"
    }
};

export const Edit: Story = {
    render: ({value}) => {
        const [data, setData] = useState(value)
        const onChange = (e: ChangeEvent<HTMLInputElement>) => {
            setData(e.target.value)
        }

        return (
            <PasswordInput
                onChange={onChange}
                value={data}
                name={'password'}
            />
        );
    },
    args: {
        value: 'password',
    }
};