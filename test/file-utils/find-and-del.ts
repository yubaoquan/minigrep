import { join } from 'https://deno.land/std@0.174.0/path/mod.ts';

import {
  PARTIALS_TO_DEL,
  TYPES_TO_DEL,
  TEMP_PATH_TO_DEL_TO,
  ENTRY_FOLDER,
} from '../../config/a.ts';

const random = () => Math.random().toString().toString().slice(2, 8);

const delOrKeep = (file: Deno.DirEntry, filePath: string) => {
  const isUnrelatedFile = PARTIALS_TO_DEL.some((parcial) => file.name.includes(parcial));
  const isUnrelatedType = TYPES_TO_DEL.some((type) => file.name.endsWith(type));
  const shouldDel = isUnrelatedFile || isUnrelatedType;

  if (shouldDel) {
    console.info(`del`, filePath);
    Deno.copyFileSync(filePath, join(TEMP_PATH_TO_DEL_TO, `${random()}-${file.name}`));
    Deno.removeSync(filePath);
  }
};

const doIt = (dir: string) => {
  const subPaths = Array.from(Deno.readDirSync(dir));

  if (dir === TEMP_PATH_TO_DEL_TO) return;
  subPaths.forEach((t) => {
    const fullPath = join(dir, t.name);
    if (t.isDirectory) return doIt(fullPath);
    if (t.isFile) return delOrKeep(t, fullPath);
  });
};

doIt(ENTRY_FOLDER);
