import type { Preview } from "@storybook/react-vite";
import "../src/assets/fonts/fonts.css";
import "../src/lib/ui/common.css";
import "../src/lib/ui/box.css";

import { themes } from "storybook/theming";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    backgrounds: {
      options: {
        dark: { name: "Dark", value: "#1c1c21" },
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },

	docs: {
		theme: themes.dark,
	}
  },
  initialGlobals: {
    backgrounds: { value: "dark" },
  },
};

export default preview;
