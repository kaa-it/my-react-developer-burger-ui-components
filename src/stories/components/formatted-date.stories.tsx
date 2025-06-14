import type { Meta, StoryObj } from "@storybook/react-vite";
import {FormattedDate} from "../../lib";

const meta: Meta<typeof FormattedDate> = {
    title: "Components/FormattedDate",
    component: FormattedDate,
} satisfies Meta<typeof FormattedDate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DateFromString: Story = {
    name: "Date from string",
    render: () => {
        const dateFromServer = '2022-10-10T17:33:32.877Z'
        return <FormattedDate date={new Date(dateFromServer)} />
    }
};

export const Today: Story = {
    render: () => {
        const today = new Date()
        return (
            <FormattedDate
                date={
                    new Date(
                        today.getFullYear(),
                        today.getMonth(),
                        today.getDate(),
                        today.getHours(),
                        today.getMinutes() - 1,
                        0,
                    )
                }
            />
        )
    }
};

export const Yesterday: Story = {
    render: () => {
        const today = new Date()
        const yesterday = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() - 1,
            today.getHours(),
            today.getMinutes() - 1,
            0,
        )
        return (
            <FormattedDate date={yesterday} />
        );
    }
};

export const FiveDaysAgo: Story = {
    name: "5 days ago",
    render: () => {
        const today = new Date()
        const fiveDaysAgo = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() - 5,
            today.getHours(),
            today.getMinutes() - 1,
            0,
        )
        return (
            <FormattedDate date={fiveDaysAgo} />
        );
    }
};

