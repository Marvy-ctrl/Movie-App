import { useEffect } from "react";

/**
 * Custom useDebounce hook
 *
 * @param {Function} callback - The function to run after delay
 * @param {number} delay - The debounce time in milliseconds
 * @param {Array} deps - Dependencies that trigger debounce
 */
export function useDebounce(callback, delay, deps = []) {
  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);

    // cleanup if deps change before timeout finishes
    return () => clearTimeout(handler);
  }, [...deps, delay]);
}
