import { useEffect, useState } from "react";

const useFetch = (url, initialValue = []) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(true);

  const setItems = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      });
  };

  useEffect(() => {
    setItems();
  }, [url]);

  return [data, loading];
};

export default useFetch;
