import type { Meta, StoryObj } from "@storybook/react-vite";
import {EmailInput} from "../../lib";
import {fn} from "storybook/test";
import {type ChangeEvent, useState} from "react";

const meta: Meta<typeof EmailInput> = {
    title: "Components/EmailInput",
    component: EmailInput,
    args: { onChange: fn() }
} satisfies Meta<typeof EmailInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const  WithIcon: Story = {
    render: () => {
        const [value, setValue] = useState('bob@example.com')
        const onChange = (e:  ChangeEvent<HTMLInputElement>)  => {
            setValue(e.target.value)
        }

        return (
            <EmailInput
                onChange={onChange}
                value={value}
                name={'email'}
                placeholder="Логин"
                isIcon={true}
            />
        );
    }
};

export const WithoutIcon: Story = {
    render: () => {
        const [value, setValue] = useState('bob@example.com')
        const onChange = (e:  ChangeEvent<HTMLInputElement>)  => {
            setValue(e.target.value)
        }

        return (
            <EmailInput
                onChange={onChange}
                value={value}
                name={'email'}
                isIcon={false}
            />
        );
    }
}