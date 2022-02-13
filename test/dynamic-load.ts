/* globals window, document */

function hasDynamicImport(): Promise<boolean> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    return new Function("return import('data:text/javascript;base64,Cg==').then(r => true)")();
  } catch (e) {
    return Promise.resolve(false);
  }
}

export const dynamicLoad = (url: string, globalName: string) =>
  new Promise(async (resolve, reject) => {
    try {
      const dynamicImportSupported = await hasDynamicImport();
      if (dynamicImportSupported) {
        await import(url);
        return resolve((window as any)[globalName]);
      }
      const script = document.createElement('script');
      script.src = url;
      script.addEventListener('load', () => resolve((window as any)[globalName]));
      script.addEventListener('error', reject);
      script.crossorigin = 'anonymous';
      document.body.append(script);
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
