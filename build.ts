import { $, build } from "bun";

await $`tailwindcss -i ./styles/tailwind.css -o ./styles/styles.css --minify`;
await $`cp ./assets/oneko.webp ./dist/assets`;

const result = await build({
	entryPoints: ["./html/index.html"],
	outdir: "dist",
	minify: false,
});

if (!result.success) {
	console.error("Build failed:", result.logs);
	process.exit(1);
}

console.log("✅ Build complete");
