export const cacheAsync = (promiseGenerator: (_: any) => Promise<any>, symbol: any) => {
  const cache = new Map();

  return async (params: any) =>
    new Promise((resolve, reject) => {
      // 可以提供键值
      const key = symbol || params;
      let cacheCfg = cache.get(key);

      if (!cacheCfg) {
        cacheCfg = {
          hit: false,
          value: undefined,
          exector: [{ resolve, reject }],
        };
        cache.set(key, cacheCfg);
      } else {
        // 命中缓存
        if (cacheCfg.hit) return resolve(cacheCfg.value);
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

            cacheCfg.hit = true;
            cacheCfg.value = response; // 缓存结果
          } catch (error) {
            // 如果失败了 那么这个 promise 的则为 reject
            exector.shift().reject(error);
            next(); // 失败重试，降级为串行
          }
        };
        next();
      }
    });
};
