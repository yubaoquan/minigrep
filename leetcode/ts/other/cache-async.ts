export const cacheAsync = (promiseGenerator: (p: any) => any, s: Symbol) => {
  const cache = new Map();

  return async (params: any) =>
    new Promise((resolve, reject) => {
      // 可以提供键值
      const symbol = s || params;
      let cacheCfg = cache.get(symbol);

      if (!cacheCfg) {
        cacheCfg = {
          hit: null,
          exector: [{ resolve, reject }],
        };
        cache.set(symbol, cacheCfg);
      } else {
        // 命中缓存
        if (cacheCfg.hit) return resolve(cacheCfg.hit);
        cacheCfg.exector.push({ resolve, reject });
      }

      const { exector } = cacheCfg;

      // 处理并发，在请求还处于pending过程中就发起了相同的请求
      // 拿第一个请求
      if (exector.length === 1) {
        const next = async () => {
          try {
            if (!exector.length) return;
            const response = await promiseGenerator(params);

            // 如果成功了，那么直接resolve掉剩余同样的请求
            while (exector.length) exector.shift().resolve(response); // 清空

            cacheCfg.hit = response; // 缓存结果
          } catch (error) {
            // 如果失败了 那么这个promise的则为reject
            const { reject: rej } = exector.shift();
            rej(error);
            next(); // 失败重试，降级为串行
          }
        };
        next();
      }
    });
};
