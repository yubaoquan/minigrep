import { join } from 'https://deno.land/std@0.174.0/path/mod.ts';

type IFileProcessor = (filePath: string, info: Deno.DirEntry) => void;
type ISkipChecker = (filePath: string, info: Deno.DirEntry) => boolean;

/**
 *  遍历目录, 执行一些目录或文件操作
 * @param rootDir 入口目录
 * @param fileProcessor 对文件执行的逻辑
 * @param canSkip 是否忽略此目录/文件
 */
export const processDir = (
  rootDir: string,
  fileProcessor: IFileProcessor,
  canSkip?: ISkipChecker,
) => {
  const traverse = (dir: string) => {
    console.info('traversing ', dir);
    Array.from(Deno.readDirSync(dir)).forEach((t) => {
      const fullPath = join(dir, t.name);
      if (canSkip?.(fullPath, t)) return;
      if (t.isDirectory) return traverse(fullPath);
      if (t.isFile) return fileProcessor(fullPath, t);
    });
  };

  return traverse(rootDir);
};
