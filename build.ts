import { $, build } from "bun";

const result = await build({
	entryPoints: ["./src/index.ts"],
	outdir: "dist",
});

if (!result.success) {
	console.error("Build failed:", result.logs);
	process.exit(1);
}

await $`tailwindcss -i ./styles/tailwind.css -o ./styles/styles.css --minify`;
await $`mkdir -p ./dist/styles`;
await $`cp -r ./styles/styles.css ./dist/styles`;
await $`cp -r ./html/* dist`;

console.log("✅ Build complete");
