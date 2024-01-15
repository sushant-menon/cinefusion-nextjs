import { useState, useEffect } from "react";

const useApiData = (url, shouldFetch = true) => {
  // Add a parameter for conditional fetching
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (shouldFetch) {
      // Only fetch if shouldFetch is true
      fetchData();
    }
  }, [url, shouldFetch]); // Add shouldFetch to the dependency array

  return { data, loading, error };
};

export default useApiData;
