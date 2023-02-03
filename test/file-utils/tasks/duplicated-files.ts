import { dir as taskDir } from '../../../config/md5-tasks.ts';
import { getFileMd5 } from '../utils/md5.ts';
import { processDir } from '../utils/traverse.ts';

const getFileMd5ListOfDir = (dirPath: string) => {
  const ret: Record<string, string[]> = {};
  processDir(dirPath, (filePath) => {
    const md5 = getFileMd5(filePath);
    ret[md5] ||= [];
    ret[md5].push(filePath);
  });

  return ret;
};

const ret = getFileMd5ListOfDir(taskDir);

Object.keys(ret).forEach((md5) => {
  if (ret[md5]?.length > 1) {
    console.info('same file: ===');
    console.info(ret[md5]);
  }
});
