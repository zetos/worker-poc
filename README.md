# Node.js Worker API Fibonacci Test

This is a simple Node.js project demonstrating the usage of the Worker API for parallel computation of Fibonacci numbers.

## Usage

To run the Fibonacci test using the Worker API, execute the following command:

```bash
$ npm run build:run
```

This command will compile the `ts` files in to a `build/` folder and run the main() function from index.js, which performs Fibonacci calculations using the Worker API for parallel computation.

## Explanation

The project consists of the following files:

index.ts: Contains the main logic for initiating Fibonacci calculations using the Worker API.
fib.ts: Contains the Fibonacci calculation logic.

## Fibonacci Calculation Logic
The Fibonacci calculation logic is implemented in the fib.js file. The doFib function asynchronously calculates the Fibonacci number for a given iteration. It utilizes the Worker API to perform the calculation in a separate thread.

## License

This project is licensed under the MIT License.