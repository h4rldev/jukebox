import { $, build } from "bun";

await $`tailwindcss -i ./styles/tailwind.css -o ./styles/styles.css --minify`;

const result = await build({
	entryPoints: ["./html/index.html"],
	outdir: "dist",
	minify: true,
});

if (!result.success) {
	console.error("Build failed:", result.logs);
	process.exit(1);
}

await $`cp ./assets/oneko.webp ./dist`;

if (result.success) {
	console.log("✅ Build complete! : ", result.logs);
}
