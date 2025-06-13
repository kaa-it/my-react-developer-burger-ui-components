import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ReactNode } from "react";

const Box = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <div
      style={{ backgroundColor: "#0B5FFF", color: "white" }}
      className={className}
    >
      {children}
    </div>
  );
};

const meta: Meta<typeof Box> = {
  component: Box,
  tags: ["!dev", "!autodocs"],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const P1: Story = {
  render: ({ className, children }) => (
    <div
      style={{ backgroundColor: "#0B5FFF", color: "white" }}
      className={className}
    >
      {children}
    </div>
  ),
  args: {
    children: "padding: 4px (4px × 1 = 4px)",
    className: "p-1",
  },
};

export const P2: Story = {
  render: ({ className, children }) => (
    <div
      style={{ backgroundColor: "#0B5FFF", color: "white" }}
      className={className}
    >
      {children}
    </div>
  ),
  args: {
    children: "padding: 8px (4px × 2 = 8px)",
    className: "p-2",
  },
};

export const P3: Story = {
  render: ({ className, children }) => (
    <div
      style={{ backgroundColor: "#0B5FFF", color: "white" }}
      className={className}
    >
      {children}
    </div>
  ),
  args: {
    children: "padding: 12px (4px × 3 = 12px)",
    className: "p-3",
  },
};

export const P4: Story = {
  render: ({ className, children }) => (
    <div
      style={{ backgroundColor: "#0B5FFF", color: "white" }}
      className={className}
    >
      {children}
    </div>
  ),
  args: {
    children: "padding: 16px (4px × 4 = 16px)",
    className: "p-4",
  },
};

export const P15: Story = {
  render: ({ className, children }) => (
    <div
      style={{ backgroundColor: "#0B5FFF", color: "white" }}
      className={className}
    >
      {children}
    </div>
  ),
  args: {
    children: "padding: 60px (4px ×15 = 60px)",
    className: "p-15",
  },
};

export const POr1: Story = {
  render: ({ className }) => (
    <div
      style={{ backgroundColor: "#0B5FFF", color: "white" }}
      className={className}
    >
      padding-left: 4px (4px × 1 = 4px)
      <br />
      padding-right: 4px (4px × 1 = 4px)
      <br />
      padding-bottom: 4px (4px × 1 = 4px)
      <br />
      padding-top: 4px (4px × 1 = 4px)
    </div>
  ),
  args: {
    className: "pl-1 pr-1 pb-1 pt-1",
  },
};

export const POr2: Story = {
  render: ({ className }) => (
    <div
      style={{ backgroundColor: "#0B5FFF", color: "white" }}
      className={className}
    >
      padding-left: 8px (4px × 2 = 8px)
      <br />
      padding-right: 8px (4px × 2 = 8px)
      <br />
      padding-bottom: 8px (4px × 2 = 8px)
      <br />
      padding-top: 8px (4px × 2 = 8px)
    </div>
  ),
  args: {
    className: "pl-2 pr-2 pb-2 pt-2",
  },
};

export const POr3: Story = {
  render: ({ className }) => (
    <div
      style={{ backgroundColor: "#0B5FFF", color: "white" }}
      className={className}
    >
      padding-left: 12px (4px × 3 = 12px)
      <br />
      padding-right: 12px (4px × 3 = 12px)
      <br />
      padding-bottom: 12px (4px × 3 = 12px)
      <br />
      padding-top: 12px (4px × 3 = 12px)
    </div>
  ),
  args: {
    className: "pl-3 pr-3 pb-3 pt-3",
  },
};

export const POr4: Story = {
  render: ({ className }) => (
    <div
      style={{ backgroundColor: "#0B5FFF", color: "white" }}
      className={className}
    >
      padding-left: 16px (4px × 4 = 16px)
      <br />
      padding-right: 16px (4px × 4 = 16px)
      <br />
      padding-bottom: 16px (4px × 4 = 16px)
      <br />
      padding-top: 16px (4px × 4 = 16px)
    </div>
  ),
  args: {
    className: "pl-4 pr-4 pb-4 pt-4",
  },
};

export const POr5: Story = {
  render: ({ className }) => (
    <div
      style={{ backgroundColor: "#0B5FFF", color: "white" }}
      className={className}
    >
      padding-left: 20px (4px × 5 = 20px)
      <br />
      padding-right: 20px (4px × 5 = 20px)
      <br />
      padding-bottom: 20px (4px × 5 = 20px)
      <br />
      padding-top: 20px (4px × 5 = 20px)
    </div>
  ),
  args: {
    className: "pl-5 pr-5 pb-5 pt-5",
  },
};

export const M1: Story = {
  render: ({ className, children }) => (
    <div
      style={{ backgroundColor: "#0B5FFF", color: "white" }}
      className={className}
    >
      {children}
    </div>
  ),
  args: {
    children: "margin: 4px (4px × 1 = 4px)",
    className: "m-1",
  },
};

export const M2: Story = {
  render: ({ className, children }) => (
    <div
      style={{ backgroundColor: "#0B5FFF", color: "white" }}
      className={className}
    >
      {children}
    </div>
  ),
  args: {
    children: "margin: 8px (4px × 2 = 8px)",
    className: "m-2",
  },
};

export const M3: Story = {
  render: ({ className, children }) => (
    <div
      style={{ backgroundColor: "#0B5FFF", color: "white" }}
      className={className}
    >
      {children}
    </div>
  ),
  args: {
    children: "margin: 12px (4px × 3 = 12px)",
    className: "m-3",
  },
};

export const M4: Story = {
  render: ({ className, children }) => (
    <div
      style={{ backgroundColor: "#0B5FFF", color: "white" }}
      className={className}
    >
      {children}
    </div>
  ),
  args: {
    children: "margin: 16px (4px × 4 = 16px)",
    className: "m-4",
  },
};

export const M15: Story = {
  render: ({ className, children }) => (
    <div
      style={{ backgroundColor: "#0B5FFF", color: "white" }}
      className={className}
    >
      {children}
    </div>
  ),
  args: {
    children: "margin: 60px (4px × 15 = 60px)",
    className: "m-15",
  },
};

export const MOr1: Story = {
  render: ({ className }) => (
    <div
      style={{ backgroundColor: "#0B5FFF", color: "white" }}
      className={className}
    >
      margin-left: 4px (4px × 1 = 4px)
      <br />
      margin-right: 4px (4px × 1 = 4px)
      <br />
      margin-bottom: 4px (4px × 1 = 4px)
      <br />
      margin-top: 4px (4px × 1 = 4px)
    </div>
  ),
  args: {
    className: "ml-1 mr-1 mb-1 mt-1",
  },
};

export const MOr2: Story = {
  render: ({ className }) => (
    <div
      style={{ backgroundColor: "#0B5FFF", color: "white" }}
      className={className}
    >
      margin-left: 8px (4px × 2 = 8px)
      <br />
      margin-right: 8px (4px × 2 = 8px)
      <br />
      margin-bottom: 8px (4px × 2 = 8px)
      <br />
      margin-top: 8px (4px × 2 = 8px)
    </div>
  ),
  args: {
    className: "ml-2 mr-2 mb-2 mt-2",
  },
};

export const MOr3: Story = {
  render: ({ className }) => (
    <div
      style={{ backgroundColor: "#0B5FFF", color: "white" }}
      className={className}
    >
      margin-left: 12px (4px × 3 = 12px)
      <br />
      margin-right: 12px (4px × 3 = 12px)
      <br />
      margin-bottom: 12px (4px × 3 = 12px)
      <br />
      margin-top: 12px (4px × 3 = 12px)
    </div>
  ),
  args: {
    className: "ml-3 mr-3 mb-3 mt-3",
  },
};

export const MOr4: Story = {
  render: ({ className }) => (
    <div
      style={{ backgroundColor: "#0B5FFF", color: "white" }}
      className={className}
    >
      margin-left: 16px (4px × 4 = 16px)
      <br />
      margin-right: 16px (4px × 4 = 16px)
      <br />
      margin-bottom: 16px (4px × 4 = 16px)
      <br />
      margin-top: 16px (4px × 4 = 16px)
    </div>
  ),
  args: {
    className: "ml-4 mr-4 mb-4 mt-4",
  },
};

export const MOr5: Story = {
  render: ({ className }) => (
    <div
      style={{ backgroundColor: "#0B5FFF", color: "white" }}
      className={className}
    >
      margin-left: 20px (4px × 5 = 20px)
      <br />
      margin-right: 20px (4px × 5 = 20px)
      <br />
      margin-bottom: 20px (4px × 5 = 20px)
      <br />
      margin-top: 20px (4px × 5 = 20px)
    </div>
  ),
  args: {
    className: "ml-5 mr-5 mb-5 mt-5",
  },
};

export const Combine: Story = {
  render: ({ className }) => (
    <div
      style={{ backgroundColor: "#0B5FFF", color: "white" }}
      className={className}
    >
      margin-right: 8px (4px × 2 = 8px)
      <br />
      padding-left: 12px (4px × 3 = 12px)
      <br />
      padding-top: 8px (4px × 2 = 8px)
      <br />
      margin-top: 60px (4px × 15 = 60px)
    </div>
  ),
  args: {
    className: "mr-2 pl-3 pt-2 mt-15",
  },
};
