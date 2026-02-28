enum ContentType {
	Yaoi,
	Yuri,
	Neither,
}

enum __ContentType_extended {
	Both,
}

interface ImageData {
	sample_url?: string;
	file_url?: string;
	source?: string;
	tags?: string;
}

interface Image {
	content_type?: ContentType;
	sample_url?: string;
	file_url?: string;
	source?: string;
	alt?: string;
}

type FetchTypes = ContentType | __ContentType_extended;

interface Settings {
	type: ContentType | string;
	auto_fetch: boolean;
}

const default_settings: Settings = {
	type: FetchTypes.Yaoi,
	auto_fetch: true,
};

let settings: Settings = default_settings;

const TAGS = ["yuri+-loli", "yaoi+-shota"];
const CHUNK_SIZE = 10;
const tag_override = null;

let is_fetching_images = false;

const image_cache: Image[] = [];
const image_cache_capacity = 60;
let current_image_cache_size = 0;

function get_random_page(): number {
	return Math.floor(Math.random() * 100);
}

const is_string = (value: string | string[]): value is string => {
	return typeof value === "string";
};

const is_string_array = (value: string | string[]): value is string[] => {
	return Array.isArray(value);
};

const shuffle_array = <T>(array: T[]): T[] => {
	const shuffled_array = [...array]; // Create a copy to avoid mutating the original
	for (let i = shuffled_array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled_array[i], shuffled_array[j]] = [
			shuffled_array[j],
			shuffled_array[i],
		];
	}
	return shuffled_array;
};

const populate_image_cache = async (type: FetchTypes): Promise<void> => {
	while (current_image_cache_size < image_cache_capacity) {
		const images = await fetch_images(type);
		if (!images || images.length === 0) {
			return;
		}
		image_cache.push(...images);
		current_image_cache_size += images.length;
	}
};

const fetch_images = async (type: FetchTypes): Promise<Image[]> => {
	if (is_fetching_images) return;
	is_fetching_images = true;

	let images: Image[] = [];
	const gay_scroller = document.getElementById("gay-scroller");

	let current_tag: string | string[] = null;
	switch (type) {
		case FetchTypes.Yaoi:
			current_tag = TAGS[1];
			break;
		case FetchTypes.Yuri:
			current_tag = TAGS[0];
			break;
		default:
			current_tag = TAGS;
	}

	if (tag_override !== null) {
		current_tag = tag_override;
	}

	if (is_string(current_tag)) {
		try {
			const page = get_random_page();
			const response = await fetch(
				`/api/gay?page=${page}&limit=${CHUNK_SIZE}&tags=${encodeURIComponent(current_tag)}`,
			);

			const data: ImageData[] = await response.json();
			if (!data || data.length === 0) {
				throw `Could not fetch images for tag ${current_tag}`;
			}

			images = data.map((image_data: ImageData) => ({
				content_type: type,
				sample_url: image_data.sample_url,
				file_url: image_data.file_url,
				source: image_data.source,
				alt: image_data.tags,
			}));
		} catch (err) {
			gay_scroller.innerText = `Error fetching images: ${err}`;
		} finally {
			is_fetching_images = false;
		}
	} else {
		try {
			const images_buf: Image[] = [];
			for (const tag of current_tag) {
				const page = get_random_page();
				const response = await fetch(
					`api/gay?page=${page}&limit=${CHUNK_SIZE}&tags=${encodeURIComponent(tag)}`,
				);

				const data: ImageData[] = await response.json();
				if (!data && data.length === 0) {
					throw `Could not fetch images for tag ${tag}`;
				}

				images_buf.push(
					...data.map((image_data: ImageData) => ({
						content_type: tag === TAGS[0] ? FetchTypes.Yuri : FetchTypes.Yaoi,
						sample_url: image_data.sample_url,
						file_url: image_data.file_url,
						source: image_data.source,
						alt: image_data.tags,
					})),
				);
			}

			images = shuffle_array(images_buf);
		} catch (err) {
			gay_scroller.innerText = `Error fetching images: ${err}`;
		} finally {
			is_fetching_images = false;
		}
	}

	return images;
};

const init_scroller = (): void => {};

const load_settings = (): void => {
	const settings_buf = localStorage.getItem("scroller-settings");
	settings = settings_buf ? JSON.parse(settings_buf) : default_settings;
};

export const init_gay_scroller = (): void => {
	load_settings();
};
