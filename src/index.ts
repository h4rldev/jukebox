import { init_easter_egg } from "./egg.ts";
import { oneko } from "./oneko.ts";
import { init_theme } from "./theme.ts";

const init = (): void => {
	const oneko_path = "/oneko.webp";
	oneko(oneko_path);

	init_theme();
	init_easter_egg();
};

document.addEventListener("DOMContentLoaded", () => {
	init();
});
