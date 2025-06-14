import type {Meta, StoryObj} from "@storybook/react-vite";
import {fn} from "storybook/test";
import {useRef, useState} from "react";
import {Input} from "../../lib";

const meta: Meta<typeof Input> = {
    title: "Components/Input",
    component: Input,
    args: {onChange: fn()},
    argTypes: {
        icon: {
            options: [
                'CurrencyIcon',
                'BurgerIcon',
                'LockIcon',
                'DragIcon',
                'DeleteIcon',
                'ArrowUpIcon',
                'ArrowDownIcon',
                'MenuIcon',
                'CloseIcon',
                'CheckMarkIcon',
                'ListIcon',
                'ProfileIcon',
                'EditIcon',
                'InfoIcon',
                'ShowIcon',
                'HideIcon',
                'LogoutIcon',
                'PlusIcon',
                'RefreshIcon',
            ],
            control: { type: "select" },
        }
    }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicUsage: Story = {
    render: ({value, type, placeholder, error, errorText, icon, size}) => {
        const [data, setData] = useState(value)
        const inputRef = useRef<HTMLInputElement>(null)
        const onIconClick = () => {
            setTimeout(() => inputRef.current!.focus(), 0)
            alert('Icon Click Callback')
        }
        return (
            <Input
                type={type}
                placeholder={placeholder}
                onChange={e => setData(e.target.value)}
                icon={icon}
                value={data}
                name={'name'}
                error={error}
                ref={inputRef}
                onIconClick={onIconClick}
                errorText={errorText}
                size={size}
            />
        )
    },
    args: {
        value: 'value',
        type: 'text',
        placeholder: 'placeholder',
        icon: 'CurrencyIcon',
        error: false,
        errorText: 'Ошибка',
        size: 'default'
    }
}