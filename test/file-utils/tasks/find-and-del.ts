import { join } from 'https://deno.land/std@0.174.0/path/mod.ts';

import {
  PARTIALS_TO_DEL,
  TYPES_TO_DEL,
  TEMP_PATH_TO_DEL_TO,
  ENTRY_FOLDER,
} from '../../../config/a.ts';

import { processDir } from '../utils/traverse.ts';

const random = () => Math.random().toString().toString().slice(2, 8);

/** 遍历目录, 将不符合条件的文件剪切到一个临时目录中 */
const delOrKeep = (filePath: string, file: Deno.DirEntry) => {
  const isUnrelatedFile = PARTIALS_TO_DEL.some((parcial) => file.name.includes(parcial));
  const isUnrelatedType = TYPES_TO_DEL.some((type) => file.name.endsWith(type));
  const shouldDel = isUnrelatedFile || isUnrelatedType;

  if (shouldDel) {
    console.info(`del`, filePath);
    Deno.copyFileSync(filePath, join(TEMP_PATH_TO_DEL_TO, `${random()}-${file.name}`));
    Deno.removeSync(filePath);
  }
};

processDir(ENTRY_FOLDER, delOrKeep, (path) => path === TEMP_PATH_TO_DEL_TO);
