import type { Meta, StoryObj } from "@storybook/react-vite";
import {
    ArrowDownIcon,
    ArrowUpIcon,
    BurgerIcon,
    CheckMarkIcon,
    CloseIcon,
    CurrencyIcon, DeleteIcon,
    DragIcon, EditIcon,
    HideIcon, InfoIcon,
    ListIcon,
    LockIcon, LogoutIcon, MenuIcon, ProfileIcon, ShowIcon
} from "../../lib";

const meta: Meta<typeof CloseIcon> = {
    title: "Components/Icons",
    component: CloseIcon,
    argTypes: {
        type: {
            options: ['primary', 'secondary' ],
            control: { type: 'radio' },
        },
    }

} satisfies Meta<typeof CloseIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    render: ({type}) => {
        return (
            <div>
                <CurrencyIcon type={type} />
                <BurgerIcon type={type} />
                <LockIcon type={type} />
                <DragIcon type={type} />
                <CloseIcon type={type} />
                <CheckMarkIcon type={type} />
                <ListIcon type={type} />
                <ProfileIcon type={type} />
                <EditIcon type={type} />
                <InfoIcon type={type} />
                <ShowIcon type={type} />
                <HideIcon type={type} />
                <LogoutIcon type={type} />
                <DeleteIcon type={type} />
                <ArrowUpIcon type={type} />
                <ArrowDownIcon type={type} />
                <MenuIcon type={type} />
            </div>
        );
    },
    args: {
        type: "primary"
    }
};

export const Secondary: Story = {
    render: ({type}) => {
        return (
            <div>
                <CurrencyIcon type={type} />
                <BurgerIcon type={type} />
                <LockIcon type={type} />
                <DragIcon type={type} />
                <CloseIcon type={type} />
                <CheckMarkIcon type={type} />
                <ListIcon type={type} />
                <ProfileIcon type={type} />
                <EditIcon type={type} />
                <InfoIcon type={type} />
                <ShowIcon type={type} />
                <HideIcon type={type} />
                <LogoutIcon type={type} />
                <DeleteIcon type={type} />
                <ArrowUpIcon type={type} />
                <ArrowDownIcon type={type} />
                <MenuIcon type={type} />
            </div>
        );
    },
    args: {
        type: "secondary"
    }
};

export const Disabled: Story = {
    render: ({type}) => {
        return (
            <div>
                <CurrencyIcon type={type} />
                <BurgerIcon type={type} />
                <LockIcon type={type} />
                <DragIcon type={type} />
                <CloseIcon type={type} />
                <CheckMarkIcon type={type} />
                <ListIcon type={type} />
                <ProfileIcon type={type} />
                <EditIcon type={type} />
                <InfoIcon type={type} />
                <ShowIcon type={type} />
                <HideIcon type={type} />
                <LogoutIcon type={type} />
                <DeleteIcon type={type} />
                <ArrowUpIcon type={type} />
                <ArrowDownIcon type={type} />
                <MenuIcon type={type} />
            </div>
        );
    },
    args: {
        type: "disabled"
    }
};

export const Error: Story = {
    render: ({type}) => {
        return (
            <div>
                <CurrencyIcon type={type} />
                <BurgerIcon type={type} />
                <LockIcon type={type} />
                <DragIcon type={type} />
                <CloseIcon type={type} />
                <CheckMarkIcon type={type} />
                <ListIcon type={type} />
                <ProfileIcon type={type} />
                <EditIcon type={type} />
                <InfoIcon type={type} />
                <ShowIcon type={type} />
                <HideIcon type={type} />
                <LogoutIcon type={type} />
                <DeleteIcon type={type} />
                <ArrowUpIcon type={type} />
                <ArrowDownIcon type={type} />
                <MenuIcon type={type} />
            </div>
        );
    },
    args: {
        type: "error"
    }
};

export const Success: Story = {
    render: ({type}) => {
        return (
            <div>
                <CurrencyIcon type={type} />
                <BurgerIcon type={type} />
                <LockIcon type={type} />
                <DragIcon type={type} />
                <CloseIcon type={type} />
                <CheckMarkIcon type={type} />
                <ListIcon type={type} />
                <ProfileIcon type={type} />
                <EditIcon type={type} />
                <InfoIcon type={type} />
                <ShowIcon type={type} />
                <HideIcon type={type} />
                <LogoutIcon type={type} />
                <DeleteIcon type={type} />
                <ArrowUpIcon type={type} />
                <ArrowDownIcon type={type} />
                <MenuIcon type={type} />
            </div>
        );
    },
    args: {
        type: "success"
    }
};

