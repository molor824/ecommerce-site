import { useEffect } from "react";
import { useState } from "react";

/**
 * @param{string | URL | globalThis.Request} url
 * @param{RequestInit=} options
 * @returns{{ data: Object, error: Error, fetchHandle: () => Promise<void> }}
 */
export default function useJsonFetch(url, options) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const fetchHandle = () =>
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((reason) => setError(reason));

  useEffect(fetchHandle, [url]);

  return { data, error, fetchHandle };
}
