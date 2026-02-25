import sharp from 'sharp';
import fs from 'fs';

async function compressLogo() {
    const inputPath = 'src/assets/WCCDLOGO C-01.png';
    const outputPath = 'src/assets/logo-compressed.webp';

    try {
        await sharp(inputPath)
            .resize({ width: 600, withoutEnlargement: true }) // A logo doesn't need to be massive
            .webp({ quality: 80, effort: 6 })
            .toFile(outputPath);

        // Check sizes
        const inputStats = fs.statSync(inputPath);
        const outputStats = fs.statSync(outputPath);
        console.log(`Original Size: ${(inputStats.size / 1024).toFixed(2)} KB`);
        console.log(`Compressed Size: ${(outputStats.size / 1024).toFixed(2)} KB`);
    } catch (err) {
        console.error('Error compressing image:', err);
    }
}

compressLogo();
