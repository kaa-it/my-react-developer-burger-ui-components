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
    render: ({value, placeholder, isIcon}) => {
        const [data, setData] = useState(value)
        const onChange = (e:  ChangeEvent<HTMLInputElement>)  => {
            setData(e.target.value)
        }

        return (
            <EmailInput
                onChange={onChange}
                value={data}
                name={'email'}
                placeholder={placeholder}
                isIcon={isIcon}
            />
        );
    },
    args: {
        value: 'bob@example.com',
        placeholder: 'Логин',
        isIcon: true
    }
};

export const  WithoutIcon: Story = {
    render: ({value, isIcon}) => {
        const [data, setData] = useState(value)
        const onChange = (e:  ChangeEvent<HTMLInputElement>)  => {
            setData(e.target.value)
        }

        return (
            <EmailInput
                onChange={onChange}
                value={data}
                name={'email'}
                isIcon={isIcon}
            />
        );
    },
    args: {
        value: 'bob@example.com',
        isIcon: false
    }
};