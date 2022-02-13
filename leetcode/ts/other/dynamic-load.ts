function hasDynamicImport() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    return new Function("return import('data:text/javascript;base64,Cg==').then(r => true)")();
  } catch (e) {
    return Promise.resolve(false);
  }
}

export const dynamicLoad = (url: string, globalName: string) =>
  new Promise((resolve, reject) => {
    hasDynamicImport()
      .then((dynamicImportSupported: boolean) => {
        if (dynamicImportSupported) {
          return import(url).then(() => resolve((window as any)[globalName])).catch(reject);
        }

        const script = document.createElement('script');
        script.src = url;
        script.addEventListener('load', () => resolve((window as any)[globalName]));
        document.body.append(script);
      })
      .catch(reject);
  });
