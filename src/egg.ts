const key_sequence: string[] = [];

const compare_arrays = (a: string[], b: string[]): boolean => {
	return a.length === b.length && a.every((val, i) => val === b[i]);
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

const handle_input_easter_egg = (_event: KeyboardEvent): void => {
	const wanted_key_sequence = ["l", "e", "o"];
	const reverse_key_sequence = wanted_key_sequence.toReversed();
	let snapshot = null;

	key_sequence.push(event.key.toLowerCase());
	snapshot = key_sequence.slice(-wanted_key_sequence.length);

	if (compare_arrays(snapshot, wanted_key_sequence)) {
		easter_egg();
	}

	if (compare_arrays(snapshot, reverse_key_sequence)) {
		revert_easter_egg();
	}
};

export const init_easter_egg = (): void => {
	document.addEventListener("keyup", (e: KeyboardEvent) => {
		handle_input_easter_egg(e);
	});
};
