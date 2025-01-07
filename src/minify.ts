import * as fs from 'fs';
import * as sharp from 'sharp';

export const minify = async () => {
  try {
    const fileName = 'emoji-people-1.png';
    const inputDir = './src/inputs';
    const outputDir = './src/outputs';

    // パスを結合
    const inputPath = `${inputDir}/${fileName}`;
    const outputPath = `${outputDir}/${fileName}`;

    // ディレクトリが存在しない場合は作成
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // 画像処理
    const { size } = await sharp(inputPath)
      .resize(80, 80)
      .png({
        effort: 10,
        compressionLevel: 9,
      })
      .toFile(outputPath);

    console.log(`\u001b[1;32m ${fileName}を圧縮しました。 ${(size / 1000).toFixed(2)}KB`);
  } catch (err) {
    console.error(`\u001b[1;31m エラーが発生しました:`, err);
  }
};
