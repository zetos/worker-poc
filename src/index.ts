import { Worker } from 'worker_threads';

const doFib = async (iter: number) =>
  new Promise((resolve, reject) => {
    const start = Date.now();

    const worker = new Worker('./build/fib.js', {
      workerData: {
        iter,
      },
    });

    worker.once('message', (data) => {
      console.log(
        `worker [${worker.threadId}]: done in ${Date.now() - start}ms`,
      );
      resolve(data);
    });

    worker.once('error', reject);
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
