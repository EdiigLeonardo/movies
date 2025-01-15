// src/utils/lazyWithCache.ts
type LazyImport<T> = () => Promise<{ default: T }>;

const lazyWithCache = <T,>(importFunc: LazyImport<T>): LazyImport<T> => {
  const cache: { [key: string]: T } = {};
  return () => {
    const key = importFunc.toString();
    if (cache[key]) {
      return Promise.resolve({ default: cache[key] });
    }
    return importFunc().then((module) => {
      cache[key] = module.default;
      return module;
    });
  };
};

export default lazyWithCache;
