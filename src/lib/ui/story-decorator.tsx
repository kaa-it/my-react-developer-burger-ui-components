import type { Decorator } from "@storybook/react-vite";
import "./common.css";

export const StoryDecorator: Decorator = (Story) => {
	return (
		<div style={{ background: "var(--background)", height: "100%", width: "100%"}} >
			<Story/>
		</div>
	);
} 