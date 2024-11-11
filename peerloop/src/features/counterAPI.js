// counterAPI.js

/**
 * Simulates an API call to fetch a count value.
 * This function returns a promise that resolves with a simulated response.
 * The response contains the count amount passed to the function.
 *
 * @param {number} amount - The amount to be fetched (simulated).
 * @returns {Promise<{data: number}>} - A promise that resolves to an object with the amount.
 */
export const fetchCount = async (amount) => {
    // Simulate a network request delay with a timeout
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: amount });
      }, 500); // Adjust the delay as needed for simulation
    });
  };
  