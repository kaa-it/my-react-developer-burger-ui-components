import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ReactNode } from "react";

const Typography = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return <div className={className}>{children}</div>;
};

const meta: Meta<typeof Typography> = {
  component: Typography,
  tags: ["!dev", "!autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ className, children }) => (
	<div className={className}>
	  {children}
	</div>
  ),
  args: {
	children: "The quick brown fox jumps over the lazy dog.",
	className: "text text_type_main-default",
  }
};

export const Large: Story = {
  render: ({ className, children }) => (
	<div className={className}>
	  {children}
	</div>
  ),
  args: {
	children: "The quick brown fox jumps over the lazy dog.",
	className: "text text_type_main-large",
  }
};

export const Medium: Story = {
  render: ({ className, children }) => (
	<div className={className}>
	  {children}
	</div>
  ),
  args: {
	children: "The quick brown fox jumps over the lazy dog.",
	className: "text text_type_main-medium",
  }
};

export const Small: Story = {
  render: ({ className, children }) => (
	<div className={className}>
	  {children}
	</div>
  ),
  args: {
	children: "The quick brown fox jumps over the lazy dog.",
	className: "text text_type_main-small",
  }
};

export const InactiveColor: Story = {
  render: ({ className, children }) => (
	<div className={className}>
	  {children}
	</div>
  ),
  args: {
	children: "The quick brown fox jumps over the lazy dog.",
	className: "text text_type_main-default text_color_inactive",
  }
};

export const DigitsDefault: Story = {
  render: ({ className, children }) => (
	<div className={className}>
	  {children}
	</div>
  ),
  args: {
	children: "1234567890",
	className: "text text_type_digits-default",
  }
};

export const DigitsMedium: Story = {
  render: ({ className, children }) => (
	<div className={className}>
	  {children}
	</div>
  ),
  args: {
	children: "1234567890",
	className: "text text_type_digits-medium",
  }
};

export const DigitsLarge: Story = {
  render: ({ className, children }) => (
	<div className={className}>
	  {children}
	</div>
  ),
  args: {
	children: "1234567890",
	className: "text text_type_digits-large",
  }
};