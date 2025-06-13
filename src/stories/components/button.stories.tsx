import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from 'storybook/test';
import {Button} from "../../lib";

const meta: Meta<typeof Button> = {
  title: "Components/Button",		
  component: Button,
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimarySmall: Story = {
  args: {
	type: "primary",
	size: "small",
	children: "Нажми на меня"
  },
};

export const PrimaryMedium: Story = {
  args: {
	type: "primary",
	size: "medium",
	children: "Нажми на меня"
  },
};

export const PrimaryLarge: Story = {
  args: {
	type: "primary",
	size: 'large',
	children: "Нажми на меня"
  },
};

export const SecondarySmall: Story = {
  args: {
	type: "secondary",
	size: "small",
	children: "Нажми на меня"
  },
};

export const SecondaryMedium: Story = {
  args: {
	type: "secondary",
	size: "medium",
	children: "Нажми на меня"
  },
};

export const SecondaryLarge: Story = {
  args: {
	type: "secondary",
	size: "large",
	children: "Нажми на меня"
  },
};
