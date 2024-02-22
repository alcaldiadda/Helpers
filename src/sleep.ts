/**
 * Creates a promise that resolves after a specified number of milliseconds, effectively pausing execution for that duration.
 * This function can be used to introduce a delay in asynchronous operations or functions. It's useful for simulating processing time,
 * delaying execution in async functions, or handling operations that require a wait time without blocking the main thread.
 * @param ms The number of milliseconds to wait before the promise resolves.
 * @returns A promise that resolves after the specified number of milliseconds.
 */
export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
