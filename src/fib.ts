import { parentPort, workerData } from 'worker_threads';

const fib = (n: number): number =>
  n < 1 ? 0 : n <= 2 ? 1 : fib(n - 1) + fib(n - 2);

const result = fib(workerData.iter);

parentPort?.postMessage(result);
