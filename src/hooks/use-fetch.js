import { useEffect } from "react";
import { useState } from "react";

/**
 * Attempts to fetch a json data.
 * @param{string | URL | globalThis.Request} url
 * @param{RequestInit=} options
 * @returns{{ data: Object, error?: Error, finished: boolean, fetchHandle: () => Promise<void> }} data is null when fetch is not finished or error occured
 */
export function useJsonFetch(url, options) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [finished, setFinished] = useState(false);

  const fetchHandle = () => {
    setFinished(false);
    fetch(url, options)
      .then((res) => {
        if (res.status >= 400) throw new Error(`ERROR: ${res.status}`);
        return res.json();
      })
      .then((res) => setData(res))
      .catch((reason) => setError(reason))
      .finally(() => setFinished(true));
  };

  useEffect(fetchHandle, [url]);

  return { data, error, finished, fetchHandle };
}
