const fib = (n: number): number =>
  n < 1 ? 0 : n <= 2 ? 1 : fib(n - 1) + fib(n - 2);

const doFib = (iter: number): Promise<number> =>
  new Promise((resolve) => {
    const start = Date.now();
    const result = fib(iter);
    console.log(`doFib done in: ${Date.now() - start}ms`);
    resolve(result);
  });

const main = async () => {
  const start = Date.now();

  const values = await Promise.all([
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
  ]);

  console.log('values:', values);
  console.log(`fib done in ${Date.now() - start}ms`);
};

main().catch(console.error);

// const { PerformanceObserver, performance } = require('node:perf_hooks');

// const obs = new PerformanceObserver((items) => {
//   console.log(items.getEntries()[0].duration);
//   performance.clearMarks();
// });
// obs.observe({ type: 'measure' });

// performance.mark("example-start")
// await someAction()
// performance.mark("example-end")

// performance.measure("example", "example-start", "example-end")
