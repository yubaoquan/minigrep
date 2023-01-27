// deno run --allow-write --allow-read index.ts

import type { EmulatedCanvas2D } from 'https://deno.land/x/canvas@v1.4.1/mod.ts';
import { createCanvas } from 'https://deno.land/x/canvas@v1.4.1/mod.ts';

const defaultFontPath = 'C:/Windows/Fonts/msyh.ttc';

let canvas: EmulatedCanvas2D;
const loadedFonts: Record<string, boolean> = {};

const prepareCanvas = async (fontPath = defaultFontPath) => {
  canvas = canvas ?? createCanvas(100, 100);
  if (!loadedFonts[fontPath]) {
    // 加载字体, 否则汉字渲染不出来
    const fontBuffer = await Deno.readFile(fontPath);
    canvas.loadFont(fontBuffer, {
      family: 'Yahei',
      style: 'normal',
      weight: 'normal',
      variant: 'normal',
    });
    loadedFonts[fontPath] = true;
  }

  return canvas.getContext('2d');
};

const makeCharImg = async (char: string, imgPath: string, fontPath?: string) => {
  const ctx = await prepareCanvas(fontPath);

  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, 100, 100);
  ctx.fillStyle = '#000';
  ctx.font = 'bold 50px Yahei';
  ctx.fillText(char, 25, 70);

  await Deno.writeFile(imgPath, canvas.toBuffer());
};

const getNumberWidth = (n: number) => {
  let ret: number = 1;
  while (10 ** ret < n) ret++;
  return ret;
};

const genCharImgs = (chars: string[]) => {
  const indexWidth = getNumberWidth(chars.length);
  chars.forEach((char, index) => {
    const indexStr = `${index}`.padStart(indexWidth, '0');
    makeCharImg(char, `./imgs/${indexStr}-${char}.png`);
  });
};

const genAlphabets = () => {
  const ret: string[] = [];
  for (let i = 0; i < 26; i++) {
    ret.push(String.fromCodePoint(i + 65));
    ret.push(String.fromCodePoint(i + 97));
  }
  for (let i = 0; i < 10; i += 1) {
    ret.push(i.toString());
  }
  return ret;
};

genCharImgs(genAlphabets());
