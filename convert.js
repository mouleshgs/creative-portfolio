import fs from "fs-extra";
import sharp from "sharp";

const inputDir = "./assests";
const outputDir = "./assests";

// Ensure output directory exists
await fs.ensureDir(outputDir);

async function convertImage(file) {
  const name = file.split(".")[0]; // remove extension

  const inputPath = `${inputDir}/${file}`;
  const webpPath = `${outputDir}/${name}.webp`;

  try {
    // Convert to WebP (quality ~80)
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(webpPath);

    console.log(`✅ Converted ${file} → WebP & AVIF`);
  } catch (err) {
    console.error(`❌ Error converting ${file}:`, err);
  }
}

async function run() {
     
  try {
    // Convert to WebP (quality ~80)
    await sharp("./assests/myimage.webp")
  .resize(480, 640, { fit: "inside" })  // 👈 resize while keeping aspect ratio
  .webp({ quality: 80 })
  .toFile("./assests/myimagef.webp");

    console.log(`✅ Converted  → WebP & AVIF`);
  } catch (err) {
    console.error(`❌ Error converting :`, err);
  }
}

run();
