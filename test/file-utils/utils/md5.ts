import { crypto, toHashString } from 'https://deno.land/std@0.176.0/crypto/mod.ts';

const encoder = new TextEncoder();

export const getFileBuffer = (filePath: string) => {
  const file = Deno.openSync(filePath);
  const buf = new Uint8Array(file.statSync().size);
  file.readSync(buf);
  file.close();
  return buf;
};

const getMd5OfBuffer = (data: BufferSource) => toHashString(crypto.subtle.digestSync('MD5', data));

/** 获取字符串的 MD5 */
export const getMd5OfString = (input: string) => getMd5OfBuffer(encoder.encode(input));

/** 获取文件的 MD5 */
export const getFileMd5 = (filePath: string) => getMd5OfBuffer(getFileBuffer(filePath));
