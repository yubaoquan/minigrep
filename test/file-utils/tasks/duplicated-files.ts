import { dir as taskDir } from '../../../config/md5-tasks.ts';
import { getFileMd5 } from '../utils/md5.ts';
import { processDir } from '../utils/traverse.ts';

const getFileMd5ListOfDir = (dirPath: string) => {
  const ret: Record<string, string[]> = {};
  processDir(
    dirPath,
    (filePath) => {
      const md5 = getFileMd5(filePath);
      ret[md5] ||= [];
      ret[md5].push(filePath);
    },
    (filePath, fileInfo) => fileInfo.name === '.DS_Store',
  );

  return ret;
};

const ret = getFileMd5ListOfDir(taskDir);

const record: string[][] = [];
Object.entries(ret)
  .filter(([_md5, files]) => files.length > 1)
  .forEach(([_md5, files]) => {
    console.info('same file: ===');
    console.info(files);
    record.push(files);
  });

Deno.writeTextFileSync('../../../config/duplicated-files.json', JSON.stringify(record, null, 2));
