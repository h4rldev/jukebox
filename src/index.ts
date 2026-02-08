import { oneko } from "./oneko.ts";

const default_theme = "catppuccin-macchiato";
const theme_options = {
	"catppuccin-latte": "Catppuccin Latte",
	"catppuccin-frappe": "Catppuccin Frappe",
	"catppuccin-macchiato": "Catppuccin Macchiato",
	"catppuccin-mocha": "Catppuccin Mocha",
};

const embed_options = {
	// Lavender
	"catppuccin-latte": {
		primary_color: "7287fd",
		bg_color: "eff1f5",
		text_color: "4c4f69",
		custom_css:
			"OnJvb3R7LS1hY2NlbnQtY29sb3I6IzcyODdmZDstLXRleHQtY29sb3I6IzRjNGY2OTstLWhyLWNvbG9yOiNkY2UwZTg7LS1pbnRlcm1lZGlhdGUtY29sb3I6I2RjZTBlODstLWJnLWNvbG9yOiNlZmYxZjV9LmRyb3Bkb3duLWl0ZW0sc3Zne2NvbG9yOnZhcigtLXRleHQtY29sb3IpfWhye2NvbG9yOnZhcigtLWhyLWNvbG9yKTtoZWlnaHQ6MXB4O2JvcmRlcjoxcHggc29saWQ7d2lkdGg6OTElO21hcmdpbjo5JX0ucmFkaW8tcGxheWVyLXdpZGdldHtwYWRkaW5nOjIwcHh9LnJhZGlvLWNvbnRyb2wtdm9sdW1le21hcmdpbjowIDAgMCAyMCV9LnJhZGlvLWNvbnRyb2wtcGxheS1idXR0b24sLnJhZGlvLWNvbnRyb2wtcGxheS1idXR0b24gc3Zne3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHh9LnByb2dyZXNze2JhY2tncm91bmQtY29sb3I6dmFyKC0tdGV4dC1jb2xvcil9LnRleHQtbXV0ZWQsLnRleHQtc2Vjb25kYXJ5e2NvbG9yOnZhcigtLXRleHQtY29sb3IpIWltcG9ydGFudH0uZm9ybS1yYW5nZTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2t7bWFyZ2luLXRvcDoxcHg7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1hY2NlbnQtY29sb3IpfS5mb3JtLXJhbmdlOjotbW96LXJhbmdlLXRyYWNre21hcmdpbi10b3A6MXB4O2JhY2tncm91bmQtY29sb3I6dmFyKC0tYWNjZW50LWNvbG9yKX0uZHJvcGRvd24tdG9nZ2xle3BhZGRpbmctbGVmdDoxMHB4O3BhZGRpbmctcmlnaHQ6MTBweDtib3JkZXItcmFkaXVzOjEwMHB4O2NvbG9yOnZhcigtLWJnLWNvbG9yKTtiYWNrZ3JvdW5kOnZhcigtLXRleHQtY29sb3IpO2JveC1zaGFkb3c6bm9uZSFpbXBvcnRhbnR9LmJ0bi1jaGVjazpjaGVja2VkKy5idG4sLmJ0bi5hY3RpdmUsLmJ0bi5zaG93LC5idG46Zmlyc3QtY2hpbGQ6YWN0aXZlLC5kcm9wZG93bi1tZW51LC5kcm9wZG93bi10b2dnbGU6Zm9jdXMtdmlzaWJsZSwuZHJvcGRvd24tdG9nZ2xlOmhvdmVyLDpub3QoLmJ0bi1jaGVjaykrLmJ0bjphY3RpdmV7YmFja2dyb3VuZDp2YXIoLS1iZy1jb2xvcikhaW1wb3J0YW50O2NvbG9yOnZhcigtLXRleHQtY29sb3IpIWltcG9ydGFudDtib3gtc2hhZG93Om5vbmUhaW1wb3J0YW50fS5hbGJ1bV9hcnR7Ym9yZGVyLXJhZGl1czoxMDBweCFpbXBvcnRhbnQ7YW5pbWF0aW9uOjhzIGxpbmVhciBpbmZpbml0ZSBzcGlufUBrZXlmcmFtZXMgc3Bpbnt0b3t0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fQ%3D%3D",
	},
	"catppuccin-frappe": {
		// Maroon
		primary_color: "ea999c",
		bg_color: "303446",
		text_color: "c6d0f5",
		custom_css:
			"OnJvb3R7LS1hY2NlbnQtY29sb3I6I2VhOTk5YzstLXRleHQtY29sb3I6I2M2ZDBmNTstLWhyLWNvbG9yOiMyMzI2MzQ7LS1pbnRlcm1lZGlhdGUtY29sb3I6IzI5MmMzYzstLWJnLWNvbG9yOiMzMDM0NDZ9LmRyb3Bkb3duLWl0ZW0sc3Zne2NvbG9yOnZhcigtLXRleHQtY29sb3IpfWhye2NvbG9yOnZhcigtLWhyLWNvbG9yKTtoZWlnaHQ6MXB4O2JvcmRlcjoxcHggc29saWQ7d2lkdGg6OTElO21hcmdpbjo5JX0ucmFkaW8tcGxheWVyLXdpZGdldHtwYWRkaW5nOjIwcHh9LnJhZGlvLWNvbnRyb2wtdm9sdW1le21hcmdpbjowIDAgMCAyMCV9LnJhZGlvLWNvbnRyb2wtcGxheS1idXR0b24sLnJhZGlvLWNvbnRyb2wtcGxheS1idXR0b24gc3Zne3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHh9LnByb2dyZXNze2JhY2tncm91bmQtY29sb3I6dmFyKC0tdGV4dC1jb2xvcil9LnRleHQtbXV0ZWQsLnRleHQtc2Vjb25kYXJ5e2NvbG9yOnZhcigtLXRleHQtY29sb3IpIWltcG9ydGFudH0uZm9ybS1yYW5nZTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2t7bWFyZ2luLXRvcDoxcHg7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1hY2NlbnQtY29sb3IpfS5mb3JtLXJhbmdlOjotbW96LXJhbmdlLXRyYWNre21hcmdpbi10b3A6MXB4O2JhY2tncm91bmQtY29sb3I6dmFyKC0tYWNjZW50LWNvbG9yKX0uZHJvcGRvd24tdG9nZ2xle3BhZGRpbmctbGVmdDoxMHB4O3BhZGRpbmctcmlnaHQ6MTBweDtib3JkZXItcmFkaXVzOjEwMHB4O2NvbG9yOnZhcigtLWJnLWNvbG9yKTtiYWNrZ3JvdW5kOnZhcigtLXRleHQtY29sb3IpO2JveC1zaGFkb3c6bm9uZSFpbXBvcnRhbnR9LmJ0bi1jaGVjazpjaGVja2VkKy5idG4sLmJ0bi5hY3RpdmUsLmJ0bi5zaG93LC5idG46Zmlyc3QtY2hpbGQ6YWN0aXZlLC5kcm9wZG93bi1tZW51LC5kcm9wZG93bi10b2dnbGU6Zm9jdXMtdmlzaWJsZSwuZHJvcGRvd24tdG9nZ2xlOmhvdmVyLDpub3QoLmJ0bi1jaGVjaykrLmJ0bjphY3RpdmV7YmFja2dyb3VuZDp2YXIoLS1iZy1jb2xvcikhaW1wb3J0YW50O2NvbG9yOnZhcigtLXRleHQtY29sb3IpIWltcG9ydGFudDtib3gtc2hhZG93Om5vbmUhaW1wb3J0YW50fS5hbGJ1bV9hcnR7Ym9yZGVyLXJhZGl1czoxMDBweCFpbXBvcnRhbnQ7YW5pbWF0aW9uOjhzIGxpbmVhciBpbmZpbml0ZSBzcGlufUBrZXlmcmFtZXMgc3Bpbnt0b3t0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fQ%3D%3D",
	},
	"catppuccin-macchiato": {
		// Green
		primary_color: "a6da95",
		bg_color: "24273a",
		text_color: "cad3f5",
		custom_css:
			"OnJvb3R7LS1hY2NlbnQtY29sb3I6I2E2ZGE5NTstLXRleHQtY29sb3I6I2NhZDNmNTstLWhyLWNvbG9yOiMxODE5MjY7LS1pbnRlcm1lZGlhdGUtY29sb3I6IzFlMjAzMDstLWJnLWNvbG9yOiMyNDI3M2F9LmRyb3Bkb3duLWl0ZW0sc3Zne2NvbG9yOnZhcigtLXRleHQtY29sb3IpfWhye2NvbG9yOnZhcigtLWhyLWNvbG9yKTtoZWlnaHQ6MXB4O2JvcmRlcjoxcHggc29saWQ7d2lkdGg6OTElO21hcmdpbjo5JX0ucmFkaW8tcGxheWVyLXdpZGdldHtwYWRkaW5nOjIwcHh9LnJhZGlvLWNvbnRyb2wtdm9sdW1le21hcmdpbjowIDAgMCAyMCV9LnJhZGlvLWNvbnRyb2wtcGxheS1idXR0b24sLnJhZGlvLWNvbnRyb2wtcGxheS1idXR0b24gc3Zne3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHh9LnByb2dyZXNze2JhY2tncm91bmQtY29sb3I6dmFyKC0tdGV4dC1jb2xvcil9LnRleHQtbXV0ZWQsLnRleHQtc2Vjb25kYXJ5e2NvbG9yOnZhcigtLXRleHQtY29sb3IpIWltcG9ydGFudH0uZm9ybS1yYW5nZTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2t7bWFyZ2luLXRvcDoxcHg7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1hY2NlbnQtY29sb3IpfS5mb3JtLXJhbmdlOjotbW96LXJhbmdlLXRyYWNre21hcmdpbi10b3A6MXB4O2JhY2tncm91bmQtY29sb3I6dmFyKC0tYWNjZW50LWNvbG9yKX0uZHJvcGRvd24tdG9nZ2xle3BhZGRpbmctbGVmdDoxMHB4O3BhZGRpbmctcmlnaHQ6MTBweDtib3JkZXItcmFkaXVzOjEwMHB4O2NvbG9yOnZhcigtLWJnLWNvbG9yKTtiYWNrZ3JvdW5kOnZhcigtLXRleHQtY29sb3IpO2JveC1zaGFkb3c6bm9uZSFpbXBvcnRhbnR9LmJ0bi1jaGVjazpjaGVja2VkKy5idG4sLmJ0bi5hY3RpdmUsLmJ0bi5zaG93LC5idG46Zmlyc3QtY2hpbGQ6YWN0aXZlLC5kcm9wZG93bi1tZW51LC5kcm9wZG93bi10b2dnbGU6Zm9jdXMtdmlzaWJsZSwuZHJvcGRvd24tdG9nZ2xlOmhvdmVyLDpub3QoLmJ0bi1jaGVjaykrLmJ0bjphY3RpdmV7YmFja2dyb3VuZDp2YXIoLS1iZy1jb2xvcikhaW1wb3J0YW50O2NvbG9yOnZhcigtLXRleHQtY29sb3IpIWltcG9ydGFudDtib3gtc2hhZG93Om5vbmUhaW1wb3J0YW50fS5hbGJ1bV9hcnR7Ym9yZGVyLXJhZGl1czoxMDBweCFpbXBvcnRhbnQ7YW5pbWF0aW9uOjhzIGxpbmVhciBpbmZpbml0ZSBzcGlufUBrZXlmcmFtZXMgc3Bpbnt0b3t0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fQ%3D%3D",
	},
	"catppuccin-mocha": {
		// Teal
		primary_color: "94e2d5",
		bg_color: "1e1e2e",
		text_color: "cdd6f4",
		custom_css:
			"OnJvb3R7LS1hY2NlbnQtY29sb3I6Izk0ZTJkNTstLXRleHQtY29sb3I6I2NkZDZmNDstLWhyLWNvbG9yOiMxMTExMWI7LS1pbnRlcm1lZGlhdGUtY29sb3I6IzE4MTgyNTstLWJnLWNvbG9yOiMxZTFlMmV9LmRyb3Bkb3duLWl0ZW0sc3Zne2NvbG9yOnZhcigtLXRleHQtY29sb3IpfWhye2NvbG9yOnZhcigtLWhyLWNvbG9yKTtoZWlnaHQ6MXB4O2JvcmRlcjoxcHggc29saWQ7d2lkdGg6OTElO21hcmdpbjo5JX0ucmFkaW8tcGxheWVyLXdpZGdldHtwYWRkaW5nOjIwcHh9LnJhZGlvLWNvbnRyb2wtdm9sdW1le21hcmdpbjowIDAgMCAyMCV9LnJhZGlvLWNvbnRyb2wtcGxheS1idXR0b24sLnJhZGlvLWNvbnRyb2wtcGxheS1idXR0b24gc3Zne3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHh9LnByb2dyZXNze2JhY2tncm91bmQtY29sb3I6dmFyKC0tdGV4dC1jb2xvcil9LnRleHQtbXV0ZWQsLnRleHQtc2Vjb25kYXJ5e2NvbG9yOnZhcigtLXRleHQtY29sb3IpIWltcG9ydGFudH0uZm9ybS1yYW5nZTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2t7bWFyZ2luLXRvcDoxcHg7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1hY2NlbnQtY29sb3IpfS5mb3JtLXJhbmdlOjotbW96LXJhbmdlLXRyYWNre21hcmdpbi10b3A6MXB4O2JhY2tncm91bmQtY29sb3I6dmFyKC0tYWNjZW50LWNvbG9yKX0uZHJvcGRvd24tdG9nZ2xle3BhZGRpbmctbGVmdDoxMHB4O3BhZGRpbmctcmlnaHQ6MTBweDtib3JkZXItcmFkaXVzOjEwMHB4O2NvbG9yOnZhcigtLWJnLWNvbG9yKTtiYWNrZ3JvdW5kOnZhcigtLXRleHQtY29sb3IpO2JveC1zaGFkb3c6bm9uZSFpbXBvcnRhbnR9LmJ0bi1jaGVjazpjaGVja2VkKy5idG4sLmJ0bi5hY3RpdmUsLmJ0bi5zaG93LC5idG46Zmlyc3QtY2hpbGQ6YWN0aXZlLC5kcm9wZG93bi1tZW51LC5kcm9wZG93bi10b2dnbGU6Zm9jdXMtdmlzaWJsZSwuZHJvcGRvd24tdG9nZ2xlOmhvdmVyLDpub3QoLmJ0bi1jaGVjaykrLmJ0bjphY3RpdmV7YmFja2dyb3VuZDp2YXIoLS1iZy1jb2xvcikhaW1wb3J0YW50O2NvbG9yOnZhcigtLXRleHQtY29sb3IpIWltcG9ydGFudDtib3gtc2hhZG93Om5vbmUhaW1wb3J0YW50fS5hbGJ1bV9hcnR7Ym9yZGVyLXJhZGl1czoxMDBweCFpbXBvcnRhbnQ7YW5pbWF0aW9uOjhzIGxpbmVhciBpbmZpbml0ZSBzcGlufUBrZXlmcmFtZXMgc3Bpbnt0b3t0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fQ%3D%3D",
	},
};

let theme_dropdown = null;
let theme_dropdown_menu = null;
let iframe_container = null;

let button_mocha = null;
let button_latte = null;
let button_frappe = null;
let button_macchiato = null;

let dropdown_open = false;
let current_theme = default_theme;

const key_sequence: string[] = [];

const close_dropdown = (): void => {
	theme_dropdown.ariaExpanded = "false";
	// theme_dropdown_menu.style.display = "none";
	theme_dropdown_menu.classList.remove("visible");
	dropdown_open = false;
};

const open_dropdown = (): void => {
	theme_dropdown.ariaExpanded = "false";
	// theme_dropdown_menu.style.display = "block";
	theme_dropdown_menu.classList.add("visible");
	dropdown_open = true;
};

const handle_dropdown_click = (_event: MouseEvent): void => {
	if (dropdown_open) {
		close_dropdown();
		return;
	}

	document.addEventListener("click", (event: MouseEvent) => {
		if (dropdown_open && !theme_dropdown.contains(event.target)) {
			close_dropdown();
		}
	});

	open_dropdown();
};

const set_embed = (): void => {
	const embed = embed_options[current_theme];

	iframe_container.innerHTML = `<iframe src="https://radio.h4rl.dev/public/mambo/embed?primary_color=${embed.primary_color}&bg_color=${embed.bg_color}&text_color=${embed.text_color}&volume=50&continuous=1&custom_css=${embed.custom_css}" frameborder="0" allowtransparency="true" style="width: 100%; min-height: 150px; height: 160px; border: 0;"></iframe>`;
};

const apply_theme = (): void => {
	const htmlelem = document.documentElement;
	const left_banner = document.getElementById("left-banner");
	const right_banner = document.getElementById("right-banner");

	theme_dropdown.innerText = theme_options[current_theme];
	if (current_theme === "catppuccin-latte") {
		theme_dropdown.classList.remove("text-crust");
		theme_dropdown.classList.add("text-text");
	} else {
		theme_dropdown.classList.remove("text-text");
		theme_dropdown.classList.add("text-crust");
	}

	if (current_theme === "catppuccin-latte") {
		left_banner.classList.remove("invert-100");
		left_banner.classList.add("invert-0");
		right_banner.classList.remove("invert-100");
		right_banner.classList.add("invert-0");
	} else {
		left_banner.classList.add("invert-100");
		left_banner.classList.remove("invert-0");
		right_banner.classList.add("invert-100");
		right_banner.classList.remove("invert-0");
	}

	switch (current_theme) {
		case "catppuccin-latte":
			htmlelem.classList.remove("mocha", "frappe", "macchiato");
			htmlelem.classList.add("latte");
			break;

		case "catppuccin-frappe":
			htmlelem.classList.remove("mocha", "latte", "macchiato");
			htmlelem.classList.add("frappe");
			break;

		case "catppuccin-macchiato":
			htmlelem.classList.remove("mocha", "latte", "frappe");
			htmlelem.classList.add("macchiato");
			break;

		case "catppuccin-mocha":
			htmlelem.classList.remove("latte", "frappe", "macchiato");
			htmlelem.classList.add("mocha");
			break;
	}

	set_embed();
};

const easter_egg = (): void => {
	const imissyou_source = document.getElementById("imissyou").src;
	const left_banner = document.getElementById("left-banner");
	const right_banner = document.getElementById("right-banner");

	const htmlelem = document.getElementsByTagName("body");

	htmlelem[0].style.backgroundImage = `url(${imissyou_source})`;
	htmlelem[0].style.backgroundSize = "cover";
	htmlelem[0].style.backgroundPosition = "center";
	left_banner.classList.add("hidden");
	right_banner.classList.add("hidden");
};

const revert_easter_egg = (): void => {
	const htmlelem = document.getElementsByTagName("body");
	const left_banner = document.getElementById("left-banner");
	const right_banner = document.getElementById("right-banner");

	htmlelem[0].style.backgroundImage = "none";
	htmlelem[0].style.backgroundSize = "auto";
	htmlelem[0].style.backgroundPosition = "center";

	left_banner.classList.remove("hidden");
	right_banner.classList.remove("hidden");
};

const handle_theme_click = (
	_event: MouseEvent,
	selected_theme: string,
): void => {
	close_dropdown();

	if (!(selected_theme in theme_options)) {
		return;
	}

	if (selected_theme === current_theme) {
		return;
	}

	current_theme =
		selected_theme in theme_options ? selected_theme : default_theme;

	localStorage.setItem("theme", current_theme);

	apply_theme();
};

const handle_input_easter_egg = (_event: KeyboardEvent): void => {
	const wanted_key_sequence = ["l", "e", "o"];
	const reverse_key_sequence = wanted_key_sequence.toReversed();

	let snapshot = null;

	key_sequence.push(event.key.toLowerCase());
	snapshot = key_sequence.slice(-wanted_key_sequence.length);

	if (
		snapshot.length === wanted_key_sequence.length &&
		snapshot.every((val, i) => val === wanted_key_sequence[i])
	) {
		easter_egg();
	}

	if (
		snapshot.length === reverse_key_sequence.length &&
		snapshot.every((val, i) => val === reverse_key_sequence[i])
	) {
		revert_easter_egg();
	}
};

const init = (): void => {
	theme_dropdown = document.getElementById("theme-dropdown");
	theme_dropdown_menu = document.getElementById("theme-dropdown-menu");
	iframe_container = document.getElementById("iframe-container");

	button_mocha = document.getElementById("catppuccin-mocha");
	button_latte = document.getElementById("catppuccin-latte");
	button_frappe = document.getElementById("catppuccin-frappe");
	button_macchiato = document.getElementById("catppuccin-macchiato");

	current_theme = localStorage.getItem("theme") || default_theme;
	apply_theme();

	theme_dropdown.addEventListener("mouseup", (e) => handle_dropdown_click(e));
	button_mocha.addEventListener("click", (e) =>
		handle_theme_click(e, "catppuccin-mocha"),
	);
	button_latte.addEventListener("click", (e) =>
		handle_theme_click(e, "catppuccin-latte"),
	);
	button_frappe.addEventListener("click", (e) =>
		handle_theme_click(e, "catppuccin-frappe"),
	);
	button_macchiato.addEventListener("click", (e) =>
		handle_theme_click(e, "catppuccin-macchiato"),
	);
};

document.addEventListener("DOMContentLoaded", () => {
	const oneko_path = "/assets/oneko.webp";

	init();
	oneko(oneko_path);

	document.addEventListener("keyup", (e: KeyboardEvent) => {
		handle_input_easter_egg(e);
	});
});
