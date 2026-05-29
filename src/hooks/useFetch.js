// src/hooks/useFetch.js
import { useState, useEffect, useCallback } from 'react';

const useFetch = (url) => {
  // 1. Setup our state for data, loading, and errors
  const [data, setData] = useState(null);       // Holds the actual data from the API (starts as null)
  const [loading, setLoading] = useState(true); // True while fetching, false when done. Helps show a loading message.
  const [error, setError] = useState(null);     // Holds any error message if the fetch fails so we can tell the user.

  // 2. Define the function that gets the data
  // We wrap this in useCallback so React doesn't recreate this function on every render.
  // It will only be recreated if the 'url' changes, which prevents infinite loops in useEffect.
  const fetchData = useCallback(async (signal) => {
    setLoading(true); // Start loading before making the request
    setError(null); // Reset error state before a new fetch

    try {
      // Pass the abort signal to fetch so this specific request can be cancelled
      const response = await fetch(url, { signal });
      
      // Check if the response status is OK (like 200). If not (like 404 or 500), throw an error.
      if (!response.ok) {
        throw new Error('Could not fetch the data for that resource');
      }

      // Convert the response into readable JSON data
      const result = await response.json();
      setData(result); // Save the data to our state
    } catch (err) {
      // If the error is because we aborted the fetch, don't update state
      if (err.name === 'AbortError') {
        console.log('Fetch aborted');
      } else {
        setError(err.message); // Save the error message to display in the UI
      }
    } finally {
      setLoading(false); // Done loading regardless of success or failure
    }
  }, [url]);

  // 3. Run the fetch function when the component loads
  useEffect(() => {
    // Create an instance of AbortController to cancel the request if the component unmounts
    const controller = new AbortController();

    // Pass the signal to our fetch function
    fetchData(controller.signal);

    // Cleanup function: runs if the component unmounts (e.g., user leaves the page).
    // This cancels the fetch request so we don't try to update state on a missing component.
    return () => controller.abort();
  }, [fetchData]);

  return { data, loading, error };
};

export default useFetch;
